import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FaPlay, FaPause } from "react-icons/fa";

const SongList = ({ songs }) => {
    const [currentSong, setCurrentSong] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
  
    const audioRef = useRef(null);
  
    const togglePlayPause = () => {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    };
  
    const handleTimeUpdate = () => {
      setCurrentTime(audioRef.current.currentTime);
    };
  
    const handleLoadedMetadata = () => {
      setDuration(audioRef.current.duration);
    };
  
    const handleSeek = (e) => {
      const newTime = (e.target.value / 100) * duration;
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    };
  
    const changeSong = (newSongIndex) => {
      setCurrentSong(newSongIndex);
      setIsPlaying(false);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  
    return (
      <div>
        <h2>Music</h2>
        <div id="music">
          <div className="music-controls">
            <button
              className="arrows"
              onClick={() =>
                changeSong((currentSong - 1 + songs.length) % songs.length)
              }
              disabled={songs.length <= 1}
            >
              &#10094;
            </button>
  
            <div>
              <h2 id="current-title">{songs[currentSong].title}</h2>
              <h3 id="current-artist">{songs[currentSong].artist}</h3>
              <div id="current-image-holder">
                <Link to={songs[currentSong].url}>
					<img
					id="current-image"
					alt={songs[currentSong].title}
					src={songs[currentSong].image}
					/>
				</Link>
              </div>
              <div>
                <audio
                  ref={audioRef}
                  src={songs[currentSong].source}
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={handleLoadedMetadata}
                  onEnded={() =>
                    changeSong((currentSong + 1) % songs.length)
                  }
                />
                <div className="player-controls">
                  <button className="control-btn" onClick={togglePlayPause}>
                    {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={(currentTime / duration) * 100 || 0}
                    onChange={handleSeek}
                  />
                  <span>
                    {Math.floor(currentTime / 60)}:
                    {String(Math.floor(currentTime % 60)).padStart(2, "0")} /{" "}
                    {Math.floor(duration / 60)}:
                    {String(Math.floor(duration % 60)).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </div>
  
            <button
              className="arrows"
              onClick={() =>
                changeSong((currentSong + 1) % songs.length)
              }
              disabled={songs.length <= 1}
            >
              &#10095;
            </button>
          </div>
  
          <div id="songs-list">
            {songs.map((s, index) => (
              <div
                key={s.id}
                className={`song-holder ${
                  currentSong === index ? "active" : ""
                }`}
                onClick={() => changeSong(index)}
              >
                <div className="song-number">{index + 1}</div>
                <img
                  alt={s.title}
                  src={s.image}
                  className="song-image"
                  width="50px" height="50pz"
                />
                <div>
                  <h4 className="song-title">{s.title}</h4>
                  <p className="song-artist">{s.artist}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default SongList;
  
