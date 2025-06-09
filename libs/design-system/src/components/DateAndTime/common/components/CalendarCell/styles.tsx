//FIXME:need to handle selected disabled UI states etc
export const getCalenderCellBgAndTextColor = (
   theme: any,
   isHovered: boolean,
   isSelected: boolean,
   isTodayState: boolean,
   isDisabled: boolean
) => {
   if (isDisabled && isTodayState) {
      return theme.todayWithDisabledCell
   }
   if (isDisabled) {
      return theme.disabledCell
   } else if (isTodayState && isSelected && isHovered) {
      return theme.selectedWithHoverCell
   } else if ((isTodayState && isSelected) || isSelected) {
      return theme.selectedCell
   } else if (isTodayState) {
      return theme.todayCell
   } else if (isHovered) {
      return theme.hoveredCell
   }
}

export const getCalenderCellColorStyles = (
   theme: any,
   isHovered: boolean,
   isSelected: boolean,
   isTodayState: boolean,
   isDisabled: boolean,
   isFocused: boolean
) => `

${getCalenderCellBgAndTextColor(
   theme,
   isHovered,
   isSelected,
   isTodayState,
   isDisabled
)}
${isDisabled ? 'cursor-default' : 'cursor-pointer'}
${isFocused ? `${theme.borderFocusColor}` : 'border-transparent'}

`

export const getCalenderCellStyles = (
   sizing: any,
   isHovered: boolean,
   isSelected: boolean,
   isTodayState: boolean
) =>
   `
   border-2
   outline-none
   ${sizing.width} ${sizing.height}
   text-center
   relative
   ${sizing.rounded}
   ${
      isHovered || isSelected || isTodayState
         ? sizing.textMedium
         : sizing.textRegular
   }
   `
