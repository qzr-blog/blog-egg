import { Service } from 'egg'
// import uuid from 'uuid'
const uuid = require('uuid');


export default class Basic extends Service {
  public async login({ name, password }: signP) {
    console.log(name, password)
    const token = uuid.v4()
    this.ctx.session.token = token
    return {
      data: {
        token
      },
      msg: 'ok'
    }
  }

  public async getUserInfo({token}: {token: string}) {
    console.log(token)
    return `hi,`
  }

  public async signUp({name, password}: signP) {
    await this.ctx.model.User.create({
      name,
      password
    })
    return {
      msg: 'ok'
    }
  }
}

interface signP {
  name: string
  password: string
}
