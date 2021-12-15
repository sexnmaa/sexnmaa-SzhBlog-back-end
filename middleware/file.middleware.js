import path from 'path'
import { upload, uploadBg } from '../service/file.service';

export const uploadPic = async (ctx, next) => {
  const { id } = ctx.request.body
  const { name, path: filePath, size, type } = ctx.request.files.file
  let url = ctx.origin + '/images/' + filePath.split('/images/')[1]
  // const result = await upload(url, id)
  ctx.body = {
    name, // 文件名称 
    filePath, // 临时路径
    size, // 文件大小 
    type, // 文件类型
    url
  }
}

export const loadBg = async (ctx, next) => {
  const { name, path: filePath, size, type } = ctx.request.files.file
  let url = ctx.origin + '/images/' + filePath.split('/images/')[1]
  const result = await uploadBg(url)
  ctx.body = {
    name, // 文件名称 
    filePath, // 临时路径
    size, // 文件大小 
    type // 文件类型
  }
}