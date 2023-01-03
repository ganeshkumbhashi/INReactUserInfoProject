import React from "react";
import Repo from "./Repo";

function RepoList(props)
{
    return(<div>
    
    {
        props.repos.map((repo) => (
            <Repo key={repo.id} repo={repo}></Repo>
        ))
    }
    
    
    </div>);
}

export default RepoList;