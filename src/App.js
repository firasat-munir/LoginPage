import './App.css';
import { Route, Routes } from 'react-router-dom';
import ForgotPassword from './components/ForgotPassword';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='recover' element={<ForgotPassword />} />
        <Route path='signup' element={<SignupPage />} />
      </Routes>
    </div>
  );
}

export default App;
