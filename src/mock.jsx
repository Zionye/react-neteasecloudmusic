/**
 * mock数据
 */
import Mock from 'mockjs'

const API_DOMAIN = '/api/'

// 模拟login接口
Mock.mock(API_DOMAIN + 'login', function (config) {
  const {body, type, url} = config
  const data = JSON.parse(body)
  console.log('data: ', data);
  let result = {
    code: 200,
    message: 'OK',
    data: {
      loginUid: 10000,
      nickname: data.account ? data.account : '哈哈哈',
      token: 'yyds2023',
    },
  }
  return result
})
