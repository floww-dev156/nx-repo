export const calenderTriggerClassName =
   'outline-none flex justify-start items-center w-full'

export const getPlaceHolderTextStyles = (theme: any) =>
   `${theme.triggerPlaceHolderTextColor} text-sm-regular`
export const getValueTextStyles = (
   theme: any,
   isDisabled: boolean | undefined
) =>
   `${
      isDisabled ? theme.disableTextColor : theme.triggerTextColor
   } text-sm-medium`

export const getCalenderCellContentStyles = (theme: any) =>
   ` ${theme.width} ${theme.height}
  ${theme.rounded}
  w-40px height:40px
   `
export const triggerContentContainer =
   'flex items-center justify-between w-full'
export const dialogTriggerContainerClassName = 'flex items-center w-full'

export const dialogContentClassName = 'flex flex-col outline-none'

export const calenderContainerClassName = 'px-24px pt-12px pb-16px'

export const calenderContainerInvalidClassName = 'contents'

export const datePickerSegmentsClassName = 'flex items-center'

export const calenderTableClassName = 'border-separate border-spacing-4px'

export const getFooterContainerStyles = (theme: any) =>
   `border-t ${theme.footerBorderColor} flex-col justify-center items-center p-16px`
export const timeFieldsContainerClassName = 'flex items-center justify-center'

export const actionButtonsContainerClassName =
   'flex items-center justify-center pt-16px'

export const cancelButtonClassName = 'w-96px mr-16px'
export const applyButtonClassName = 'w-104px'

export const getSeparatorStyles = (theme: any) =>
   `${theme.textColor} text-lg-medium mx-12px`
export const timeInputClassName =
   'text-center w-44px h-36px rounded-8px shadow-xs'

export const dayPeriodTogglerContainerClassName = `
flex items-center
 rounded-8px
 px-12px py-8px
 shadow-xs
 w-62px h-36px
 `

export const togglerIconsContainerClassName = `flex flex-col ml-8px`

export const getDayPeriodValueStyles = (theme: any) =>
   `${theme.dayPeriodValueTextColor} text-sm-regular`

export const buttonClassName = 'outline-none'

export const togglerUpIconClassName = 'mb-4px'

export const clearButtonClassName = `bg-base-white px-4 py-4px my-4px 
text-sm-semibold text-gray-700 rounded-4px 
w-full text-left hover:bg-gray-50`
