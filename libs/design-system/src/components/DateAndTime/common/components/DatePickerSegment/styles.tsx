import cn from 'classnames'
export const getSegmentStylesCell = (
   theme: any,
   isDisabled: boolean,
   sizes: any
) =>
   cn`
   ${isDisabled ? theme.cell.disabledColor : theme.cell.color}
   border-0
   bg-transparent 
   tabular-nums 
   text-right box-content whitespace-nowrap
   outline-none
   ${theme.cell.focusColor}
   ${(sizes.textSize, sizes.padding, sizes.borderRadius)}
   h-[20px]
   `

export const segmentPlaceHolderClassName =
   'block text-center italic invisible pointer-events-none'
