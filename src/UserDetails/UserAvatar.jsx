import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import male from '../images/man.png';
import female from '../images/woman.png';
import none from '../images/user.png';

export default function MaleUser(props) {
    const { height = 32, width = 32} = props;
    return <img src={male} alt='male' height={height} width={width} />
}

export function FemaleUser(props) {
    const {width = 32, height = 32 } = props;
    return <img src={female} alt='female' height={height} width={width} />
}

export function NoUser(props) {
    const {width = 32, height = 32 } = props;
    return <img src={none} alt='none' height={height} width={width} />
}

export function User(props) {
    const {currentUser} = useContext(AuthContext);
    const { height = 32, width = 32} = props;
    return <img src={currentUser.photoURL} alt='userPic' height={height} width={width} style={{ objectFit: 'cover', borderRadius: '20px'}} />
}