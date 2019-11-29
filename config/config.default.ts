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

  // add your egg config in here
  config.middleware = ["errorHandler"]

  config.mongoose = {
    url: 'mongodb://127.0.0.1/blog',
    options: {}
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
