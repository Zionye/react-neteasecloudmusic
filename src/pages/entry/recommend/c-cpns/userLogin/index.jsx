import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import {UserLoginWrapper} from './userLogin.style'

const UserLogin = () => {
  return (
    <UserLoginWrapper className="sprite_02">
      <p className="desc">
        登陆网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机
      </p>
      <Link to="/login" className="sprite_02">用户登录</Link>
    </UserLoginWrapper>
  )
}

export default memo(UserLogin)