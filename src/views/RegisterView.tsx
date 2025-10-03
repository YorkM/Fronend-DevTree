import { Link } from "react-router-dom";
import RegisterForm from "../components/RegisterForm";

export default function RegisterView() {
  return (
    <>
      <h2 className="text-2xl text-white font-bold mt-10">Crear Cuenta</h2>

      <RegisterForm />

      <nav className=" text-center mt-10">
        <Link to="/login" className=" text-white font-bold">
          ¿Ya tienes una cuenta? Inicia sesión
        </Link>
      </nav>
    </>
  )
}
