import { Link } from "react-router-dom";

export default function LoginView() {
  return (
    <>
      <h2 className="text-2xl text-white font-bold mt-10">Iniciar Sesión</h2>

      <nav className=" text-center mt-10">
        <Link to="/register" className=" text-white font-bold">
          ¿No tienes una cuenta? Ir a registro
        </Link>
      </nav>
    </>
  )
}
