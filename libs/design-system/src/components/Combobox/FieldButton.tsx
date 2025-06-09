import { ButtonProps } from '@react-types/button'
import { useFocusableRef, useSlotProps } from '@react-spectrum/utils'
import { DOMProps, FocusableRef, StyleProps } from '@react-types/shared'
import { mergeProps } from '@react-aria/utils'
import React, { RefObject } from 'react'
import { useButton } from '@react-aria/button'
import { useHover } from '@react-aria/interactions'

interface FieldButtonProps extends ButtonProps, DOMProps, StyleProps {
   isQuiet?: boolean
   isActive?: boolean
   validationState?: 'valid' | 'invalid'
   focusRingClass?: string
   className?: string
}

// @private
function FieldButton(props: FieldButtonProps, ref: FocusableRef) {
   props = useSlotProps(props, 'button')
   let { isDisabled, children } = props
   let domRef = useFocusableRef(ref) as RefObject<HTMLButtonElement>
   let { buttonProps, isPressed } = useButton(props, domRef)
   let { hoverProps, isHovered } = useHover({ isDisabled })

   return (
      <button
         className={props.className}
         {...mergeProps(buttonProps, hoverProps)}
         ref={domRef}
      >
         {children}
      </button>
   )
}

let _FieldButton = React.forwardRef(FieldButton)
export { _FieldButton as FieldButton }
