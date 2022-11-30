import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
function useLocalStorage(itemName, initialValue) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(initialValue);

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = [];
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }, 1000);
  }, []);

  const saveItem = (newItem) => {
    try {
      const stringifiedTdos = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedTdos);
      setItem(newItem);
    } catch (error) {
      setItem(error);
    }
  };

  return { item, saveItem, loading };
}

export { useLocalStorage };
