import { Link } from "react-router-dom";

export default function RegisterView() {
  return (
    <>
      <div>RegisterView</div>

      <nav>
        <Link to="/login">
          ¿Ya tienes una cuenta? Inicia sesión
        </Link>
      </nav>
    </>
  )
}
