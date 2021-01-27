import React, {useState, useEffect} from 'react';
import "./style.css"

export default function Footer(){

    const [newStyle, setNewStyle] = useState({})
    const [newerStyle, setNewerStyle] = useState({})

    const isLoggedIn = (localStorage.getItem('lightOn') === 'true');

  useEffect(() => {
  if(isLoggedIn) {
    const newLight = setNewStyle("light")
    clearInterval(newLight)
    const newerLight = setNewerStyle("lighter")
    clearInterval(newerLight)
  }else{
    const newDark = setNewStyle("dark")
  clearInterval(newDark)
  const newDarker = setNewerStyle("darker")
  clearInterval(newDarker)
  }
}, [isLoggedIn])

    return(
    <div className="Footer">    
        <div className="container">
            <p className="footerText" id={newStyle}>The Calendar App, 2021</p>
        </div>
    </div>    
    )
}
