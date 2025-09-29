import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthLayout from './layouts/AuthLayout';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';


export default function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<AuthLayout />}>
                <Route path='/login' element={<LoginView />} />
                <Route path='/register' element={<RegisterView />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}