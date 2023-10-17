import { configureStore } from "@reduxjs/toolkit";
import themeReducer from '@/store/slices/theme'

const store = configureStore({
  reducer: {
    // 主题换肤store分库
    theme: themeReducer
  }
})

export default store