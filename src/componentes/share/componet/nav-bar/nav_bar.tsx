import { NavLink } from "react-router-dom";
import "./nav-barc.css";

export default function NavBar() {
  return (
    <nav>
      <NavLink
        to="/"
        end
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        HomePage
      </NavLink>

      <NavLink
        to="/perfil"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        PerfilHome
      </NavLink>

      <NavLink
        to="/page"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
       ProyectoPage
      </NavLink>

      <NavLink
        to="/dospage"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        ProyectoDosPage
      </NavLink>

            <NavLink
        to="/formulario/normal"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Formulario
      </NavLink>
            <NavLink
        to="/formulario/dinamico"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        FormularioDinamico
      </NavLink>
            <NavLink
        to="/formulario/mas"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        FormularioMore
      </NavLink>
    </nav>
  );
}

