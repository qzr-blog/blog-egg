import { Controller } from 'egg'

export default class BasicController extends Controller {
  public async login() {
    const { ctx } = this
    ctx.body = await ctx.service.Basic.login(ctx.request.body)
    ctx.status = 200
  }

  public async getUserInfo() {
    const { ctx } = this
    ctx.body = await ctx.service.Basic.getUserInfo(ctx.request.body)
    ctx.status = 200
  }

  public async signUp() {
    const {ctx} = this
    ctx.body = await ctx.service.Basic.signUp(ctx.request.body)
    ctx.status = 200
  }
}
