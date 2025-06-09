import { DialogContext } from './context'
import {
   OverlayTriggerState,
   useOverlayTriggerState
} from '@react-stately/overlays'
import React, { Fragment, ReactElement, useEffect, useRef } from 'react'
import { useOverlay, useOverlayTrigger } from '@react-aria/overlays'

import {
   SpectrumDialogClose,
   SpectrumDialogProps,
   SpectrumDialogTriggerProps
} from '@react-types/dialog'
import { Popover } from '../Popover'
import { mergeProps } from 'react-aria'

interface DialogTriggerProps extends SpectrumDialogTriggerProps {
   dialogTriggerClassName?: string
   popoverBodyContainerClassName?: string
   underlayClassName?: string
   shouldCloseOnBlur?: boolean
   shouldDisablePageActions?: boolean
}
function DialogTrigger(props: DialogTriggerProps) {
   let {
      children,
      type = 'popover',
      mobileType = type === 'popover' ? 'modal' : type,
      hideArrow,
      targetRef,
      isDismissable,
      isKeyboardDismissDisabled,
      dialogTriggerClassName,
      popoverBodyContainerClassName,
      underlayClassName,
      shouldCloseOnBlur = false,
      ...positionProps
   } = props
   if (!Array.isArray(children) || children.length > 2) {
      throw new Error('DialogTrigger must have exactly 2 children')
   }
   let [trigger, content] = children as [ReactElement, SpectrumDialogClose]

   let state = useOverlayTriggerState(props)
   let wasOpen = useRef(false)
   useEffect(() => {
      wasOpen.current = state.isOpen
   }, [state.isOpen])

   let isExiting = useRef(false)

   // eslint-disable-next-line arrow-body-style
   useEffect(() => {
      return () => {
         if (
            (wasOpen.current || isExiting.current) &&
            type !== 'popover' &&
            type !== 'tray'
         ) {
            console.warn(
               'A DialogTrigger unmounted while open. This is likely due to being placed within a trigger that unmounts or inside a conditional. Consider using a DialogContainer instead.'
            )
         }
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])

   if (type === 'popover') {
      return shouldCloseOnBlur ? (
         <PopoverTriggerWithUseOverlay
            {...positionProps}
            state={state}
            dialogTriggerClassName={dialogTriggerClassName}
            targetRef={targetRef}
            trigger={trigger}
            content={content}
            isKeyboardDismissDisabled={isKeyboardDismissDisabled}
            hideArrow={hideArrow}
            popoverBodyContainerClassName={popoverBodyContainerClassName}
            underlayClassName={underlayClassName}
            shouldCloseOnBlur={shouldCloseOnBlur}
            shouldDisablePageActions={props.shouldDisablePageActions}
         />
      ) : (
         <PopoverTrigger
            {...positionProps}
            state={state}
            dialogTriggerClassName={dialogTriggerClassName}
            targetRef={targetRef}
            trigger={trigger}
            content={content}
            isKeyboardDismissDisabled={isKeyboardDismissDisabled}
            hideArrow={hideArrow}
            popoverBodyContainerClassName={popoverBodyContainerClassName}
            underlayClassName={underlayClassName}
            shouldDisablePageActions={props.shouldDisablePageActions}
         />
      )
   }

   return <>Not implement Yet</>
}

DialogTrigger.getCollectionNode = function* (
   props: SpectrumDialogTriggerProps
) {
   let [trigger] = props.children
   let [, content] = props.children as [ReactElement, SpectrumDialogClose]
   yield {
      element: trigger,
      wrapper: element => (
         <DialogTrigger key={element.key} {...props}>
            {element}
            {content}
         </DialogTrigger>
      )
   }
}

let _DialogTrigger = DialogTrigger as (props: DialogTriggerProps) => JSX.Element
export { _DialogTrigger as DialogTrigger }

function PopoverTrigger({
   state,
   targetRef,
   trigger,
   content,
   hideArrow,
   dialogTriggerClassName,
   popoverBodyContainerClassName,
   ...props
}) {
   let triggerRef = useRef<InstanceType<typeof HTMLElement>>(null)

   let { triggerProps, overlayProps } = useOverlayTrigger(
      { type: 'dialog' },
      state,
      triggerRef
   )

   let triggerPropsWithRef = {
      ...triggerProps,
      ref: targetRef ? undefined : triggerRef
   }

   let overlay = (
      <Popover
         {...props}
         hideArrow={hideArrow}
         triggerRef={targetRef || triggerRef}
         state={state}
         className={popoverBodyContainerClassName}
      >
         {typeof content === 'function' ? content(state.close) : content}
      </Popover>
   )

   return (
      <DialogTriggerBase
         type='popover'
         state={state}
         dialogTriggerClassName={dialogTriggerClassName}
         triggerProps={triggerPropsWithRef}
         dialogProps={overlayProps}
         trigger={trigger}
         overlay={overlay}
      />
   )
}

interface SpectrumDialogTriggerBase {
   type: 'modal' | 'popover' | 'tray' | 'fullscreen' | 'fullscreenTakeover'
   state: OverlayTriggerState
   isDismissable?: boolean
   dialogProps?: SpectrumDialogProps | {}
   triggerProps?: any
   overlay: ReactElement
   trigger: ReactElement
   dialogTriggerClassName?: string
}

function DialogTriggerBase({
   type,
   state,
   isDismissable,
   dialogProps = {},
   triggerProps = {},
   overlay,
   trigger,
   dialogTriggerClassName
}: SpectrumDialogTriggerBase) {
   let context = {
      type,
      onClose: state.close,
      isDismissable,
      ...dialogProps
   }

   return (
      <Fragment>
         <div
            {...triggerProps}
            className={dialogTriggerClassName}
            onClick={state.toggle}
            isPressed={
               state.isOpen &&
               type !== 'modal' &&
               type !== 'fullscreen' &&
               type !== 'fullscreenTakeover'
            }
         >
            {trigger}
         </div>
         <DialogContext.Provider value={context}>
            {overlay}
         </DialogContext.Provider>
      </Fragment>
   )
}

function PopoverTriggerWithUseOverlay({
   state,
   targetRef,
   trigger,
   content,
   hideArrow,
   dialogTriggerClassName,
   popoverBodyContainerClassName,
   shouldCloseOnBlur,
   ...props
}) {
   let triggerRef = useRef<InstanceType<typeof HTMLElement>>(null)

   const popoverTargetRef = useRef<InstanceType<typeof HTMLElement>>(null)

   const ariaOverlayProps = useOverlay(
      {
         isOpen: state.isOpen,
         onClose: state.close,
         shouldCloseOnBlur: shouldCloseOnBlur,
         isKeyboardDismissDisabled: shouldCloseOnBlur
      },
      popoverTargetRef
   )

   let { triggerProps, overlayProps } = useOverlayTrigger(
      { type: 'dialog' },
      state,
      triggerRef
   )

   let triggerPropsWithRef = {
      ...triggerProps,
      ref: targetRef ? undefined : triggerRef
   }

   let overlay = (
      <Popover
         {...props}
         hideArrow={hideArrow}
         triggerRef={targetRef || triggerRef}
         state={state}
         className={popoverBodyContainerClassName}
      >
         {typeof content === 'function' ? content(state.close) : content}
      </Popover>
   )

   return (
      <DialogTriggerBase
         type='popover'
         state={state}
         dialogTriggerClassName={dialogTriggerClassName}
         triggerProps={triggerPropsWithRef}
         dialogProps={mergeProps(overlayProps, ariaOverlayProps.overlayProps)}
         trigger={trigger}
         overlay={overlay}
      />
   )
}
