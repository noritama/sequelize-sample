const _ = require('lodash');
const Sequelize = require('sequelize')
const sequelize = new Sequelize('dmc_local', 'user', 'password')

const models = require('./models').default;

function parseSqlTag(tag) {
  if (!tag)
    return {};
  return _.transform(tag.split(';'), (ret, tag) => {
    const spl = tag.split(':');
    ret[spl[0]] = spl[1] ? spl[1].split(',') : [];
  }, {});
}

function convType(type, size, sqlTag) {
  const tag = parseSqlTag(sqlTag);
  switch (type) {
    case 'integer':
      if (size) {
        return Sequelize.BIGINT(size);
      }
      return Sequelize.INTEGER;
    case 'string':
      if (size) {
        return Sequelize.STRING(size);
      }
      return Sequelize.STRING;
    case 'timestamp':
    case 'nulltimestamp':
      return Sequelize.DATE;
    case 'bool':
      return Sequelize.BOOLEAN;
    default:
      throw new Error('invalid type: ' + type);
  }
}

function convField(field) {
  return {
    type: convType(field.data_type, field.size, field.sql_tag),
    primaryKey: !!field.primary_key,
    allowNull: !!field.nullable,
  };
}

function convFields(fields) {
  return _.transform(fields, (ret, f, fieldName) => {
    ret[fieldName] = convField(f);
  }, {});
}

function convIndexes(fields) {
  const indexes = {};
  const simpleIndexes = [];
  _.each(fields, (f, name) => {
    const tags = parseSqlTag(f.sql_tag);
    _.each(tags, (v, k) => {
      if (k !== 'unique' && k !== 'unique_index' && k !== 'index')
        return;

      if (_.isEmpty(v)) {
        simpleIndexes.push({
          unique: k === 'unique' || k === 'unique_index',
          fields: [name],
        });
      } else {
        _.each(v, (idxName) => {
          if (indexes[idxName]) {
            indexes[idxName].fields.push(name);
          } else {
            indexes[idxName] = {
              unique: k === 'unique' || k === 'unique_index',
              fields: [name],
              name: idxName,
            };
          }
        })
      }
    });
  });
  return _.concat(_.values(indexes), simpleIndexes);
}

function getOptions(fields) {
  return {
    indexes: convIndexes(fields),
  };
}

exports.store = _.transform(models, (ret, m, modelName) => {
  ret[modelName] = sequelize.define(m.name, convFields(m.fields), getOptions(m.fields));
}, {});

//sequelize.sync()
//  .then(() => {
//    return store.User.create({
//      name: 'hogee',
//      birthday: new Date(1985, 1, 23),
//    });
//  })
//  .then((obj) => {
//    console.log(JSON.stringify(obj, null, 2));
//  })
//  .catch((e) => {
//    console.error(e);
//  })
//;
