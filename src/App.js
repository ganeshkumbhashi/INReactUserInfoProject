import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router} from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import About from './About';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Users from './Users';

function App()
{
    const [users,setUsers] = useState([]);
    useEffect(async() => {
            const res = await axios.get('http://api.github.com/users');
            setUsers(res.data);
        },[])

    return(<>
    <Router>
        <Navbar/>
        
        <div className='container'>
        <Users users={users}></Users>
            <Routes>
                <Route exact path='/about' element={<About/>}></Route>
            </Routes>
        </div>
    </Router>
    </>);
}

export default App;