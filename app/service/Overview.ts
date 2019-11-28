import { Service } from 'egg'
const moment = require('moment')
// import moment from 'moment'

export default class Overview extends Service {
  public async getOverview() {
    let result = await this.ctx.model.Info.find()
    let data: object[] = []

    for (const item of result) {
      data.push({
        title: item.title,
        time: moment(item.created).format('YYYY-MM-DD HH:mm:ss'),
        text: item.text,
        content: item.content,
        id: item._id
      })
    }
    return {
      data,
      msg: "ok"
    }
  }
}
