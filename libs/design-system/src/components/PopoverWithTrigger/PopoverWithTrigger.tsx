import { observer } from 'mobx-react'
import React, { ReactElement } from 'react'

import { Placement } from '../../types'

import { Dialog } from '../DialogTrigger/Dialog'
import { DialogTrigger } from '../DialogTrigger/DialogTrigger'

interface Props {
   renderPopoverTrigger: () => ReactElement
   renderPopoverBody: (close: () => void) => ReactElement

   placement?: Placement
   //NOTE: for this we need give style from css file to override
   popoverBodyContainerClassName?: string
   onOpenChange?: (isOpen: boolean) => void
   isOpen?: boolean
   offset?: number
   dialogTriggerClassName?: string
   shouldCloseOnBlur?: boolean
   underlayClassName?: string
}

const PopoverWithTrigger = (props: Props): ReactElement => {
   const {
      renderPopoverTrigger,
      renderPopoverBody,
      onOpenChange,
      isOpen,
      placement = 'bottom',
      popoverBodyContainerClassName,
      offset,
      dialogTriggerClassName,
      shouldCloseOnBlur,
      underlayClassName
   } = props

   return (
      <DialogTrigger
         type='popover'
         onOpenChange={onOpenChange}
         isOpen={isOpen}
         placement={placement}
         popoverBodyContainerClassName={popoverBodyContainerClassName}
         offset={offset}
         dialogTriggerClassName={dialogTriggerClassName}
         shouldCloseOnBlur={shouldCloseOnBlur}
         underlayClassName={underlayClassName}
      >
         {renderPopoverTrigger()}
         {close => <Dialog>{renderPopoverBody(close)}</Dialog>}
      </DialogTrigger>
   )
}

export default observer(PopoverWithTrigger)
