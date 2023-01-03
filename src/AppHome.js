import React from "react";
import Search from "./Search";
import Users from "./Users";

function AppHome(props)
{
    
    return(<>
    
                <Search searchName={props.searchName} showClear={props.users.length > 0 ? true: false} clearUsers={props.clearUsers}/>
                <Users users={props.users}></Users>
    
    </>);

}

export default AppHome;