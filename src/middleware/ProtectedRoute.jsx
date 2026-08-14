import { Navigate } from "react-router"

const ProtectedRoute = ({ children }) => {
    // checklist
    // 1. first find user 
    // if have not then navigate to /login
    // othrwise return children

    const userString = localStorage.getItem("user")
    const user = JSON.parse(userString)
    if (!user) {
        return <Navigate to={"/login"} />
    }
    return children;
}
export default ProtectedRoute;