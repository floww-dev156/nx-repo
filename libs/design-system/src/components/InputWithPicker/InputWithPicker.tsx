import cn from 'classnames'
import React, { Key, ReactElement, Ref, useRef, useState } from 'react'

import { useId } from '@react-aria/utils'
import { Item } from '@react-stately/collections'

import { useThemeContext } from '../../Theme/Provider'
import { FocusRing } from '../FocusRing'
import { Hint } from '../Hint'
import { Label } from '../Label'
import { Picker } from '../Picker'
import { colors } from './constants'
import { InputWithPickerProps } from './types'
import { getHrLineStyles, getInputFieldStyles } from './utils'

const InputWithPicker = (props: InputWithPickerProps): ReactElement => {
   const {
      label,
      name,
      helperText,
      placeholder,
      labelStyles,
      helperTextStyles,
      containerStyles,
      inputFieldStyles,
      errorMessage,
      isDisabled,
      inputValue,
      isRequired,
      options,
      inputType = 'text',
      selectedOptionKey,
      autoFocus = false,
      color = colors.blue,
      inputValueFieldStyles,
      isInputValueFieldDisabled,
      pickerContainerClassName,
      isPickerSelectionDisabled,

      onBlur,
      onFocus,
      onKeyDown,
      renderRightElement,
      renderHintLeftIcon,
      onInputChange,
      onSelectionChange
   } = props

   const [error, setError] = useState('')
   const { theme, colorScheme } = useThemeContext()
   const [isFocussed, setIsFocussed] = useState(false)
   const inputFieldRef: Ref<HTMLDivElement> = useRef(null)

   const coloredTheme = theme[colorScheme].inputWithPicker

   const handleInputKeydown = (e: React.FormEvent<HTMLInputElement>): void => {
      setIsFocussed(false)
      onKeyDown && onKeyDown(e)
   }

   const handleInputBlur = (e?: React.FormEvent<HTMLInputElement>): void => {
      setIsFocussed(false)
      onBlur && onBlur(e)
   }

   const handleInputFocus = (e: React.FormEvent<HTMLInputElement>): void => {
      setError('')
      setIsFocussed(true)
      onFocus && onFocus(e)
   }

   const handleOnSelectionChange = (value: Key): void => {
      onSelectionChange && onSelectionChange(value)
   }

   const isNotValid = errorMessage && !isFocussed

   function focusStateRingColor(color: string): string {
      switch (color) {
         case colors.indigo:
            return 'ring-indigo-200'
         case colors.cyan:
            return 'ring-cyan-200'
         default:
            return 'ring-primary-100'
      }
   }

   const hintId = useId()

   const renderInputField = (): ReactElement => (
      <input
         type={inputType}
         name={name}
         value={inputValue}
         placeholder={placeholder ? placeholder : ''}
         onChange={e => onInputChange?.(e.target.value)}
         onBlur={handleInputBlur}
         onFocus={e => handleInputFocus(e)}
         onKeyDown={handleInputKeydown}
         disabled={isDisabled || isInputValueFieldDisabled}
         className={cn(
            'w-full h-full',
            `focus: outline-none`,
            `${isNotValid && !isFocussed && coloredTheme.errorTextColor}`,
            inputValueFieldStyles
         )}
      />
   )

   const renderPickerField = (): ReactElement => (
      <Picker
         size='ExtraSmall'
         showLabel={false}
         items={options}
         selectedKey={selectedOptionKey}
         isDisabled={isDisabled || isPickerSelectionDisabled}
         focusRingVariant='None'
         inputButtonTextClassName='!pr-1'
         buttonClassName={'!border-none focus:!shadow-none'}
         containerClassName={cn('min-w-[140px]', pickerContainerClassName)}
         onFocus={() => setIsFocussed(true)}
         onSelectionChange={handleOnSelectionChange}
         onBlur={handleInputBlur}
         popOverStyles={{
            marginTop: '2px'
         }}
      >
         {item => <Item key={item.value}>{item.label}</Item>}
      </Picker>
   )

   return (
      <div
         className={cn('flex flex-col relative w-full', containerStyles)}
         ref={inputFieldRef}
      >
         <Label containerClassName={labelStyles} isRequired={isRequired}>
            {label}
         </Label>
         <FocusRing
            autoFocus={autoFocus}
            within
            focusClass={`ring-offset-0 ${
               isNotValid
                  ? `ring-0 border-1 ${coloredTheme.errorBorderColor}`
                  : isFocussed
                  ? `ring ${focusStateRingColor(color)}`
                  : ''
            }`}
         >
            <div
               className={getInputFieldStyles({
                  theme: coloredTheme,
                  isFocussed,
                  isNotValid,
                  isDisabled,
                  inputFieldStyles,
                  color,
                  label
               })}
            >
               {renderPickerField()}
               <hr className={getHrLineStyles(coloredTheme)} />
               {renderInputField()}
               {renderRightElement ? renderRightElement() : null}
            </div>
         </FocusRing>
         <Hint
            id={hintId}
            hint={helperText}
            error={errorMessage && !isFocussed ? errorMessage : ''}
            containerClassName={helperTextStyles}
            renderLeftIcon={renderHintLeftIcon}
         />
      </div>
   )
}

export default InputWithPicker
