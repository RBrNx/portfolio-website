/* eslint-disable react/button-has-type */
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import { lighten } from 'polished';
import React, { TransitionEvent, useEffect, useState, useRef } from 'react';
import { up } from 'styled-breakpoints';
import styled, { css } from 'styled-components';
import { useScrollLock } from '../context/ScrollLock';
import CloseButton from './CloseButton';

interface ModalProps {
  onClose: React.MouseEventHandler;
  onFlipFinish: Function;
  show: boolean;
  fullscreen?: boolean;
  cardFront?: () => JSX.Element;
  cardBack: () => JSX.Element;
  style: React.CSSProperties;
}

interface ModalOverlayProps {
  show?: boolean;
  isFlipped?: boolean;
  fullscreen?: boolean;
}

const CardModal = ({
  onClose,
  onFlipFinish,
  show,
  fullscreen,
  cardFront: CardFront,
  cardBack: CardBack,
  style,
}: ModalProps) => {
  const flipperRef = useRef<HTMLDivElement>(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const { lockScroll, unlockScroll } = useScrollLock();

  useEffect(() => {
    setTimeout(() => {
      setIsFlipped(show);

      show ? lockScroll() : unlockScroll();
    }, 0);
  }, [show]);

  const handleTransformTransitionEnd = (e: TransitionEvent) => {
    if (!flipperRef.current) return;

    const { className } = flipperRef.current;
    const target = e.target as HTMLDivElement;

    if (e.propertyName === 'transform' && target.className === className) {
      onFlipFinish({ isFlipped });
    }
  };

  return (
    <>
      <ModalOverlay show={show} onClick={onClose} />
      <ModalContainer isFlipped={isFlipped} fullscreen={fullscreen} style={style}>
        <Flipper ref={flipperRef} show={show} isFlipped={isFlipped} onTransitionEnd={handleTransformTransitionEnd}>
          <CardFrontContainer>{CardFront && <CardFront />}</CardFrontContainer>
          <CardBackContainer>
            <CloseButton onClick={onClose} />
            <ScrollContainer>{CardBack && <CardBack />}</ScrollContainer>
          </CardBackContainer>
        </Flipper>
      </ModalContainer>
    </>
  );
};

const ModalOverlay = styled.div<ModalOverlayProps>`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background-color: #000;
  opacity: ${props => (props.show ? 0.7 : 0)};
  transition: opacity 1.6s;
`;

const ModalContainer = styled.div<ModalOverlayProps>`
  transition: 0.6s;
  background-color: transparent;
  position: fixed;
  perspective: 1000px;
  z-index: 100;
  ${props =>
    props.isFlipped &&
    css`
      height: 100% !important;
      width: 100% !important;
      left: 0 !important;
      top: 0 !important;
      transform: translate(0) !important;

      ${up('md')} {
        height: 90% !important;
        width: 80% !important;
        left: 50vw !important;
        top: 50vh !important;
        transform: translate(-50%, -50%) !important;
      }

      ${up('xxl')} {
        height: 80% !important;
        width: 50% !important;
        left: 50vw !important;
        top: 50vh !important;
        transform: translate(-50%, -50%) !important;
      }
    `}
  ${props =>
    props.isFlipped &&
    props.fullscreen &&
    css`
      ${up('md')} {
        height: 100% !important;
        width: 100% !important;
        left: 0 !important;
        top: 0 !important;
        transform: translate(0) !important;
      }
    `}
`;

const Flipper = styled.div<ModalOverlayProps>`
  width: 100%;
  height: 100%;
  position: relative;
  transition: 0.6s;
  z-index: 99;
  transform-style: preserve-3d;
  transform: rotate(0deg);

  ${props =>
    props.isFlipped &&
    css`
      transform: rotateY(180deg);
    `}
`;

const CardFrontContainer = styled.div`
  backface-visibility: hidden;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 100;
`;

const CardBackContainer = styled(CardFrontContainer)`
  z-index: 101;
  transform: rotateY(180deg);
  background: ${props => lighten(0.05, props.theme.background)};
  overflow: hidden;
  border-radius: 5px;
`;

const ScrollContainer = styled(OverlayScrollbarsComponent)`
  height: 100%;
`;

export default CardModal;
