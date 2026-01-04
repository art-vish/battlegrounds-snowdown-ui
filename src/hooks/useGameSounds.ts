import { useCallback, useRef, useEffect } from 'react';

// Sound URLs - using free sound effects
const SNIPER_SOUND_URL = 'https://assets.mixkit.co/active_storage/sfx/2771/2771-preview.mp3';
const EXPLOSION_SOUND_URL = 'https://assets.mixkit.co/active_storage/sfx/2803/2803-preview.mp3';

export const useGameSounds = () => {
  const sniperAudioRef = useRef<HTMLAudioElement | null>(null);
  const explosionAudioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Preload sounds
    sniperAudioRef.current = new Audio(SNIPER_SOUND_URL);
    sniperAudioRef.current.volume = 0.5;
    
    explosionAudioRef.current = new Audio(EXPLOSION_SOUND_URL);
    explosionAudioRef.current.volume = 0.5;

    return () => {
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

  return { playSniperSound, playExplosionSound };
};
