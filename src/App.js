import './App.css';
import { AddTransaction } from './components/AddTransaction';
import { Balance } from './components/Balance';
import { Header } from './components/Header';
import { Transaction } from './components/Transaction';
import { TransactionHistory } from './components/TransactionHistory';

function App() {
  return (
    <div>
        <Header />
        <Balance />
        <Transaction />
        <TransactionHistory />
        <AddTransaction />
    </div>
  );
}

export default App;
