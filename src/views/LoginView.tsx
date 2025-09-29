import { Link } from "react-router-dom";

export default function LoginView() {
  return (
    <>
      <div>LoginView</div>

      <nav>
        <Link to="/register">
          ¿No tienes una cuenta? Ir a registro
        </Link>
      </nav>
    </>
  )
}
