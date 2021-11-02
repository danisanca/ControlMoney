import Modal from 'react-modal';
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import closeImg from '../../Assets/closeImg.png';
import PlusImg from '../../Assets/Plus.png';
import MinesImg from '../../Assets/Mines.png';
import {FormEvent, useState,useContext} from 'react';
import { TransactionsContext } from '../../TransactionsContext';

interface NewTransactionModalprops{
    isOpen: boolean;
    onRequestClose: ()=>void;
}

export function NewTransactionModal({isOpen, onRequestClose}:NewTransactionModalprops){
    const {createTransaction} = useContext(TransactionsContext)

    const[type, setType] = useState('deposit');
    const[title,setTitle] = useState('');
    const[category,setCategory] = useState('');
    const[amount,setAmount] = useState(0);

    async function handleCreareNewTrasaction (event:FormEvent){
    event.preventDefault();

    await createTransaction({
        title,
        amount,
        category,
        type,
    })
        setTitle('');
        setCategory('');
        setAmount(0);
        setType('deposit');
        onRequestClose();
    }

    return(
            <Modal isOpen={isOpen}
             onRequestClose={onRequestClose}
             overlayClassName="react-modal-overlay"
             className="react-modal-content"
             >
                 <button type="button"
                  onClick={onRequestClose}
                  className="react-modal-close"
                  >
                     <img src={closeImg} alt="Fechar Modal"/>
                 </button>

                <Container onSubmit={handleCreareNewTrasaction}>
                <h2>Cadastrando</h2>
                <input placeholder="Titulo" value={title} onChange={event=>setTitle(event.target.value)}/>
                <input placeholder="Valor" type='number' value={amount} onChange={event=>setAmount(Number(event.target.value))}/>

                <TransactionTypeContainer>
               <RadioBox type="button"
                onClick={ () =>{setType('deposit')} }
                isActive={type === 'deposit'}
                activeColor='green'
                >
                    <img src={PlusImg} alt="Entrada"/>
                    <span>Entrada</span>
                </RadioBox>
                <RadioBox type="button"
                 onClick={ () =>{setType('withdraw')}}
                 isActive={type === 'withdraw'}
                 activeColor='red'
                 >
                    <img src={MinesImg} alt="Saida"/>
                    <span>Saida</span>
                </RadioBox>
                </TransactionTypeContainer>

                <input placeholder="Categoria"  value={category} onChange={event=>setCategory(event.target.value)}/>
                <button type='submit'>Cadastrar</button>
                </Container>
                
            </Modal>
    );
}