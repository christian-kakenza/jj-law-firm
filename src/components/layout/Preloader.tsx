'use client';

import { useEffect, useState, useRef } from 'react';

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const hiddenRef = useRef(false);

  useEffect(() => {
    const hide = () => {
      if (hiddenRef.current) return;
      hiddenRef.current = true;
      setFadeOut(true);
      setTimeout(() => setVisible(false), 500);
    };

    if (document.readyState === 'complete') {
      hide();
    } else {
      window.addEventListener('load', hide);
    }

    // Fallback: force hide after 3s if load event never fires
    const fallback = setTimeout(hide, 3000);

    return () => {
      window.removeEventListener('load', hide);
      clearTimeout(fallback);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`site-loader ${fadeOut ? 'fade-out' : ''}`}>
      <div className="preloader-spinner" />
    </div>
  );
}
