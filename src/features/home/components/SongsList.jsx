import React, { useEffect, useState } from 'react'
import {Howl,Howler} from 'howler'

const SongsList = () => {
  const [songData,setSongData]=useState([])
  useEffect(()=>{
    // fetch('https://saavn.dev/api/playlists?id=47599074&limit=25').then((res)=>res.json()).then((data)=>setSongData(data))
  },[])
  const handlePlay=(song)=>{
    console.log('clicked',song.downloadUrl[song.downloadUrl.length-1].url)
    const player=new Howl({
      src:[song.downloadUrl[song.downloadUrl.length-1].url]
    })
    player.play()

  }
  return (
    <>{songData?.data?.songs.map((song)=><h1 onClick={()=>handlePlay(song)}>{song.name}</h1>)}</>
  )
}

export default SongsList
