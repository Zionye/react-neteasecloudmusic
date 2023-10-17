import { Outlet } from 'react-router-dom'
import Header from '@/components/header'
import './entry.styl'

const Entry = () => {
  return (
    <div className='M-entry'>
      <Header />

      <div className="main-container">
        <Outlet />
      </div>
    </div>
  )
}

export default Entry