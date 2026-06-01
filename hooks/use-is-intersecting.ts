import { useEffect, useState, RefObject } from 'react';

type Options = IntersectionObserverInit;

export function useIsIntersecting<T extends Element>(
  ref: RefObject<T | null>,
  options?: Options,
): boolean {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    if (!ref.current || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    }, options);

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, options]);

  return isIntersecting;
}