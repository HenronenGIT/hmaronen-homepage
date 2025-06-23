import { useEffect, useState } from 'react';
import { COLORS, withAlpha } from '../constants/colors';

const CursorEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('button, a, [role="button"], input, textarea, select, .cursor-pointer');
      setIsHovering(!!isInteractive);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      setIsHovering(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    document.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

    const gradientSize = isHovering ? 800 : 600;
  const intensity = isHovering ? 0.25 : 0.15;

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full pointer-events-none z-30 transition-all duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        background: `radial-gradient(${gradientSize}px circle at ${mousePosition.x}px ${mousePosition.y}px,
          ${withAlpha(COLORS.primary, intensity)},
          ${withAlpha(COLORS.primary, intensity * 0.7)},
          ${withAlpha(COLORS.primary, intensity * 0.3)},
          transparent 50%)`,
        transition: 'background 0.2s ease-out',
      }}
    />
  );
};

export default CursorEffect;