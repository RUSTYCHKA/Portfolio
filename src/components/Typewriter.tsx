import { useEffect, useState } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface TypewriterProps {
  /** Передавайте стабильный массив (не создавайте его заново на каждый рендер) */
  words: string[];
}

export function Typewriter({ words }: TypewriterProps) {
  const reduced = useReducedMotion();
  const [text, setText] = useState(words[0] ?? '');

  useEffect(() => {
    if (reduced || words.length === 0) {
      setText(words[0] ?? '');
      return;
    }

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timer = 0;

    const tick = () => {
      const word = words[wordIndex];
      if (!deleting) {
        charIndex += 1;
        setText(word.slice(0, charIndex));
        if (charIndex === word.length) {
          deleting = true;
          timer = window.setTimeout(tick, 1700);
          return;
        }
        timer = window.setTimeout(tick, 55);
      } else {
        charIndex -= 1;
        setText(word.slice(0, charIndex));
        if (charIndex === 0) {
          deleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          timer = window.setTimeout(tick, 350);
          return;
        }
        timer = window.setTimeout(tick, 28);
      }
    };

    setText('');
    timer = window.setTimeout(tick, 1100);
    return () => window.clearTimeout(timer);
  }, [words, reduced]);

  return (
    <>
      <span className="sr-only">{words.join(', ')}</span>
      <span className="typed" aria-hidden="true">
        {text}
        <span className="caret" />
      </span>
    </>
  );
}
