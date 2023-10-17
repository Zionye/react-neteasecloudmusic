import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'
import './home.styl'
import { goto } from '@/api'

const Home = () => {
  // 创建路由钩子
  const navigate = useNavigate()

  return (
    <div>
      <div className="P-home">
        <h1>Home Page</h1>
        <div className="ipt-con">
            <Button type="primary" onClick={()=>{navigate('/login')}}>返回登录</Button>
        </div>
        <div className="ipt-con">
            <Button type="primary" onClick={()=>{goto('/login')}}>组件外跳转登录</Button>
        </div>
      </div>
    </div>
  )
}

export default Home