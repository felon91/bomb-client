import React, { forwardRef } from 'react';

import type { PropsWithChildren } from 'react';
import { Portal } from '@/shared/components/portal';
import { OverlayWrapper } from '@/shared/components/overlay/overlay.styled';

interface Props {
  show?: boolean;
  onClick?: () => void;
  portalRoot?: string;
}

export const OVERLAY_PORTAL_ROOT = 'overlay-portal';

export const Overlay = forwardRef<HTMLElement, PropsWithChildren<Props>>(
  ({ portalRoot = OVERLAY_PORTAL_ROOT, show, onClick, children }, ref) => {
    if (!show) {
      return null;
    }

    return (
      <Portal ref={ref} portalRoot={portalRoot}>
        <OverlayWrapper onClick={onClick} />
      </Portal>
    );
  }
);
