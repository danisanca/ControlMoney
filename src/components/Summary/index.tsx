import {Container} from './styles';
import incomeImg from '../../Assets/Plus.png';
import outcomeImg from '../../Assets/Mines.png';
import walletImg from '../../Assets/iconeWallet.png';
import { TransactionsContext } from '../../TransactionsContext';
import {useContext} from 'react';

export function Summary(){
    const {transactions} = useContext(TransactionsContext)
    
    const summary = transactions.reduce((acc, transaction) =>{
        if(transaction.type ==='deposit'){
            acc.deposits+=transaction.amount;
            acc.total+=transaction.amount;
        }else{
            acc.withdraws += transaction.amount;
            acc.total -= transaction.amount;
        }
        return acc;
    },
    {
            deposits:0,
            withdraws:0,
            total:0,
    })

    return(

        <Container>
           <div>
               <header>
                   <p>Entrada</p>
                   <img src={incomeImg} alt="Entradas"/>
               </header>
               <strong>
               {new Intl.NumberFormat('pt-BR',{
                            style:'currency',
                            currency:'BRL'
                }).format(summary.deposits)}
                </strong>
          </div> 

          <div>
               <header>
                   <p>Saida</p>
                   <img src={outcomeImg} alt="Saidas"/>
               </header>
               <strong>-
                   {new Intl.NumberFormat('pt-BR',{
                            style:'currency',
                            currency:'BRL'
                }).format(summary.withdraws)}
                </strong>
          </div>

          <div className="highlight-background">
               <header>
                   <p>Total</p>
                   <img src={walletImg} alt="Total"/>
               </header>
               <strong>
                   {new Intl.NumberFormat('pt-BR',{
                            style:'currency',
                            currency:'BRL'
                }).format(summary.total)}
                </strong>
          </div>
        </Container>
    );
}