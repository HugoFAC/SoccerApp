import {useState} from 'react';
import { useContext } from 'react';

import { getUser } from '../../myData';
import { UserContext } from '../../contexts/UserContext';
import './LoginComponent.css';

export default function LoginComponent(){

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const user = useContext(UserContext);

    const handleUserNameChange=(e)=>{
        setUserName(e.target.value)
    }
    const handlePasswordChange=(e)=>{
        setPassword(e.target.value)
    }
    const handleSubmit=()=>{
        let response = getUser(username,password);
        response == username ?
            user.logUser(response) :
            alert(response);
    }
    return(
        <div className="loginWindow">
            <h3>Log In</h3>
            <form className="loginForm" onSubmit={handleSubmit}>
                <label>
                    <input type="text" placeholder="username" onChange={handleUserNameChange}/>
                </label>
                <label>
                    <input type="password" placeholder="password" onChange={handlePasswordChange}/>
                </label>
                <div>
                    <button type="submit">Log In</button>
                </div>
            </form>
        </div>
    )
}