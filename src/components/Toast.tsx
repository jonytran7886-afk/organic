import React from 'react';
import { useSaved } from '../context/SavedContext';

export const Toast: React.FC = () => {
  const { toastMessage } = useSaved();

  return (
    <div
      id="toast"
      className={`toast ${toastMessage ? 'visible' : ''}`}
      role="status"
      aria-live="polite"
    >
      {toastMessage}
    </div>
  );
};
