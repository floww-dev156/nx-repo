import cn from 'classnames'

export const segmentsContainerClassName = cn(`flex items-center w-full`)

export const getLabelThemeStyles = (theme: any): string => {
   return cn(`${theme.labelTextColor} mb-6px text-xs-medium`)
}
export const getAdobeTimeFieldContainerThemeStyles = (
   theme: any,
   isDisabled: boolean
): string => {
   const disabledStyles = isDisabled
      ? `${theme.disableBgColor} pointer-events-none`
      : ''

   return cn(
      ` ${disabledStyles} border border-solid px-[14px] py-[3px] rounded-8px  flex items-center`
   )
}

export const getSeparatorThemeStyles = (theme: any): string => {
   return cn(
      `${theme.separatorBorderColor} mx-8px border-r border-solid h-[18px] ml-8px`
   )
}

export const timePickerContainerClassName = cn(`flex flex-col `)

export const clockIconClassName = cn(`mr-8px`)
