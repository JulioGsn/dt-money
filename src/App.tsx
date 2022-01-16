import { useState } from 'react';
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { NewTransactionModal } from './components/NewTransactionModal';

export function App() {
    const [ isNewTransactionModalOpen, setIsNewTransactionModalOpen ] = useState(false);

    function handleOpenNewTransactionModel() {
      setIsNewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModel() {
      setIsNewTransactionModalOpen(false);
    }

  return (
    <>
      <Header
        onOpenNewTransactionsModal={handleOpenNewTransactionModel}
      />
      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModel}
      />

      <GlobalStyle />
    </>
  );
}
