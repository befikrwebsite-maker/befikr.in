import { useEffect } from 'react';

export function useScrollLock(lock) {
  useEffect(() => {
    if (lock) {
      const scrollY = window.scrollY;
      const body = document.body;
      
      body.style.position = 'fixed';
      body.style.top = `-${scrollY}px`;
      body.style.width = '100%';
      
      return () => {
        body.style.position = '';
        body.style.top = '';
        body.style.width = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [lock]);
}