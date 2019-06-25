import { Service } from 'egg'

export default class Test extends Service {
  public async getOverview() {
    return `hi,`
  }
}
