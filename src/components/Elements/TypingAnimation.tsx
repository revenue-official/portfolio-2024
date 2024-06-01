'use client';

import React, { useState, useEffect } from 'react';

interface TypingAnimationProps {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayAfterTyping?: number;
  delayAfterDeleting?: number;
  nonDeletableIndices?: number[];
  className?: string;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({
  phrases,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayAfterTyping = 2000,
  delayAfterDeleting = 3000,
  nonDeletableIndices = [0],
  className = '',
}) => {
  // Salin phrases ke initialPhrases untuk menyimpan kondisi awal
  const [initialPhrases, setInitialPhrases] = useState<string[]>([...phrases]);

  const [text, setText] = useState<string>('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [fixedText, setFixedText] = useState<string>('');
  const [showCursor, setShowCursor] = useState<boolean>(true);
  const [hasCompleted, setHasCompleted] = useState<boolean>(false);

  // Efek pengetikan
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const currentPhrase = initialPhrases[currentPhraseIndex];

    // Jika tidak sedang menghapus
    if (!isDeleting) {
      if (text.length < currentPhrase.length) {
        // Ketik setiap huruf dari frase
        timeoutId = setTimeout(() => {
          setText(text + currentPhrase.charAt(text.length));
        }, typingSpeed);
      } else {
        // Jika frase telah selesai diketik
        if (nonDeletableIndices.includes(currentPhraseIndex)) {
          // Jika frase tidak boleh dihapus, simpan ke state
          setFixedText(fixedText + text);
          setText('');
          // Setelah dijalankan 1x, kosongkan initialPhrases di indeks ini
          initialPhrases[currentPhraseIndex] = '';
          setCurrentPhraseIndex((currentPhraseIndex + 1) % initialPhrases.length);
        } else {
          // Jika frase boleh dihapus, tunggu delay lalu mulai menghapus
          timeoutId = setTimeout(() => {
            setIsDeleting(true);
          }, delayAfterTyping);
        }
      }
    } else {
      // Menghapus huruf dari belakang ke depan
      if (text.length > 0) {
        timeoutId = setTimeout(() => {
          setText(text.slice(0, -1));
        }, deletingSpeed);
      } else {
        // Selesai menghapus, lanjutkan ke frase berikutnya
        setIsDeleting(false);
        setCurrentPhraseIndex((currentPhraseIndex + 1) % initialPhrases.length);
        if (currentPhraseIndex === initialPhrases.length - 1) {
          setHasCompleted(true);
        }
      }
    }

    return () => clearTimeout(timeoutId);
  }, [
    text,
    isDeleting,
    currentPhraseIndex,
    initialPhrases,
    typingSpeed,
    deletingSpeed,
    delayAfterTyping,
    delayAfterDeleting,
    nonDeletableIndices,
    fixedText,
    hasCompleted,
  ]);

  // Efek berkedip garis kursor
  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowCursor((prevShowCursor) => !prevShowCursor);
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  // Menampilkan garis berkedip jika showCursor true
  const cursor = showCursor ? '|' : '';

  return <span className={className}>{fixedText + text + cursor}</span>;
};

export default TypingAnimation;
