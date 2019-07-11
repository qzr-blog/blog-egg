import { Service } from 'egg'

export default class Info extends Service {
  public async getInfo() {
    return {
      data: "",
      msg: 'ok'
    }
  }

  public async newOverview() {
    console.log('new')
    return 'new'
  }
}
