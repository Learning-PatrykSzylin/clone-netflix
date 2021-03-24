import React, { useEffect } from "react";
import { useParams } from "react-router";
import Youtube from "react-youtube";
import "./Watch.scss";

function Watch() {
  const { id } = useParams();

  const o = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
      controls: 0,
      modestbranding: 1,
      playsinline: 0,
      fs: 1,
    },
  };

  useEffect(() => {
    console.log("MAKE API REQUEST TO FETCH THE VID");
  }, []);

  return (
    <div className="yt-container">
      <div className="player">
        <div>
          <Youtube
            videoId="4TojlZYqPUo"
            opts={o}
            onReady={() => console.log("ready")}
            onPause={() => console.log("on pause")}
          ></Youtube>
        </div>
      </div>
    </div>
  );
}

export default Watch;
