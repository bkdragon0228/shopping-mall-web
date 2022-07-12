import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './view/Header';
import Main from './view/Main';
import MainClothes from './view/MainClothes';

function App() {
    return (
        <Router>
            <Header />
            <Main />
            <MainClothes />
        </Router>
    );
}

export default App;
