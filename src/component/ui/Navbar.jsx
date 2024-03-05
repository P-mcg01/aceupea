import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="container-fluid">
      <NavLink to="/home">inicio</NavLink>
      <NavLink to="/comunicados">comunicados</NavLink>
      <NavLink to="/biblioteca">biblioteca</NavLink>
      <NavLink to="/acerca">acerca de la carrera</NavLink>
      <NavLink to="/login">INICIAR SESIÓN</NavLink>
    </nav>
  );
};

export default Navbar;
