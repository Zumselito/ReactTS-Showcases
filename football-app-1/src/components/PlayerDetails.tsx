import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { type PlayerType } from '../types/team'
import { HiPencil, HiTrash, HiArrowLeft } from 'react-icons/hi'

interface PlayerDetailsProps {
  players: PlayerType[]
  onDelete: (id: string) => void
}

const PlayerDetails: React.FC<PlayerDetailsProps> = ({ players, onDelete }) => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const player = players.find((p) => p.id === id)

  if (!player) return <div className="p-10 text-center dark:text-white">Spieler nicht gefunden.</div>

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 sm:p-8 transition-colors">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700">
        <div className="bg-linear-to-r from-blue-600 to-indigo-700 p-8 text-white relative">
          <div className="relative mt-4">
            <button 
              onClick={() => void navigate(-1)} 
              className="text-white/80 hover:text-white text-sm flex items-center gap-2 transition-colors group cursor-pointer"
            >
              <HiArrowLeft className="transition-transform group-hover:-translate-x-1" size={18} />
              <span className="font-medium">Zurück</span>
            </button>
            <h1 className="text-4xl font-black tracking-tight">{player.firstName} {player.lastName}</h1>
            <span className="inline-block mt-3 px-4 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-widest">
              {player.position}
            </span>
            <div className="flex absolute right-0 bottom-0 gap-2">
              <button 
                onClick={() => void navigate(`/edit/${player.id}`)}
                title="Spieler bearbeiten"
                className="p-2 rounded-xl bg-white/10 hover:bg-blue-500/80 text-white transition-all active:scale-90 border border-white/20 cursor-pointer"
              >
                <HiPencil size={20} />
              </button>
              <button 
                onClick={() => {
                  if (window.confirm(`${player.firstName} wirklich löschen?`)) {
                    onDelete(player.id)
                    void navigate('/')
                  }
                }}
                title="Spieler löschen"
                className="p-2 rounded-xl bg-white/10 hover:bg-red-500/80 text-white transition-all active:scale-90 border border-white/20 cursor-pointer"
              >
                <HiTrash size={20} />
              </button>
            </div>
          </div>
        </div>
        <div className="p-8 space-y-10">
          <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 border-b dark:border-gray-700 pb-2">Fähigkeiten</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-end">
              <span className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase">Kopf</span>
              <span className="text-2xl font-black text-blue-600 dark:text-blue-400">{player.shotPowerHead}%</span>
            </div>
            <div className="h-4 w-full bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-600 rounded-full transition-all duration-700 ease-out shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                style={{ width: `${player.shotPowerHead}%` }}
              ></div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-end">
              <span className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase">Rechter Fuß</span>
              <span className="text-2xl font-black text-indigo-500">{player.shotPowerRight}%</span>
            </div>
            <div className="h-4 w-full bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-indigo-600 rounded-full transition-all duration-700 ease-out shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                style={{ width: `${player.shotPowerRight}%` }}
              ></div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-end">
              <span className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase">Linker Fuß</span>
              <span className="text-2xl font-black text-indigo-500">{player.shotPowerLeft}%</span>
            </div>
            <div className="h-4 w-full bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-indigo-600 rounded-full transition-all duration-700 ease-out shadow-[0_0_15px_rgba(99,102,241,0.4)]"
                style={{ width: `${player.shotPowerLeft}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlayerDetails
