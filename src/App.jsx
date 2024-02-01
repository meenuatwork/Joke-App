import { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState([])
  const [jokes, setJokes] = useState("")
  //console.log(count)
  const fetchJokes = () => {
    fetch("https://v2.jokeapi.dev/joke/Any")
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        if (data.type === "single") {
          return (setCount(data.joke), setJokes(""))
        } else {
          return setCount(data.delivery), setJokes(data.setup)

        }
        console.log(data)
      })
  }
  useEffect(() => {
    fetchJokes()
  }, [])

  return (
    <>
      <h1> Tell me a Jokes</h1>
      <p>{count}</p>
      <p>{jokes}</p>
      <button onClick={fetchJokes}>click</button>
    </>
  )
}

export default App
