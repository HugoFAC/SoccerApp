import LoginComponent from "../loginComponent/LoginComponent";
import "./HeaderComponent.css"
import { useLocalStorage } from "../../hooks/useLocalStorage";

export default function HeaderComponent(){

    const [username, setUserName] = useLocalStorage("name", "");

    const logout = () => {
        localStorage.clear();
        setUserName("");
    }

    return(
        <div className='head'>
            <h1 className='logo'>MYAPP</h1>
            {username == "" ? 
                <LoginComponent/>
            :
            <div>
                <h3>{username}</h3>
                <button onClick={logout}>logout</button>
            </div>
            }
        </div>
        
    );
}