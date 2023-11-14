"use client";
import { useState, useEffect } from "react";

interface FetchState<T> {
  loading: boolean;
  error: boolean;
  data?: T;
}

export const useFetch = <T>(API: string = ""): FetchState<T> => {
  const [data, setData] = useState<T>();
  const [fetchState, setFetchState] = useState<FetchState<T>>({
    loading: true,
    error: false,
  });

  async function fetchData() {
    try {
      const response = await fetch(`${API}?query=angular&page=0`);
      const res = await response.json();
      setData(res);
      setFetchState({ ...fetchState, loading: false });
    } catch (error) {
      console.error(error);
      setFetchState({ ...fetchState, error: true });
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { ...fetchState, data };
};
