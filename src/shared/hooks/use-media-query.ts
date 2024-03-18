import { useEffect, useState } from 'react';
import { isServer } from '@/shared/utils/is-server';

export const useMediaQuery = (query: string) => {
  const [state, setState] = useState<boolean>(() => !isServer && window.matchMedia(query).matches);

  useEffect(() => {
    let mounted = true;
    const mql = window.matchMedia(query);
    const onChange = () => {
      if (!mounted) {
        return;
      }

      setState(mql.matches);
    };

    mql.addEventListener('change', onChange);

    return () => {
      mounted = false;
      mql.removeEventListener('change', onChange);
    };
  }, [query]);

  return state;
};
