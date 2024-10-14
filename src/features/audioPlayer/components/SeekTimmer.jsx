import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import { getDuration, isPlaying } from '../store/playerSlice';

const SeekTimmer = ({handleDurationChange}) => {
  const [progress, setProgress] = useState(0)
  const duration = useSelector(getDuration);
  const progressBarRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const clamp = (value, min, max) => Math.max(min, Math.min(value, max));
  const playing=useSelector(isPlaying)
  const intervalRef=useRef()

  useEffect(()=>{
    if(playing){
      console.log(playing,'about playing')
    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev < duration) {
          return prev + 1;
        } else {
          clearInterval(intervalRef.current);
          return prev;
        }
      });
    }, 1000);
    }else{
      console.log('clearing interval')
      clearInterval(intervalRef.current)
    }
    return () => clearInterval(intervalRef.current);

  },[duration,playing])

  useEffect(()=>{
    handleDurationChange(progress)
  },[progress])

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const progressPercent = (progress / duration) * 100;

  const handleSeek = (e) => {
    const rect = progressBarRef.current.getBoundingClientRect();
    const clickPosition = e.clientX - rect.left;
    const newProgress = (clickPosition / rect.width) * duration;
    setProgress(clamp(newProgress,0,duration));
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    handleSeek(e);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      handleSeek(e);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div className="space-y-2 bg-gray-100">
      <div className="relative" ref={progressBarRef} onMouseDown={handleMouseDown}>
        <div className="bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
          <div
            className="bg-cyan-500 dark:bg-cyan-400 h-2"
            style={{ width: `${progressPercent}%` }}
            role="progressbar"
            aria-label="music progress"
            aria-valuenow={progress}
            aria-valuemin="0"
            aria-valuemax={duration}
          ></div>
        </div>
        <div
          className="ring-cyan-500 dark:ring-cyan-400  absolute"
          style={{
            left: `${clamp(progressPercent, 0, 100)}%`,
            top: '50%',
            transform: 'translate(-50%, -50%)',
            cursor: 'pointer',
          }}
        >
          <div className="w-4 h-4 flex items-center justify-center bg-white rounded-full shadow">
            <div className="w-1.5 h-1.5 bg-cyan-500 dark:bg-cyan-400 rounded-full ring-1 ring-inset ring-slate-900/5"></div>
          </div>
        </div>
      </div>
      <div className="flex bg-gray-100 justify-between text-sm leading-6 font-medium tabular-nums">
        <div className="text-cyan-500 dark:text-slate-400">{formatTime(progress)}</div>
        <div className="text-slate-500 dark:text-slate-400">{formatTime(duration)}</div>
      </div>
    </div>
  )
}

export default SeekTimmer
