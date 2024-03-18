import React, { forwardRef, useCallback, useEffect, useRef, useState } from 'react';

import type { ReactNode } from 'react';
import { Portal } from '@/shared/components/portal';
import { Overlay } from '@/shared/components/overlay/overlay';
import { PopupClose, PopupContainer, PopupWrap } from './popup.styled';
import { ReactComponent as Close } from './img/close.svg';

export interface UsePopupStates {
  isOpen: boolean;
}

export interface UsePopupActions {
  open: () => void;
  close: () => void;
}

export const usePopup = (): [UsePopupStates, UsePopupActions] => {
  const [isOpen, setOpen] = useState(false);

  const open = useCallback(() => {
    setOpen(true);
  }, []);
  const close = useCallback(() => setOpen(false), []);

  return [{ isOpen }, { open, close }];
};

export interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
  type?: 'default' | 'video';
}

export const Popup = forwardRef<HTMLElement, PopupProps>((props, ref) => {
  const { children, isOpen, onClose, type } = props;
  const parentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && parentRef.current) {
      parentRef.current.focus();
    }
  }, [isOpen, parentRef]);

  if (!isOpen) {
    return null;
  }

  return (
    <Portal ref={ref}>
      <Overlay show={isOpen} onClick={onClose} />
      <PopupContainer type={type}>
        <PopupWrap type={type}>
          {children}
          <PopupClose closePosition={type} onClick={onClose}>
            <Close />
          </PopupClose>
        </PopupWrap>
      </PopupContainer>
    </Portal>
  );
});
