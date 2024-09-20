import React, {useState} from 'react';
import './style.css';
import {useDispatch, useSelector} from 'react-redux';
import { loginUser } from './redux/actions';

export default function App() {

  const [credentials, setCredentials] = useState({username: '', password: ''})
  const [errorMsg, setErrorMsg] = useState('');

  const dispatch = useDispatch();
  const sessionId = useSelector((state) => state.sessionId);

  const handleSubmit = (e) => {
    e.preventDefault();
    if ((credentials.username == "" | undefined) || (credentials.password == "" | undefined))
      setErrorMsg("Username and Password are required")
    else {
      setErrorMsg('');
      dispatch(loginUser(credentials));
    }
  };
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>

      <form onSubmit={handleSubmit}>
        <div>
          <span>Username</span>
          <input type="text" value={credentials.username} onChange={(e) => setCredentials({...credentials, username: e.target.value})} />
        </div>
        <div>
          <span>Password</span>
          <input type="password" value={credentials.password} onChange={(e) => setCredentials({...credentials, password: e.target.value})} />
        </div>
        <p style={{color : 'red'}}>{errorMsg}</p>
        <div>
        <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
