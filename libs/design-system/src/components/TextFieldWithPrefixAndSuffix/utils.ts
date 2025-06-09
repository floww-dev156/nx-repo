import cn from 'classnames'

interface InputFieldStyleType {
   theme: any
   isFocussed?: boolean
   isNotValid?: boolean | string
   isDisabled?: boolean
   inputFieldStyles?: string
}

export const getInputFieldStyles = (props: InputFieldStyleType): string => {
   const { theme, isFocussed, isNotValid, isDisabled, inputFieldStyles } = props

   return cn(
      `border-1 dark:border-gray-300 bg-base-white rounded-lg ${theme.inputBorderColor}`,
      `text-base shadow-small1 h-[39px] ${theme.inputTextColor}`,
      'flex items-center overflow-hidden',
      `${isFocussed ? theme.focusBorderColor : ''} border-1`,
      `${isNotValid && `${theme.errorBorderColor} border-1`}`,
      `${isDisabled && `pointer-events-none ${theme.pickerBgDisabledColor}`}`,
      inputFieldStyles
   )
}

export const getHrLineStyles = (theme: any): string =>
   `h-full w-[1px] -mt-[1px] mr-px ${theme.hrLineBgColor}`
