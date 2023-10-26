
// https://github.com/iamharisdev/RTKQuery/tree/main/src/redux
// https://www.npmjs.com/package/async-mutex
import {
  // BaseQueryFn,
  // FetchArgs,
  fetchBaseQuery,
  // FetchBaseQueryError,
} from '@reduxjs/toolkit/query';
import {Mutex} from 'async-mutex';
import { globalConfig } from '~/globalConfig';

// 开发环境地址
// let API_DOMAIN = '/api/'
// if(process.env.NODE_ENV === 'production') {
//   // 正式环境地址，如：'http://xxxxx/api/'
//   API_DOMAIN = globalConfig.BASE_URL
// }
// // console.log('API_DOMAIN: ', API_DOMAIN);
const baseUrl = globalConfig.BASE_URL

// Create a new mutex
const mutex = new Mutex();

const baseQuery = fetchBaseQuery({
  baseUrl,
  // API_DOMAIN,
  
  // prepareHeaders:(headers, {getState})=>{
  //   // // 获取用户的token
  //   // const token = getState().auth.token;
  //   // if(token){
  //   //     headers.set("Authorization", `Bearer ${token}`);
  //   // }
  //   return headers;
  // } // 用来统一设置请求头
});

const customFetchBase = async (args, api, extraOptions) =>{
  // wait until the mutex is available without locking it
  await mutex.waitForUnlock();
  let result = await baseQuery(args, api, extraOptions);
  console.log('customFetchBase result: ', result);

  if(result.error?.data?.message === 'You are not logged in'){
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      try {
        const refreshResult = await baseQuery(
          {credentials: 'include', url: 'auth/refresh'},
          api,
          extraOptions,
        );

        if (refreshResult.data) {
          // Retry the initial query
          result = await baseQuery(args, api, extraOptions);
        } else {
          // api.dispatch(logout());
        }
      } finally {
        // release must be called once the mutex should be released again.
        release();
      }

    } else {
      // wait until the mutex is available without locking it
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }

  }

  return result
}

export default customFetchBase