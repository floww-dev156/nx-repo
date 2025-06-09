import { observer } from 'mobx-react';
import React, { Component } from 'react';
import ReactModal from 'react-modal';

import { CloseIcon } from '@nx-repo/design-system-icons';
import { colors } from '@nx-repo/shared-style-guide';
import { isMobile as isMobileDevice } from 'react-device-detect';

import { MODAL_BACKGROUND_NO_SCROLL_CLASSNAME } from './constants';
import './styles.css';

export interface ReactBaseModalContainerProps {
  hideCloseIcon?: boolean;
  onClickCloseIcon?: (event?: React.MouseEvent | React.KeyboardEvent) => void;
  shouldCloseOnOverlayClick?: boolean;
  onModalOpen?: () => void;
  onAfterClose?: () => void;
  customCloseIcon?: (closeIconProps) => React.ReactElement;
  shouldRenderCloseIcon?: boolean;

  [x: string]: any;
}

// TODO: add callbacks for open

const ReactBaseModalContainer = observer(
  class ReactBaseModalContainer extends Component<ReactBaseModalContainerProps> {
    static defaultProps: any = {
      hideCloseIcon: false,
      closeIconProps: {},
      shouldRenderCloseIcon: true,
      shouldCloseOnOverlayClick: true,
    };

    UNSAFE_componentWillMount() {
      ReactModal.setAppElement('body');
    }

    onModalOpen = (): void => {
      const { onModalOpen } = this.props;

      onModalOpen && onModalOpen();
      document.body.classList.add(MODAL_BACKGROUND_NO_SCROLL_CLASSNAME);
    };

    onModalClose = (): void => {
      document.body.classList.remove(MODAL_BACKGROUND_NO_SCROLL_CLASSNAME);
      this.props?.onAfterClose?.();
    };

    onRequestClose = (): void => {
      const { onClickCloseIcon, onRequestClose } = this.props;
      onClickCloseIcon && onClickCloseIcon();
      onRequestClose && onRequestClose();
    };

    getAnimatedChildClassName = (): string => {
      const { isOpen } = this.props;

      const zoomAnimationName = isOpen
          ? 'open-modal-with-zoom'
          : 'close-modal-with-zoom',
        slideAnimationName = isOpen
          ? 'open-modal-with-slide'
          : 'close-modal-with-slide';

      return isMobileDevice ? slideAnimationName : zoomAnimationName;
    };

    getAnimatedOverlayClassName = (): string => {
      const { isOpen } = this.props;

      const animationName = isOpen
        ? 'open-modal-overlay-with-animation'
        : 'close-modal-overlay-with-animation';

      return animationName;
    };

    render(): React.ReactNode {
      const {
        children,
        hideCloseIcon,
        onClickCloseIcon,
        closeIconClass,
        closeIconProps,
        shouldCloseOnOverlayClick,
        isOpen,
        className,
        overlayClassName,
        customCloseIcon,
        ...other
      } = this.props;

      return (
        <ReactModal
          // NOTE: `closeTimeoutMS` should always be less than the close animation's `duration` value
          closeTimeoutMS={150}
          onAfterOpen={this.onModalOpen}
          onAfterClose={this.onModalClose}
          onRequestClose={onClickCloseIcon}
          shouldCloseOnEsc={true}
          shouldFocusAfterRender={true}
          shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
          {...other}
          isOpen={isOpen}
          className={`${className} modal-animation-properties ${this.getAnimatedChildClassName()}`}
          overlayClassName={`${overlayClassName} modal-animation-properties ${this.getAnimatedOverlayClassName()}`}
        >
          {hideCloseIcon ? null : (
            <div
              className={`${closeIconClass} react-base-modal-close-icon-wrapper`}
              onClick={this.onRequestClose}
            >
              {this.props.shouldRenderCloseIcon ? (
                customCloseIcon ? (
                  customCloseIcon(closeIconProps)
                ) : (
                  <CloseIcon fill={colors['gray-400']} {...closeIconProps} />
                )
              ) : null}
            </div>
          )}
          {children}
        </ReactModal>
      );
    }
  }
);

export { ReactBaseModalContainer };
