import './App.css';
import HeaderComponent from './components/headerComponent/HeaderComponent';
import MyNavComponent from './components/myNavComponent/MyNavComponent';
import { UserContext } from "./contexts/UserContext.js";
import { useLocalStorage } from './hooks/useLocalStorage';
import { useState } from 'react';

function App() {

  const logUser = (u) => {
    if(user.name != ""){ 
      setUser("");
      setLocalUser(""); 
    }
     else {
      setUser({name: u,logUser})
      setLocalUser(u);
    };
  }

  const [localUser, setLocalUser] = useLocalStorage("name","");
  const [user, setUser] = useState({name:localUser,logUser});

  return (
    <UserContext.Provider value={user}>
      <div className='App'>
        <HeaderComponent/>
        <MyNavComponent/>
      </div>
    </UserContext.Provider>
  );
}

export default App;
