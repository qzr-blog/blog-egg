import { Controller } from 'egg'

export default class BasicController extends Controller {
  public async login() {
    const { ctx } = this
    const data = await ctx.service.Basic.login(ctx.request.body)
    
    ctx.helper.success({ctx, data})
  }

  public async getUserInfo() {
    const { ctx } = this
    const data = await ctx.service.Basic.getUserInfo(ctx.request.body)
    
    ctx.helper.success({ctx, data})
  }

  public async getAllUser() {
    const {ctx} = this
    const data = await ctx.service.Basic.getAllUser()

    ctx.helper.success({ctx, data})
  }

  public async signUp() {
    const {ctx} = this
    const data = await ctx.service.Basic.signUp(ctx.request.body)
    
    ctx.helper.success({ctx, data})
  }
}
