import { Service } from 'egg'
// const uuid = require('uuid');


export default class Basic extends Service {
  public async login({ name, password }: signP) {
    console.log(name, password)
    const {app, ctx} = this
    // const token = uuid.v4()
    const token = app.jwt.sign({
      name, //需要存储的 token 数据
      password
     }, app.config.jwt.secret);
    ctx.session.token = token
    return {token}
  }

  public async getUserInfo({token}: {token: string}) {
    console.log(token)
    return `hi,`
  }

  public async signUp({name, password}: signP) {
    const repet = await this.ctx.model.User.findOne({name})

    if(repet) this.ctx.throw(401, '用户名重复');

    return await this.ctx.model.User.create({
      name,
      password
    })
  }

  public async getAllUser() {
    return await this.ctx.model.User.find()
  }
}

interface signP {
  name: string
  password: string
}
