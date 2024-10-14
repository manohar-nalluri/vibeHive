import React from 'react'
import { currentTrack } from '../store/playerSlice'
import { useSelector } from 'react-redux'

const NameCard = () => {
  const track=useSelector(currentTrack)
  return (
    <div className="bg-white border-slate-100 dark:bg-slate-800 dark:border-slate-500 border-b rounded-t-xl p-4 pb-6 sm:p-10 sm:pb-8 lg:p-6 xl:p-10 xl:pb-8 space-y-6 sm:space-y-8 lg:space-y-6 xl:space-y-8  items-center">
        <div className="flex items-center space-x-4">
          <img src={track.image[track.image.length-1].url} alt="" width="88" height="88" className="flex-none rounded-lg bg-slate-100" loading="lazy" />
          <div className="min-w-0 flex-auto space-y-1 font-semibold">
            <p className="text-cyan-500 dark:text-cyan-400 text-sm leading-6">
              <abbr title="Track">{track.name}</abbr> 
            </p>
            <h2 className="text-slate-500 dark:text-slate-400 text-sm leading-6 truncate">
               {track.label}
          </h2>
            <p className="text-slate-900 dark:text-slate-50 text-lg">
               {track.artists.primary[0].name}
            </p>
          </div>
        </div>
      </div>
  )
}

export default NameCard
