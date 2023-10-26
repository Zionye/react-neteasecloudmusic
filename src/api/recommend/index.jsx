// https://github.com/iamharisdev/RTKQuery/blob/main/src/redux/api/authApi.ts
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import customFetchBase from '~/api/customFetchBase'
import { httpClient, axiosBaseQuery } from '~/utils/https'
import {globalConfig} from '~/globalConfig'

// const baseUrl = globalConfig.BASE_URL

export const recommendApi = createApi({
  reducerPath: 'recommendApi',
  // baseQuery: customFetchBase,
  baseQuery: axiosBaseQuery({ baseURL: import.meta.env.VITE_BASE_URL }),
  // baseQuery: fetchBaseQuery({
  //   baseUrl: baseUrl,
  // }),
  tagTypes: ["recommend"], // 用来指定Api中的标签类型
  endpoints(build) {
    return {
      getBanners: build.query({
        query() {
          debugger
          // query 用来指定请求子路径
          // return "banner"
          return {
            url: "/banner",
            method: 'get',
            credentials: 'include',  
          };
        },
        // transformResponse 用来转换响应数据的格式
        transformResponse(baseQueryReturnValue, meta, arg) {
          console.log('baseQueryReturnValue 用来转换响应数据的格式: ', baseQueryReturnValue);
          return baseQueryReturnValue;
        },
      })
    }
  },
})

export const {
  useGetBannersQuery
} = recommendApi