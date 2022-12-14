import { NavLink, Outlet, useSearchParams } from "react-router-dom";
import { useState } from "react";

import './MyNavComponent.css';

export default function MyNavComponent(){

    const [searchParams, setSearchParams] = useSearchParams();
    let search = searchParams.get("filter") ? searchParams.get("filter") : "";
    const [filter, setFilter] = useState(search);
    
    function onInputChange(event){
            setFilter(event.target.value);
    };

    function onButtonClick(){
        if (filter) {
            setSearchParams({ filter });
        } else {
            setSearchParams({});
        }
    };
    function onLinkClick(){
        setFilter("");
    };
    return(
        <>
            <nav className={"mainNav"}>
                <NavLink 
                    className={({ isActive }) => isActive ? "red" : "blue"}
                    to="/Games"
                    onClick={onLinkClick}
                >
                    Games
                </NavLink> 
                <NavLink 
                    className={({ isActive }) => isActive ? "red" : "blue"}
                    to="/Leagues"
                    onClick={onLinkClick}
                >
                    Leagues
                </NavLink> 
                <NavLink 
                    className={({ isActive }) => isActive ? "red" : "blue"}
                    to="/Teams"
                    onClick={onLinkClick}
                >
                    Teams
                </NavLink>
                <button 
                    className="searchButton"
                    onClick={onButtonClick}
                >
                    search
                </button>
                <input
                    className="searchInput"
                    value={filter}
                    onChange={onInputChange}
                />
                
            </nav>
            <Outlet></Outlet>
        </>
    );
    
}