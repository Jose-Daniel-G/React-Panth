import React, { useState, useEffect, useRef } from 'react';
import SmileIcon from './Icons/SmileIcon';
import EmojiPicker from './Icons/EmojiPicker';

const Textarea = () => {
    const [content, setContent] = useState('');
    const [emojiPickerVisible, setEmojiPickerVisible] = useState(false);
    const textareaRef = useRef(null);

    useEffect(() => {
        const textarea = textareaRef.current;
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
    }, [content]);

    useEffect(() => {
        const handleModalOpen = () => {
            setEmojiPickerVisible(false);
        };

        window.addEventListener('modalOpened', handleModalOpen);

        return () => {
            window.removeEventListener('modalOpened', handleModalOpen);
        };
    }, []);

    const toggleEmojiPicker = () => {
        setEmojiPickerVisible(!emojiPickerVisible);
    };

    const addEmoji = (emoji) => {
        setContent(content + emoji);
        setEmojiPickerVisible(false);
    };

    return (
        <div>
            <textarea
                ref={textareaRef}
                className="form-post-creator"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="What's on your mind?"
                rows="1"
            />
            <button type="button" className="emoji-btn" onClick={toggleEmojiPicker}>
                <SmileIcon />
            </button>
            <div className="emoji-modal">
                {emojiPickerVisible && <EmojiPicker onSelect={addEmoji} />}
            </div>
        </div>
    );
};

export default Textarea;
