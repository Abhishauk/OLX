import React, { useState, useContext } from 'react';
import { FirebaseContext  } from '../../store/FirebaseContext';
import Logo from '../../olx-logo.png';
import './Login.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';


function Login() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { firebase } = useContext(FirebaseContext);
  
  const history = useHistory()
  const handleLogin = (e) => {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
 
      history.push('/')

      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo} alt="OLX Logo" />
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="email"
            name="email"
            value={email} // Use state variable 'email' here
            onChange={(e) => setEmail(e.target.value)} // Update the 'email' state on change
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="password"
            name="password"
            value={password} // Use state variable 'password' here
            onChange={(e) => setPassword(e.target.value)} // Update the 'password' state on change
          />
          <br />
          <br />
          <button type="submit">Login</button>
        </form>
        <a onClick={() => {
          history.push('/signup')
        }}>Signup</a>
      </div>
    </div>
  );
}

export default Login;
