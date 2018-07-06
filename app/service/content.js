'use strict';

const Service = require('egg').Service

class ContentService extends Service {
    async getContent(par) {
        console.log(par)

        return this.ctx.model.Content.find({_id: par}).exec()

    }

    async getAllContent() {

        return this.ctx.model.Content.find().exec()

    }

    async setContent(par) {
        let oneContent = new this.ctx.model.Content(par)
        try {
            await oneContent.save()
        }catch(err) {
            return {
                success: false,
                msg: err
            }
        }

        return {
            success: true,
            msg: 'ok'
        }
    }

    async delContent(par) {
        try {
            await this.ctx.model.Content.remove({"_id": par})
        } catch (err) {
            return err
        }

        return {
            success: true,
            msg: 'ok'
        }
    }

    async updateContent(par) {
        
    }
}

module.exports = ContentService