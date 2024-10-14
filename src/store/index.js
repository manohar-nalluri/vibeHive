import { configureStore } from "@reduxjs/toolkit"
import playerSlice from "../features/audioPlayer/store/playerSlice"

const store=configureStore({
  reducer:{
    player:playerSlice
  }
})

export default store
