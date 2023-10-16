import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx' // 表示该文件当前路径下的App.jsx（相对路径）
import App from '@/App' // 表示src/App.jsx，等价于上面的文件地址（绝对路径）
import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN' // 引入Ant Design中文语言包
import '@/common/styles/frame.styl' // 全局样式


ReactDOM.createRoot(document.getElementById('root')).render(
  <ConfigProvider locale={zhCN}>
    <App />
  </ConfigProvider>,
)
