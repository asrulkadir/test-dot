import { Navigate, Outlet } from "react-router";
import Cookies from "js-cookie";

const Private = () => {
  return Cookies.get("token") ? <Outlet /> : <Navigate to="/login" />;
};

export default Private;
