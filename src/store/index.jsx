import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import themeReducer from '~/store/slices/theme'
import {recommendApi} from '~/api/recommend'
import recommendReducer from '~/pages/entry/recommend/store/slices/recommendSlice'

const store = configureStore({
  reducer: {
    // 主题换肤store分库
    theme: themeReducer,
    [recommendApi.reducerPath]: recommendApi.reducer,
    recommend: recommendReducer,
  },

  // middleware 中间件，可以理解成store的一个拓展，通过中间件可以对store进行一些拓展功能
  //   调用getDefaultMiddleware()会获取到当前store里所有的默认的中间件，返回的是一个数组
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(recommendApi.middleware),
})

setupListeners(store.dispatch);

export default store