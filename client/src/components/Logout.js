import React from 'react';
import { useGoogleLogout } from 'react-google-login';

const clientId =
  '755847287284-ihitgd9ha8br0o3oe0jqalrs94qdj85s.apps.googleusercontent.com';

function Logout() {
  const onLogoutSuccess = (res) => {
    console.log('Logged out Success');
    alert('Logged out Successfully ✌');
  };

  const onFailure = () => {
    console.log('Logout failed.');
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });

  return (
    <button onClick={signOut} className="button">
      <img src="icons/google.svg" alt="google login" className="icon"></img>
      <span className="buttonText">Logout</span>
    </button>
  );
}

export default Logout;