import { Service } from 'egg'
import info from '../types/info'

export default class Info extends Service {
  public async getInfo(data: any) {
    const result: info = await this.ctx.model.Info.findOne({ _id: data.id }).exec()
    return {
      data: result,
      msg: 'ok'
    }
  }

  public async createInfo(data: any) {
    await this.ctx.model.Info.create({
      title: data.title,
      content: data.content,
      text: data.text
    })
    return {
      msg: 'ok'
    }
  }

  public async updateInfo(data: any) {
    await this.ctx.model.Info.update({_id: data.id}, data)

    return {
      msg: 'ok'
    }
  }

  public async delete(data: any) {
    let dataArr = data.split('/')
    await this.ctx.model.Info.remove({
      _id: dataArr[dataArr.length - 1]
    })
    return {
      msg: 'ok'
    }
  }
}
