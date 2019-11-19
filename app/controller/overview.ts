import { Controller } from 'egg'

export default class OverviewController extends Controller {
  public async index() {
    const { ctx } = this
    const res = await ctx.service.overview.getOverview()
    ctx.body = res
    ctx.status = 200
  }
}
