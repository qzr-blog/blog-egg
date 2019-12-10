import { Controller } from 'egg'

export default class BasicController extends Controller {
  public async login() {
    const { ctx } = this
    const data = await ctx.service.basic.login(ctx.request.body)
    
    ctx.helper.success({ctx, data})
  }

  public async getUserInfo() {
    const { ctx } = this
    const data = await ctx.service.basic.getUserInfo(ctx.request.body)
    
    ctx.helper.success({ctx, data})
  }

  public async getAllUser() {
    const {ctx} = this
    const data = await ctx.service.basic.getAllUser()

    ctx.helper.success({ctx, data})
  }

  public async signUp() {
    const {ctx} = this
    const data = await ctx.service.basic.signUp(ctx.request.body)
    
    ctx.helper.success({ctx, data})
  }

  public async delUser() {
    const {ctx} = this
    const data = await ctx.service.basic.delUser(ctx.request.body.id)

    ctx.helper.success({ctx, data})
  }
}
