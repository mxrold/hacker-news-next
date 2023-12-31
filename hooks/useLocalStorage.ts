"use client";
import { useState, useEffect } from "react";

export const useLocalStorage = <T>(key: string = "", initialValue: T) => {
  const [items, setItems] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item !== null ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const [state, setState] = useState<AsyncOperationState>({
    loading: true,
    error: false,
  });

  useEffect(() => {
    const fetchItem = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const localStorageItem = localStorage.getItem(key);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(key, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItems(parsedItem);
        }

        setState({ loading: false, error: false });
      } catch (error) {
        console.error("fetchItem", error);
        setState({ loading: false, error: true });
      }
    };

    fetchItem();
  }, [key, initialValue]);

  const saveItem = (newItem: T | T[]) => {
    try {
      if (Array.isArray(newItem)) {
        setItems(newItem as T);
        localStorage.setItem(key, JSON.stringify(newItem));
      } else {
        setItems(newItem);
        localStorage.setItem(key, JSON.stringify(newItem));
      }
    } catch (error) {
      console.error("saveItem", error);
      setState({ loading: false, error: true });
    }
  };

  return { items, saveItem, ...state };
};
