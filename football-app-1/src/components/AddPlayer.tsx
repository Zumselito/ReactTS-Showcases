import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import type { PlayerType, PositionType } from '../types/team'
import { HiArrowLeft } from 'react-icons/hi'

interface AddPlayerProps {
  onAdd: (player: Omit<PlayerType, 'id'>) => void
}

const AddPlayer: React.FC<AddPlayerProps> = ({ onAdd }) => {
  const navigate = useNavigate()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [position, setPosition] = useState<PositionType | ''>('')
  const [shotPowerHead, setShotPowerHead] = useState<number>(50)
  const [shotPowerRight, setShotPowerRight] = useState<number>(50)
  const [shotPowerLeft, setShotPowerLeft] = useState<number>(50)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!firstName.trim() || !lastName.trim() || position === '') {
      alert("Bitte Vor- und Nachnamen ausfüllen sowie Position wählen!")
      return
    }

    onAdd({
      firstName,
      lastName,
      position,
      shotPowerHead,
      shotPowerRight,
      shotPowerLeft
    })
    void navigate('/')
  }

  const inputClasses = "w-full p-3 bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white transition-all outline-none cursor-pointer"
  const labelClasses = "block mb-1.5 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400"

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 sm:p-8 transition-colors">
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700 transition-colors">
        <div className="bg-linear-to-r from-blue-600 to-indigo-700 p-8 text-white">
          <button 
            onClick={() => void navigate(-1)} 
            className="text-white/80 hover:text-white text-sm flex items-center gap-2 transition-colors group cursor-pointer"
          >
            <HiArrowLeft className="transition-transform group-hover:-translate-x-1" size={18} />
            <span className="font-medium">Abbrechen</span>
          </button>
          <h1 className="text-3xl font-black tracking-tight">Neuer Spieler</h1>
          <p className="text-white/70 text-sm mt-1">Ergänze die Spielerliste um ein neues Talent.</p>
        </div>
        <form onSubmit={handleSubmit} className="p-8 space-y-8">
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 border-b dark:border-gray-700 pb-2">Persönliche Daten</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className={labelClasses}>Vorname</label>
                <input 
                  className={inputClasses}
                  placeholder="z.B. Max" 
                  value={firstName} 
                  onChange={(e) => setFirstName(e.target.value)} 
                />
              </div>
              <div>
                <label className={labelClasses}>Nachname</label>
                <input 
                  className={inputClasses}
                  placeholder="z.B. Mustermann" 
                  value={lastName} 
                  onChange={(e) => setLastName(e.target.value)} 
                />
              </div>
            </div>
            <div>
              <label className={labelClasses}>Position</label>
              <select 
                className={inputClasses}
                value={position} 
                onChange={(e) => setPosition(e.target.value as PositionType)}
                required
              >
                <option value="" disabled hidden>Wähle eine Position...</option>
                <option value="Torwart">🧤 Torwart</option>
                <option value="Abwehr">🛡️ Abwehr</option>
                <option value="Mittelfeld">⚙️ Mittelfeld</option>
                <option value="Sturm">⚽ Sturm</option>
              </select>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 border-b dark:border-gray-700 pb-2">Fähigkeiten</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <label className={labelClasses}>Kopf</label>
                <span className="text-sm font-bold text-blue-700 dark:text-blue-300">{shotPowerHead}%</span>
              </div>
              <input 
                type="range"
                min="0" max="100"
                className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                value={shotPowerHead} 
                onChange={(e) => setShotPowerHead(Number(e.target.value))} 
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <label className={labelClasses}>Rechter Fuß</label>
                  <span className="text-sm font-bold text-indigo-600 dark:text-indigo-300">{shotPowerRight}%</span>
                </div>
                <input 
                  type="range"
                  min="0" max="100"
                  className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  value={shotPowerRight} 
                  onChange={(e) => setShotPowerRight(Number(e.target.value))} 
                />
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <label className={labelClasses}>Linker Fuß</label>
                  <span className="text-sm font-bold text-indigo-600 dark:text-indigo-300">{shotPowerLeft}%</span>
                </div>
                <input 
                  type="range"
                  min="0" max="100"
                  className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                  value={shotPowerLeft} 
                  onChange={(e) => setShotPowerLeft(Number(e.target.value))} 
                />
              </div>
            </div>
          </div>
          <div className="pt-4">
            <button 
              type="submit" 
              className="w-full text-white bg-linear-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-xl text-md px-5 py-4 text-center transition-all active:scale-[0.98] shadow-lg shadow-blue-500/30 cursor-pointer"
            >
              Spieler registrieren
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddPlayer
