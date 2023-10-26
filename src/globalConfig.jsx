/**
 * 全局配置文件
 *  “亮色/暗色主题”和“主题色”虽然都是颜色改变，但是完全不同的两个维度的换肤。
 *    “亮色/暗色主题”主要是对默认的文字、背景、边框等基础元素进行黑白切换，而“主题色”则是对带有“品牌色”的按钮等控件进行不同色系的颜色切换。
 */
export const globalConfig = {
  // 初始主题（localStorage未设定的情况）
  initTheme: {
    // 初始为亮色主题
    dark: false,
    // 初始主题色
    // 与customColorPrimarys数组中的某个值对应
    // null表示默认使用Ant Design默认主题色或customColorPrimarys第一种主题色方案
    colorPrimary: null,
  },
  // 供用户选择的主题色，如不提供该功能，则设为空数组
  customColorPrimarys: [
    '#1677ff',
    '#f5222d',
    '#fa8c16',
    '#722ed1',
    '#13c2c2',
    '#52c41a',
  ],
  // localStroge用户主题信息标识
  SESSION_LOGIN_THEME: 'userTheme',
  // localStroge用户登录信息标识
  SESSION_LOGIN_INFO: 'userLoginInfo',
  // 接口请求
  BASE_URL: 'http://codercba.com:9002',
  TIME_OUT: 10000
}