import { createSlice } from "@reduxjs/toolkit"

const initialState={
  isPlaying:false,
  currentTrack:{
        "id": "A1KgRhLb",
        "name": "Deva Deva (From &quot;Brahmastra&quot;)",
        "type": "song",
        "year": "2022",
        "releaseDate": "2022-08-08",
        "duration": 279,
        "label": "Sony Music Entertainment India Pvt. Ltd.",
        "explicitContent": false,
        "playCount": 52990633,
        "language": "hindi",
        "hasLyrics": false,
        "lyricsId": null,
        "url": "https://www.jiosaavn.com/song/deva-deva-from-brahmastra/MVkgViZYe1E",
        "copyright": "(P) 2022 Sony Music Entertainment India Pvt. Ltd.",
        "album": {
          "id": "37152625",
          "name": "Deva Deva (From &quot;Brahmastra&quot;)",
          "url": "https://www.jiosaavn.com/album/deva-deva-from-brahmastra/FzoBiZXeQPk_"
        },
        "artists": {
          "primary": [
            {
              "id": "456323",
              "name": "Pritam",
              "role": "primary_artists",
              "image": [
                {
                  "quality": "50x50",
                  "url": "https://c.saavncdn.com/artists/Pritam_Chakraborty-20170711073326_50x50.jpg"
                },
                {
                  "quality": "150x150",
                  "url": "https://c.saavncdn.com/artists/Pritam_Chakraborty-20170711073326_150x150.jpg"
                },
                {
                  "quality": "500x500",
                  "url": "https://c.saavncdn.com/artists/Pritam_Chakraborty-20170711073326_500x500.jpg"
                }
              ],
              "type": "artist",
              "url": "https://www.jiosaavn.com/artist/pritam-songs/OaFg9HPZgq8_"
            },
            {
              "id": "459320",
              "name": "Arijit Singh",
              "role": "primary_artists",
              "image": [
                {
                  "quality": "50x50",
                  "url": "https://c.saavncdn.com/artists/Arijit_Singh_002_20230323062147_50x50.jpg"
                },
                {
                  "quality": "150x150",
                  "url": "https://c.saavncdn.com/artists/Arijit_Singh_002_20230323062147_150x150.jpg"
                },
                {
                  "quality": "500x500",
                  "url": "https://c.saavncdn.com/artists/Arijit_Singh_002_20230323062147_500x500.jpg"
                }
              ],
              "type": "artist",
              "url": "https://www.jiosaavn.com/artist/arijit-singh-songs/LlRWpHzy3Hk_"
            },
            {
              "id": "458681",
              "name": "Amitabh Bhattacharya",
              "role": "primary_artists",
              "image": [
                {
                  "quality": "50x50",
                  "url": "https://c.saavncdn.com/artists/Amitabh_Bhattacharya_000_20220916184017.jpg"
                },
                {
                  "quality": "150x150",
                  "url": "https://c.saavncdn.com/artists/Amitabh_Bhattacharya_000_20220916184017.jpg"
                },
                {
                  "quality": "500x500",
                  "url": "https://c.saavncdn.com/artists/Amitabh_Bhattacharya_000_20220916184017.jpg"
                }
              ],
              "type": "artist",
              "url": "https://www.jiosaavn.com/artist/amitabh-bhattacharya-songs/hsNRL6ZmJmo_"
            },
            {
              "id": "672010",
              "name": "Jonita Gandhi",
              "role": "primary_artists",
              "image": [
                {
                  "quality": "50x50",
                  "url": "https://c.saavncdn.com/artists/Jonita_Gandhi_003_20180507091741_50x50.jpg"
                },
                {
                  "quality": "150x150",
                  "url": "https://c.saavncdn.com/artists/Jonita_Gandhi_003_20180507091741_150x150.jpg"
                },
                {
                  "quality": "500x500",
                  "url": "https://c.saavncdn.com/artists/Jonita_Gandhi_003_20180507091741_500x500.jpg"
                }
              ],
              "type": "artist",
              "url": "https://www.jiosaavn.com/artist/jonita-gandhi-songs/2deuXsoZiWA_"
            }
          ],
          "featured": [],
          "all": [
            {
              "id": "456323",
              "name": "Pritam",
              "role": "music",
              "image": [
                {
                  "quality": "50x50",
                  "url": "https://c.saavncdn.com/artists/Pritam_Chakraborty-20170711073326_50x50.jpg"
                },
                {
                  "quality": "150x150",
                  "url": "https://c.saavncdn.com/artists/Pritam_Chakraborty-20170711073326_150x150.jpg"
                },
                {
                  "quality": "500x500",
                  "url": "https://c.saavncdn.com/artists/Pritam_Chakraborty-20170711073326_500x500.jpg"
                }
              ],
              "type": "artist",
              "url": "https://www.jiosaavn.com/artist/pritam-songs/OaFg9HPZgq8_"
            },
            {
              "id": "456323",
              "name": "Pritam",
              "role": "singer",
              "image": [
                {
                  "quality": "50x50",
                  "url": "https://c.saavncdn.com/artists/Pritam_Chakraborty-20170711073326_50x50.jpg"
                },
                {
                  "quality": "150x150",
                  "url": "https://c.saavncdn.com/artists/Pritam_Chakraborty-20170711073326_150x150.jpg"
                },
                {
                  "quality": "500x500",
                  "url": "https://c.saavncdn.com/artists/Pritam_Chakraborty-20170711073326_500x500.jpg"
                }
              ],
              "type": "artist",
              "url": "https://www.jiosaavn.com/artist/pritam-songs/OaFg9HPZgq8_"
            },
            {
              "id": "459320",
              "name": "Arijit Singh",
              "role": "singer",
              "image": [
                {
                  "quality": "50x50",
                  "url": "https://c.saavncdn.com/artists/Arijit_Singh_002_20230323062147_50x50.jpg"
                },
                {
                  "quality": "150x150",
                  "url": "https://c.saavncdn.com/artists/Arijit_Singh_002_20230323062147_150x150.jpg"
                },
                {
                  "quality": "500x500",
                  "url": "https://c.saavncdn.com/artists/Arijit_Singh_002_20230323062147_500x500.jpg"
                }
              ],
              "type": "artist",
              "url": "https://www.jiosaavn.com/artist/arijit-singh-songs/LlRWpHzy3Hk_"
            },
            {
              "id": "458681",
              "name": "Amitabh Bhattacharya",
              "role": "singer",
              "image": [
                {
                  "quality": "50x50",
                  "url": "https://c.saavncdn.com/artists/Amitabh_Bhattacharya_000_20220916184017.jpg"
                },
                {
                  "quality": "150x150",
                  "url": "https://c.saavncdn.com/artists/Amitabh_Bhattacharya_000_20220916184017.jpg"
                },
                {
                  "quality": "500x500",
                  "url": "https://c.saavncdn.com/artists/Amitabh_Bhattacharya_000_20220916184017.jpg"
                }
              ],
              "type": "artist",
              "url": "https://www.jiosaavn.com/artist/amitabh-bhattacharya-songs/hsNRL6ZmJmo_"
            },
            {
              "id": "672010",
              "name": "Jonita Gandhi",
              "role": "singer",
              "image": [
                {
                  "quality": "50x50",
                  "url": "https://c.saavncdn.com/artists/Jonita_Gandhi_003_20180507091741_50x50.jpg"
                },
                {
                  "quality": "150x150",
                  "url": "https://c.saavncdn.com/artists/Jonita_Gandhi_003_20180507091741_150x150.jpg"
                },
                {
                  "quality": "500x500",
                  "url": "https://c.saavncdn.com/artists/Jonita_Gandhi_003_20180507091741_500x500.jpg"
                }
              ],
              "type": "artist",
              "url": "https://www.jiosaavn.com/artist/jonita-gandhi-songs/2deuXsoZiWA_"
            },
            {
              "id": "12841161",
              "name": "Pritam",
              "role": "singer",
              "image": [],
              "type": "artist",
              "url": "https://www.jiosaavn.com/artist/pritam-songs/ES25qtjiVmo_"
            },
            {
              "id": "",
              "name": "Arijit Singh &amp; Amitabh Bhattacharya",
              "role": "singer",
              "image": [],
              "type": "artist",
              "url": "https://www.jiosaavn.com/artist/arijit-singh-amitabh-bhattacharya-songs/"
            },
            {
              "id": "458681",
              "name": "Amitabh Bhattacharya",
              "role": "lyricist",
              "image": [
                {
                  "quality": "50x50",
                  "url": "https://c.saavncdn.com/artists/Amitabh_Bhattacharya_000_20220916184017.jpg"
                },
                {
                  "quality": "150x150",
                  "url": "https://c.saavncdn.com/artists/Amitabh_Bhattacharya_000_20220916184017.jpg"
                },
                {
                  "quality": "500x500",
                  "url": "https://c.saavncdn.com/artists/Amitabh_Bhattacharya_000_20220916184017.jpg"
                }
              ],
              "type": "artist",
              "url": "https://www.jiosaavn.com/artist/amitabh-bhattacharya-songs/hsNRL6ZmJmo_"
            },
            {
              "id": "459632",
              "name": "Ranbir Kapoor",
              "role": "starring",
              "image": [
                {
                  "quality": "50x50",
                  "url": "https://c.saavncdn.com/artists/Ranbir_Kapoor_50x50.jpg"
                },
                {
                  "quality": "150x150",
                  "url": "https://c.saavncdn.com/artists/Ranbir_Kapoor_150x150.jpg"
                },
                {
                  "quality": "500x500",
                  "url": "https://c.saavncdn.com/artists/Ranbir_Kapoor_500x500.jpg"
                }
              ],
              "type": "artist",
              "url": "https://www.jiosaavn.com/artist/ranbir-kapoor-songs/nqAfNmNB5II_"
            },
            {
              "id": "511658",
              "name": "Alia Bhatt",
              "role": "starring",
              "image": [
                {
                  "quality": "50x50",
                  "url": "https://c.saavncdn.com/artists/Alia_Bhatt_50x50.jpg"
                },
                {
                  "quality": "150x150",
                  "url": "https://c.saavncdn.com/artists/Alia_Bhatt_150x150.jpg"
                },
                {
                  "quality": "500x500",
                  "url": "https://c.saavncdn.com/artists/Alia_Bhatt_500x500.jpg"
                }
              ],
              "type": "artist",
              "url": "https://www.jiosaavn.com/artist/alia-bhatt-songs/,henzzVDXDQ_"
            },
            {
              "id": "456117",
              "name": "Amitabh Bachchan",
              "role": "starring",
              "image": [
                {
                  "quality": "50x50",
                  "url": "https://c.saavncdn.com/artists/Amitabh_Bachchan_50x50.jpg"
                },
                {
                  "quality": "150x150",
                  "url": "https://c.saavncdn.com/artists/Amitabh_Bachchan_150x150.jpg"
                },
                {
                  "quality": "500x500",
                  "url": "https://c.saavncdn.com/artists/Amitabh_Bachchan_500x500.jpg"
                }
              ],
              "type": "artist",
              "url": "https://www.jiosaavn.com/artist/amitabh-bachchan-songs/X6Dce0iJ7y0_"
            }
          ]
        },
        "image": [
          {
            "quality": "50x50",
            "url": "https://c.saavncdn.com/044/Deva-Deva-From-Brahmastra-Hindi-2022-20220812225424-50x50.jpg"
          },
          {
            "quality": "150x150",
            "url": "https://c.saavncdn.com/044/Deva-Deva-From-Brahmastra-Hindi-2022-20220812225424-150x150.jpg"
          },
          {
            "quality": "500x500",
            "url": "https://c.saavncdn.com/044/Deva-Deva-From-Brahmastra-Hindi-2022-20220812225424-500x500.jpg"
          }
        ],
        "downloadUrl": [
          {
            "quality": "12kbps",
            "url": "https://aac.saavncdn.com/044/9c13f6ecc0842cc7c162306c550d913a_12.mp4"
          },
          {
            "quality": "48kbps",
            "url": "https://aac.saavncdn.com/044/9c13f6ecc0842cc7c162306c550d913a_48.mp4"
          },
          {
            "quality": "96kbps",
            "url": "https://aac.saavncdn.com/044/9c13f6ecc0842cc7c162306c550d913a_96.mp4"
          },
          {
            "quality": "160kbps",
            "url": "https://aac.saavncdn.com/044/9c13f6ecc0842cc7c162306c550d913a_160.mp4"
          },
          {
            "quality": "320kbps",
            "url": "https://aac.saavncdn.com/044/9c13f6ecc0842cc7c162306c550d913a_320.mp4"
          }
        ]
      },  songControler:null,
  queue:[],
  songController:null,
  duration:0,
}

