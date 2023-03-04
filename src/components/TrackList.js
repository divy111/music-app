// track on me

import React from "react";
import { BsVolumeUpFill, BsMusicNoteList }  from "react-icons/bs";
import {GoDeviceDesktop} from "react-icons/go";
import Track from "../img/track1.png";
function TrackList() {
  return  <div className = "tracklist">
    <div className="top">
        <img src={Track} alt="" />
        <p className="trackName">
            Sample Name <span className="trackSpan">Artist</span>

        </p>

    </div>
    <div className="bottom">
    <i><BsVolumeUpFill /></i>
    <input type="range" />
    <i><BsMusicNoteList /></i>
    <i><GoDeviceDesktop /></i>
    </div>
  </div>;
  
}

export  {TrackList};