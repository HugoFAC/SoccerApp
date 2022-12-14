import { Link } from "react-router-dom";

import GamesComponent from "../gamesComponent/GamesComponent.js";
import { getClub, getPlayer, getClubCalendar } from "../../myData";
import "./TeamComponent.css"

export default function TeamComponent({teamId}) {
    const team = getClub(teamId);
    const calendar = getClubCalendar(teamId);
    const players = team.players.map(playerId => getPlayer(playerId));
    return (
        <div className="teamPanel">
            <h2 className="title">{team.name}</h2>
            <div className="playersPanel">
                <h3>Player List</h3>
                {players.map((player) => (
                    <Link
                    style={{ display: "block", margin: "1rem 0" }}
                    to={`/player/${player.id}`}
                    key={player.id}
                >
                    {player.name}
                </Link>
            ))}
            </div>
            <div className="calendarPanel">
                <h3>Calendar</h3>
                <GamesComponent games={calendar}/>
            </div>
        </div>
    );
  }