"use client";
import { useState, useEffect } from "react";

export const useFetch = <T>(
  API: string = "",
  query = "",
  countPages: number,
) => {
  const [data, setData] = useState<T[]>([]);
  const [state, setState] = useState<AsyncOperationState>({
    loading: true,
    error: false,
  });

  useEffect(() => {
    setData([]);
    fetchData();
  }, [query]);

  useEffect(() => {
    fetchData();
  }, [countPages]);

  async function fetchData() {
    try {
      setState({ ...state, loading: true });
      const response = await fetch(`${API}?query=${query}&page=${countPages}`);
      const res = await response.json();
      setData((prev) => [...prev, res]);
      setState({ ...state, loading: false });
    } catch (error) {
      console.error(error);
      setState({ ...state, error: true });
    }
  }
  return { ...state, data };
};
