import male from '../images/man.png';
import female from '../images/woman.png';

export default function MaleUser(props) {
    const { height = 32, width = 32} = props;
    return <img src={male} alt='male' height={height} width={width} />
}

export function FemaleUser(props) {
    const {width = 32, height = 32 } = props;
    return <img src={female} alt='female' height={height} width={width} />
}


    
