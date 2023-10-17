import { useNavigate } from 'react-router-dom'
import { Button, theme } from 'antd'
import { goto } from '@/api'
import './home.styl'

// https://ant-design.antgroup.com/docs/react/customize-theme-cn#theme
const { useToken } = theme

const Home = () => {
  // 创建路由钩子
  const navigate = useNavigate()

  /**
   *  获取Design Token
   *    当前Antd文本色:       token.colorText
   *    自定义组件的背景色换肤: token.colorBgContainer
   *    边框色换肤:           token.colorBorder
   *    当前Antd主题色:       token.colorPrimary
   *  */
  const {token: designToken} = useToken()

  return (
    <div className="P-home">
      <h1 style={{color: designToken.colorText}}>Home Page</h1>
      <div className="ipt-con">
          <Button type="primary" onClick={()=>{navigate('/login')}}>返回登录</Button>
      </div>
      <div className="ipt-con">
          <Button style={{color: designToken.colorText, background: designToken.colorBgContainer}} type="primary" onClick={()=>{goto('/login')}}>组件外跳转登录</Button>
      </div>
    </div>
  )
}

export default Home