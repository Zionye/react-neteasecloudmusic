import { useNavigate } from 'react-router-dom'
import { Button, Input } from 'antd'
import './login.styl'
import { MoonOutlined, SunOutlined, ThemeOutlined } from '../../components/extraIcons'

const Login = () => {
  // 创建路由钩子
  let navigate = useNavigate()
  return (
    <div className="P_login">
      <div className="ipt_con">
        <Input placeholder="账号" />
      </div>
      <div className="ipt_con">
        <Input.Password placeholder="密码" />
      </div>
      <div className="ipt_con">
        <Button icon={<ThemeOutlined />}  type="primary" block={true} onClick={()=>{navigate('/home')}}>登录</Button>
      </div>
    </div>
  )
}

export default Login