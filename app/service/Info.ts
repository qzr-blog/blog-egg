import { Service } from 'egg'

export default class Info extends Service {
  public async getInfo() {
    return {
      data: '',
      msg: 'ok'
    }
  }

  public async createInfo(data) {
    console.log(data)
    await this.ctx.model.Info.create({ title: 'test', content: data.content })
    return {
      msg: 'ok'
    }
  }
}
