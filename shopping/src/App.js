import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Organisms/Header';
import LoginPage from './component/Organisms/LoginPage';
import MainBody from './component/Organisms/MainBody';
import RegisterPage from './component/Organisms/RegisterPage';
import Auth from './hoc/auth';

function App() {
    // const AuthHeader = Auth(Header, null);
    const AuthMainBody = Auth(MainBody, null);
    const AuthLoginPage = Auth(LoginPage, false);
    const AuthRegisterPage = Auth(RegisterPage, false);
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Header />} />
                <Route path="/" element={<AuthMainBody />} />
                <Route path="/login" element={<AuthLoginPage />} />
                <Route path="/register" element={<AuthRegisterPage />} />
            </Routes>
        </Router>
    );
}

export default App;
