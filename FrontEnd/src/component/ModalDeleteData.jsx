import React, { useState } from 'react';

const DeleteModal = ({ isOpen, onClose, onDelete }) => {
  return (
    <div className={`modal ${isOpen ? 'is-active' : ''}`}>
      <div className="modal-background" onClick={onClose}></div>
      <div className="modal-content">
        <div className="box">
          <p>Anda yakin ingin menghapus tempat wisata ini?</p>
          <button className="button is-danger" onClick={onDelete}>Hapus</button>
          <button className="button" onClick={onClose}>Batal</button>
        </div>
      </div>
      <button className="modal-close is-large" onClick={onClose} aria-label="close"></button>
    </div>
  );
};

const TempatWisataItem = ({ nama, onDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDeleteClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleDelete = () => {
    // Logika penghapusan tempat wisata
    onDelete();
    setIsModalOpen(false);
  };

  return (
    <div>
      <p>{nama}</p>
      <button onClick={handleDeleteClick}>Hapus</button>

      <DeleteModal isOpen={isModalOpen} onClose={handleCloseModal} onDelete={handleDelete} />
    </div>
  );
};

export default TempatWisataItem;
