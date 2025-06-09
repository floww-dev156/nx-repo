import cn from 'classnames'

import { colors } from './constants'

function getBorderColorBasedOnColor(color: string): string {
   switch (color) {
      case colors.indigo:
         return `border-indigo-600 border-1`
      case colors.cyan:
         return `border-cyan-600 border-1`
      default:
         return `border-primary-100 border-1`
   }
}

interface InputFieldStyleType {
   theme: any
   isFocussed?: boolean
   isNotValid?: boolean | string
   isDisabled?: boolean
   inputFieldStyles?: string
   color: string
   label?: string
}

export const getInputFieldStyles = (props: InputFieldStyleType): string => {
   const {
      theme,
      label,
      isFocussed,
      isNotValid,
      isDisabled,
      inputFieldStyles,
      color = colors.blue
   } = props

   return cn(
      label ? `flex items-center mt-1` : `flex items-center`,
      `border-1 dark:border-gray-300 bg-base-white rounded-lg ${theme.inputBorderColor}`,
      `text-base shadow-small1 h-[39px] pr-2 ${theme.inputTextColor}`,
      'overflow-hidden',
      `${isFocussed ? getBorderColorBasedOnColor(color) : ''}`,
      `${isNotValid && `${theme.errorBorderColor} border-1`}`,
      `${isDisabled && `pointer-events-none ${theme.inputDisableBgColor}`}`,
      inputFieldStyles
   )
}

export const getHrLineStyles = (theme: any): string =>
   `h-full w-[1px] -mt-[1px] mr-10px ${theme.hrLineBgColor}`
