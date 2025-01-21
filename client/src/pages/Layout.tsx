import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

type Props = {}

function Layout({}: Props) {
  return (
    <div className='h-[100vh] flex flex-col'>
        <Header/>
        <div className='flex-1 bg-pattern max-h-[90%] overflow-y-scroll'>
          <Outlet/>
        </div>
    </div>
  )
}

export default Layout