const playerSlice=createSlice({
  name:"player",
  initialState,
  reducers:{
    setPlaying(state,action){
      state.isPlaying=action.payload
      state.duration=state.currentTrack.duration
    },
    setCurrentTrack(state,action){
      state.currentTrack=action.payload
      // state.songControler=new Howl({
      //   src:action.payload.downloadUrl[action.payload.downloadUrl.length-1].url
      // })
      // state.duration=state.songControler.duration()
    },
    updateTrackTemp(state,action){
      // state.songControler=new Howl({
      //   src:state.currentTrack.downloadUrl[state.currentTrack.downloadUrl.length-1].url
      // })
      // state.duration=state.songControler.duration()
      //
    },
    volumeControl(state,action){
      state.currentTrack.volume=action.payload
    },
    setSongDurationController(state,action){
      state.songControler.seek(state.songControler.duration()*action.payload)
    },
  }
})
export const currentTrack=(state)=>state.player.currentTrack
export const isPlaying=(state)=>state.player.isPlaying
export const getSongURL=(state)=>state.player.currentTrack.downloadUrl[state.player.currentTrack.downloadUrl.length-1].url
export const getDuration=(state)=>state.player.duration

export const {setPlaying,setCurrentTrack,volumeControl,setSongDurationController,updateTrackTemp}=playerSlice.actions

export default playerSlice.reducer


