import { Controller } from 'egg'

export default class OverviewController extends Controller {
  public async index() {
    const { ctx } = this
    ctx.body = await ctx.service.overview.getOverview()
  }
}
