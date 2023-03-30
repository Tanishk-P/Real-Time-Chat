import cam from "../images/video-call.png";
import add from "../images/add-friend.png";
import more from "../images/menu.png";
import go from "../images/paper-plane.png";
import icon from "../images/smiley.png";

export default function Camera() {
    return <img src={cam} width={32} height={32} alt='camera' />
}

export function AddFriend() {
    return <img src={add} width={32} height={32} alt='addFriend' />
}

export function More() {
    return <img onClick={() => MoreClicked()} src={more} width={32} height={32} alt='more' />
}

export function Send() {
    return <img src={go} width={24} height={24} alt='send' />
}

export function Icons() {
    return <img src={icon} width={20} height={20} alt='icons' />
}

 function MoreClicked() {
    return alert
}