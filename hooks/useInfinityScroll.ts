import { useState, useEffect, useRef } from "react";

interface InfinityScrollHook {
  showElement: boolean;
  countPages: number;
  ref: React.RefObject<HTMLDivElement>;
}

export const useInfinityScroll = (): InfinityScrollHook => {
  const [showElement, setShowElement] = useState(false);
  const [countPages, setCountPages] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const { isIntersecting } = entries[0];
      if (isIntersecting) {
        setShowElement(true);
        setCountPages((prevState) => prevState + 1);
      } else {
        setShowElement(false);
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return { showElement, countPages, ref };
};
