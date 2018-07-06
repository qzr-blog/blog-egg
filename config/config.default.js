'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1528277734369_3771';

  // add your config here
  config.middleware = ['errorHandler'];

  // 错误处理
  config.errorHandler = {
    match: '/api',
  }

  //mongodb config
  config.mongoose = {
    url:  process.env.EGG_MONGODB_URL || 'mongodb://localhost:27017/blog-egg',
    options: {}
  }

  // 关闭csrf
  config.security = {
    csrf: false,
    // 白名单
    domainWhiteList: ['http://127.0.0.1:1818']
  }

  config.cors = {
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
  }


  return config;
};
