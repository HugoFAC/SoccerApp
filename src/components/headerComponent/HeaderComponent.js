import LoginComponent from "../loginComponent/LoginComponent";
import "./HeaderComponent.css"
import { UserContext } from "../../contexts/UserContext.js"
import { useContext } from "react";

export default function HeaderComponent(){

    const user = useContext(UserContext);

    const logout = () => {
        user.logUser("");
    }

    return(
            <div className='head'>
            <h1 className='logo'>MYAPP</h1>
            {user.name == "" ? 
                <LoginComponent/>
            :
            <div>
                <h3>{user.name}</h3>
                <button onClick={logout}>logout</button>
            </div>
            }
        </div>
    );
}