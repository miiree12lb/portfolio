import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import './css/popup.css'; // Carrega el CSS del popup

export default function Popup({ isOpen, onRequestClose, title, content }) {
    const closeButtonRef = useRef(null);
    const onCloseRef = useRef(onRequestClose);
    onCloseRef.current = onRequestClose;

    // While open: Escape closes it, focus moves into it, and returns to where it was on close
    useEffect(() => {
        if (!isOpen) return;
        const previouslyFocused = document.activeElement;
        closeButtonRef.current?.focus();

        const onKeyDown = (e) => {
            if (e.key === "Escape") onCloseRef.current();
        };
        document.addEventListener("keydown", onKeyDown);

        return () => {
            document.removeEventListener("keydown", onKeyDown);
            previouslyFocused?.focus?.();
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="popup-overlay" onClick={onRequestClose}>
            <div className="popup-content" role="dialog" aria-modal="true" aria-label={title} onClick={(e) => e.stopPropagation()}>
                <div className="popup-header">
                    <h3>{title}</h3>
                    <button ref={closeButtonRef} className="popup-close-btn" onClick={onRequestClose} aria-label="Close">
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
