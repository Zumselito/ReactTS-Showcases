import { useState, useEffect } from 'react'
import { Link, Routes, Route, Navigate } from 'react-router-dom'
import { HiSun, HiMoon } from 'react-icons/hi'
import type { PlayerType } from './types/team'
import PlayerList from './components/PlayerList'
import AddPlayer from './components/AddPlayer'
import PlayerDetails from './components/PlayerDetails'
import EditPlayer from './components/EditPlayer'

function App() {
  const [players, setPlayers] = useState<PlayerType[]>(() => {
    const savedData = localStorage.getItem('footballer')
    if (savedData) {
    try {
      return JSON.parse(savedData) as PlayerType[]
    } catch (error) {
      console.error("Fehler beim Laden aus LocalStorage", error)
      return []
    }
  }
  
  return []
  })

  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      return savedTheme === 'dark'
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  const addPlayer = (newPlayerData: Omit<PlayerType, 'id'>) => {
    const newPlayer: PlayerType = {
      id: crypto.randomUUID(),
      ...newPlayerData
    }
    setPlayers([...players, newPlayer])
  }

  const updatePlayer = (updatedPlayerData: PlayerType) => {
    setPlayers(players.map(p => p.id === updatedPlayerData.id ? updatedPlayerData : p))
  }

  const deletePlayer = (id: string) => {
    const updatedPlayers = players.filter((player) => player.id !== id)
    setPlayers(updatedPlayers);
  }

  useEffect(() => {
    localStorage.setItem('footballer', JSON.stringify(players))
  }, [players])

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  return (
    <>
      <nav className="flex items-center justify-between p-4 bg-linear-to-r from-blue-600 to-indigo-700 text-white transition-colors shadow-sm">
        <div className="flex gap-6 items-center">
          <Link 
            to="/" 
            className="text-gray-200 hover:text-blue-200 font-medium transition-colors"
          >
            Spielerliste
          </Link>
          <Link 
            to="/add" 
            className="text-gray-200 hover:text-blue-200 font-medium transition-colors"
          >
            Spieler hinzufügen
          </Link>
        </div>
        <button 
          onClick={() => setIsDark(!isDark)}
          className="p-2 rounded-xl bg-gray-100 dark:bg-gray-700 text-yellow-500 dark:text-blue-300 hover:scale-110 transition-all active:scale-90 border border-gray-200 dark:border-gray-600 shadow-sm"
        >
          {isDark ? <HiSun size={24} /> : <HiMoon size={24} />}
        </button>
      </nav>
      <Routes>
        <Route path='/' element={<PlayerList players={players} />} />
        <Route path='/add' element={<AddPlayer onAdd={addPlayer} />} />
        <Route path='/player/:id' element={<PlayerDetails players={players} onDelete={deletePlayer} />} />
        <Route path="/edit/:id" element={<EditPlayer players={players} onUpdate={updatePlayer} />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </>
  )
}

export default App
