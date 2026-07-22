import React from 'react';
import { X } from 'lucide-react';
import './css/popup.css'; // Carrega el CSS del popup

export default function Popup({ isOpen, onRequestClose, title, content }) {
    if (!isOpen) return null;

    return (
        <div className="popup-overlay" onClick={onRequestClose}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                <div className="popup-header">
                    <h3>{title}</h3>
                    <button className="popup-close-btn" onClick={onRequestClose}>
                        <X size={20} />
                    </button>
                </div>
                <div className="popup-body">
                    {content}
                </div>
            </div>
        </div>
    );
}