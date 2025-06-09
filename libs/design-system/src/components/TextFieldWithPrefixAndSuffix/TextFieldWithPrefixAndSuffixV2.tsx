import cn from 'classnames'
import React, { Key, ReactElement, Ref, useRef, useState } from 'react'

import { Picker } from '../Picker'

import { Item } from '../Item'
import { TextField } from '../TextInputs'
import { TextFieldWithPrefixAndSuffixProps } from './types'

export const TextFieldWithPrefixAndSuffixV2 = (
   props: TextFieldWithPrefixAndSuffixProps
): ReactElement => {
   const {
      label,
      placeholder,
      containerStyles,
      isDisabled,
      inputValue,
      prefixOptions,
      suffixOptions,
      selectedPrefixOption,
      selectedSuffixOption,
      pickerContainerClassName,
      isPickerSelectionDisabled,

      onBlur,
      onKeyDown,
      onInputChange,
      onPrefixChange,
      onSuffixChange
   } = props

   const [isFocussed, setIsFocussed] = useState(false)
   const inputFieldRef: Ref<HTMLDivElement> = useRef(null)

   const handleInputBlur = (e?: React.FormEvent<HTMLInputElement>): void => {
      setIsFocussed(false)
      onBlur && onBlur(e)
   }

   const handleOnPrefixChange = (value: Key): void => {
      onPrefixChange && onPrefixChange(value)
   }

   const handleOnSuffixChange = (value: Key): void => {
      onSuffixChange && onSuffixChange(value)
   }

   const renderInputField = (): ReactElement => (
      <div className='flex-1 min-w-0'>
         <TextField
            label={label}
            value={inputValue}
            placeholder={placeholder ? placeholder : ''}
            onChange={onInputChange}
            onKeyDown={onKeyDown}
            size={'ExtraSmall'}
            inputMode='text'
            containerClassName='w-full'
         />
      </div>
   )

   const renderPrefixOptions = (): ReactElement =>
      prefixOptions?.length ? (
         <Picker
            size='ExtraSmall'
            label='Prefix'
            selectedKey={selectedPrefixOption}
            isDisabled={isDisabled || isPickerSelectionDisabled}
            inputButtonTextClassName='!pr-1 notranslate'
            containerClassName={cn('w-[130px]', pickerContainerClassName)}
            onFocus={() => setIsFocussed(true)}
            onSelectionChange={handleOnPrefixChange}
            onBlur={handleInputBlur}
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
         <Picker
            size='ExtraSmall'
            label='Suffix'
            selectedKey={selectedSuffixOption}
            isDisabled={isDisabled || isPickerSelectionDisabled}
            inputButtonTextClassName='!pr-1 notranslate'
            containerClassName={cn('w-[130px]', pickerContainerClassName)}
            onFocus={() => setIsFocussed(true)}
            onSelectionChange={handleOnSuffixChange}
            onBlur={handleInputBlur}
         >
            {suffixOptions.map(item => (
               <Item key={item} title={item}>
                  <span className='w-full notranslate'> {item}</span>
               </Item>
            ))}
         </Picker>
      ) : (
         <></>
      )

   return (
      <div
         className={cn('flex relative w-full gap-3 items-end', containerStyles)}
         ref={inputFieldRef}
      >
         {renderPrefixOptions()}
         {renderInputField()}
         {renderSuffixOptions()}
      </div>
   )
}
