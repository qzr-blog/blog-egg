import { Service } from 'egg'

export default class Info extends Service {
  public async getInfo(data: any) {
    const result: any = await this.ctx.model.Info.find({title: "test"}).exec()
    console.log(data)
    return {
      data: result,
      msg: 'ok'
    }
  }

  public async createInfo(data: any) {
    console.log(data)
    await this.ctx.model.Info.create({ title: 'test', content: data.content })
    return {
      msg: 'ok'
    }
  }

  public async updateInfo(data: any) {
    console.log(data)
  }

  // public async showInfo(data) {
  //   await this.ctx.model.Info.find()
  // }
}
