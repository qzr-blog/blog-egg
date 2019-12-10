import { Application } from 'egg'

export default (app: Application) => {
  const { controller, router, jwt } = app
  
  //登录相关
  router.post('/api/login', controller.basic.login)
  router.post('/api/getUserInfo', controller.basic.getUserInfo)
  router.post('/api/signUp', controller.basic.signUp)
  router.get('/api/getAllUser', jwt, controller.basic.getAllUser)
  router.post('/api/delUser', controller.basic.delUser)

  //首页内容
  router.get('/api/overview', controller.overview.index)

  //文章相关
  router.resources('info', '/api/info', controller.info)
}
