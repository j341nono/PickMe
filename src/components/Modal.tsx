import React from 'react';

type ModalProps = {
  onClose: () => void;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  return (
    <div style={{
      position: "fixed",
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: "rgba(0,0,0,0.6)",
      display: "flex", justifyContent: "center", alignItems: "center",
      zIndex: 1000
    }}>
      <div style={{
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "10px",
        maxHeight: '80vh',
        overflowY: 'auto',
        color: 'black'
      }}>
        {children}
        <button onClick={onClose}  style={{ display: 'block', margin: '20px auto 0' }}>close</button>
      </div>
    </div>
  );
};

export default Modal;