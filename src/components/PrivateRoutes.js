import { Outlet,Navigate } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../Context"
import Navbar from "./NavBar";

const PrivateRoutes = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      {user ? (
        <>
          <Navbar />
          <Outlet />
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </div>
  );
};

export default PrivateRoutes;