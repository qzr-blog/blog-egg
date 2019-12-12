/**
 * 文章内容相关接口
 */
import { Controller } from 'egg'

export default class InfoController extends Controller {
  public async index() {
    const { ctx } = this
    const data = await ctx.service.info.getInfo(ctx.query)

    ctx.helper.success({ ctx, data })
  }

  public async create() {
    const { ctx } = this
    const data = await ctx.service.info.createInfo(ctx.request.body)

    ctx.helper.success({ ctx, data })
  }

  public async update() {
    const { ctx } = this
    const data = await ctx.service.info.updateInfo(ctx.request.body)

    ctx.helper.success({ ctx, data })
  }

  public async destroy() {
    const { ctx } = this
    await ctx.service.info.delete(ctx.request.url)

    ctx.helper.success({ ctx })
  }

  public async uploadImg() {
    const { ctx } = this
    const data = await ctx.service.info.uploadImg()
    console.log(data)

    ctx.helper.success({ ctx, data })
  }
}
