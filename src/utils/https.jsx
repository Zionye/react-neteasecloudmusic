import axios from 'axios'
import { getLocalLoginInfo, removeLocalLoginInfo } from '~/api'
import { globalConfig } from '~/globalConfig'

export class Request {
  constructor(config){
    this.instance = axios.create(config)
    this.abortControllerMap = new Map()

    // 请求拦截器
    this.instance.interceptors.request.use((config)=>{
      if (config.url !== '/login') {
        // const loginInfo = JSON.parse(window.localStorage.getItem(globalConfig.SESSION_LOGIN_INFO))
        // const token = loginInfo?.token
        const { token } = getLocalLoginInfo()
        if (token) config.headers['x-token'] = token
      }

      const controller = new AbortController()
      const url = config.url || ''
      config.signal = controller.signal
      this.abortControllerMap.set(url, controller)

      return config
    }, Promise.reject)

    // 响应拦截器
    this.instance.interceptors.response.use(
      (response) => {
        const url = response.config.url || ''
        this.abortControllerMap.delete(url)

        if (response.data.code !== 1000) {
          return Promise.reject(response.data)
        }

        return response.data
      },
      (err) => {
        if (err.response?.status === 401) {
          // 登录态失效，清空userInfo，跳转登录页
          // useUserInfoStore.setState({ userInfo: null })
          removeLocalLoginInfo()
          window.location.href = `/login?redirect=${window.location.pathname}`
        }

        return Promise.reject(err)
      }
    )

  }

  // 取消全部请求
  cancelAllRequest() {
    for (const [, controller] of this.abortControllerMap) {
      controller.abort()
    }
    this.abortControllerMap.clear()
  }

  // 取消指定的请求
  cancelRequest(url) {
    const urlList = Array.isArray(url) ? url : [url]
    for (const _url of urlList) {
      this.abortControllerMap.get(_url)?.abort()
      this.abortControllerMap.delete(_url)
    }
  }

  request(config) {
    return this.instance.request(config)
  }

  get(url, config) {
    return this.instance.get(url, config)
  }

  post(url, data, config){
    return this.instance.post(url, data, config)
  }
}

export const httpClient = new Request({
  timeout: 20 * 1000,
  baseURL: import.meta.env.VITE_BASE_URL,
})


export const axiosBaseQuery = ({ baseURL } = { baseURL: "" }) =>
  async (args, api, extraOptions) => {
    // const loginInfo = JSON.parse(window.localStorage.getItem(globalConfig.SESSION_LOGIN_INFO))
    // const token = loginInfo?.token
    const { token } = getLocalLoginInfo()

    try {
      const result = await axios({
        baseURL,
        timeout: 60 * 1000,
        headers: {
          ...args.headers,
          ...token ? { authorization: `Bearer ${token}` } : {}
        },
        ...args, // url, method, params, etc...
      });
      debugger
      console.log('请问进来了么', result)
      return result;
    } catch (err) {
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };
