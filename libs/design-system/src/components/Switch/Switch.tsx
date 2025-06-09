import cn from 'classnames'
import React, { forwardRef, useRef } from 'react'
import { AriaSwitchProps, useSwitch, usePress } from 'react-aria'
import { useToggleState } from 'react-stately'

import { filterDOMProps, mergeProps } from '@react-aria/utils'
import { useHover, useFocus, useFocusWithin } from '@react-aria/interactions'

import { useThemeContext } from '../../Theme/Provider'
import { FocusRingVariant, SmallAndMedium } from '../../types'

import { FocusRing } from '../FocusRing'

import { switchSizeStyles } from './sizes'
import * as Styles from './styles'

import './index.css'

export interface SwitchProps
   extends Omit<
      AriaSwitchProps,
      | 'children'
      | 'onChange'
      | 'value'
      | 'isSelected'
      | 'isReadOnly'
      | 'onBlur'
      | 'onKeyUp'
      | 'onKeyDown'
      | 'name'
   > {
   size: SmallAndMedium
   value: boolean

   onChange: (value: boolean) => void

   autoFocus?: boolean
   containerClassName?: string
   id?: string
   isDisabled?: boolean
   focusRingVariant?: FocusRingVariant
   switchClassName?: string
   switchContainerClassName?: string
}

const Switch = (props: SwitchProps): React.ReactElement => {
   const {
      size,
      value,

      onChange,

      autoFocus = false,
      containerClassName,
      id,
      focusRingVariant,
      switchClassName,
      switchContainerClassName,
      ...rest
   } = props

   const inputRef = useRef<HTMLInputElement>(null)
   const labelRef = useRef<HTMLLabelElement>(null)

   const { theme, colorScheme } = useThemeContext()
   const coloredTheme = theme[colorScheme]
   const switchSizeContext = switchSizeStyles[size]

   const [isFocusWithin, setFocusWithin] = React.useState(false)

   const { hoverProps, isHovered } = useHover({
      isDisabled: props.isDisabled
   })

   const { focusWithinProps } = useFocusWithin({
      isDisabled: props.isDisabled,
      onFocusWithinChange: isFocusWithin => setFocusWithin(isFocusWithin)
   })

   const { focusProps } = useFocus({
      onFocusChange: isFocusWithin => setFocusWithin(isFocusWithin)
   })

   const { isPressed, pressProps } = usePress({
      ref: labelRef,
      isDisabled: props.isDisabled
   })

   const state = useToggleState({
      isSelected: !!props.value
   })

   let { inputProps } = useSwitch(
      {
         isSelected: value,
         isDisabled: !!props.isDisabled,
         onChange,
         ...rest
      },
      state,
      inputRef
   )

   const DOMProps = filterDOMProps(props)

   const uiStates = {
      isHovered,
      isPressed,
      isDisabled: !!props.isDisabled,
      isChecked: value,
      isFocused: isFocusWithin
   }

   const {
      bgColor,
      focusRingVariant: defaultFocusRingVariant
   } = Styles.getSwitchLabelStyles(uiStates, coloredTheme)

   const { bgColor: switchBGColor } = Styles.getToggleSwitchStyles(
      uiStates,
      coloredTheme
   )

   const onChangeSwitch = (
      event: React.ChangeEvent<HTMLInputElement>
   ): void => {
      const value = event.target.checked

      onChange(value)
   }

   return (
      <div className={cn(Styles.wrapperContainerStyles, containerClassName)}>
         <FocusRing
            autoFocus={autoFocus}
            within
            size={size}
            variant={focusRingVariant ?? defaultFocusRingVariant}
         >
            <label
               {...mergeProps(
                  focusWithinProps,
                  inputProps,
                  hoverProps,
                  DOMProps,
                  focusProps,
                  pressProps
               )}
               ref={labelRef}
               htmlFor={props.id}
               className={cn(
                  Styles.switchLabelStyles,
                  switchSizeContext.labelClassName,
                  bgColor,
                  switchContainerClassName,
                  props.isDisabled ? Styles.noInteractionStyles : ''
               )}
               //NOTE: Adding id as `undefined` to avoid same id for input and label
               id={undefined}
            >
               <input
                  ref={inputRef}
                  className={cn(
                     Styles.switchInputStyles,
                     props.isDisabled ? Styles.noInteractionStyles : ''
                  )}
                  type={'checkbox'}
                  checked={value}
                  id={props.id}
                  onChange={onChangeSwitch}
               />
               <span
                  className={cn(
                     'toggleSwitch-switch',
                     Styles.switchStyles,
                     switchSizeContext.switchClassName,
                     value ? 'translate-x-[100%]' : 'translate-x-0',
                     switchBGColor,
                     switchClassName
                  )}
               />
            </label>
         </FocusRing>
      </div>
   )
}

const _Switch = forwardRef(Switch)
export { _Switch as Switch }
