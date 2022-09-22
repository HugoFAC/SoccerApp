import GameComponent from "../game/GameComponent.js"
import "../games/GamesComponent.css";

export default function GamesComponent({games}){

    return(
        <div className="gamesList">
            {games.map((game) => (
                    <GameComponent
                        key={game.id} 
                        gameId = {game.id}
                    >
                    </GameComponent>
            ))}
        </div>
    );
}