import cn from 'classnames'
import { CountriesList, colors } from './constants'

function getBorderColorBasedOnColor(color: string) {
   switch (color) {
      case colors.indigo:
         return `border-indigo-600 border-1`
      case colors.cyan:
         return `border-cyan-600 border-1`
      default:
         return `border-blue-600 border-1`
   }
}

export const getIntlPhoneNumberFieldStyles = (
   isFocussed?: boolean,
   isNotValid?: boolean | string,
   isDisabled?: boolean,
   intlPhoneNumberFieldStyles?: string,
   color = colors.blue,
   label?: string
) =>
   cn(
      label ? `flex items-center mt-1` : `flex items-center`,
      'border-1 border-gray-300 dark:border-gray-300 bg-base-white rounded-lg',
      'text-base text-gray-900 shadow-small1 h-[39px] pr-2',
      'overflow-hidden',
      `${isFocussed ? getBorderColorBasedOnColor(color) : ''}`,
      `${isNotValid && 'border-red-400 border-1'}`,
      `${isDisabled && 'pointer-events-none bg-gray-100'}`,
      intlPhoneNumberFieldStyles
   )

export const GetCountriesPhoneDropDownValues = (countriesList: any[]) =>
   countriesList.map(eachCountry => ({
      label: `${eachCountry[0]} +${eachCountry[2]}`,
      key: eachCountry[1].toUpperCase(),
      value: eachCountry[1].toUpperCase()
   }))

export const getCountryCode = (dialCode: string) => {
   const countryArray = CountriesList.find(
      (countryArray: Array<any>) => countryArray[2] === dialCode.slice(1)
   )

   return countryArray ? countryArray[1].toString().toUpperCase() : ''
}

export const getDialCode = (countryCode: string) => {
   const countryArray = CountriesList.find(
      (countryArray: Array<any>) =>
         countryArray[1] === countryCode.toLowerCase()
   )

   return countryArray ? `+${countryArray[2]}` : ''
}

export const getAllowedCountriesList = (validCountries: string[]) => {
   const allowedCountriesList = CountriesList.filter(eachCountryArray =>
      validCountries.includes(eachCountryArray[1].toString().toUpperCase())
   )
   return allowedCountriesList
}

export const getComboBoxWrapperWithPopOverStyles = (
   isFocus?: boolean,
   error?: string,
   isDisabled?: boolean,
   wrapperWithPopOverStyles?: string
) =>
   cn(
      'flex flex-grow items-center pl-13px py-2',
      'border-1 border-gray-300 dark:border-gray-700 bg-base-white rounded-lg',
      'text-sm shadow-small1',
      'overflow-hidden',
      `${isFocus ? 'border-blue-600 border-1' : ''}`,
      `${error && 'border-red-400 border-1'}`,
      `${isDisabled && 'pointer-events-none bg-gray-100'}`,
      wrapperWithPopOverStyles
   )
