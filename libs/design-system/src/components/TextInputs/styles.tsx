interface UIStates {
   isDisabled: boolean
   isFocused: boolean
   isError: boolean
}

export const inputContainerStyles = `flex grow items-center overflow-hidden`

export const getInputContainerStyles = (
   { isDisabled, isFocused, isError }: UIStates,
   theme: any
) => {
   if (isDisabled)
      return {
         borderColor: theme.textBaseField.disabled.borderColor,
         bgColor: theme.textBaseField.disabled.bgColor
      }
   else if (isFocused)
      return {
         borderColor: theme.textBaseField.focused.borderColor,
         bgColor: theme.textBaseField.focused.bgColor
      }
   else if (isError)
      return {
         borderColor: theme.textBaseField.error.borderColor,
         bgColor: theme.textBaseField.error.bgColor
      }
   return {
      borderColor: theme.textBaseField.default.borderColor,
      bgColor: theme.textBaseField.default.bgColor
   }
}

export const getElementTypeStyles = (
   { isDisabled, isFocused, isError }: UIStates,
   theme: any
) => {
   const placeholderTextColor = theme.textBaseField
   const commonStyles = `grow-default truncate border-none shadow-none focus:outline-none ${
      isDisabled
         ? `${theme.textBaseField.disabled.bgColor} cursor-not-allowed`
         : ''
   }`

   const textAreaCommonStyles = `grow-default  border-none shadow-none focus:outline-none ${
      isDisabled
         ? `${theme.textBaseField.disabled.bgColor} cursor-not-allowed`
         : ''
   }`

   let textColor = theme.textBaseField.default.textColor

   if (isDisabled) {
      textColor = theme.textBaseField.disabled.textColor
   } else if (isFocused) {
      textColor = theme.textBaseField.focused.textColor
   } else if (isError) {
      textColor = theme.textBaseField.error.textColor
   }

   return {
      commonStyles,
      textColor,
      placeholderTextColor,
      textAreaCommonStyles
   }
}
