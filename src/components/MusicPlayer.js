import React,{ useState, useRef, useEffect } from "react";
import "../Styles/MusicPlayer.css";

import { FaHeart, FaRegHeart, FaStepBackward, FaBackward, FaPause, FaPlay, FaForward, FaStepForward, FaShareAlt } from "react-icons/fa";
import { BsDownload } from "react-icons/bs";

function MusicPlayer({ song, imgSrc}) {
    console.log(song);

    const [isLove, setLoved] = useState(false);
    const [isPlaying, setPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0)

    const audioPlayer = useRef();   //our audio tag
    const progressBar = useRef();  //our progress bar 
    const animationRef = useRef();   // for our animation pourpose

    useEffect (() => {

        const seconds = Math.floor(audioPlayer.current.duration);

// setting time for play botton 

        setDuration(seconds);
    }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

        const changePlayPause = () => {

            const prevValue = isPlaying;
            if(!prevValue) {
                audioPlayer.current.play();
                animationRef.current = requestAnimationFrame(whilePlaying);
            } else {
                audioPlayer.current.pause();
                cancelAnimationFrame(animationRef.current);
            }
    
            setPlaying(!prevValue);
        };
       
        const CalculateTime = (sec) => {
        const minutes = Math.floor(sec / 60);
        // <10 -> 09 or 11,12
        const returnMin = minutes < 10 ? `0${minutes}` : `${minutes}`;

        const seconds = Math.floor (sec % 60);
        const returnSec = seconds < 10 ? `0${minutes}` : `${seconds}`;


        return `${returnMin}:${returnSec}`;
        };

        const whilePlaying = () => {
            progressBar.current.value = audioPlayer.current.currentTime;
            changeCurrentTime(); 
            animationRef.current = requestAnimationFrame(whilePlaying);

 // whileplaying is for updating frame

        };
        const changeProgress = () => {
            audioPlayer.current.currentTime = progressBar.current.value;
            changeCurrentTime();
        };

        const changeCurrentTime = () => {
            progressBar.current.style.setProperty(
                "--player-played", 
            `${(progressBar.current.value / duration) * 100}%`
            
            );

            setCurrentTime(progressBar.current.value);
        };

    const changeloved = () => {
        setLoved(!isLove);
    };

  return ( 
  <div className="musicPlayer">
    <div className="songImage">
        <img src={imgSrc} alt="" />
    </div>
    <div className="songAttributes">
{/* audio tag have in built function */}
        <audio src={song} preload="metadata" ref={audioPlayer} />

        <div className="top">
            <div className="left">
                <div className="loved" onClick={changeloved}>
                {isLove ? (
                 <i>
                    <FaHeart/>
                    </i> 
                ) : (
                    <i>
                     <FaRegHeart />
                     </i>
             )}
            </div>

             <div className="download"><i><BsDownload/></i></div>
            </div>
            <div className="middle">
                <div className="back">
                    <i><FaStepBackward/></i>
                    <i><FaBackward/></i>

                </div>
                <div className="plpayPause" onClick={changePlayPause}>
                    {isPlaying ? (
                    <i>
                        <FaPause />
                        </i>
                        ) : ( 
                        <i>
                            <FaPlay />
                            </i>
                            )}

                </div>
                <div className="forward">
                    <i><FaForward/></i>
                    <i><FaStepForward/></i>

                </div>
            </div>
            <div className="right"><i><FaShareAlt/></i></div>
             
        </div>
        {/* setting play button  */}
        <div className="bottom">
            <div className="curretnTime">{ CalculateTime(currentTime) }</div>
            <input type="range" className="progresBar" ref={progressBar} onChange = {changeProgress}/>
            <div className="duration">
                {duration && !isNaN(duration) && CalculateTime(duration)
                  ? CalculateTime(duration)
                : "00:00"}
            </div>
        </div>
    </div>
  </div>
  );
} 
export  { MusicPlayer }; 