import { Service } from 'egg'

export default class Info extends Service {
  public async getInfo(data: any) {
    const result: any = await this.ctx.model.Info.find({ _id: data.id }).exec()
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
    console.log(data)
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
