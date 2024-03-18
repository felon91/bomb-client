import { forwardRef, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import type { ReactNode } from 'react';
import { isServer } from '@/shared/utils/is-server';

interface Props {
  children: ReactNode;
  portalRoot?: string;
}
export const PORTAL_ROOT = 'portal-root';

export const Portal = forwardRef<HTMLElement, Props>(
  ({ children, portalRoot = PORTAL_ROOT }, ref) => {
    const rootElemRef = useRef<HTMLElement | null>(isServer ? null : document.createElement('div'));
    const [mount, setMount] = useState(false);

    useEffect(() => {
      const parentElem = document.querySelector(`#${portalRoot}`);
      const rootElem = rootElemRef.current;

      if (!parentElem || !rootElem) {
        return;
      }

      if (ref && 'current' in ref) {
        ref.current = rootElem;
      }

      parentElem.append(rootElem);

      setMount(true);

      return () => {
        rootElem.remove();
      };
    }, [portalRoot, ref]);

    return mount && rootElemRef.current ? createPortal(children, rootElemRef.current) : null;
  }
);
