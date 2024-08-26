// EmojiPicker.js
import React from 'react';

const emojis = [
    '😀', '😁', '😂', '🤣', '😃', '😅', '😊', '😎', '😍', '😒', '😢', '😭',
    // Agrega más emojis o grupos de emojis según tu preferencia
];

const EmojiPicker = ({ onSelect }) => {
    return (
        <div className="emoji-picker">
            <div className="emoji-picker-popular">
                <h4>Más populares</h4>
                <div className="emoji-list">
                    {emojis.map((emoji, index) => (
                        <span
                            key={index}
                            className="emoji"
                            onClick={() => onSelect(emoji)}
                        >
                            {emoji}
                        </span>
                    ))}
                </div>
            </div>
            {/* Puedes agregar más secciones como "Actividades", etc. */}
        </div>
    );
};

export default EmojiPicker;
