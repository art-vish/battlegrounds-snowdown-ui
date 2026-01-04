import { useCallback, useRef, useEffect, useState } from 'react';

// Sound URLs - using free sound effects
const SNIPER_SOUND_URL = 'https://assets.mixkit.co/active_storage/sfx/2771/2771-preview.mp3';
const EXPLOSION_SOUND_URL = 'https://assets.mixkit.co/active_storage/sfx/2803/2803-preview.mp3';
// Background music - using a free gaming music track
const BACKGROUND_MUSIC_URL = 'https://assets.mixkit.co/music/preview/mixkit-game-show-987.mp3';

export const useGameSounds = () => {
  const sniperAudioRef = useRef<HTMLAudioElement | null>(null);
  const explosionAudioRef = useRef<HTMLAudioElement | null>(null);
  const backgroundMusicRef = useRef<HTMLAudioElement | null>(null);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  useEffect(() => {
    // Preload sounds
    sniperAudioRef.current = new Audio(SNIPER_SOUND_URL);
    sniperAudioRef.current.volume = 0.5;
    
    explosionAudioRef.current = new Audio(EXPLOSION_SOUND_URL);
    explosionAudioRef.current.volume = 0.5;

    backgroundMusicRef.current = new Audio(BACKGROUND_MUSIC_URL);
    backgroundMusicRef.current.volume = 0.3;
    backgroundMusicRef.current.loop = true;

    return () => {
      if (backgroundMusicRef.current) {
        backgroundMusicRef.current.pause();
        backgroundMusicRef.current = null;
      }
      sniperAudioRef.current = null;
      explosionAudioRef.current = null;
    };
  }, []);

  const playSniperSound = useCallback(() => {
    if (sniperAudioRef.current) {
      sniperAudioRef.current.currentTime = 0;
      sniperAudioRef.current.play().catch(() => {
        // Autoplay might be blocked
        console.log('Sound blocked by browser');
      });
    }
  }, []);

  const playExplosionSound = useCallback(() => {
    if (explosionAudioRef.current) {
      explosionAudioRef.current.currentTime = 0;
      explosionAudioRef.current.play().catch(() => {
        console.log('Sound blocked by browser');
      });
    }
  }, []);

  const toggleBackgroundMusic = useCallback(() => {
    if (!backgroundMusicRef.current) return;

    if (isMusicPlaying) {
      backgroundMusicRef.current.pause();
      setIsMusicPlaying(false);
    } else {
      backgroundMusicRef.current.play().catch(() => {
        console.log('Music autoplay blocked by browser');
      });
      setIsMusicPlaying(true);
    }
  }, [isMusicPlaying]);

  return { 
    playSniperSound, 
    playExplosionSound, 
    toggleBackgroundMusic, 
    isMusicPlaying 
  };
};
