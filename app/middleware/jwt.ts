const JWT = require('jsonwebtoken');

export default options => {
  return async (ctx, next) => {
    const TOKEN = ctx.request.header.authorization
    const METHOD = ctx.method.toLowerCase()

    if(!TOKEN) {
      ctx.throw(401, '未登录， 请先登录');
    }else {
      try {
        let decode = JWT.verify(TOKEN, options.secret);

        if(!decode) ctx.throw(401, '没有权限，请登录')

        if(Date.now() - decode.expire > 0) ctx.throw(401, 'Token已过期')
      } catch (error) {
        
      }
    }
  }
}