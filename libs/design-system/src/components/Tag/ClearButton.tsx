import { AriaButtonElementTypeProps, ButtonProps } from '@react-types/button'
import { useFocusableRef, useStyleProps } from '@react-spectrum/utils'
import { DOMProps, FocusableRef, StyleProps } from '@react-types/shared'
import { mergeProps } from '@react-aria/utils'
import React, { ElementType } from 'react'
import { useButton } from '@react-aria/button'
import { useHover } from '@react-aria/interactions'

import { FocusRing } from '../FocusRing'

interface ClearButtonProps<T extends ElementType = 'button'>
   extends ButtonProps,
      AriaButtonElementTypeProps<T>,
      DOMProps,
      StyleProps {
   focusClassName?: string
   variant?: 'overBackground'
   excludeFromTabOrder?: boolean
   preventFocus?: boolean
}

function ClearButton(
   props: ClearButtonProps,
   ref: FocusableRef<HTMLButtonElement>
) {
   let {
      children,
      focusClassName,
      variant,
      autoFocus,
      isDisabled,
      preventFocus,
      elementType = preventFocus ? 'div' : ('button' as ElementType),
      ...otherProps
   } = props
   let domRef = useFocusableRef(ref)
   let { buttonProps, isPressed } = useButton({ ...props, elementType }, domRef)

   let { hoverProps, isHovered } = useHover({ isDisabled })
   let { styleProps } = useStyleProps(otherProps)

   if (preventFocus) {
      delete buttonProps.tabIndex
   }

   let ElementType = elementType
   return (
      <FocusRing autoFocus={autoFocus}>
         <ElementType
            {...styleProps}
            {...mergeProps(buttonProps, hoverProps)}
            ref={domRef}
         >
            {children}
         </ElementType>
      </FocusRing>
   )
}

let _ClearButton = React.forwardRef(ClearButton)
export { _ClearButton as ClearButton }
