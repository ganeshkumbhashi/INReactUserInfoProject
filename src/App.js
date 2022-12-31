import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router} from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import About from './About';

function App()
{
    return(<>
    <Router>
        <Navbar/>
        <div className='container'>
            <Routes>
                <Route exact path='/about' element={<About/>}></Route>
            </Routes>
        </div>
    </Router>
    </>);
}

export default App;