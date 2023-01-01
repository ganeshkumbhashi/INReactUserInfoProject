import React, { useState } from "react";

function Search(props)
{
    const [text, setText] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        console.log("text value",text);
        console.log(props);
        props.searchName(text);
    }

    return(<>
    
    <form className="form" onSubmit={handleSubmit}>

        <input type="text" name="text" placeholder="Search here" value={text} onChange={(e)=> setText(e.target.value)}/>
        <input type="submit" value="Search" className="btn btn-dark btn-block" />

    </form>
    
    </>);
}

export default Search;