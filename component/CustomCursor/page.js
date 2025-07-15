// components/TerminalCursor.jsx
"use client"

import { useEffect, useRef, useState, useCallback } from 'react';

const TerminalCursor = () => {
  const cursorRef = useRef(null);
  const textRef = useRef(null);
  const requestRef = useRef(null);
  
  const [command, setCommand] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const mousePosition = useRef({ x: 0, y: 0 });
  const cursorPosition = useRef({ x: 0, y: 0 });
  
  const commands = {
    link: '$ click',
    text: '$ vim',
    code: '$ code',
    copy: '$ copy',
    drag: '$ mv',
    default: '_',
  };

  const animate = useCallback(() => {
    // Ultra smooth lerp
    const ease = 0.125;
    cursorPosition.current.x += (mousePosition.current.x - cursorPosition.current.x) * ease;
    cursorPosition.current.y += (mousePosition.current.y - cursorPosition.current.y) * ease;
    
    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate3d(${cursorPosition.current.x}px, ${cursorPosition.current.y}px, 0)`;
    }
    
    requestRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseDown = () => setIsTyping(true);
    const handleMouseUp = () => setIsTyping(false);

    const detectElement = (e) => {
      const target = e.target;
      
      if (target.matches('a, button')) {
        setCommand(commands.link);
      } else if (target.matches('input, textarea')) {
        setCommand(commands.text);
      } else if (target.matches('code, pre, .hljs')) {
        setCommand(commands.code);
      } else if (target.matches('[data-cursor="copy"]')) {
        setCommand(commands.copy);
      } else if (target.matches('[data-cursor="drag"]')) {
        setCommand(commands.drag);
      } else {
        setCommand(commands.default);
      }
    };

    // Hide default cursor
    document.documentElement.style.cursor = 'none';
    
    // Start animation
    requestRef.current = requestAnimationFrame(animate);
    
    // Events
    const options = { passive: true };
    document.addEventListener('mousemove', handleMouseMove, options);
    document.addEventListener('mouseover', detectElement, options);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.documentElement.style.cursor = 'auto';
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', detectElement);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [animate]);

  if (typeof window !== 'undefined' && 'ontouchstart' in window) return null;

  return (
    <>
      <div
        ref={cursorRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          zIndex: 10000,
          fontFamily: '"SF Mono", "Monaco", "Inconsolata", "Fira Code", monospace',
          fontSize: '14px',
          fontWeight: '500',
          color: '#10b981',
          textShadow: '0 0 2px rgba(16, 185, 129, 0.5)',
          whiteSpace: 'nowrap',
          mixBlendMode: 'screen',
          transition: 'color 0.2s ease',
          ...(isTyping && {
            color: '#f59e0b',
            textShadow: '0 0 2px rgba(245, 158, 11, 0.5)',
          }),
        }}
      >
        <span ref={textRef}>
          {command}
          <span 
            style={{
              display: 'inline-block',
              width: '10px',
              height: '20px',
              backgroundColor: 'currentColor',
              marginLeft: '2px',
              animation: 'blink 1s infinite',
              verticalAlign: 'text-bottom',
            }}
          />
        </span>
      </div>

      <style jsx>{`
        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }

        :global(*) {
          cursor: none !important;
        }

        @media (hover: none) and (pointer: coarse) {
          :global(*) {
            cursor: auto !important;
          }
        }
      `}</style>
    </>
  );
};

export default TerminalCursor;