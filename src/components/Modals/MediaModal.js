import React, { useState } from "react";
import PropTypes from "prop-types";
import Modal from "react-modal";
import { AiOutlinePlus, AiOutlineEdit, AiOutlineClose } from "react-icons/ai";
import CameraIcon from "../Icons/CameraIcon";
import PlayIcon from "../Icons/PlayIcon";
import MicroIcon from "../Icons/MicroIcon";
import TagIcon from "../Icons/TagIcon";
import SmileIcon from "../Icons/SmileIcon";
import EmojiPicker from "../Icons/EmojiPicker";

Modal.setAppElement("#root");

const MediaModal = ({ isOpen, onRequestClose, media }) => {
  const [content, setContent] = useState("");
  const [emojiPickerVisible, setEmojiPickerVisible] = useState(false);

  const toggleEmojiPicker = () => {
    setEmojiPickerVisible(!emojiPickerVisible);
  };

  const addEmoji = (emoji) => {
    setContent(content + emoji);
    setEmojiPickerVisible(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Media Preview"
      className="modal"
      overlayClassName="modal-overlay"
    >
      <div className="modal-header">
        <h2 className="color-white">Create post</h2>
        <button
          className="modal-close-btn"
          onClick={onRequestClose}
          aria-label="Close modal"
        >
          <AiOutlineClose />
        </button>
      </div>
      <div className="modal-content">
        <div className="modal-media">
          {media ? (
            <div className="media-container">
              <img src={media} alt="Preview" className="media-image" />
              <div className="button-group">
                <button className="plus-btn">
                  <AiOutlinePlus className="plus-icon" />
                </button>
                <button className="edit-btn">
                  <AiOutlineEdit className="edit-icon" />
                  Edit
                </button>
                <button className="close-btn">x</button>
              </div>
            </div>
          ) : (
            <p>No media available</p>
          )}
        </div>
        <div className="input-wrapper">
          <input
            className="form-post-creator"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="What's on your mind?"
          />
          <button
            type="button"
            className="emoji-btn"
            onClick={toggleEmojiPicker}
          >
            <SmileIcon />
          </button>
        </div>
        {emojiPickerVisible && <EmojiPicker onSelect={addEmoji} />}
      </div>

      <div className="post-creator-footer">
        <div className="tooltip-BG">
          <input type="file" id="media" style={{ display: "none" }} />
          <span className="color-white">Agregar</span>

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
        <button className="post-btn medium">Post</button>
      </div>
    </Modal>
  );
};

MediaModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  media: PropTypes.string,
};

export default MediaModal;
