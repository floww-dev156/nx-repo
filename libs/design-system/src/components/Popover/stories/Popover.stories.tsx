import React, { useRef, useState } from 'react'

import { useOverlayTriggerState } from '@react-stately/overlays'
import { addParameters } from '@storybook/react'

import { ThemeContextProvider } from '../../../Theme/Provider'
import { defaultTheme } from '../../../Theme/theme'

import { Popover } from '../index'

const instruction =
   'Go through this Component Guide to get to know about ths Popover Component'
addParameters({ notes: instruction })

export default {
   component: Popover,
   title: 'un-published/components/Popover'
}

export const DefaultPopover = () => {
   const [isOpen, setIsOpen] = useState(false)

   let triggerRef = React.useRef(null)
   let state = useOverlayTriggerState({ isOpen: isOpen })

   return (
      <>
         <button ref={triggerRef} onClick={() => setIsOpen(!isOpen)}>
            trigger
         </button>
         <ThemeContextProvider theme={defaultTheme}>
            <Popover
               state={state}
               triggerRef={triggerRef}
               placement='bottom start'
               hideArrow={true}
            >
               Lorem Ipsum is simply dummy text of the printing
            </Popover>
         </ThemeContextProvider>
      </>
   )
}
