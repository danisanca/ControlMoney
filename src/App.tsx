import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header"
import { Dashboard } from "./components/Dashboard";
import {useState} from 'react';
import Modal from 'react-modal';
import { NewTransactionModal } from './components/NewTransactionModal'
import { TransactionsProvider } from './TransactionsContext';

Modal.setAppElement('#root')

export function App(){
  
  const [isNewTransactionModalOpen,setIsNewTransactionModalOpen] = useState(false);
    
  function handleOpenNewTransactionModal(){
      setIsNewTransactionModalOpen(true);
  }
  function handleCloseNewTransactionModal(){
      setIsNewTransactionModalOpen(false);
  }

return(
  <TransactionsProvider>
  <Header onOpenNewTrasactionModal={handleOpenNewTransactionModal} />
  <Dashboard/>
  <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal}/>
  <GlobalStyle/>
  </TransactionsProvider>
);
}
