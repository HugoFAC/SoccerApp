import GameComponent from "../gameComponent/GameComponent.js"
import "./GamesComponent.css";

export default function GamesComponent({games}){

    return(
        <div className="gamesList">
            <h2 className="title">Games</h2>
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