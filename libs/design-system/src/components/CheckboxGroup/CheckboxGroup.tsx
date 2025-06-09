import cn from 'classnames'
import React, { ReactNode } from 'react'

import { useCheckboxGroup, useCheckboxGroupItem } from '@react-aria/checkbox'
import { useFocus, useFocusWithin, useHover } from '@react-aria/interactions'
import { useId } from '@react-aria/utils'
import { VisuallyHidden } from '@react-aria/visually-hidden'
import { useCheckboxGroupState } from '@react-stately/checkbox'
import {
   AriaCheckboxGroupItemProps,
   AriaCheckboxGroupProps
} from '@react-types/checkbox'

import { CheckboxSelectedIcon } from '../../icons/CheckboxSelectedIcon'
import { CheckboxUnSelectedIcon } from '../../icons/CheckboxUnselectedIcon'
import { useThemeContext } from '../../Theme/Provider'
import { SmallAndMedium } from '../../types'

import { FocusRing } from '../FocusRing'
import { Hint } from '../Hint'
import { Label } from '../Label'
import { sizes } from './sizes'
import {
   checkboxContainerStyles,
   getAxisStyles,
   getCheckboxButtonContainerStyles,
   getCheckboxButtonLabelClass,
   getSelectedCheckboxButtonColors,
   getSimpleCheckboxLabelStyles,
   getStylesBasedOnAxis,
   getUnSelectedCheckboxButtonColors
} from './styles'
import { Axis } from './types'

let CheckboxContext = React.createContext(null)

interface ParentPropsType {
   hint?: React.ReactNode
   error?: React.ReactNode
   size: SmallAndMedium
}

export interface CheckboxGroupProps extends AriaCheckboxGroupProps {
   children: ReactNode
   onChange: (value: string[]) => void
   className?: string
   hint?: React.ReactNode
   error?: React.ReactNode
   isRequired?: boolean
   containerClassName?: string
   size?: SmallAndMedium
   axis?: Axis
   showLabel?: boolean
   hintClassName?: string
   renderRequiredIcon?: () => React.ReactElement
   labelClassName?: string
}

export function CheckboxGroup(props: CheckboxGroupProps) {
   let {
      children,
      label,
      hint,
      error,
      size = 'Medium',
      axis = 'vertical',
      isRequired,
      showLabel = true,
      containerClassName,
      hintClassName = '',
      renderRequiredIcon,
      labelClassName,
      ...other
   } = props
   const hintId = useId()
   let state = useCheckboxGroupState(props)
   let { groupProps, labelProps } = useCheckboxGroup(props, state)

   const isVerticalAxis = axis === 'vertical'

   return (
      <div className={containerClassName}>
         <div {...groupProps}>
            {showLabel ? (
               <Label
                  {...labelProps}
                  isRequired={isRequired}
                  size={size}
                  renderRequiredIcon={renderRequiredIcon}
                  containerClassName={labelClassName}
               >
                  {label}
               </Label>
            ) : null}
            <CheckboxContext.Provider
               value={
                  {
                     state: state,
                     axis: axis,
                     parentProps: { ...other, error, size: size }
                  } as any
               }
            >
               <div className={cn(getAxisStyles(axis))}>{children}</div>
            </CheckboxContext.Provider>
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

export interface CheckboxProps extends AriaCheckboxGroupItemProps {
   className?: string
   size?: SmallAndMedium
   onPointerDown?: (
      event: React.PointerEvent<HTMLDivElement> | undefined
   ) => void
   hiddenInputContainerClass?: string
   labelClassName?: string
   title?: string
   optionLabelClassName?: string
}

export function Checkbox(props: CheckboxProps) {
   let {
      children,
      autoFocus,
      className,
      hiddenInputContainerClass = '',
      optionLabelClassName
   } = props

   const contextValues = React.useContext(CheckboxContext) as any
   let state = contextValues.state
   const parentProps: ParentPropsType = contextValues.parentProps
   let ref = React.useRef(null)
   let { inputProps } = useCheckboxGroupItem(props, state, ref)
   const [isFocusWithin, setFocusWithin] = React.useState(false)
   const { focusWithinProps } = useFocusWithin({
      isDisabled: props.isDisabled,
      onFocusWithinChange: isFocusWithin => setFocusWithin(isFocusWithin)
   })
   const { focusProps } = useFocus({
      onBlur: () => {},
      onFocusChange: isFocusWithin => setFocusWithin(isFocusWithin)
   })
   const { hoverProps, isHovered } = useHover({ isDisabled: props.isDisabled })

   let isDisabled = state.isDisabled || props.isDisabled
   let isSelected = state.isSelected(props.value)

   const { error, size } = parentProps

   const { theme, colorScheme } = useThemeContext()
   const colorTheme = theme[colorScheme]

   const { onPointerDown, ...rest } = inputProps

   const { borderColor, bgColor } = isSelected
      ? getSelectedCheckboxButtonColors(
           {
              isHovered,
              isDisabled,
              isFocused: isFocusWithin,
              error: Boolean(error)
           },
           colorTheme
        )
      : getUnSelectedCheckboxButtonColors(
           {
              isHovered,
              isDisabled,
              isFocused: isFocusWithin,
              error: Boolean(error)
           },
           colorTheme
        )

   const renderCheckboxButton = () => {
      return (
         <FocusRing autoFocus={autoFocus}>
            <div
               {...focusProps}
               {...focusWithinProps}
               {...hoverProps}
               className={getCheckboxButtonContainerStyles(size, isDisabled)}
            >
               {isSelected ? (
                  <CheckboxSelectedIcon
                     borderColor={borderColor}
                     bgColor={bgColor}
                     height={sizes[size].icon.height}
                     width={sizes[size].icon.width}
                  />
               ) : (
                  <CheckboxUnSelectedIcon
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

   const renderCheckboxWithChild = () => {
      return (
         <div
            className={cn(
               checkboxContainerStyles,
               getStylesBasedOnAxis(contextValues.axis),
               className
            )}
            onPointerDown={props.onPointerDown}
         >
            <VisuallyHidden className={hiddenInputContainerClass}>
               <input {...rest} ref={ref} autoComplete='off' />
            </VisuallyHidden>
            {renderCheckboxButton()}
            <span
               className={cn(
                  getCheckboxButtonLabelClass(colorTheme),
                  optionLabelClassName
               )}
            >
               {children}
            </span>
         </div>
      )
   }

   const renderSimpleCheckboxOption = () => {
      const simpleCheckboxLabelClass = getSimpleCheckboxLabelStyles(isDisabled)
      return (
         <label
            className={cn(simpleCheckboxLabelClass, props.labelClassName)}
            title={props.title}
            {...hoverProps}
         >
            {renderCheckboxWithChild()}
         </label>
      )
   }

   return renderSimpleCheckboxOption()
}
