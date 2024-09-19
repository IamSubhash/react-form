import React, {useState} from 'react';
import './style.css';

export default function App() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if ((username == "" | undefined) || (password == "" | undefined))
      setErrorMsg("Username and Password are required")
    else {
      setErrorMsg('');
      alert("form Submitted");
    }
  };
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>

      <form onSubmit={handleSubmit}>
        <div>
          <span>Username</span>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <span>Password</span>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <p style={{color : 'red'}}>{errorMsg}</p>
        <div>
        <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
