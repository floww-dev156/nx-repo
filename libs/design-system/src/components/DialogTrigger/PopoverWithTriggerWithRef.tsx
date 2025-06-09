import React from 'react'
import { useOverlayTriggerState } from '@react-stately/overlays'

import { Placement } from '../../types'
import { Popover } from '../Popover'

interface Props {
   triggerRef: any
   popoverBodyContainerClassName?: string
   popoverBody: () => React.ReactElement
   onOpenChange: (isOpen: boolean) => void
   isOpen: boolean
   placement?: Placement
   offset?: number
   popoverStyle?: React.CSSProperties
   shouldDisablePageActions?: boolean
   shouldCloseOnInteractOutside?: (element: any) => boolean
}

export const PopoverWithTriggerWithRef = (props: Props) => {
   let state = useOverlayTriggerState(props)

   return (
      <Popover
         {...props}
         triggerRef={props.triggerRef}
         state={state}
         className={props.popoverBodyContainerClassName}
         placement={props.placement}
         offset={props.offset}
         style={props.popoverStyle}
         shouldCloseOnInteractOutside={props.shouldCloseOnInteractOutside}
         shouldDisablePageActions={props.shouldDisablePageActions}
      >
         {props.popoverBody()}
      </Popover>
   )
}
