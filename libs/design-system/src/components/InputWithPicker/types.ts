import { Key } from 'react'

export interface InputWithPickerOptionType {
   label: string
   value: string
}

export interface InputWithPickerProps {
   label: string
   inputValue: string
   selectedOptionKey: string
   options: InputWithPickerOptionType[]
   inputType?: string
   helperText?: string
   labelStyles?: string
   placeholder?: string
   helperTextStyles?: string
   containerStyles?: string
   inputFieldStyles?: string
   inputValueFieldStyles?: string
   errorMessage?: string
   isDisabled?: boolean
   isPickerSelectionDisabled?: boolean
   isInputValueFieldDisabled?: boolean
   autoFocus?: boolean
   name?: string
   isRequired?: boolean
   color?: string
   pickerContainerClassName?: string

   renderRightElement?: () => React.ReactNode
   renderHintLeftIcon?: () => React.ReactNode
   onInputChange?: (value: string) => void
   onSelectionChange?: (value: Key) => void
   onBlur?: (e?: React.FormEvent<HTMLInputElement>) => void
   onFocus?: (e: React.FormEvent<HTMLInputElement>) => void
   onKeyDown?: (e: React.FormEvent<HTMLInputElement>) => void
}
