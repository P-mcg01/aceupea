import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import PublicLayoutRoutes from "./PublicLayoutRoutes";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="*"
          element={
            <PublicRoute>
              <PublicLayoutRoutes />
            </PublicRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;
