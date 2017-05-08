var models = {};

models.AdminRole = {
  name: 'admin_roles',
  fields: {
    id: {"data_type":"integer","nullable":false,"primary_key":true,"size":0,"sql_tag":""},
    created_at: {"data_type":"timestamp","nullable":false,"primary_key":false,"size":0,"sql_tag":""},
    deleted_at: {"data_type":"nulltimestamp","nullable":true,"primary_key":false,"size":0,"sql_tag":""},
    method: {"data_type":"string","nullable":false,"primary_key":false,"size":0,"sql_tag":""},
    resource: {"data_type":"string","nullable":false,"primary_key":false,"size":0,"sql_tag":""},
    role_id: {"data_type":"string","nullable":false,"primary_key":false,"size":0,"sql_tag":"index"},
    updated_at: {"data_type":"timestamp","nullable":false,"primary_key":false,"size":0,"sql_tag":""},
  },
};

models.AdminUser = {
  name: 'admin_users',
  fields: {
    id: {"data_type":"integer","nullable":false,"primary_key":true,"size":0,"sql_tag":""},
    created_at: {"data_type":"timestamp","nullable":false,"primary_key":false,"size":0,"sql_tag":""},
    deleted_at: {"data_type":"nulltimestamp","nullable":true,"primary_key":false,"size":0,"sql_tag":""},
    email: {"data_type":"string","nullable":false,"primary_key":false,"size":0,"sql_tag":"unique"},
    password: {"data_type":"string","nullable":false,"primary_key":false,"size":0,"sql_tag":""},
    role_id: {"data_type":"string","nullable":false,"primary_key":false,"size":0,"sql_tag":""},
    salt: {"data_type":"string","nullable":false,"primary_key":false,"size":0,"sql_tag":""},
    updated_at: {"data_type":"timestamp","nullable":false,"primary_key":false,"size":0,"sql_tag":""},
  },
};

models.AuditLog = {
  name: 'audit_logs',
  fields: {
    id: {"data_type":"integer","nullable":false,"primary_key":true,"size":0,"sql_tag":""},
    deleted_at: {"data_type":"nulltimestamp","nullable":true,"primary_key":false,"size":0,"sql_tag":""},
    request_body: {"data_type":"string","nullable":false,"primary_key":false,"size":0,"sql_tag":""},
    request_uri: {"data_type":"string","nullable":false,"primary_key":false,"size":0,"sql_tag":""},
    reuquest_method: {"data_type":"string","nullable":false,"primary_key":false,"size":0,"sql_tag":""},
    source_ip: {"data_type":"string","nullable":false,"primary_key":false,"size":0,"sql_tag":""},
    status_code: {"data_type":"integer","nullable":false,"primary_key":false,"size":0,"sql_tag":""},
    updated_at: {"data_type":"timestamp","nullable":false,"primary_key":false,"size":0,"sql_tag":""},
    user_id: {"data_type":"string","nullable":false,"primary_key":false,"size":0,"sql_tag":""},
    created_at: {"data_type":"timestamp","nullable":false,"primary_key":false,"size":0,"sql_tag":""},
  },
};

models.TestTest = {
  name: 'test_tests',
  fields: {
    id: {"data_type":"integer","nullable":false,"primary_key":true,"size":0,"sql_tag":""},
    created_at: {"data_type":"timestamp","nullable":false,"primary_key":false,"size":0,"sql_tag":""},
    deleted_at: {"data_type":"nulltimestamp","nullable":true,"primary_key":false,"size":0,"sql_tag":""},
    test_str1: {"data_type":"string","nullable":false,"primary_key":false,"size":0,"sql_tag":"index:idxA"},
    test_str2: {"data_type":"string","nullable":false,"primary_key":false,"size":0,"sql_tag":"index:idxA,idxB"},
    test_str3: {"data_type":"string","nullable":false,"primary_key":false,"size":0,"sql_tag":"index:idxB"},
    updated_at: {"data_type":"timestamp","nullable":false,"primary_key":false,"size":0,"sql_tag":""},
  },
};

models.User = {
  name: 'users',
  fields: {
    id: {"data_type":"integer","nullable":false,"primary_key":true,"size":0,"sql_tag":""},
    appear_area: {"data_type":"string","nullable":false,"primary_key":false,"size":0,"sql_tag":""},
    blood_type: {"data_type":"string","nullable":false,"primary_key":false,"size":0,"sql_tag":""},
    deleted_at: {"data_type":"nulltimestamp","nullable":true,"primary_key":false,"size":0,"sql_tag":""},
    home_town: {"data_type":"string","nullable":false,"primary_key":false,"size":0,"sql_tag":""},
    homepage: {"data_type":"string","nullable":false,"primary_key":false,"size":0,"sql_tag":""},
    job: {"data_type":"string","nullable":false,"primary_key":false,"size":0,"sql_tag":""},
    living_region: {"data_type":"string","nullable":false,"primary_key":false,"size":0,"sql_tag":""},
    married: {"data_type":"bool","nullable":false,"primary_key":false,"size":0,"sql_tag":""},
    name: {"data_type":"string","nullable":false,"primary_key":false,"size":0,"sql_tag":""},
    school: {"data_type":"string","nullable":false,"primary_key":false,"size":0,"sql_tag":""},
    sex: {"data_type":"string","nullable":false,"primary_key":false,"size":0,"sql_tag":""},
    birthday: {"data_type":"nulltimestamp","nullable":true,"primary_key":false,"size":0,"sql_tag":""},
    created_at: {"data_type":"timestamp","nullable":false,"primary_key":false,"size":0,"sql_tag":""},
    updated_at: {"data_type":"timestamp","nullable":false,"primary_key":false,"size":0,"sql_tag":""},
  },
};

module.exports.default = models;
module.exports.models = models;