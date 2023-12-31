import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Body from './components/Body/Body';
import Header from './components/Header/Header';
import { AuthProvider } from './context/AuthContext';
import Balance from './pages/Balance';
import Friend from './pages/Friend';
import Ledger from './pages/Ledger';
import LoginPage from './pages/LoginPage';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';
import Transaction from './pages/Transaction';
import Transfer from './pages/Transfer';
import createProfile from './pages/createProfile';

function App() {
  
  return (
    <div className="App">
      <div className='header'>
        <BrowserRouter>
          <AuthProvider>
            <Header/>
            <Routes>
                <Route Component={Body} path='/'/>               
                <Route Component={Transaction} path='/transaction/:username'/>
                <Route Component={Ledger} path='/ledger/'/>
                <Route Component={Transfer} path='/transfer/'/>
                <Route Component={Balance} path='/balance/:username'/>
                <Route Component={Friend} path='/friends/'/>
                <Route Component={createProfile} path='/create-profile/'/>
                <Route Component={Profile} path='/profile/:username'/>
                <Route Component={SignUp} path='/signup/'/>
                <Route Component={LoginPage} path='/login/'/>
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </div>
      
    </div>
  );
}

export default App;
