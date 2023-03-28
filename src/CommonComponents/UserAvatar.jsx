import male from '../images/man.png';
import female from '../images/woman.png';

export default function MaleUser() {
    return <img src={male} alt='male' height={32} width={32} />
}

export function FemaleUser() {
    return <img src={female} alt='female' height={32} width={32} />
}


    
