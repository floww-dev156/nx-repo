import React, { Key, Ref, useRef, useState } from 'react'
import cn from 'classnames'
import { Item } from '@react-stately/collections'
import { useId } from '@react-aria/utils'

import { CountriesList, colors } from './constants'
import { FocusRing } from '../FocusRing'
import { Hint } from '../Hint'
import { Label } from '../Label'
import {
   GetCountriesPhoneDropDownValues,
   getDialCode,
   getAllowedCountriesList,
   getIntlPhoneNumberFieldStyles
} from './utils'
import { CountryListCombobox } from './CountryListCombobox'
import { OverlayOptions } from '../Combobox/types'

interface InternationalMobileNumberProps {
   label: string
   helperText?: string
   fieldContainerStyles?: string
   labelStyles?: string
   placeholder?: string
   wrapperWithPopOverStyles?: string
   inputGroupStyles?: string
   inputFieldStyles?: string
   buttonStyles?: string
   errorMessageStyles?: string
   helperTextStyles?: string
   popOverStyles?: string
   listBoxStyles?: string
   mobileListBoxStyles?: string
   invalidPhoneNumberErrorMessage?: string
   requiredErrorMessage?: string
   onChangePhoneNumber?: (value: string) => void
   onChangeDialCode?: (dialCode: string) => void
   onChangeCountryCode?: (countryCode: string) => void
   allowedCountriesList?: string[]
   intlPhoneNumberContainerStyles?: string
   intlPhoneNumberFieldStyles?: string
   phoneNumberInputStyles?: string
   errorMessage?: string
   isDisabled?: boolean
   isCountryCodeSelectionDisabled?: boolean
   isPhoneNumberFieldDisabled?: boolean
   onBlur?: (e: React.FormEvent<HTMLInputElement>) => void
   getCustomLabelForSelectedOption?: (option: any) => string
   autoFocus?: boolean
   phoneNumber: string
   countryCode: string
   dialCode: string
   isMobile?: boolean
   isDesktop?: boolean
   hideDialCode?: boolean
   handleFocus?: (e: React.FormEvent<HTMLInputElement>) => void
   isRequired?: boolean
   isSearchable?: boolean
   noOptionsMessage?: string
   searchInputPlaceholder?: string
   overlayOptions?: OverlayOptions
   color?: string
   renderRightElement?: () => React.ReactNode
   renderHintLeftIcon?: () => React.ReactNode
   name?: string
}

