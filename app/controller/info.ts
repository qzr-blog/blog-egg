import { Controller } from 'egg'

export default class InfoController extends Controller {
  public async index() {
    const { ctx } = this
    const res = await ctx.service.info.getInfo()
    ctx.body = res
    ctx.status = 200
  }
}
