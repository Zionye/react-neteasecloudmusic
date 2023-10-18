import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    // build目录名称，默认为"dist"
    outDir: "build",
    // 静态资源存放目录名称，默认为"assets"
    assetsDir: "static",
  },
  // https://cn.vitejs.dev/config/server-options.html
  server: {
    // 静态资源引用路径，默认为"/"，修改成相对路径"./"，这样在部署上线的时候不需要太关注访问目录的问题。
    base: "./",
    // 支持IP访问(允许被其他设备访问（例如手机访问dev环境页面）)
    host: true,
    // 指定dev sever的端口号，默认为5173
    port: 5000,
    // 自动打开浏览器运行以下页面
    open: "/",
    // 设置反向代理(一定记得要把mock.js注释掉，否则会先被mock.js拦截，到不了反向代理这一步。) https://cn.vitejs.dev/config/server-options#server-proxy
    proxy: {
      // 以下示例表示：请求URL中含有"/api"，则反向代理到http://localhost
      // 例如: http://localhost:3000/api/login -> http://localhost/api/login
      "/api": {
        target: "http://localhost/",
        changeOrigin: true,
      },
    },
  },
  // https://cn.vitejs.dev/config/shared-options.html
  resolve: {
    // 设置路径别名
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [react()],
});
