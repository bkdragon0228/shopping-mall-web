import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './view/Header';
import Main from './view/Main';

function App() {
    return (
        <Router>
            <Header />
            <Main />
        </Router>
    );
}

export default App;
