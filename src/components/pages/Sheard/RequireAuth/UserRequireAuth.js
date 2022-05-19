import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../../firebase.init";
import AdminHook from "../../../../Hook/AdminHook";
import LoaderSpinner from "../LoaderSpinner/LoaderSpinner";

function UserRequireAuth({ children }) {
    const [user, loading] = useAuthState(auth);
    const [Admin,AdminLod]=AdminHook(user)
    let location = useLocation();
    if(loading || AdminLod ){
        return <LoaderSpinner></LoaderSpinner>
    }
    if (!user || !Admin) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  
    return children;
  }
export default UserRequireAuth;