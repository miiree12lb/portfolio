import React from "react";
import { ExternalLink } from "lucide-react";
import ytMusic from "./assets/music/ytMusic.png";
import "./css/songList.css";

// Playlist shown as links to YouTube Music (no audio is hosted on this site).
const SongList = ({ songs }) => {
    return (
        <div className="modern-player-wrapper">
            <div className="modern-player-card song-links-card">
                <div className="playlist-section">
                    <div className="playlist-header">
                        <h4>Playlist</h4>
                        <img src={ytMusic} alt="" className="song-links-logo" aria-hidden="true" />
                    </div>

                    <ul className="playlist-items song-links-grid">
                        {songs.map((s, index) => (
                            <li key={s.id || index}>
                                <a
                                    href={s.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="playlist-item song-link"
                                    aria-label={`${s.title} by ${s.artist}, open in YouTube Music (new tab)`}
                                >
                                    <div className="item-index"><span>{index + 1}</span></div>
                                    <img src={s.image} alt="" className="item-thumb" />
                                    <div className="item-info">
                                        <p className="item-title">{s.title}</p>
                                        <p className="item-artist">{s.artist}</p>
                                    </div>
                                    <ExternalLink size={16} className="song-link-icon" aria-hidden="true" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SongList;
