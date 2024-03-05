import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const PublicRoute = ({ isLogged, children }) => {
  return !isLogged ? <>{children}</> : <Navigate to="/" replace />;
};

export default PublicRoute;

/*PublicRoute.propTypes = {
  isLogged: PropTypes.bool.isRequired,
};*/
