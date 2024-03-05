import { Routes, Route, Navigate } from "react-router-dom";
import HomeScreen from "../home/HomeScreen";
import ComunicadosScreen from "../comunicados/ComunicadosScreen";
import BibliotecaScreen from "../biblioteca/BibliotecaScreen";
import AcercaScreen from "../acerca/AcercaScreen";
import LoginScreen from "../login/LoginScreen";

const PublicLayoutRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/home" Component={HomeScreen} />
        <Route path="/comunicados" Component={ComunicadosScreen} />
        <Route path="/biblioteca" Component={BibliotecaScreen} />
        <Route path="/acerca" Component={AcercaScreen} />
        <Route path="/login" Component={LoginScreen} />

        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </>
  );
};

export default PublicLayoutRoutes;
