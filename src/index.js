import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Leagues from './routes/Leagues';
import Teams from './routes/Teams';
import Games from './routes/Games';
import League from './routes/League';
import Team from './routes/Team';
import Player from './routes/Player';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="games" element={<Games />} />
          <Route path="leagues" element={<Leagues />}/>
          <Route path="/leagues/:leagueId" element={<League />} />
          <Route path="teams" element={<Teams />}/>
          <Route path="/teams/:teamId" element={<Team />} />
          <Route path="/player/:playerId" element={<Player />} />
          <Route
            path="*"
            element={
                <p>There's nothing here!</p>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
