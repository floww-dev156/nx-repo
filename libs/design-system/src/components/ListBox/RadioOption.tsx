import React from 'react'
import cn from 'classnames'
import { VisuallyHidden, useFocus, useFocusWithin, useHover } from 'react-aria'

import { RadioProps } from '../RadioGroup'
import { useThemeContext } from '../../Theme/Provider'
import {
   getRadioButtonContainerStyles,
   getRadioButtonLabelClass,
   getSelectedRadioButtonColors,
   getSimpleRadioLabelStyles,
   getUnSelectedRadioButtonColors,
   radioContainerStyles
} from '../RadioGroup/styles'
import { FocusRing } from '../FocusRing'
import { RadioSelectedIcon } from '../../icons/RadioSelectedIcon'
import { RadioUnSelectedIcon } from '../../icons/RadioUnSelectedIcon'
import { sizes } from '../RadioGroup/sizes'

interface RadioOptionProps extends RadioProps {
   isSelected: boolean
}

export function RadioOption(props: RadioOptionProps) {
   let {
      children,
      isSelected,
      size = 'Small',
      isDisabled,
      autoFocus,
      className,
      hiddenInputClassName
   } = props

   let ref = React.useRef(null)
   const [isFocusWithin, setFocusWithin] = React.useState(false)
   const { focusWithinProps } = useFocusWithin({
      isDisabled,
      onFocusWithinChange: isFocusWithin => setFocusWithin(isFocusWithin)
   })
   const { focusProps } = useFocus({
      onBlur: () => {},
      onFocusChange: isFocusWithin => setFocusWithin(isFocusWithin)
   })
   const { hoverProps, isHovered } = useHover({ isDisabled })

   const { theme, colorScheme } = useThemeContext()
   const colorTheme = theme[colorScheme]

   const { borderColor, bgColor, dotColor } = isSelected
      ? getSelectedRadioButtonColors(
           {
              isHovered,
              isDisabled,
              isFocused: isFocusWithin
           },
           colorTheme
        )
      : getUnSelectedRadioButtonColors(
           {
              isHovered,
              isDisabled,
              isFocused: isFocusWithin
           },
           colorTheme
        )

   const renderRadioButton = () => {
      return (
         <FocusRing autoFocus={autoFocus}>
            <div
               {...focusProps}
               {...focusWithinProps}
               {...hoverProps}
               className={getRadioButtonContainerStyles(size, isDisabled)}
            >
               {isSelected ? (
                  <RadioSelectedIcon
                     borderColor={borderColor}
                     dotColor={dotColor}
                     bgColor={bgColor}
                     height={sizes[size].icon.height}
                     width={sizes[size].icon.width}
                  />
               ) : (
                  <RadioUnSelectedIcon
                     borderColor={borderColor}
                     bgColor={bgColor}
                     height={sizes[size].icon.height}
                     width={sizes[size].icon.width}
                  />
               )}
            </div>
         </FocusRing>
      )
   }

   const renderRadioWithChild = () => {
      return (
         <div className={cn(radioContainerStyles, className)}>
            <VisuallyHidden className={hiddenInputClassName}>
               <input ref={ref} />
            </VisuallyHidden>
            {renderRadioButton()}
            <div className={cn(getRadioButtonLabelClass(colorTheme))}>
               {children}
            </div>
         </div>
      )
   }

   const renderSimpleRadioOption = () => {
      const simpleRadioLabelClass = getSimpleRadioLabelStyles(isDisabled)
      return (
         <div className={`w-full ${simpleRadioLabelClass}`} {...hoverProps}>
            {renderRadioWithChild()}
         </div>
      )
   }

   return renderSimpleRadioOption()
}
