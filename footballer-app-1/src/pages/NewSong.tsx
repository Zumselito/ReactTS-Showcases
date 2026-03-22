import SongForm from "../components/SongForm"
import type { SongDataType } from "../types/song"

export default function NewSong() {
  const handleSubmit = (data: SongDataType) => {
    console.log("Neuer Song wird erstellt:", data);
  }

  return (
    <>
      <h1 className="mb-4">New Song component</h1>
      <SongForm onSubmit={handleSubmit} />
    </>
  )
}
