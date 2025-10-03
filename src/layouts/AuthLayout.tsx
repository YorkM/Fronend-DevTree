import { Outlet } from 'react-router-dom';

export default function AuthLayout() {
  return (
    <div className='bg-slate-800 min-h-screen'>
      <div className=' max-w-md mx-auto py-10 mt-5'>
        <div>
          <img src="/logo.svg" alt="Logo DevTree" />
        </div>

        <Outlet />
      </div>
    </div>
  )
}
