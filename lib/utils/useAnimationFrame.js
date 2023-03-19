import { useRef, useEffect } from "react";

export default function useAnimationFrame(callback) {
  const requestRef = useRef();
  const previousTimeRef = useRef();

  function animate(time) {
    if (previousTimeRef.current !== undefined) {
      const deltaTime = time - previousTimeRef.current;
      callback(deltaTime);
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  }

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);
}