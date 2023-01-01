import React, { useState } from "react";

function Search(props)
{
    const [text, setText] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        console.log("text value",text);
        console.log(props);
        props.searchName(text);
        setText('');
    }

    return(<>
    
    <form className="form" onSubmit={handleSubmit}>

        <input type="text" name="text" placeholder="Search here" value={text} onChange={(e)=> setText(e.target.value)}/>
        <input type="submit" value="Search" className="btn btn-dark btn-block" />

    </form>
    {props.showClear && <button type="submit" className="btn btn-light btn-block" onClick={props.clearUsers}>Clear</button>}
    
    </>);
}

export default Search;