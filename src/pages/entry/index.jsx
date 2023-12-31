import { Outlet } from 'react-router-dom'
import Header from '@/components/header'
import { ConfigProvider, theme } from 'antd'
import { useSelector } from 'react-redux'
import { PrivateRoute } from '@/router'
import './entry.styl'

// darkAlgorithm为暗色主题，defaultAlgorithm为亮色（默认）主题
// 注意这里的theme是来自于Ant Design的，而不是store
const {darkAlgorithm, defaultAlgorithm} = theme
console.log('theme: ', theme);

const Entry = () => {
  // 获取store中的主题配置
  const globalTheme = useSelector(state => state.theme)
  // Ant Design主题变量
  let antdTheme = {
    // 亮色/暗色配置
    algorithm: globalTheme.dark ? darkAlgorithm : defaultAlgorithm,
  }
  // 应用自定义主题色
  if(globalTheme.colorPrimary){
    /**
     *  Design Token:
     *    当前Antd文本色:       token.colorText
     *    自定义组件的背景色换肤: token.colorBgContainer
     *    边框色换肤:           token.colorBorder
     *    当前Antd主题色:       token.colorPrimary
     *  */
    antdTheme.token = {
      colorPrimary: globalTheme.colorPrimary,
    }
  }

  return (
    <PrivateRoute>
      <ConfigProvider theme={antdTheme}>
        <div className='M-entry'>
          <Header />

          <div className="main-container">
            <Outlet />
          </div>
        </div>
      </ConfigProvider>
    </PrivateRoute>
  )
}

export default Entry