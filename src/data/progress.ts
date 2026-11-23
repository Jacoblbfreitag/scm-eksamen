import { useEffect, useState } from 'react';
import { load, save } from '../lib/storage';

const KEY = 'scm-progress';
type Progress = Record<string, number>; // 0..3

function read(): Progress {
  return load<Progress>(KEY, {});
}

export function useProgress(): [Progress, (id: string, v: number) => void] {
  const [p, setP] = useState<Progress>(read);
  useEffect(() => {
    const on = () => setP(read());
    window.addEventListener('scm-progress', on);
    return () => window.removeEventListener('scm-progress', on);
  }, []);
  const set = (id: string, v: number) => {
    const next = { ...read(), [id]: v };
    save(KEY, next);
    window.dispatchEvent(new Event('scm-progress'));
  };
  return [p, set];
}

export const LEVELS = ['Ikke øvet', 'Usikker', 'Næsten', 'Sidder'];
