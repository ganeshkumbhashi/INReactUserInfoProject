import React from "react";

function Users(props)
{
    console.log(props.users)
    return(
    
    <div style={userStyle}>
        {props.users.map(
            (user) => (
                <p key={user.login}>{user.login}</p>
            )

        )}
    </div>
    
    );
}

const userStyle = {
    display:"grid",
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap:'1rem'
}

export default Users;