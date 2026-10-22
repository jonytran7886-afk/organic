import React, { createContext, useContext, useState, useEffect } from 'react';
import { PRODUCTS } from '../data';

interface SavedContextType {
  savedIds: string[];
  isSaved: (id: string) => boolean;
  toggleSaved: (id: string, name?: string) => void;
  clearSaved: () => void;
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const SavedContext = createContext<SavedContextType | undefined>(undefined);

export const SavedProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [savedIds, setSavedIds] = useState<string[]>(() => {
    try {
      const v = JSON.parse(localStorage.getItem('ov_interests') || '[]');
      return Array.isArray(v) ? v.filter(id => PRODUCTS.some(p => p.id === id)) : [];
    } catch {
      return [];
    }
  });

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
  };

  useEffect(() => {
    if (!toastMessage) return;
    const timer = setTimeout(() => {
      setToastMessage(null);
    }, 3200);
    return () => clearTimeout(timer);
  }, [toastMessage]);

  const toggleSaved = (id: string, name?: string) => {
    setSavedIds(prev => {
      let updated: string[];
      if (prev.includes(id)) {
        updated = prev.filter(x => x !== id);
        showToast(name ? `Đã bỏ ${name} khỏi danh sách quan tâm` : 'Đã bỏ khỏi danh sách quan tâm');
      } else {
        updated = [...prev, id];
        showToast(name ? `Đã lưu ${name} vào danh sách quan tâm` : 'Đã lưu vào danh sách quan tâm');
      }
      try {
        localStorage.setItem('ov_interests', JSON.stringify(updated));
      } catch {
        showToast('Không thể lưu trong trình duyệt hiện tại.');
      }
      return updated;
    });
  };

  const clearSaved = () => {
    setSavedIds([]);
    try {
      localStorage.setItem('ov_interests', JSON.stringify([]));
    } catch {
      // ignore
    }
    showToast('Đã xóa danh sách quan tâm');
  };

  const isSaved = (id: string) => savedIds.includes(id);

  return (
    <SavedContext.Provider value={{ savedIds, isSaved, toggleSaved, clearSaved, toastMessage, showToast }}>
      {children}
    </SavedContext.Provider>
  );
};

export const useSaved = (): SavedContextType => {
  const context = useContext(SavedContext);
  if (!context) {
    throw new Error('useSaved must be used within a SavedProvider');
  }
  return context;
};
