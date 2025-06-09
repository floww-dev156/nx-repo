/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import {
   AriaPopoverProps,
   DismissButton,
   usePopover
} from '@react-aria/overlays'
import cn from 'classnames'
import { useDOMRef } from '@react-spectrum/utils'
import { DOMRef, StyleProps } from '@react-types/shared'
import { OverlayTriggerState } from '@react-stately/overlays'
import React, {
   ForwardedRef,
   forwardRef,
   MutableRefObject,
   ReactNode,
   RefObject,
   useEffect,
   useRef
} from 'react'

import { useThemeContext } from '../../Theme/Provider'

import { Underlay } from './Underlay'
import { Overlay } from './Overlay'
import { getDefaultPopoverStyles } from './styles'
import { Placement } from '../../types'

import './index.css'

export type Axis = 'top' | 'bottom' | 'left' | 'right'

export type PlacementAxis = Axis

interface PopoverProps
   extends Omit<AriaPopoverProps, 'popoverRef' | 'maxHeight' | 'placement'>,
      StyleProps {
   children: ReactNode

   placement?: Placement

   hideArrow?: boolean
   state: OverlayTriggerState
   className?: string
   style?: Record<string, any>
   containerPadding?: number
   underlayClassName?: string
   shouldCloseOnInteractOutside?: (element: any) => boolean
   shouldDisablePageActions?: boolean
}

interface PopoverWrapperProps extends PopoverProps {
   isOpen?: boolean
   wrapperRef: RefObject<HTMLDivElement>
}

function Popover(props: PopoverProps, ref: DOMRef<HTMLDivElement>) {
   let { children, state, ...otherProps } = props
   let domRef = useDOMRef(ref)
   let wrapperRef = useRef<HTMLDivElement>(null)

   return (
      <Overlay {...otherProps} isOpen={state.isOpen} nodeRef={wrapperRef}>
         <PopoverWrapper ref={domRef} {...props} wrapperRef={wrapperRef}>
            {children}
         </PopoverWrapper>
      </Overlay>
   )
}

const PopoverWrapper = forwardRef(
   (props: PopoverWrapperProps, ref: ForwardedRef<HTMLDivElement>) => {
      let {
         children,
         isOpen,
         isNonModal,
         state,
         wrapperRef,
         className = '',
         style,
         underlayClassName,
         shouldCloseOnInteractOutside
      } = props

      const { theme, colorScheme } = useThemeContext()
      const coloredTheme = theme[colorScheme]

      let { popoverProps, underlayProps, placement } = usePopover(
         {
            ...props,
            popoverRef: ref as RefObject<HTMLDivElement>,
            maxHeight: undefined,
            triggerRef: props.triggerRef,
            placement: props.placement,
            //@ts-ignore
            shouldCloseOnInteractOutside
         },
         state
      )

      // Attach Transition's nodeRef to outer most wrapper for node.reflow: https://github.com/reactjs/react-transition-group/blob/c89f807067b32eea6f68fd6c622190d88ced82e2/src/Transition.js#L231
      return (
         <div ref={wrapperRef}>
            {!isNonModal && (
               <Underlay
                  isTransparent
                  {...underlayProps}
                  underlayClassName={underlayClassName}
                  isOpen={isOpen}
                  shouldDisablePageActions={props.shouldDisablePageActions}
               />
            )}
            <div
               {...popoverProps}
               ref={ref}
               style={{
                  ...popoverProps.style,
                  ...style
               }}
               role='presentation'
               data-testid='popover'
               className={cn(
                  getDefaultPopoverStyles(coloredTheme),
                  className,
                  'popover-animation',
                  `popover-animation--${placement}`,
                  `popover-scrollbar`,
                  {
                     'is-open': isOpen
                  }
               )}
            >
               {!isNonModal && <DismissButton onDismiss={state.close} />}
               {children}
               <DismissButton onDismiss={state.close} />
            </div>
         </div>
      )
   }
)

let _Popover = forwardRef(Popover)
export { _Popover as Popover }
