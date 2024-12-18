import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../features/User/context/UserContext"

const ProtectedRoute = () => {
    const { user } = useUser();

    return user ? <Outlet/> : <Navigate to="/login" replace />
}
export default ProtectedRoute;