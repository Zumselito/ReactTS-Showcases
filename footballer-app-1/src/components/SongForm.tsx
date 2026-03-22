import { useRef } from "react"
import { Link } from "react-router-dom"
import type { SongDataType } from "../types/song"

type SongFormProps = {
  onSubmit: (data: SongDataType) => void
}

export default function SongForm({ onSubmit }: SongFormProps) {
  const songTitleRef = useRef<HTMLInputElement>(null)
  // const albumRef = useRef<HTMLInputElement>(null)
  // const bandRef = useRef<HTMLInputElement>(null)
  // const genreRef = useRef<HTMLInputElement>(null)

  function handleSubmit(e: React.SyntheticEvent) {
  e.preventDefault()

  if (songTitleRef.current) {
    onSubmit({
      title: songTitleRef.current.value
    })
  }
}
  
  return (
    <div className="bg-blue-50 dark:bg-blue-900 px-6 py-24">
      <form onSubmit={handleSubmit} className="mx-auto my-2 max-w-xl sm:my-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label htmlFor="song-title" className="block text-sm/6 font-semibold text-blue-900 dark:text-blue-100">Song-Titel</label>
            <div className="mt-2.5">
              <input id="song-title" name="song-title" type="text"  ref={songTitleRef} className="block w-full rounded-md bg-blue-900/5 dark:bg-blue-100/5 px-3.5 py-2 text-base text-blue-900 dark:text-blue-100 outline-1 -outline-offset-1 outline-blue-900/10 dark:outline-blue-100/10 placeholder:text-blue-500 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-500" required />
            </div>
          </div>
          {/* <div className="sm:col-span-2">
            <label htmlFor="album" className="block text-sm/6 font-semibold text-blue-900 dark:text-blue-100">Album</label>
            <div className="mt-2.5">
              <input id="album" name="album" type="text" ref={albumRef} className="block w-full rounded-md bg-blue-900/5 dark:bg-blue-100/5 px-3.5 py-2 text-base text-blue-900 dark:text-blue-100 outline-1 -outline-offset-1 outline-blue-900/10 dark:outline-blue-100/10 placeholder:text-blue-500 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-500" />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="band" className="block text-sm/6 font-semibold text-blue-900 dark:text-blue-100">Band</label>
            <div className="mt-2.5">
              <input id="band" name="band" type="text" ref={bandRef} className="block w-full rounded-md bg-blue-900/5 dark:bg-blue-100/5 px-3.5 py-2 text-base text-blue-900 dark:text-blue-100 outline-1 -outline-offset-1 outline-blue-900/10 dark:outline-blue-100/10 placeholder:text-blue-500 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-500" />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="genre" className="block text-sm/6 font-semibold text-blue-900 dark:text-blue-100">Genre</label>
            <div className="mt-2.5">
              <input id="genre" name="genre" type="text" ref={genreRef} className="block w-full rounded-md bg-blue-900/5 dark:bg-blue-100/5 px-3.5 py-2 text-base text-blue-900 dark:text-blue-100 outline-1 -outline-offset-1 outline-blue-900/10 dark:outline-blue-100/10 placeholder:text-blue-500 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-500" />
            </div>
          </div> */}
          <div className="self-end pt-8">
            <button type="submit" className="block w-full rounded-md bg-emerald-400 dark:bg-emerald-700 px-3.5 py-2.5 text-center text-sm font-semibold text-blue-900 dark:text-blue-100 shadow-xs hover:bg-emerald-300 dark:hover:bg-emerald-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500">Speichern</button>
          </div>
          <div className="self-end pt-8">
            <Link to="..">
              <button type="button" className="block w-full rounded-md bg-red-500 dark:bg-red-800 px-3.5 py-2.5 text-center text-sm font-semibold text-blue-900 dark:text-blue-100 shadow-xs hover:bg-red-400 dark:hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400">Abbrechen</button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  )
}
