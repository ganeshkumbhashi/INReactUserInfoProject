import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router} from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import About from './About';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Users from './Users';
import Search from './Search';

function App()
{
    const [users,setUsers] = useState([]);
    const [showClear, setShowClear] = useState(false);
    //useEffect(async() => {
    //        const res = await axios.get('http://api.github.com/users');
   //        setUsers(res.data);
    //    },[])

    const searchName = async(text) => {
        console.log("Invoking search api")
        const url = `https://api.github.com/search/users?q=`+text;
        console.log(url);
        const res = await axios.get(url);
        console.log(res);
       
        setUsers(res.data.items)
        if(res.data.items.length > 0)
        {
            setShowClear(true);
        }
    }

    const clearUsers = () =>
    {
        setUsers([]);
    }



    return(<>
    <Router>
        <Navbar/>
        
        <div className='container'>
        <Search searchName={searchName} showClear={showClear} clearUsers={clearUsers}/>
        <Users users={users}></Users>
            <Routes>
                <Route exact path='/about' element={<About/>}></Route>
            </Routes>
        </div>
    </Router>
    </>);
}

export default App;