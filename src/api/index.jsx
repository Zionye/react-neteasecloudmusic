// api库

import { globalRouters } from "@/route"

// 在非React组件中进行页面路由跳转
export const goto = (path) => {
  console.log('globalRouters: ', globalRouters, path);
  globalRouters.navigate(path)
}