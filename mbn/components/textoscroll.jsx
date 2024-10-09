// components/ScrollText.js
import { useState, useEffect } from 'react';

const ScrollText = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowText(true);
      } else {
        setShowText(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {showText && (
        <div className="fixed bottom-4 right-4 text-2xl font-bold text-blue-600">
          ¡Aparezco cuando haces scroll!
        </div>
      )}
    </div>
  );
};

export default ScrollText;
