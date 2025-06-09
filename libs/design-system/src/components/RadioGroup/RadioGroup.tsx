import React, { ReactNode } from 'react'
import cn from 'classnames'
import { useRadioGroupState } from '@react-stately/radio'
import { AriaRadioProps, AriaRadioGroupProps } from '@react-types/radio'
import { useId } from '@react-aria/utils'

import { useRadioGroup, useRadio } from '@react-aria/radio'
import { VisuallyHidden } from '@react-aria/visually-hidden'
import { useHover, useFocus, useFocusWithin } from '@react-aria/interactions'

import { RadioSelectedIcon } from '../../icons/RadioSelectedIcon'
import { RadioUnSelectedIcon } from '../../icons/RadioUnSelectedIcon'
import { useThemeContext } from '../../Theme/Provider'
import { SmallAndMedium } from '../../types'

import { FocusRing } from '../FocusRing'
import { Hint } from '../Hint'
import { Label } from '../Label'
import {
   getUnSelectedRadioButtonColors,
   getSelectedRadioButtonColors,
   getSimpleRadioLabelStyles,
   getRadioButtonContainerStyles,
   getRadioButtonLabelClass,
   getStylesBasedOnAxis,
   radioContainerStyles,
   radioLabelContainerClassName,
   clearButtonClassName
} from './styles'
import { sizes } from './sizes'
import { Axis } from './types'
import { Button, Hierarchy, SubVariant } from '../Button'

let RadioContext = React.createContext(null)

interface ParentPropsType {
   hint?: React.ReactNode
   error?: React.ReactNode
   size: SmallAndMedium
}

export interface RadioGroupProps extends AriaRadioGroupProps {
   children: ReactNode
   onChange: (value: string) => void
   className?: string

   hint?: React.ReactNode
   error?: React.ReactNode
   isRequired?: boolean
   containerClassName?: string
   size?: SmallAndMedium
   axis?: Axis
   labelClassName?: string
   shouldShowClear?: boolean
   hintClassName?: string
   renderRequiredIcon?: () => React.ReactElement
}

export function RadioGroup(props: RadioGroupProps) {
   let {
      children,
      label,
      hint,
      error,
      size = 'Medium',
      axis = 'vertical',
      isRequired,
      containerClassName,
      labelClassName,
      shouldShowClear,
      hintClassName = '',
      renderRequiredIcon,
      ...other
   } = props
   const hintId = useId()
   let state = useRadioGroupState(props)
   let { radioGroupProps, labelProps } = useRadioGroup(props, state)

   const isVerticalAxis = axis === 'vertical'

   const onClear = (): void => {
      props.onChange('')
   }

   const displayClear = shouldShowClear && props.value && !props.isDisabled

   return (
      <div className={containerClassName}>
         <div {...radioGroupProps}>
            <div className={radioLabelContainerClassName}>
               {label ? (
                  <Label
                     containerClassName={`mb-14px ${labelClassName}`}
                     {...labelProps}
                     isRequired={isRequired}
                     size={size}
                     renderRequiredIcon={renderRequiredIcon}
                  >
                     {label}
                  </Label>
               ) : null}
               {displayClear ? (
                  <Button
                     className={clearButtonClassName}
                     onClick={onClear}
                     size={'Small'}
                     hierarchy={Hierarchy.Tertiary}
                     subVariant={SubVariant.Gray}
                  >
                     Clear
                  </Button>
               ) : null}
            </div>
            <RadioContext.Provider
               value={
                  {
                     state: state,
                     axis: axis,
                     parentProps: {
                        ...other,
                        error,
                        size: size
                     }
                  } as any
               }
            >
               {children}
            </RadioContext.Provider>
         </div>
         <Hint
            size={size}
            id={hintId}
            hint={hint}
            error={error ? error : ''}
            containerClassName={cn(
               { '-mt-2px': isVerticalAxis },
               hintClassName
            )}
         />
      </div>
   )
}

export interface RadioProps extends AriaRadioProps {
   className?: string
   labelClassName?: string
   size?: SmallAndMedium
   hiddenInputClassName?: string
   title?: string
   optionLabelClassName?: string
}
export function Radio(props: RadioProps) {
   let {
      children,
      autoFocus,
      className,
      hiddenInputClassName,
      optionLabelClassName
   } = props

   const contextValues = React.useContext(RadioContext) as any
   let state = contextValues.state

   const isDisabled = props.isDisabled || state.isDisabled

   const parentProps: ParentPropsType = contextValues.parentProps
   let ref = React.useRef(null)
   let { inputProps } = useRadio(props, state, ref)
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

   let isSelected = state.selectedValue === props.value
   const { error, size } = parentProps

   const { theme, colorScheme } = useThemeContext()
   const colorTheme = theme[colorScheme]

   const { borderColor, bgColor, dotColor } = isSelected
      ? getSelectedRadioButtonColors(
           {
              isHovered,
              isDisabled,
              isFocused: isFocusWithin,
              error: Boolean(error)
           },
           colorTheme
        )
      : getUnSelectedRadioButtonColors(
           {
              isHovered,
              isDisabled,
              isFocused: isFocusWithin,
              error: Boolean(error)
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
         <div
            className={cn(
               radioContainerStyles,
               getStylesBasedOnAxis(contextValues.axis),
               className
            )}
         >
            <VisuallyHidden className={hiddenInputClassName}>
               <input {...inputProps} ref={ref} autoComplete='off' />
            </VisuallyHidden>
            {renderRadioButton()}
            <span
               className={cn(
                  getRadioButtonLabelClass(colorTheme),
                  'notranslate',
                  optionLabelClassName
               )}
            >
               {children}
            </span>
         </div>
      )
   }

   const renderSimpleRadioOption = () => {
      const simpleRadioLabelClass = getSimpleRadioLabelStyles(isDisabled)
      return (
         <label
            className={cn(simpleRadioLabelClass, props.labelClassName)}
            title={props.title}
            {...hoverProps}
         >
            {renderRadioWithChild()}
         </label>
      )
   }

   return renderSimpleRadioOption()
}
