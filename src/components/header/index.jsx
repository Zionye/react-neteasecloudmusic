// 头部导航模块
import { Card, Button, Menu } from "antd"
import { MoonOutlined, ThemeOutlined, SunOutlined } from '@/components/extraIcons'
import { HomeOutlined, UserOutlined } from '@ant-design/icons'
import { useLocation, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux" // 引入Redux
import { setDark } from '@/store/slices/theme' // 从主题换肤store分库引入setDark方法
import './header.styl'

const Header = (props) => {
  // 创建路由定位钩子
  const location = useLocation()
  console.log('location: ', location);
  // 创建路由钩子
  const navigate = useNavigate()

  // 定义导航栏
  const menuItems = [
    {
      // 导航显示的名称
      label: 'Home',
      // 导航唯一标识，为便于当前态的显示，与当前路由保持一致
      key: '/home',
      // 导航的前置图标
      icon: <HomeOutlined />,
      // 点击跳转行为
      onClick: ()=>{
        navigate('/home')
      }
    },
    {
      label: 'Account',
      key: '/account',
      icon: <UserOutlined />,
      onClick: ()=>{
        navigate('/account')
      }
    }
  ]

  // 获取redux派发钩子
  const dispatch = useDispatch()
  // 获取store中的主题配置
  const theme = useSelector(state => state.theme)

  // 接收来自父组件的数据
  const {title, info} = props
  // 如果info存在，则执行info()
  info && info()

  return (
    <Card className="M-header">
        <div className="header-wrapper">
            <div className="logo-con">Header: {title}</div>
            <div className="menu-con">
              <Menu mode="horizontal" selectedKeys={location.pathname} items={menuItems} />
            </div>
            <div className="opt-con">
              {
                theme.dark ? (
                  <Button icon={<MoonOutlined />} shape="circle" onClick={()=>dispatch(setDark(false))}></Button>
                ) : (
                  <Button icon={<SunOutlined />} shape="circle" onClick={()=>dispatch(setDark(true))}></Button>
                )
              }
                
                <Button icon={<ThemeOutlined />} shape="circle"></Button>
            </div>
        </div>
    </Card>
  )
}

export default Header