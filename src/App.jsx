import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState([])
  const [jokes, setJokes] = useState("")
  //console.log(count)
  const fetchJokes = () => {
    fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist,sexist,explicit")
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
    
      <h1 className='handing'> Tell me a Jokes</h1>
      <div className='container'>
      <p className='jokes'>{jokes}</p>
      <p className='count'>{count}</p>
    
      <div>
      <button className='btn' onClick={fetchJokes}>Click</button>
      </div>
      </div>
    </>
  )
}

export default App
