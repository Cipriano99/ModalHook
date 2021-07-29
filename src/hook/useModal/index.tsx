import React, { useState } from 'react';

import './styles.css';

export const useModal = () => {
  const [visible, setVisible] = useState(false);
  const [content, setContent] = useState('');

  const Modal = () => {
    return (
      <div className="modal">
        <div className="modal-content">
          <span onClick={() => setVisible(false)} className="modal-close">
            &times;
          </span>
          <p>{content}</p>
        </div>
      </div>
    );
  };

  return {
    Modal: visible ? Modal : null,
    show: (content: string) => {
      setVisible(true), setContent(content);
    },
  };
};
