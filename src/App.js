import {Routes, Route} from 'react-router-dom';
import Login from './components/login/Login.jsx';
import Dashboard from './components/dashboard/Dashboard.jsx';
import { AuthProvider } from './components/Auth.jsx';
import Protected from './components/Protected.jsx';
import Clients from './components/clients/Clients.jsx';
import AddClient from './components/addclients/AddClient.jsx';
import { ClientProvider } from './components/ClientHandling.jsx';
import ClientCard from './components/clientcard/ClientCard.jsx';
import EditClient from './components/clientcard/EditClient.jsx';
import BudgetList from './components/budget/BudgetList.jsx';
import Deposit from './components/dashboard/Deposit.jsx';
import Withdraw from './components/dashboard/Withdraw.jsx';
import Transfer from './components/dashboard/Transfer.jsx';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <ClientProvider>
          <Routes>

            <Route exact path="/" element={<Protected/>}>
                
                <Route index element={<Dashboard/>}/>
                <Route path="/clients" element={<Clients/>}>
                  <Route path="/clients/:id" element={<ClientCard/>}>
                    <Route path="/clients/:id/edit" element={<EditClient />}/>
                    <Route path="/clients/:id/deposit" element={<Deposit />}/>
                    <Route path="/clients/:id/withdraw" element={<Withdraw />}/>
                    <Route path="/clients/:id/transfer" element={<Transfer />}/>
                  </Route>
                </Route>
                <Route path="/addclient" element={<AddClient/>}/>
                <Route path="/budgeting" element={<BudgetList/>}/>
                
            </Route>

            <Route path="/login" element={<Login/>}/>

          </Routes>
        </ClientProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
