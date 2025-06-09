import { theme } from '@react-spectrum/theme-default'
import { OverlayProps } from '@react-types/overlays'
import { DOMRef } from '@react-types/shared'
import React, { useCallback, useState } from 'react'
import * as ReactDOM from 'react-dom'

import { OpenTransition } from './OpenTransition'
import { Provider } from './Provider'

function Overlay(props: OverlayProps, ref: DOMRef<HTMLDivElement>) {
   let {
      children,
      isOpen,
      container,
      onEnter,
      onEntering,
      onEntered,
      onExit,
      onExiting,
      onExited
   } = props
   let [exited, setExited] = useState(!isOpen)

   let handleEntered = useCallback(() => {
      setExited(false)
      if (onEntered) {
         onEntered()
      }
   }, [onEntered])

   let handleExited = useCallback(() => {
      setExited(true)
      if (onExited) {
         onExited()
      }
   }, [onExited])

   let mountOverlay = isOpen || !exited
   if (!mountOverlay) {
      return null
   }

   let contents = (
      <Provider
         ref={ref}
         UNSAFE_style={{ background: 'transparent', isolation: 'isolate' }}
         theme={theme}
      >
         <OpenTransition
            in={isOpen}
            appear
            onExit={onExit}
            onExiting={onExiting}
            onExited={handleExited}
            onEnter={onEnter}
            onEntering={onEntering}
            onEntered={handleEntered}
         >
            {children}
         </OpenTransition>
      </Provider>
   )

   return ReactDOM.createPortal(contents, container || document.body)
}

let _Overlay = React.forwardRef(Overlay)
export { _Overlay as Overlay }
