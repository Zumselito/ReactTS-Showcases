import React from 'react'
import type { PlayerType } from '../types/team'
import { Link, useNavigate } from 'react-router-dom'
import { HiChevronRight, HiUserAdd } from 'react-icons/hi'

export interface PlayerListProps {
  players: PlayerType[]
}

const PlayerList: React.FC<PlayerListProps> = ({ players }) => {
  const navigate = useNavigate()
  const getPositionEmoji = (pos: string) => {
    switch (pos) {
      case 'Torwart': return '🧤'
      case 'Abwehr': return '🛡️'
      case 'Mittelfeld': return '⚙️'
      case 'Sturm': return '⚽'
      default: return '🏃'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 sm:p-8 transition-colors">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700 transition-colors">
        <div className="bg-linear-to-r from-blue-600 to-indigo-700 p-8 text-white">
          <div className="relative mt-4">
            <h1 className="text-3xl font-black tracking-tight">Spielerliste</h1>
            <p className="text-white/70 text-sm mt-1">
              {players.length} {players.length === 1 ? 'Spieler' : 'Spieler'} insgesamt
            </p>
            <Link to="/add">
              <button
                className="absolute right-0 bottom-0 p-2 rounded-xl bg-white/10 hover:bg-blue-600/80 text-white transition-all active:scale-90 border border-white/20 cursor-pointer"
              >
                <HiUserAdd size={20} />
              </button>
            </Link>
          </div>
        </div>
        <div className="overflow-hidden">
          {players.length === 0 ? (
            <div className="p-12 text-center">
              <p className="text-gray-500 dark:text-gray-400 mb-4">Noch keine Spieler eingetragen.</p>
              <button 
                onClick={() => void navigate('/add')}
                className="text-blue-600 dark:text-blue-400 font-bold hover:underline cursor-pointer"
              >
                + Jetzt ersten Spieler hinzufügen
              </button>
            </div>
          ) : (
            <ul className="divide-y divide-gray-100 dark:divide-gray-700">
              {players.map((player) => (
                <li 
                  key={player.id}
                  onClick={() => { void navigate(`/player/${player.id}`) }}
                  className="group flex items-center justify-between p-5 hover:bg-blue-50/50 dark:hover:bg-gray-700/50 cursor-pointer transition-all active:bg-blue-100 dark:active:bg-gray-600"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                      {getPositionEmoji(player.position)}
                    </div>
                    
                    <div>
                      <p className="font-bold text-gray-900 dark:text-white text-lg leading-tight">
                        {player.firstName} {player.lastName}
                      </p>
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mt-1">
                        {player.position}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="hidden sm:flex gap-2 mr-4">
                      <span className="text-[20px] bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-2 py-1 rounded-md font-bold">
                        K: {player.shotPowerHead}%
                      </span>
                      <span className="text-[20px] bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-1 rounded-md font-bold">
                        R: {player.shotPowerRight}%
                      </span>
                      <span className="text-[20px] bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-1 rounded-md font-bold">
                        L: {player.shotPowerLeft}%
                      </span>
                    </div>
                    <HiChevronRight className="text-gray-400 group-hover:text-blue-500 transition-colors" size={24} />
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export default PlayerList
