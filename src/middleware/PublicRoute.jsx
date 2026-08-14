import { Navigate } from "react-router";

const PublicRoute = ({children}) => {

 const userString = localStorage.getItem("user");
    const user = JSON.parse(userString);

    if(user) {
        return <Navigate to={"/"} />
    }
    
    return children; 
}


export default PublicRoute;