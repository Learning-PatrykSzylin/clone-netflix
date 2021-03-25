import React, { useEffect, useState } from "react";
import "./Banner.scss";
import movieTrailer from "movie-trailer";
import axios from "../../utils/axios";
import { getURLQueryValue, setEllipsisForText } from "../../utils/utils";
import VolumeOffIcon from "@material-ui/icons/VolumeOff";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import Youtube from "react-youtube";

const base_image_url = "https://image.tmdb.org/t/p/original/";
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

function Banner() {
  const [randomMovie, setRandomMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [isMuted, setMutedVal] = useState(true);
  const [videoTarget, setVideoTarget] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(
        `/movie/508442?api_key=dbd1c689e77c55468dc82708b47ae1fb`
      );
      if (request.data != null) {
        setRandomMovie(request.data);
        setIsLoading(false);
      }

      return request;
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (randomMovie) {
      movieTrailer(
        randomMovie?.title ||
          randomMovie?.name ||
          randomMovie?.original_name ||
          ""
      )
        .then((url) => {
          setTrailerUrl(getURLQueryValue(url, "v"));
          console.log(url);
        })
        .catch((err) => {
          console.log("No trailer for banner");
        });
    }
  }, [randomMovie]);

  const controlVolume = (isMute) => {
    if (isMute) {
      videoTarget?.mute();
    } else {
      videoTarget?.unMute();
    }

    setMutedVal(isMute);
  };

  return (
    <section
      className="banner"
      style={
        !isLoading
          ? {
              backgroundSize: "cover",
              backgroundImage: `url(${base_image_url}${randomMovie?.backdrop_path})`,
              backgroundPosition: "center",
            }
          : {}
      }
    >
      <div className="banner__videoContainer">
        {
          <>
            <Youtube
              id="yt"
              videoId={trailerUrl}
              opts={o}
              onReady={(e) => {
                setVideoTarget(e.target);
                e.target.mute();
                e.target.playVideo();
                e.target.setVolume(25);
              }}
              onEnd={(e) => e.target.playVideo()}
            />
          </>
        }
        {isMuted == true && (
          <VolumeOffIcon
            onClick={() => controlVolume(false)}
            className="banner__volumeBtn banner__volumeOffBtn"
            fontSize="large"
          />
        )}
        {isMuted == false && (
          <VolumeUpIcon
            onClick={() => controlVolume(true)}
            className="banner__volumeBtn banner__volumeOnBtn"
            fontSize="large"
          />
        )}
      </div>
      <div className="banner__contents">
        <h1 className="banner__title">
          {randomMovie?.title ||
            randomMovie?.name ||
            randomMovie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <p className="banner__description">
          {setEllipsisForText(randomMovie?.overview, 200)}
        </p>
      </div>
      <div className="banner--fadeBottom"></div>
    </section>
  );
}

export default Banner;
