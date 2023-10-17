// 头部导航模块
import { Card, Button } from "antd"
import { MoonOutlined, ThemeOutlined } from '@/components/extraIcons'
import './header.styl'

const Header = () => {
  return (
    <Card className="M-header">
        <div className="header-wrapper">
            <div className="logo-con">Header</div>
            <div className="opt-con">
                <Button icon={<MoonOutlined />} shape="circle"></Button>
                <Button icon={<ThemeOutlined />} shape="circle"></Button>
            </div>
        </div>
    </Card>
  )
}

export default Header