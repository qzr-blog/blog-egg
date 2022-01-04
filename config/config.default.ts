import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg'

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1561365065955_8782'

  config.security = {
    //关闭csrf跨域安全监测
    csrf: {
      enable: false
    }
  }

  config.multipart = {
    fileSize: '50mb',
    mode: 'stream',
    fileExtensions: ['.xls', '.txt'], // 扩展几种上传的文件格式
  }

  config.jwt = {
    secret: "123456"//自定义 token 的加密条件字符串
  }

  // add your egg config in here
  config.middleware = ["errorHandler"]

  config.mongoose = {
    // url: 'mongodb://localhost:27017/blog',
    url: 'mongodb://pageMongoV0:27017/blog',
    // url: 'mongodb://pageMongoV0:27017/blog?authSource=admin',
    options: {
      // "user": 'qzr',
      // "pass": '888888'
    }
  }

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`
  }

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig
  }
}
