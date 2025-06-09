import React, {
   ForwardedRef,
   forwardRef,
   HTMLAttributes,
   ReactNode
} from 'react'
import { TrayProps as TrayPropTypes } from '@react-types/overlays'
import { useModal, useOverlay, usePreventScroll } from '@react-aria/overlays'
import { useDOMRef, useStyleProps } from '@react-spectrum/utils'
import { DOMRef } from '@react-types/shared'
import { mergeProps } from '@react-aria/utils'
import cn from 'classnames'

import { Underlay } from './Underlay'
import { Overlay } from './Overlay'
import './styles.css'

interface TrayWrapperProps extends HTMLAttributes<HTMLElement> {
   children: ReactNode
   isOpen?: boolean
   onClose?: () => void
   isFixedHeight?: boolean
   isNonModal?: boolean
   overlayProps: HTMLAttributes<HTMLElement>
   label?: string
   isSearchable?: boolean
   trayContainerClassName?: string
   trayChildrenWrapperClassName?: string
}

export interface TrayProps extends TrayPropTypes {
   label?: string
   isSearchable?: boolean
   trayContainerClassName?: string
   trayChildrenWrapperClassName?: string
}

function Tray(props: TrayProps, ref: DOMRef<HTMLDivElement>) {
   const {
      children,
      onClose,
      isFixedHeight,
      isNonModal,
      label,
      isSearchable,
      trayChildrenWrapperClassName,
      trayContainerClassName,
      ...otherProps
   } = props
   const domRef = useDOMRef(ref)
   const { styleProps } = useStyleProps(props)

   const { overlayProps, underlayProps } = useOverlay(
      { ...props, isDismissable: true },
      domRef
   )

   return (
      <Overlay
         nodeRef={domRef as React.MutableRefObject<HTMLElement>}
         {...otherProps}
      >
         <Underlay {...underlayProps} />
         <TrayWrapper
            {...styleProps}
            onClose={onClose}
            isSearchable={isSearchable}
            ref={domRef}
            overlayProps={overlayProps}
            isFixedHeight={isFixedHeight}
            isNonModal={isNonModal}
            label={label}
            trayChildrenWrapperClassName={trayChildrenWrapperClassName}
            trayContainerClassName={trayContainerClassName}
         >
            {children}
         </TrayWrapper>
      </Overlay>
   )
}

const TrayWrapper = forwardRef(function (
   props: TrayWrapperProps,
   ref: ForwardedRef<HTMLDivElement>
) {
   const {
      children,
      isOpen,
      isFixedHeight,
      isNonModal,
      overlayProps,
      label,
      isSearchable = true,
      trayContainerClassName,
      trayChildrenWrapperClassName,
      ...otherProps
   } = props
   usePreventScroll()
   const { modalProps } = useModal({
      isDisabled: isNonModal
   })

   const domProps = mergeProps(otherProps, overlayProps)

   return (
      <div
         className={cn(
            'fixed inset-0 flex flex-col-reverse bg-gray-600 bg-opacity-80 z-l10 w-full',
            { 'fade-in-class': isOpen },
            { 'fade-out-class': !isOpen },
            trayContainerClassName,
            'tray-container-class-name'
         )}
         id={`tray-container`}
      >
         <div
            {...domProps}
            {...modalProps}
            ref={ref}
            data-testid='tray'
            className={cn(
               'bg-base-white relative w-full flex flex-col rounded-t-16px spectrum-tray',
               isSearchable
                  ? 'searchable-spectrum-tray-height'
                  : 'default-spectrum-tray-height',
               { 'is-open': isOpen },
               trayChildrenWrapperClassName
            )}
         >
            {children}
         </div>
      </div>
   )
})

const _Tray = forwardRef(Tray)
export { _Tray as Tray }
