import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Organisms/Header';
import LoginPage from './component/Organisms/LoginPage';
import MainBody from './component/Organisms/MainBody';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Header />} />
                <Route path="/" element={<MainBody />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </Router>
    );
}

export default App;
