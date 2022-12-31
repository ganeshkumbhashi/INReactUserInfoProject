import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router} from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

function App()
{
    return(<>
    <Router>
        <Navbar/>
    </Router>
    </>);
}

export default App;