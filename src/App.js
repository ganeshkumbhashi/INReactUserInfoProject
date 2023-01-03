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
import UserDetail from './UserDetail';
import AppHome from './AppHome';

function App()
{
    const [users,setUsers] = useState([]);
    const [showClear, setShowClear] = useState(false);
    const [user,setUser] = useState({});
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

    const getDetails = async(login) => {
         const res = await axios.get(`https://api.github.com/users/${login}`)   
         setUser(res.data);
    }

    const clearUsers = () =>
    {
        setUsers([]);
    }



    return(<>
    <Router>
        <Navbar/>
        
        <div className='container'>
      
            <Routes>
                <Route exact path='/'  element={<AppHome searchName={searchName} users={users} clearUsers={clearUsers}  />}/>
                <Route exact path='/about' element={<About/>}/>
                <Route exact path="/user/:anything" element={<UserDetail getDetails={getDetails} user={user} />}/>
            </Routes>
        </div>
    </Router>
    </>);
}

export default App;