import { useNavigate } from 'react-router-dom'
import { Button, Input } from 'antd'
import './login.styl'

const Login = () => {
  // 创建路由钩子
  const navigate = useNavigate()
  return (
    <div className="P_login">
      <div className="ipt_con">
        <Input placeholder="账号" />
      </div>
      <div className="ipt_con">
        <Input.Password placeholder="密码" />
      </div>
      <div className="ipt_con">
        <Button type="primary" block={true} onClick={()=>{navigate('/home')}}>登录</Button>
      </div>
    </div>
  )
}

export default Login