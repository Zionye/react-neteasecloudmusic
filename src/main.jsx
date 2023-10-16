import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx' // 表示该文件当前路径下的App.jsx（相对路径）
import App from '@/App' // 表示src/App.jsx，等价于上面的文件地址（绝对路径）


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
