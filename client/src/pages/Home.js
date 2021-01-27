import React from 'react';
import Main from "./Main";
import NewHome from "./NewHome";

export default function Home(){


    const renderMain = () =>{
        if (localStorage.getItem('login') === 'true'){
            return <NewHome />            
            } else {
             return <Main />            
          }
    }
    

   return(
         renderMain()  
    ) 
}