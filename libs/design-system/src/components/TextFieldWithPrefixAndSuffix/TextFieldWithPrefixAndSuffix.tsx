import cn from 'classnames'
import React, { Key, ReactElement, Ref, useRef, useState } from 'react'

import { useId } from '@react-aria/utils'

import { useThemeContext } from '../../Theme/Provider'

import { FocusRing } from '../FocusRing'
import { Hint } from '../Hint'
import { Label } from '../Label'
import { Picker } from '../Picker'

import { TextFieldWithPrefixAndSuffixProps } from './types'
import { getHrLineStyles, getInputFieldStyles } from './utils'
import { Item } from '../Item'

export const TextFieldWithPrefixAndSuffix = (
   props: TextFieldWithPrefixAndSuffixProps
): ReactElement => {
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
      prefixOptions,
      suffixOptions,
      inputType = 'text',
      selectedPrefixOption,
      selectedSuffixOption,
      autoFocus = false,
      inputValueFieldStyles,
      isInputValueFieldDisabled,
      pickerContainerClassName,
      isPickerSelectionDisabled,
      tooltip,

      onBlur,
      onFocus,
      onKeyDown,
      renderRightElement,
      renderHintLeftIcon,
      onInputChange,
      onPrefixChange,
      onSuffixChange
   } = props

   const [error, setError] = useState('')
   const { theme, colorScheme } = useThemeContext()
   const [isFocussed, setIsFocussed] = useState(false)
   const inputFieldRef: Ref<HTMLDivElement> = useRef(null)

   const coloredTheme = theme[colorScheme].inputWithPicker

   const handleInputKeydown = (
      e: React.KeyboardEvent<HTMLInputElement>
   ): void => {
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

   const handleOnPrefixChange = (value: Key): void => {
      onPrefixChange && onPrefixChange(value)
   }

   const handleOnSuffixChange = (value: Key): void => {
      onSuffixChange && onSuffixChange(value)
   }

   const isNotValid = errorMessage && !isFocussed

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
            'w-full h-full text-sm-regular py-8px',
            'notranslate',
            `focus: outline-none`,
            'notranslate',
            prefixOptions?.length ? 'pl-0' : 'pl-3',
            suffixOptions?.length ? 'pr-0' : 'pr-3',
            inputValueFieldStyles,
            isDisabled || isInputValueFieldDisabled
               ? coloredTheme.disabledTextColor
               : ''
         )}
         title={tooltip}
      />
   )

   const renderPrefixOptions = (): ReactElement =>
      prefixOptions?.length ? (
         <Picker
            size='ExtraSmall'
            showLabel={false}
            selectedKey={selectedPrefixOption}
            isDisabled={isDisabled || isPickerSelectionDisabled}
            focusRingVariant='None'
            inputButtonTextClassName='!pr-1 notranslate'
            buttonClassName={'!border-none focus:!shadow-none'}
            containerClassName={cn('min-w-[100px]', pickerContainerClassName)}
            onFocus={() => setIsFocussed(true)}
            onSelectionChange={handleOnPrefixChange}
            onBlur={handleInputBlur}
            popOverStyles={{
               marginTop: '2px'
            }}
         >
            {prefixOptions.map(item => (
               <Item key={item} title={item}>
                  <span className='w-full notranslate'> {item}</span>
               </Item>
            ))}
         </Picker>
      ) : (
         <></>
      )

   const renderSuffixOptions = (): ReactElement =>
      suffixOptions?.length ? (
         <>
            <hr className={getHrLineStyles(coloredTheme)} />

            <Picker
               size='ExtraSmall'
               showLabel={false}
               selectedKey={selectedSuffixOption}
               isDisabled={isDisabled || isPickerSelectionDisabled}
               focusRingVariant='None'
               inputButtonTextClassName='!pr-1 notranslate'
               buttonClassName={'!border-none focus:!shadow-none'}
               containerClassName={cn(
                  'min-w-[100px]',
                  pickerContainerClassName
               )}
               onFocus={() => setIsFocussed(true)}
               onSelectionChange={handleOnSuffixChange}
               onBlur={handleInputBlur}
               popOverStyles={{
                  marginTop: '2px'
               }}
            >
               {suffixOptions.map(item => (
                  <Item key={item} title={item}>
                     <span className='w-full notranslate'> {item}</span>
                  </Item>
               ))}
            </Picker>
         </>
      ) : (
         <></>
      )

   return (
      <div
         className={cn('flex flex-col relative w-full', containerStyles)}
         ref={inputFieldRef}
      >
         {label ? (
            <Label containerClassName={labelStyles} isRequired={isRequired}>
               {label}
            </Label>
         ) : null}
         <FocusRing
            autoFocus={autoFocus}
            within
            focusClass={`ring-offset-0 ${
               isNotValid
                  ? `ring-0 border-1 ${coloredTheme.errorBorderColor}`
                  : isFocussed
                  ? `ring ${coloredTheme.focusRingColor}`
                  : ''
            }`}
         >
            <div
               className={getInputFieldStyles({
                  theme: coloredTheme,
                  isFocussed,
                  isNotValid,
                  isDisabled,
                  inputFieldStyles
               })}
            >
               {renderPrefixOptions()}
               {renderInputField()}
               {renderRightElement ? renderRightElement() : null}
               {renderSuffixOptions()}
            </div>
         </FocusRing>
         <Hint
            id={hintId}
            hint={helperText}
            size='ExtraSmall'
            error={errorMessage && !isFocussed ? errorMessage : ''}
            containerClassName={helperTextStyles}
            renderLeftIcon={renderHintLeftIcon}
         />
      </div>
   )
}
