import { Application } from 'egg'

export default (app: Application) => {
  const { controller, router } = app

  // router.get('/', controller.home.index)

  // router.get('/api/overview', controller.overview.index)
  router.resources('getOverview', '/api/overview', controller.overview.index)
}
