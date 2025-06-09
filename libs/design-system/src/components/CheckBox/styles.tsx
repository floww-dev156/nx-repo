import cn from 'classnames'

interface CheckboxBoxState {
   isHovered: boolean
   isDisabled?: boolean
   isFocused: boolean
   error?: boolean
}

export const getSimpleCheckboxLabelStyles = (
   isDisabled?: boolean,
   className = ''
) => {
   return cn(
      'flex  items-center',
      { [`cursor-not-allowed`]: isDisabled },
      { 'cursor-pointer': !isDisabled },
      className
   )
}

export const getCheckboxButtonContainerStyles = (
   isDisabled?: boolean,
   checkboxButtonClassName = ''
) => {
   return cn(
      `flex `,
      checkboxButtonClassName,
      { 'cursor-not-allowed': isDisabled },
      { 'cursor-pointer': !isDisabled }
   )
}

const disabledCheckboxContainerStyles = checkboxGroupTheme => {
   return {
      borderColor: checkboxGroupTheme.disabled.borderColor,
      bgColor: checkboxGroupTheme.disabled.backgroundColor
   }
}

export const getUnSelectedCheckboxButtonColors = (
   { isHovered, isDisabled, error, isFocused }: CheckboxBoxState,
   theme: any
) => {
   const checkboxGroupTheme = theme.checkboxGroup
   const unSelectedCheckboxGroupStyles = checkboxGroupTheme.unSelected
   const unSelectedErrorCheckboxGroupStyles =
      checkboxGroupTheme.error.unSelected

   if (isDisabled) {
      return disabledCheckboxContainerStyles(checkboxGroupTheme)
   } else if (!isDisabled && !error) {
      return {
         borderColor: isHovered
            ? unSelectedCheckboxGroupStyles.hover.borderColor
            : isFocused
            ? unSelectedCheckboxGroupStyles.focus.borderColor
            : unSelectedCheckboxGroupStyles.default.borderColor,
         bgColor: isHovered
            ? unSelectedCheckboxGroupStyles.hover.backgroundColor
            : unSelectedCheckboxGroupStyles.default.backgroundColor
      }
   } else {
      return {
         borderColor: isHovered
            ? unSelectedErrorCheckboxGroupStyles.hover.borderColor
            : isFocused
            ? unSelectedErrorCheckboxGroupStyles.focus.borderColor
            : unSelectedErrorCheckboxGroupStyles.default.borderColor,
         bgColor: isHovered
            ? unSelectedErrorCheckboxGroupStyles.hover.backgroundColor
            : unSelectedErrorCheckboxGroupStyles.default.backgroundColor
      }
   }
}

export const getSelectedCheckboxButtonColors = (
   { isHovered, isDisabled, error }: CheckboxBoxState,
   theme: any
) => {
   const checkboxGroupTheme = theme.checkboxGroup
   const selectedCheckboxGroupStyles = checkboxGroupTheme.selected
   const selectedErrorCheckboxGroupStyles = checkboxGroupTheme.error.selected

   if (isDisabled) {
      return disabledCheckboxContainerStyles(checkboxGroupTheme)
   }
   if (!isDisabled && !error) {
      return {
         borderColor: selectedCheckboxGroupStyles.borderColor,
         bgColor: isHovered
            ? selectedCheckboxGroupStyles.background.hovered
            : selectedCheckboxGroupStyles.background.default
      }
   } else {
      return {
         borderColor: selectedErrorCheckboxGroupStyles.borderColor,
         bgColor: isHovered
            ? selectedErrorCheckboxGroupStyles.background.hovered
            : selectedErrorCheckboxGroupStyles.background.default
      }
   }
}
