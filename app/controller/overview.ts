import { Controller } from 'egg'

export default class OverviewController extends Controller {
  public async index() {
    const { ctx } = this
    const data = await ctx.service.overview.getOverview()
    
    ctx.helper.success({ctx, data})
  }
}
