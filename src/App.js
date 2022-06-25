import './Sass/App.sass'

import { useEffect } from 'react'
import {HashRouter as Router, Navigate, Routes, Route} from 'react-router-dom'

import NavigationBar from './components/NavigationBar'
import Navigator from './components/Navigator'
import GameList from './components/GameList'
import GameSelected from './components/GameSelected'
import Account from './components/Account'
import UploadGame from './components/UploadGame'

function App() {
  useEffect(() => {
    let link = document.createElement("link")
    link.rel = "stylesheet"
    link.href = "https://fonts.googleapis.com/css?family=Nunito"

    let head = document.head
    head.appendChild(link)

    return () => {
      head.removeChild(link)
    };
  });

  return (
    <Router className="App">
      <div className="navigation-bar curve">
        <NavigationBar />
      </div>

      <div className="main curve">
        <Routes>
          <Route path="/home" element={<Navigator />} />
          <Route path="/Account" element={<Account />} />
          <Route path="/:filter/Games" element={<GameList />} />
          <Route path="/Game/:game_name" element={<GameSelected />}/>
          <Route path="/:list/UploadGame" element={<UploadGame />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
