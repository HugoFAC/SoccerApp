import { NavLink, Outlet, useSearchParams } from "react-router-dom";
import '../styleSheets/myNav.css';

export default function MyNav(){
    let [searchParams, setSearchParams] = useSearchParams();

    return(
        <>
            <nav className={"mainNav"}>
                <NavLink 
                    className={({ isActive }) => isActive ? "red" : "blue"}
                    to="/Games"
                >
                    Games
                </NavLink> 
                <NavLink 
                    className={({ isActive }) => isActive ? "red" : "blue"}
                    to="/Leagues"
                >
                    Leagues
                </NavLink> 
                <NavLink 
                    className={({ isActive }) => isActive ? "red" : "blue"}
                    to="/Teams"
                >
                    Teams
                </NavLink>
                <input
                className="searchInput"
                value={searchParams.get("filter") || ""}
                onChange={(event) => {
                    let filter = event.target.value;
                    if (filter) {
                    setSearchParams({ filter });
                    } else {
                    setSearchParams({});
                    }
                }}
                />
                
            </nav>
            <Outlet></Outlet>
        </>
    );
    
}