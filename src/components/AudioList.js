import React from "react";
import { FaHeadphones, FaHeart, FaRegClock, FaRegHeart } from "react-icons/fa";

function AudioList() {
  return( <div className="audioList">
    <h2 className="title">
        The List <span>12 songs </span>
    </h2>

    <div className="songsContainer">
      <div className="songs">
        <div className="count">#01</div>
        <div className="song">
          <div className="imageBox">
            <img src="" alt="" />
          </div>

          <div className="section">
            <p className="songName">
              Saari Ki Saari 2.0 
              <span className="spanArtist"> Darshan Raval </span>
            </p>
            <div className="hits">
              <p className="hit">
                <i><FaHeadphones/>
                </i>

                95,490,102

              </p>

              <p className="duration">
                <i><FaRegClock/></i>
                4.09
              </p>

              <div className="favourite">
                <i><FaHeart/></i>
                <i><FaRegHeart/></i>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    </div>
  );
}

export { AudioList };