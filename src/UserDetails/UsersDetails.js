import { useContext } from "react"
import { AuthContext } from "../Context/AuthContext"

export const UserDetails = () => {
  const { currentUser } = useContext(AuthContext);
  
  return {
    name: currentUser.displayName,
    email: currentUser.email,
    password: currentUser.password
  };
};
