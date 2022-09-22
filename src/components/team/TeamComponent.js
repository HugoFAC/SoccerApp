import { Link } from "react-router-dom";

import GameComponent from "../game/GameComponent.js"
import { getClub, getPlayer, getClubCalendar } from "../../myData";

export default function TeamComponent({teamId}) {
    const team = getClub(teamId);
    const calendar = getClubCalendar(teamId);
    const players = team.players.map(playerId => getPlayer(playerId));
    return (
        <div>
            <h2>{team.name}</h2>
            <div>
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
            <div>
                <h3>Calendar</h3>
                {calendar.map((game) => (
                    <GameComponent
                        key={game.id} 
                        gameId = {game.id}
                    >
                    </GameComponent>
            ))}
            </div>
        </div>
    );
  }