import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  // https://cn.vitejs.dev/config/server-options.html
  server: {
    // 指定dev sever的端口号，默认为5173
    port: 5000,
    // 自动打开浏览器运行以下页面
    open: "/",
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
