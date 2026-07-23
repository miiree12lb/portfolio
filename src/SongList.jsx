import React, { useState, useRef } from "react";
import { 
    Play, Pause, SkipBack, SkipForward, 
    Volume2, VolumeX, Shuffle, Repeat, ExternalLink 
} from "lucide-react";
import ytMusic from "./assets/music/ytMusic.png";
import "./css/songList.css";

const SongList = ({ songs }) => {
    const [currentSong, setCurrentSong] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [autoplay, setAutoplay] = useState(false);
    const [volume, setVolume] = useState(0.8);
    const [isMuted, setIsMuted] = useState(false);

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
        if (autoplay && audioRef.current) {
            audioRef.current.play().then(() => setIsPlaying(true)).catch(console.error);
        }
    };

    const handleSeek = (e) => {
        const newTime = (e.target.value / 100) * duration;
        audioRef.current.currentTime = newTime;
        setCurrentTime(newTime);
    };

    const handleVolumeChange = (e) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        audioRef.current.volume = newVolume;
        setIsMuted(newVolume === 0);
    };

    const toggleMute = () => {
        if (isMuted) {
            audioRef.current.volume = volume || 0.5;
            setIsMuted(false);
        } else {
            audioRef.current.volume = 0;
            setIsMuted(true);
        }
    };

    const handleSongEnd = () => {
        const nextSongIndex = (currentSong + 1) % songs.length;
        changeSong(nextSongIndex);

        if (autoplay) {
            setTimeout(() => {
                if (audioRef.current) {
                    audioRef.current.play().catch(console.error);
                }
                setIsPlaying(true);
            }, 100);
        }
    };

    const changeSong = (newSongIndex) => {
        setCurrentSong(newSongIndex);
        setIsPlaying(false);
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
    };

    const formatTime = (time) => {
        if (isNaN(time)) return "0:00";
        const mins = Math.floor(time / 60);
        const secs = Math.floor(time % 60);
        return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
    };

    const song = songs[currentSong];

    return (
        <div className="modern-player-wrapper">
            <audio
                ref={audioRef}
                src={song.source}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onEnded={handleSongEnd}
            />

            <div className="modern-player-card">
                {/* Secció Principal: Reproductor */}
                <div className="player-main">
                    <div className="cover-art-container">
                        <img src={song.image} alt={song.title} className="cover-art" />
                        <a 
                            href={song.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="yt-music-badge"
                            title="Open in YouTube Music"
                        >
                            <img src={ytMusic} alt="YouTube Music" />
                        </a>
                    </div>

                    <div className="song-details">
                        <h3 className="player-title">{song.title}</h3>
                        <p className="player-artist">{song.artist}</p>
                    </div>

                    {/* Barra de Progrés */}
                    <div className="progress-section">
                        <input
                            type="range"
                            className="progress-bar"
                            min="0"
                            max="100"
                            value={(currentTime / duration) * 100 || 0}
                            onChange={handleSeek}
                            style={{
                                backgroundSize: `${(currentTime / duration) * 100 || 0}% 100%`
                            }}
                        />
                        <div className="time-stamps">
                            <span>{formatTime(currentTime)}</span>
                            <span>{formatTime(duration)}</span>
                        </div>
                    </div>

                    {/* Controlys de Reproducció */}
                    <div className="controls-row">
                        <button 
                            className="action-btn"
                            onClick={() => changeSong((currentSong - 1 + songs.length) % songs.length)}
                        >
                            <SkipBack size={20} />
                        </button>

                        <button className="play-btn" onClick={togglePlayPause}>
                            {isPlaying ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" className="play-icon-shift" />}
                        </button>

                        <button 
                            className="action-btn"
                            onClick={() => changeSong((currentSong + 1) % songs.length)}
                        >
                            <SkipForward size={20} />
                        </button>
                    </div>

                    {/* Control de Volum */}
                    <div className="volume-control">
                        <button className="volume-btn" onClick={toggleMute}>
                            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                        </button>
                        <input
                            type="range"
                            className="volume-bar"
                            min="0"
                            max="1"
                            step="0.01"
                            value={isMuted ? 0 : volume}
                            onChange={handleVolumeChange}
                        />
                    </div>
                </div>

                {/* Llista de Cançons Lateral */}
                <div className="playlist-section">
                    <div className="playlist-header">
                        <h4>Playlist</h4>
                        <label className="autoplay-toggle">
                            <input
                                type="checkbox"
                                checked={autoplay}
                                onChange={() => setAutoplay(!autoplay)}
                            />
                            <span className="toggle-label">Autoplay</span>
                        </label>
                    </div>

                    <div className="playlist-items">
                        {songs.map((s, index) => (
                            <div
                                key={s.id || index}
                                className={`playlist-item ${currentSong === index ? "active" : ""}`}
                                onClick={() => changeSong(index)}
                            >
                                <div className="item-index">
                                    {currentSong === index && isPlaying ? (
                                        <div className="playing-bars">
                                            <span></span><span></span><span></span>
                                        </div>
                                    ) : (
                                        <span>{index + 1}</span>
                                    )}
                                </div>
                                <img src={s.image} alt={s.title} className="item-thumb" />
                                <div className="item-info">
                                    <p className="item-title">{s.title}</p>
                                    <p className="item-artist">{s.artist}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SongList;