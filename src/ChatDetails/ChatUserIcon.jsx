import { ChatDetails } from "./ChatDetails"

export default function ChatUserIcon(props) {
    const chatDetails = ChatDetails();
    const { height = 32, width = 32 } = props;
    return <img src={chatDetails.photoURL} alt="profile" height={height} width={width} style={{ objectFit:'cover', borderRadius: '20px'}} />
}