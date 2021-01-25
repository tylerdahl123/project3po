import React from 'react';
import Main from "./Main";
import LoggedInMain from "./LoggedInMain";

export default function Home(){


    const renderMain = () =>{
        if (localStorage.getItem('login') === 'true'){
            return <LoggedInMain />
            } else {
             return <Main />
          }
    }

   return(
         renderMain()  
    ) 
}