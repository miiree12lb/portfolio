// Makes a non-button element (a card, a badge) usable with the keyboard:
// it can be reached with Tab and opened with Enter or Space, and screen readers announce it as a button.
export function clickable(onActivate) {
    return {
        role: "button",
        tabIndex: 0,
        onClick: onActivate,
        onKeyDown: (e) => {
            // Leave keys alone when they come from a link or button inside the card
            if (e.target !== e.currentTarget) return;
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onActivate(e);
            }
        },
    };
}
