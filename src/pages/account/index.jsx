import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'
import './account.styl'

const Account = () => {
  // 创建路由钩子
  let navigate = useNavigate()

  return (
    <div className="P-account">
        <h1>Account Page</h1>
        <div className="ipt-con">
            <Button type="primary" onClick={()=>{navigate('/login')}}>返回登录</Button>
        </div>
    </div>
  )
}

export default Account