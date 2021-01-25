import React, { useState } from 'react';
import { useGoogleLogin, useGoogleLogout } from 'react-google-login';

import { refreshTokenSetup } from '../utils/refreshToken';
 
export function Login() {
const clientId =
  '755847287284-ihitgd9ha8br0o3oe0jqalrs94qdj85s.apps.googleusercontent.com'; 

  const[loginState, setLoginState]= useState({
    login:false
  });

  const onSuccess = (res) => {
    setLoginState({...loginState, 
      login: loginState.login=true});
    localStorage.setItem('login', true)
    console.log('Login Success: currentUser:', res.profileObj);   
    alert(
      `Logged in successfully welcome ${res.profileObj.name} 😍.`
    );
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: 'offline',
  });

  const onLogoutSuccess = (res) => {
    setLoginState({...loginState, 
      login: loginState.login=false});
    localStorage.setItem('login', false)
    console.log('Logged out Success');
    alert('Logged out Successfully ✌');
  };

  const onLogoutFailure = () => {
    console.log('Logout failed.');
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onLogoutFailure,
  });

  function renderButton(){
    if (loginState.login === true){
        return (
          <button onClick={signOut} className="logbutton">      
            <span className="buttonText">Logout</span>
          </button>
        );
    } else {
      return (
        <button onClick={signIn} className="logbutton">
          <span className="buttonText">Login</span>
        </button>
      )
    }
  }    
  return (
    renderButton()    
  );           
};