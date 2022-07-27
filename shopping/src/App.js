import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Organisms/Header';
import LoginPage from './component/Organisms/LoginPage';
import MainBody from './component/Organisms/MainBody';
import MainPage from './component/Organisms/MainPage';
import RegisterPage from './component/Organisms/RegisterPage';
import UploadPage from './component/Organisms/UploadPage';
import Auth from './hoc/auth';

function App() {
    const AuthLoginPage = Auth(LoginPage, false);
    const AuthRegisterPage = Auth(RegisterPage, false);
    const AuthMainPage = Auth(MainPage, null);
    const AuthUploadPage = Auth(UploadPage, true);
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AuthMainPage />} />
                <Route path="/login" element={<AuthLoginPage />} />
                <Route path="/register" element={<AuthRegisterPage />} />
                <Route path="/upload" element={<AuthUploadPage />} />
            </Routes>
        </Router>
    );
}

export default App;
