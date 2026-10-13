import React, { useEffect, useState } from 'react';
import './Brand.css';

const ORBIT = 'M51 32 A19 19 0 1 1 13 32 A19 19 0 1 1 51 32';

/**
 * Yörünge işareti: mavi C ve ağzında turuncu O.
 * animate=true iken O, C'nin yayında döner (yükleme animasyonu).
 */
export default function OrbitMark({ size = 96, animate = false, title = 'Ömer Çetinadam' }) {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia?.('(prefers-reduced-motion: reduce)');
    if (!mq) return undefined;
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener?.('change', update);
    return () => mq.removeEventListener?.('change', update);
  }, []);

  const moving = animate && !reduced;

  return (
    <svg
      className="brand-mark"
      width={size}
      height={size}
      viewBox="0 0 64 64"
      role="img"
      aria-label={title}
    >
      <path
        d="M47 20 A19 19 0 1 0 47 44"
        fill="none"
        stroke="var(--primary-color, #207adb)"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <circle cx={moving ? 0 : 51} cy={moving ? 0 : 32} r="6.5" fill="var(--secondary-color, #fc9028)">
        {moving && (
          <animateMotion dur="1.4s" repeatCount="indefinite" path={ORBIT} calcMode="spline" keySplines="0.45 0 0.55 1" keyTimes="0;1" />
        )}
      </circle>
    </svg>
  );
}
