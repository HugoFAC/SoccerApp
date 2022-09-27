import {useState} from 'react';

import { useLocalStorage } from '../../hooks/useLocalStorage';
import { getUser } from '../../myData';
import './LoginComponent.css';

export default function LoginComponent(){
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [storage, setStorage] = useLocalStorage("name", "");

    const handleUserNameChange=(e)=>{
        setUserName(e.target.value)
    }
    const handlePasswordChange=(e)=>{
        setPassword(e.target.value)
    }
    const handleSubmit=()=>{
        let response = getUser(username,password);
        response == username ?
            setStorage(response) :
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