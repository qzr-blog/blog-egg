import { Service } from 'egg'
const moment = require('moment')

export default class Archives extends Service {
  public async getArchives() {
    const result = await this.ctx.model.Info.find()
    const data: any = {}
    
    for (const item of result) {
        const created = item.created
        const month = moment(created).format('YYYY-MM')
        if(!data[month]) data[month] = []
        data[month].push({
            title: item.title,
            created: moment(created).format('MM-DD HH:mm:ss'),
            id: item._id
        })
    }

    //排序
    for (const item in data) {
        data[item].sort((a: any, b: any) => {
            if(moment(a.created).isBefore(b.created)) return 1
            return -1
        })
    }

    return data
  }
}
