import { Outlet } from 'react-router-dom';

export default function AuthLayout() {
  return (
    <>
      <div className='bg-slate-800 min-h-screen'>
        <img src="/logo.svg" alt="Logo DevTree" className='w-56 h-56 text-center' />
      </div>

      <Outlet />
    </>
  )
}
