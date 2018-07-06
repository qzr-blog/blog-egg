const Controller = require('egg').Controller

class ContentController extends Controller {
    async index() {
        const {ctx, service} = this

        const content = await service.content.getAllContent()

        ctx.body = content
    }

    async create() {
        const {ctx, service} = this

        ctx.validate({
            title: 'string',
            content: 'string'
        }, ctx.request.body)

        const content = await service.content.setContent(ctx.request.body)

        ctx.body = content
    }

    async show() {
        const {ctx, service} = this
        
        const content = await service.content.getContent(ctx.params.id)

        ctx.body = content
    }

    async destroy() {
        const {ctx, service} = this
        
        const content = await service.content.delContent(ctx.params.id)

        ctx.body = content
    }

    async update() {
        const {ctx, service} = this

        const content = await service.content.update(ctx.params.id)

        ctx.body = content
    }
}

module.exports = ContentController