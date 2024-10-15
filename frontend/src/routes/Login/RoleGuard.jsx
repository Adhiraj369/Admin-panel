import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

function RoleGuard({ allowedRoles, children }) {
    const { role } = useContext(AuthContext);

    if (!allowedRoles.includes(role)) {
        return <Navigate to="/unauthorized" />;
    }

    return children;
}

export default RoleGuard