import { Application } from 'egg'

export default (app: Application) => {
  const { controller, router } = app

  //首页内容
  router.resources('overview', '/api/overview', controller.overview)

  //文章详情
  router.resources('info', '/api/info', controller.info)
}