const InternationalMobileNumber = (props: InternationalMobileNumberProps) => {
   //NOTE: react-aria supports Internalization (uses Intl.PluralRules) which is only supported in iOS >=13
   if (typeof Intl.PluralRules !== 'function') {
      throw new Error('Internationalization is not supported')
   }

   const {
      labelStyles,
      label,
      helperText,
      invalidPhoneNumberErrorMessage = '*Enter a valid phone number',
      requiredErrorMessage = '*Required',
      onChangePhoneNumber,
      onChangeDialCode,
      onChangeCountryCode,
      allowedCountriesList,
      placeholder,
      errorMessageStyles,
      helperTextStyles,
      intlPhoneNumberContainerStyles,
      intlPhoneNumberFieldStyles,
      phoneNumberInputStyles,
      errorMessage,
      isDisabled,
      onBlur,
      getCustomLabelForSelectedOption,
      autoFocus = false,
      phoneNumber,
      countryCode = 'IN',
      dialCode = '+91',
      isMobile = false,
      isDesktop = false,
      color = colors.blue,
      isCountryCodeSelectionDisabled,
      isPhoneNumberFieldDisabled,
      hideDialCode,
      mobileListBoxStyles,
      handleFocus,
      isRequired,
      isSearchable = true,
      noOptionsMessage,
      searchInputPlaceholder,
      overlayOptions,
      renderRightElement,
      renderHintLeftIcon,
      name,
      ...others
   } = props

   const [error, setError] = useState('')
   const [isFocussed, setIsFocussed] = useState(false)
   const phoneNumberFieldRef: Ref<HTMLDivElement> = useRef(null)
   const getListItemKey = (item: { key: string; value: string }) => item.key

   const handleMobileNumberChange = (value: string) => {
      onChangePhoneNumber && onChangePhoneNumber(value)
   }

   const handleMobileNumberBlur = () => {
      setIsFocussed(false)
   }

   const handleMobileNumberFocus = (e: React.FormEvent<HTMLInputElement>) => {
      setIsFocussed(true)
      setError('')
      handleFocus && handleFocus(e)
   }

   const handleCountryCodeChange = (countryCode: string) => {
      if (countryCode) {
         const dialCode = getDialCode(countryCode)
         onChangeCountryCode && onChangeCountryCode(countryCode)
         onChangeDialCode && onChangeDialCode(dialCode)
      }
   }

   const isNotValid = errorMessage && !isFocussed

   function focusStateRingColor(color: string) {
      switch (color) {
         case colors.indigo:
            return 'ring-indigo-200'
         case colors.cyan:
            return 'ring-cyan-200'
         default:
            return 'ring-blue-200'
      }
   }

   const hintId = useId()

   const countriesList = allowedCountriesList
      ? GetCountriesPhoneDropDownValues(
           getAllowedCountriesList(allowedCountriesList)
        )
      : GetCountriesPhoneDropDownValues(CountriesList)

   const selectedCountry: string = allowedCountriesList?.length
      ? countriesList[0].key
      : countryCode

   return (
      <div
         className={cn(
            'flex flex-col relative w-full',
            intlPhoneNumberContainerStyles
         )}
         ref={phoneNumberFieldRef}
      >
         <Label containerClassName={labelStyles} isRequired={isRequired}>
            {label}
         </Label>
         <FocusRing
            autoFocus={autoFocus}
            within
            focusClass={`ring-offset-0 ${
               isNotValid
                  ? 'ring-0 border-1 border-red-400'
                  : isFocussed
                  ? `ring ${focusStateRingColor(color)}`
                  : ''
            }`}
         >
            <div
               className={getIntlPhoneNumberFieldStyles(
                  isFocussed,
                  isNotValid,
                  isDisabled,
                  intlPhoneNumberFieldStyles,
                  color,
                  label
               )}
            >
               <CountryListCombobox
                  label={''}
                  defaultItems={countriesList}
                  placeholder={''}
                  onSelectionChange={(key: Key) => {
                     handleCountryCodeChange(key as string)
                  }}
                  error={''}
                  selectedKey={selectedCountry}
                  isDisabled={isDisabled || isCountryCodeSelectionDisabled}
                  parentRef={phoneNumberFieldRef}
                  isSearchable={
                     allowedCountriesList
                        ? allowedCountriesList?.length > 1
                        : true
                  }
                  overlayOptions={overlayOptions}
                  {...others}
               >
                  {eachItem => (
                     <Item
                        key={getListItemKey(eachItem)}
                        textValue={eachItem.label}
                     >
                        <span>{eachItem.label}</span>
                     </Item>
                  )}
               </CountryListCombobox>
               {!hideDialCode && (
                  <span className={cn('mr-1')}>{getDialCode(countryCode)}</span>
               )}
               <input
                  type='text'
                  inputMode='numeric'
                  pattern='[0-9]*'
                  placeholder={placeholder ? placeholder : ''}
                  onChange={e => handleMobileNumberChange(e.target.value)}
                  onBlur={e => {
                     onBlur && onBlur(e)
                     handleMobileNumberBlur()
                  }}
                  onFocus={e => handleMobileNumberFocus(e)}
                  className={cn(
                     'w-full h-full',
                     `focus: outline-none`,
                     `${isNotValid && !isFocussed && 'text-red-800'}`,
                     phoneNumberInputStyles
                  )}
                  disabled={isDisabled || isPhoneNumberFieldDisabled}
                  value={phoneNumber}
                  name={name}
               />
               {renderRightElement && renderRightElement()}
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

export { InternationalMobileNumber, InternationalMobileNumberProps }
