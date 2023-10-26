import { lazy } from 'react'
import { createHashRouter, Navigate } from 'react-router-dom'
// import Login from '~/pages/login'
// import Home from '~/pages/home'
// import Account from '~/pages/account'
// 引入Entry框架页面
// import Entry from '~/pages/entry'
const Login = lazy(()=>import('~/pages/login'))
const Entry = lazy(()=>import('~/pages/entry'))
const Recommend = lazy(()=>import('~/pages/entry/recommend'))
const Home = lazy(()=>import('~/pages/home'))
const Account = lazy(()=>import('~/pages/account'))
import { globalConfig } from '~/globalConfig'

// 全局路由
export const globalRouters = [
  // 对精确匹配"/login"，跳转Login页面
  {
      path: '/login',
      element: <Login />,
  },
  // 未匹配"/login"，全部进入到entry路由
  {
    path: '/',
    element: <Entry />,
    children:[
      // 定义entry二级路由
      {
        path: '/discover',
        element: <Navigate to="/discover/recommend"></Navigate>
      },
      {
        path: '/discover/recommend',
        element: <Recommend />
      },

      {
        // 精确匹配"/home"，跳转Home页面
          path: '/home',
          element: <Home />,
      },
      {
        // 精确匹配"/account"，跳转Account页面
          path: '/account',
          element: <Account />,
      },
      {
        // 如果URL没有"#路由"，跳转Home页面
          path: '/',
          // element: <Navigate to="/home" />,
          element: <Navigate to="/discover" />,
      },
      {
        // 未匹配，，跳转Login页面
          path: '*',
          element: <Navigate to="/login" />,
      },
    ]
  },
]


// 路由守卫
export function PrivateRoute(props){
  return props.children // 暂时不做权限设置

  // 判断localStorage是否有登录用户信息，如果没有则跳转登录页
  // return window.localStorage.getItem(globalConfig.SESSION_LOGIN_INFO) ? (props.children) : (<Navigate to="/login" />)
}