import { useContext } from "react";
import { ChatContext } from "../Context/ChatContext";

export default function ChatUserIcon(props) {
    const { data } = useContext(ChatContext);
    const { height = 32, width = 32 } = props;
    return <img src={data.user?.photoURL} alt="profile" height={height} width={width} style={{ objectFit:'cover', borderRadius: '20px'}} />
}