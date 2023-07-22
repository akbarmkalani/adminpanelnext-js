"use client";


// Modal.js

import React from 'react';

const Modal = ({ closeModal , handlePictureChange}) => {
    return (
        <div className="modal">
            <div className="modal-content bg-blue-400">
                <h2>Change Profile Photo</h2>
                <input
                    id="fileInput"
                    type="file"
                    accept="image/*"
                    onChange={handlePictureChange}
                    style={{ display: 'none' }}
                />
                <button onClick={closeModal}>Close</button>
            </div>
        </div>
    );
};

export default Modal;
