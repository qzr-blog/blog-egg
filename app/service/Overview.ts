import { Service } from 'egg'

export default class Overview extends Service {
  public async getOverview() {
    console.log('getOverview')
    return {
      "data": [{
          "title": "首页",
          "time": '2019-06-18',
          "content": "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
          "img": "/public/img/portrait.jpg",
          "id": 1
        },
        {
          "title": "首页2",
          "time": '2019-06-18',
          "content": "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
          "img": "/assets/img/portrait.jpg",
          "id": 2
        }
      ],
      "msg": "ok"
    }
  }

  public async newOverview() {
    console.log('new')
    return 'new'
  }
}
