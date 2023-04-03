import { onAuthStateChanged } from "firebase/auth";
import { createContext, useReducer } from "react";
import { UserDetails } from "../UserDetails/UsersDetails";

export const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
    const userDetails = UserDetails();

    const INITIAL_STATE = {
    chatId: 'null',
    user: {}
  }
 
    const chatReducer = (state, action) => {
        switch(action.type) {
            case "CHANGE_USER" : 
                return {
                    user: action.payload,
                    chatId: userDetails.uid > action.payload.uid ? userDetails.uid + action.payload.uid : action.payload.uid + userDetails.uid,
                }
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);

  return (
    <ChatContext.Provider value={{ data: state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};
