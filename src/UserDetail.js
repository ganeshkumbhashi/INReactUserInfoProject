import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import RepoList from "./RepoList";

function UserDetail(props)
{
    let { anything } = useParams();

    console.log("User Detail - "+anything);

    useEffect(() => {
        props.getDetails(anything);
        props.getRepo(anything);
    },[])

    return(<>
    
    <Link to="/" className="btn btn-dark">Back to Search</Link>
    Hireable: {props.user.hireable ? (<i className="fa fa-check text-success"></i>):(<i className="fa fa-times-circle text-danger"></i>)}
    <div className="card grid-2">
         <div className="all center">
            <img src={props.user.avatar_url} className="round-img" alt="" style={{width:'150px'}} />
            <h1>{props.user.name}</h1>
            <p>Location: {props.user.location}</p>
        </div>
        <div>
            {props.user.bio && (
                <>
                
                    <h3>Bio</h3>
                    <p>{props.user.bio}</p>
                
                </>
            )}

            <a href={props.user.html_url} className="btn btn-dark my-1">Visit Github Profile</a>
            <ul>
                <li>
                    {props.user.company && (<>
                    
                        <strong>Company:{props.user.company}</strong>
                    
                    </>)}
                </li>
                <li>
                {props.user.blog && (<>
                    
                    <strong>Website:{props.user.blog}</strong>
                
                </>)}
                </li>
                <li>
                {props.user.login && (<>
                    
                    <strong>Username:{props.user.login}</strong>
                
                </>)}
                </li>
            </ul>    

        </div>   
    </div>
    <div className="card text-center">
    
        <div className="badge badge-primary">Followers: {props.user.followers}</div>
        <div className="badge badge-success">Following: {props.user.following}</div>
        <div className="badge badge-danger">Public Repos: {props.user.public_repos}</div>
        <div className="badge badge-dark">Public Gists: {props.user.public_gists}</div>                    
    
    </div>    
    <RepoList repos={props.repos}/>
    </>)
}

export default UserDetail;