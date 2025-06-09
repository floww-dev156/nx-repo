export const calenderTriggerClassName = 'outline-none w-full flex items-center'

export const calenderContainerClassName = 'px-24px py-12px'

export const getCalenderCellContentStyles = (theme: any) =>
   ` ${theme.width} ${theme.height}
  ${theme.rounded}
  bg-red-100
  w-40px height:40px
   `

export const dialogTriggerClassName = 'flex items-center w-full'

export const dialogContentClassName = 'flex flex-col'

export const calenderContainerInvalidClassName = 'contents'

export const datePickerSegmentsClassName = 'flex items-center'

export const calenderTableClassName = 'border-separate border-spacing-4px'

export const triggerContentContainer =
   'flex items-center justify-between w-full'

export const getPlaceHolderTextStyles = (theme: any) =>
   `${theme.triggerPlaceHolderTextColor} text-sm-regular`
export const getValueTextStyles = (
   theme: any,
   isDisabled: boolean | undefined
) =>
   `${isDisabled ? theme.disabledCell : theme.triggerTextColor} text-sm-medium`

export const clearButtonClassName = `bg-base-white px-4 py-4px my-4px
text-sm-semibold text-gray-700 rounded-4px 
w-full text-left hover:bg-gray-50`
