import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function Signin() {

    const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState(true);

  const navigate = useNavigate();

  function handleSubmit(event){
    event.preventDefault();

    axios.post("http://localhost:5000/login", 
        {
            username: username,
            password: password
        },
        {headers: {'content-type': 'application/x-www-form-urlencoded'}}
    )
    .then((response) => {
        console.log(response.data);
        if (response.data === true) {
            navigate('/dashboard');
            setResult(response.data);
        } else if (response.data === false) {
            navigate('/login');
            setResult(response.data);
        } else {
            alert(response.data);
        }
    })
    .catch((error) => {
        console.error("There was an error logging in!", error);
        navigate('/'); 
    });;
    setPassword("");
}
  return (
    <div className='forms'>
        <form onSubmit={handleSubmit}>
    <h1 className="h3 mb-3 fw-normal font1">Sign in</h1>

    <div className="form-floating">
      <input type="email" onChange={(e) => setUsername(e.target.value)}  value={username} className="form-control" id="floatingInput" placeHolder="username@example.com"/>
      <label for="floatingInput">Email address</label>
    </div>
    <div className="form-floating">
      <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} className="form-control" id="floatingPassword" placeHolder="Password"/>
      <label for="floatingPassword">Password</label>
      {result ? null : <p className="alert alert-danger mt-3">Wrong password! Try Again!</p>}
    </div>
    <button className="btn btn-success w-100 py-2" type="submit">Sign in</button>
  </form>
    </div>
  )
}

export default Signin