import { useState, type ChangeEvent, type FormEvent } from "react"

function App() {
  const [item, setItem] = useState<string>("")

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setItem(e.target.value)
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    alert(item)
  }

  return (
    <div className="container mx-auto p-10">
      <form onSubmit={handleSubmit}>
        <label>
          <input className="bg-gray-300 dark:bg-blue-600 text-black dark:text-white" type="text" value={item} onChange={handleChange} />
        </label>
      </form>
    </div>
  )
}

export default App
