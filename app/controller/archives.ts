import { Controller } from 'egg'

export default class ArchivesController extends Controller {
  public async index() {
    const { ctx } = this
    const data = await ctx.service.archives.getArchives()
    
    ctx.helper.success({ctx, data})
  }
}
