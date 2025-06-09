import cn from 'classnames'

export const getToggleContainerThemeStyles = (
   theme: any,
   isDisabled: boolean
): string => {
   const disabledStyles = isDisabled ? ` cursor-not-allowed` : 'cursor-pointer'

   return `${theme.backgroundColor} ${disabledStyles}  pl-4px py-3px  flex flex-row items-center w-fitContent  rounded-6px `
}

export const toggleOperatorWrapperClassName =
   ' flex flex-row justify-center items-center ml-auto '

export const getSelectedThemeStyles = (
   isSelected: boolean,
   theme: any
): string => {
   const textStyles = isSelected ? `${theme.selected.color}` : theme.color

   const selectedStyles = isSelected
      ? `${theme.selected.bgColor} rounded-6px shadow-sm  `
      : ''

   return `${selectedStyles} ${textStyles} px-8px py-2px mr-4px cursor-pointer text-xs-medium `
}
