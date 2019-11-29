export default {
  /**
   * 接口成功模版
   * @param ctx
   * @param data
   * @param msg
   */
  success({ctx, data = null, msg = 'ok'}) {
    ctx.body = {
      msg,
      data,
      code: 200
    }
    ctx.status = 200
  }
}