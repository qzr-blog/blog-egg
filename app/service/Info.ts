import { Service } from 'egg'
import path = require('path');
import fs = require('fs');
import sendToWormhole = require('stream-wormhole');
import awaitStreamReady from 'await-stream-ready'
// import info from '../types/info'

export default class Info extends Service {
  /**
   * 获取文章详情
   * @param data
   */
  public async getInfo(data: infoP) {
    return await this.ctx.model.Info.findOne({ _id: data.id }).exec()
  }

  /**
   * 新增文章
   * @param data
   */
  public async createInfo(data: infoP) {
    return await this.ctx.model.Info.create({
      title: data.title,
      content: data.content,
      text: data.text
    })
  }

  /**
   * 更新文章
   * @param data
   */
  public async updateInfo(data: infoP) {
    return await this.ctx.model.Info.update({ _id: data.id }, data)
  }

  /**
   * 删除文章
   * @param data
   */
  public async delete(data: string) {
    let dataArr = data.split('/')
    return await this.ctx.model.Info.remove({
      _id: dataArr[dataArr.length - 1]
    })
  }

  public async uploadImg() {
    const { ctx } = this,
      stream = await ctx.getFileStream(),
      filepath = `image/${path.basename(stream.filename)}`,
      accessPath = 'http://localhost:8081/' + filepath,
      write = fs.createWriteStream(filepath)
    try {
      await awaitStreamReady(stream.pipe(write))
    } catch (err) {
      sendToWormhole(stream)
      throw(err)
    }

    write.on('finish', () => {
      return accessPath
    })
  }
}

interface infoP {
  id?: string
  title?: string
  content?: string
  text?: string
}
