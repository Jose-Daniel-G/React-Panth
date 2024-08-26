import React, { useState } from 'react';
import MediaModal from './Modals/MediaModal'; // Ajusta la ruta según tu estructura
import profilePic from './images/image.png'; // Ajusta la ruta según tu estructura
import CameraIcon from './Icons/CameraIcon';
import PlayIcon from './Icons/PlayIcon';
import MicroIcon from './Icons/MicroIcon';
import TagIcon from './Icons/TagIcon';
import Dropdown from './Dropdown';
import Textarea from './Textarea';  

const PostCreator = ({ onCreate }) => {
    const [content, setContent] = useState('');
    const [media, setMedia] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [emojiPickerOpen, setEmojiPickerOpen] = useState(false); // Estado para EmojiPicker

    const handleSubmit = (e) => {
        e.preventDefault();
        if (content.trim() || media) {
            onCreate({ content, media });
            setContent('');
            setMedia(null);
        }
    };

    const handleMediaChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setMedia(URL.createObjectURL(file));
            openModal(); // Abre el modal automáticamente cuando se carga una imagen
        }
    };

    const openModal = () => {
        setModalIsOpen(true);
        setEmojiPickerOpen(false); // Cierra el EmojiPicker al abrir el modal

        // Dispara el evento 'modalOpened' para cerrar el EmojiPicker en el Textarea
        const event = new Event('modalOpened');
        window.dispatchEvent(event);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setMedia(null); // Eliminar media al cerrar el modal
    };

    return (
        <div className="post-container">
            <form onSubmit={handleSubmit}>
                <div className="post-creator-header">
                    <img src={profilePic} alt="Profile" className="profile-pic" />
                    <div className="input-wrapper">
                        <Textarea />
                    </div>
                </div>
                <div className="post-creator-footer">
                    <div className="tooltip-BG">
                        <input type="file" id="media" style={{ display: 'none' }} onChange={handleMediaChange} />
                        <span className="">Agrega</span>

                        <div className="add-media-btn-container">
                            <label htmlFor="media" className="add-media-btn">
                                <CameraIcon />
                            </label>
                            <span className="tooltip">Photo</span>
                        </div>

                        <div className="add-media-btn-container">
                            <button type="button" className="add-media-btn">
                                    <PlayIcon />
                                </button>
                                <span className="tooltip">Video</span>
                            </div>

                            <div className="add-media-btn-container">
                                <button type="button" className="add-media-btn">
                                    <MicroIcon />
                                </button>
                                <span className="tooltip">Audio</span>
                            </div>

                            <div className="add-media-btn-container">
                                <button type="button" className="add-media-btn">
                                    <TagIcon />
                                </button>
                                <span className="tooltip">Tag</span>
                        </div>
                    </div>

                    <div className="post-creator-controls">
                        <Dropdown /> {/* Componente de Selección de Privacidad */}
                        <button type="submit" className="post-btn large">Post</button>
                    </div>
                </div>
            </form>
            <MediaModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                media={media}
            />
        </div>
    );
};

export default PostCreator;
