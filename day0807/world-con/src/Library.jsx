import React from "react";
import Book from "./Book";

//Library.jsx

function Library(){
    return(
        <div>
            <Book name="처음 만난 유레카" 
                  numOfPage={450}/>
            <Book name="처음 만난 월드콘" 
            numOfPage={300}/>
            <Book name="처음 만난 비타500" 
                  numOfPage={360}/>
        </div>
    );
}

export default Library;