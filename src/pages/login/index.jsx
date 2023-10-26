import { useState } from 'react'
import { apiReqs } from '~/api'
import { useNavigate } from 'react-router-dom'
import { Button, Input } from 'antd'
import './login.less'

const Login = () => {
  // 创建路由钩子
  let navigate = useNavigate()

  // 组件中自维护的实时数据
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')

  // 登录
  const login = ()=>{
    navigate('/')
    // apiReqs.signIn({
    //   data: {
    //     account,
    //     password,
    //   },
    //   done: (res)=>{
    //     console.log('done res', res)
    //   },
    //   success: (res) => {
    //     console.log(res)
    //     navigate('/')
    //   },
    //   fail: (err) => {
    //     console.log(err)
    //   },
    // })
  }
  return (
    <div className="P_login">
      <div className="ipt_con">
        <Input placeholder="账号" value={account} onChange={(e)=>{setAccount(e.target.value)}} />
      </div>
      <div className="ipt_con">
        <Input.Password placeholder="密码" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
      </div>
      <div className="ipt_con">
        <Button type="primary" block={true} onClick={login} >登录</Button>
      </div>
    </div>
  )
}

export default Login