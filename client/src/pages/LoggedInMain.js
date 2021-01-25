import React from 'react';

export default function LoggedInMain(){
    return(
        <div>            
           <p> Welcome {localStorage.getItem('user')} </p>
        </div>        
    )
}