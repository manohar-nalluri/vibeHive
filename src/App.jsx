import { useState } from 'react'
import SideBar from './components/sideBar/SideBar'
import SongsList from './features/home/components/SongsList'
import Player from './features/audioPlayer/components/Player'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SideBar/>
      <SongsList/>
      <Player/>
    </>
  )
}

export default App
