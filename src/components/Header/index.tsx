import logoImg from '../../Assets/IconeMoney.png';
import { Container, Content } from './styles';

interface headerProps{
    onOpenNewTrasactionModal:() =>void;
}

export function Header({onOpenNewTrasactionModal}:headerProps){
    

    return(
        <Container>
            <Content>
           <img src={logoImg} alt="dt-money"/>
           <button type='button' onClick={onOpenNewTrasactionModal}>
               Nova Transação
            </button>
           
           </Content>
        </Container>
    );
}
