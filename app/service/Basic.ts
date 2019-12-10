import { Service } from 'egg'
// const uuid = require('uuid');


export default class Basic extends Service {
  /**
   * 登录
   * @param name
   * @param password
   */
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

  /**
   * 获取用户信息
   */
  public async getUserInfo({token}: {token: string}) {
    console.log(token)
    return `hi,`
  }

  /**
   * 注册功能
   */
  public async signUp({name, password}: signP) {
    this.ctx.throw(401, '停止注册') //todo: 停止注册
    const repet = await this.ctx.model.User.findOne({name})

    if(repet) this.ctx.throw(401, '用户名重复');

    return await this.ctx.model.User.create({
      name,
      password
    })
  }

  /**
   * 获取所有用户信息
   */
  public async getAllUser() {
    return await this.ctx.model.User.find()
  }

  /**
   * 删除用户
   */
  public async delUser(id: string) {
    console.log(id)
    return await this.ctx.model.User.remove({
      _id: id
    })
  }
}

interface signP {
  name: string
  password: string
}
