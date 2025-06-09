import { Key } from 'react'

export interface OptionType {
   label: string
   value: string
}

export interface TextFieldWithPrefixAndSuffixProps {
   label: string
   inputValue: string

   autoFocus?: boolean
   containerStyles?: string
   errorMessage?: string
   helperText?: string
   helperTextStyles?: string
   inputFieldStyles?: string
   inputType?: string
   inputValueFieldStyles?: string
   isDisabled?: boolean
   isInputValueFieldDisabled?: boolean
   isPickerSelectionDisabled?: boolean
   isRequired?: boolean
   labelStyles?: string
   name?: string
   pickerContainerClassName?: string
   placeholder?: string
   prefixOptions?: string[]
   selectedPrefixOption?: string
   selectedSuffixOption?: string
   suffixOptions?: string[]
   tooltip?: string

   onBlur?: (e?: React.FormEvent<HTMLInputElement>) => void
   onFocus?: (e: React.FormEvent<HTMLInputElement>) => void
   onInputChange?: (value: string) => void
   onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
   onPrefixChange?: (value: Key) => void
   onSuffixChange?: (value: Key) => void
   renderHintLeftIcon?: () => React.ReactNode
   renderRightElement?: () => React.ReactNode
}
