import { useContext } from "react"
import { AuthContext } from "../Context/AuthContext"

export const UserDetails = () => {
  const { currentUser } = useContext(AuthContext);
  
  return {
    uid: currentUser.uid,
    name: currentUser.displayName,
    photo: currentUser.photoURL,
    email: currentUser.email,
    password: currentUser.password
  };
};
