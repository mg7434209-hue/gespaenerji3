import { useState, useEffect, useRef } from 'react';

interface UseCountUpOptions {
  start?: number;
  end: number;
  duration?: number;
  delay?: number;
  suffix?: string;
}

export function useCountUp({
  start = 0,
  end,
  duration = 2000,
  delay = 0,
  suffix = '',
}: UseCountUpOptions) {
  const [count, setCount] = useState(start);
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsInView(true);
          hasAnimated.current = true;
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const timeout = setTimeout(() => {
      const startTime = Date.now();
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Ease out cubic
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentCount = Math.floor(start + (end - start) * easeOut);
        
        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isInView, start, end, duration, delay]);

  return { count: `${count}${suffix}`, ref };
}
