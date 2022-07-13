import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Organisms/Header';
import MainBody from './component/Organisms/MainBody';

function App() {
    return (
        <Router>
            <Header />
            <MainBody />
        </Router>
    );
}

export default App;
