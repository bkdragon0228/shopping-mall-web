import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Organisms/Header';
import LoginPage from './component/Organisms/LoginPage';
import MainBody from './component/Organisms/MainBody';
import RegisterPage from './component/Organisms/RegisterPage';
import Auth from './hoc/auth';

function App() {
    // const AuthHeader = Auth(Header, null);
    // const AuthLoginPage = Auth(LoginPage, false);
    // const AuthRegisterPage = Auth(RegisterPage, false);
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Header />} />
                <Route path="/" element={<MainBody />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Routes>
        </Router>
    );
}

export default App;
