import cn from 'classnames';
import React, { PropsWithChildren, useEffect, useState } from 'react';
import ReactModal from 'react-modal';

import useButtonEvents from '../../hooks/useButtonEvents';

import * as Styles from './BottomSheet.styled';
import { OVERLAY_TARGET_EVENT_ID } from './BottomSheetConstants';
import useDragToBottomWithParent from './useDraggableBottomSheet';
import { XCircleIcon } from '@nx-repo/design-system-icons';
import { colors } from '../../style-guide';

const FALL_BACK_BG_IMAGE = '/assets/Images/gameThemeBgBanner.png';

interface ClassNameProps {
  containerClassName?: string;
  contentClassName?: string;
  overlayClassName?: string;
}

interface Props extends ClassNameProps, PropsWithChildren {
  isOpen: boolean;
  isDraggable?: boolean;

  backgroundImage?: string;
  childContainerId?: string;
  parentElId?: string;
  shouldCloseOnOverlayClick?: boolean;
  themeVariant?: 'BASE' | 'GAME';

  onAfterClose?: () => void;
  onRequestClose?: () => void;
  closeBtnGTMTagId?: string;
}

const BottomSheet = (props: Props): React.ReactElement => {
  const {
    isOpen,

    backgroundImage = FALL_BACK_BG_IMAGE,
    childContainerId,
    parentElId = 'non-mobile-view-container',
    shouldCloseOnOverlayClick,
    themeVariant = 'BASE',
    isDraggable = false,

    closeBtnGTMTagId,
    onAfterClose,
    onRequestClose,

    containerClassName,
    contentClassName,
    overlayClassName,

    children,
  } = props;

  const [isInitialMount, setIsInitialMount] = useState<boolean>(true);
  const animatedChildStyles = isOpen
    ? 'open-bottom-sheet-animation'
    : 'close-bottom-sheet-animation';

  const parentElement: HTMLElement | null = parentElId
    ? document.getElementById(parentElId)
    : null;

  const onClose = (
    e: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>
  ) => {
    e.stopPropagation();
    onRequestClose && onRequestClose();
  };
  const { handlePointerDown, handlePointerUp } = useButtonEvents(onClose);

  const {
    bottomSheetBottomValue,
    bottomSheetCustomRef,
    isDragging,

    handlePointerMove,
    handleTouchMove,

    handleDragPointerDown,
    handleTouchStart,
    handleEventRelease,
  } = useDragToBottomWithParent(isOpen, () => onRequestClose?.());

  useEffect(() => {
    if (isInitialMount) {
      setIsInitialMount(false);
    }
  }, []);

  const renderGameThemeVariantCloseIcon = (): React.ReactElement | null =>
    onRequestClose ? (
      <div
        className={Styles.gameThemeVariantCloseIconStyles}
        onClick={onRequestClose}
        id={closeBtnGTMTagId}
      >
        <XCircleIcon height={24} width={24} fill={colors['gray-500']} />
      </div>
    ) : null;

  const renderGameModal = (): React.ReactElement => (
    <div
      className={cn(Styles.gameModeChildContainerStyles, animatedChildStyles)}
    >
      {renderGameThemeVariantCloseIcon()}

      <div
        className={cn(
          Styles.gameModalChildStyles,
          'game-bottom-sheet-child-styles',
          containerClassName
        )}
        id={childContainerId}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {children}
      </div>
    </div>
  );

  const renderBaseModal = (): React.ReactElement => (
    <div
      className={cn(
        Styles.baseModalChildStyles,
        animatedChildStyles,
        containerClassName
      )}
      id={childContainerId}
    >
      {children}
    </div>
  );

  const renderChildren = (): React.ReactElement => {
    switch (themeVariant) {
      case 'BASE':
        return renderBaseModal();

      case 'GAME':
        return renderGameModal();
    }
  };

  const draggableChildrenPointerUp = (event: any): void => {
    event.preventDefault();
    event.stopPropagation();
    if (isDragging) {
      handleEventRelease(event); //Used for quick bottom sheet close
    }
  };

  const renderDraggableChildren = (): React.ReactElement => (
    <div
      className={Styles.childrenContainerStyles}
      onPointerDown={(event) => event.stopPropagation()}
      onPointerUp={draggableChildrenPointerUp}
    >
      {renderChildren()}
    </div>
  );

  const renderDragHandler = (): React.ReactElement => (
    <div
      onPointerDown={handleDragPointerDown}
      onTouchStart={handleTouchStart}
      onPointerUp={handleEventRelease}
      onTouchEnd={handleEventRelease}
      className={'text-white text-center select-none'}
    >
      Drag
    </div>
  );

  const renderDragBottomSheetContent = (): React.ReactElement => (
    <div
      ref={bottomSheetCustomRef}
      style={{
        position: 'absolute',
        bottom: isInitialMount ? 0 : bottomSheetBottomValue,
        transition: isDragging ? 'none' : 'bottom 0.3s ease-out',
        width: '100%',
      }}
      className={cn(animatedChildStyles, Styles.bottomSheetContentStyles)}
      onPointerDown={(event) => event.stopPropagation()}
      onPointerUp={(event) => event.stopPropagation()}
    >
      {renderDragHandler()}
      {renderDraggableChildren()}
    </div>
  );

  const renderDraggableBottomSheet = (): React.ReactElement => (
    <div
      style={{
        position: 'relative',
        overflow: 'hidden',
        height: '100%',
        cursor: 'grab',
        transition: isDragging ? 'none' : 'bottom 0.3s ease-out',
      }}
      className={Styles.bottomSheetDraggableContainerStyles}
      onPointerDown={(event) => {
        handlePointerDown(event, OVERLAY_TARGET_EVENT_ID);
      }}
      onPointerUp={(event) => {
        handlePointerUp(event, OVERLAY_TARGET_EVENT_ID);
      }}
      onPointerMove={handlePointerMove}
      onTouchMove={handleTouchMove}
    >
      {renderDragBottomSheetContent()}
    </div>
  );

  return (
    <ReactModal
      isOpen={isOpen}
      ariaHideApp={false}
      className={cn(
        Styles.contentStyles,
        contentClassName,
        isDraggable ? 'h-full' : ''
      )}
      closeTimeoutMS={100} //TODO: Getting ui glitch when we set this value >= 300
      overlayClassName={cn(
        `bottom-sheet-overlay-styles`,
        Styles.overlayStyles,
        overlayClassName
      )}
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
      onAfterClose={onAfterClose}
      onRequestClose={onClose}
      parentSelector={() => (parentElement ? parentElement : document.body)}
    >
      {isDraggable ? renderDraggableBottomSheet() : renderChildren()}
    </ReactModal>
  );
};

export default BottomSheet;
