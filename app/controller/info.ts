/**
 * 文章内容相关接口
 */
import { Controller } from 'egg'

export default class InfoController extends Controller {
  public async index() {
    const { ctx } = this
    const res = await ctx.service.info.getInfo()
    ctx.body = res
    ctx.status = 200
  }

  public async create() {
    const {ctx} = this
    ctx.body = await ctx.service.info.createInfo(ctx.request.body)
    ctx.status = 200
  }

  public async update() {
    const {ctx} = this
    ctx.body = await ctx.service.info.updateInfo(ctx.request.body)
    ctx.status = 200
  }

  // public async show() {
  //   const {ctx} = this
  //   ctx.body = await ctx.service.info.showInfo(ctx.request.body)
  // }
}
