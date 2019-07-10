import { Service } from 'egg'

export default class Overview extends Service {
  public async getOverview() {
    console.log('asdf')
    return `hi,`
  }

  public async newOverview() {
    console.log('new')
    return 'new'
  }
}
