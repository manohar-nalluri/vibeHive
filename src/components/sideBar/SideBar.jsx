import { menu } from "../../utils/menu.utils"
import {Howl,Howler} from 'howler'

const SideBar = () => {
  const song=new Howl({
      src:['https://aac.saavncdn.com/043/e43b35ec9ebdd2b394e6c1d458196963_320.mp4']
    })

  const handlePlay=()=>{
    song.play()
  }
  const handlePause=()=>{
    song.pause()
  }
  const handleNext=()=>{
    song.stop()
  }

  return (
    <>
      VibeHive
      <div>
        Menu
        {menu.map((item)=><p>{item.icon}{item.name}</p>)}
      </div>
      <button onClick={handlePlay}>play</button>
      <button onClick={handlePause}>play</button>
      <button onClick={handleNext}>next</button>
      <button onClick={handleNext}>stop</button>
    </>
  )
}

export default SideBar
