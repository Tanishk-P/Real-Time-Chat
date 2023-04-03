import { useContext } from "react"
import { ChatContext } from "../Context/ChatContext"

export const ChatDetails = () => {
    const { data } = useContext(ChatContext);

    return {
      uid: data.user.uid,
      name: data.user.displayName,
      email: data.user.email,
      photoURL: data.user.photoURL,
      chatId: data.chatId
    }
}