import { Routes, Route, Navigate } from "react-router-dom"
import NewSong from "./pages/NewSong"
import useLocalStorage from "./helper/useLocalStorage"
import type { SongType, SongDataType } from "./types/song"

function App() {
  const [songs, setSongs] = useLocalStorage<SongType[]>("SONGS", [])

  onCreateSongData(data: SongType)

  return (
    <div className="container mx-auto p-4">
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/new" element={<NewSong />} />
        <Route path=":id">
          <Route index element={<h1>Song</h1>} />
          <Route path="edit" element={<h1>Edit Song</h1>} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  )
}

export default App
