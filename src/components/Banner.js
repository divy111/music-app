// code for main upper banner 

import React from "react"
import Artist from "../img/concert-img.jpg";
import Check from "../img/buletick.png";
import { FaEllipsisH, FaHeadphonesAlt, FaCheck } from "react-icons/fa"
function Banner() {
  return (
    <div className="banner">
         <img src={Artist} alt="" className="bannerImg"></img> 

         <div className="content">
            <div className="breadCrump">
                <p>Home <span>/Popular Artist</span>
                </p>

                <i>
                    <FaEllipsisH />
                    </i>
            </div>
            <div className="artist">
                <div className="left">
                    <div className="name">
                        <h2>Rollin</h2>
                        <img src={Check} alt="" />
                    </div>

                    <p><i><FaHeadphonesAlt /></i> 14,202,1050 <span>Monthly listners</span> 
                    </p>

                </div>
                <div className="right">
                    <a href="#">Play</a>
                    <a href="#">
                        <i><FaCheck />
                        </i>
                        Following
                        </a>
                </div>
            </div>
         </div>

         <div className="bottomLayer"></div>

    </div>
  )
}

export { Banner };