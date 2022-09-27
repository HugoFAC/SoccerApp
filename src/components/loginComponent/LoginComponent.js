import {useState} from 'react';

import { useLocalStorage } from '../../hooks/useLocalStorage';
import './LoginComponent.css';

export default function LoginComponent(){
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [storage, setStorage] = useLocalStorage("name", "");

    const handleSubmit=()=>{
        setStorage(username);
    }
    return(
        <div className="loginWindow">
            <h3>Log In</h3>
            
            <form className="loginForm" onSubmit={handleSubmit}>
                <label>
                    <input type="text" placeholder="username" onChange={e => setUserName(e.target.value)}/>
                </label>
                <label>
                    <input type="password" placeholder="password" onChange={e => setPassword(e.target.value)}/>
                </label>
                <div>
                    <button type="submit">Log In</button>
                </div>
            </form>
        </div>
    )
}