import { Service } from 'egg'
const moment = require('moment')
// import moment from 'moment'

export default class Overview extends Service {
  public async getOverview() {
    let result = await this.ctx.model.Info.find()
    let data: object[] = []
    
    for (const item of result) {
      // 正则匹配封面图
      const regex = /(?<=\!\[.*\]\()(.+)(?=\))/
      const img: any = regex.exec(item.content) ?? []
      const text: string = item.text.slice(0, 50) + '......'
      data.push({
        title: item.title,
        time: moment(item.created).format('YYYY-MM-DD HH:mm:ss'),
        text,
        // content: item.content,
        id: item._id,
        img: img[0]
      })
    }
    return data
  }
}
