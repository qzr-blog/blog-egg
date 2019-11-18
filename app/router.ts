import { Application } from 'egg'

export default (app: Application) => {
  const { controller, router } = app

  //首页内容
  router.get('/api/overview', controller.overview.index)

  //文章相关
  router.resources('info', '/api/info', controller.info)
}
