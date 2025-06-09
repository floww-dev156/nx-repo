import { BasicSize } from '../../types'

export const getStylesBasedOnSize = (size: BasicSize): string => {
   switch (size) {
      case 'ExtraSmall':
         return `text-sm-medium py-8px`
      case 'Small':
         return `text-md-medium py-8px`
      case 'Medium':
         return `text-md-medium py-10px`
      default:
         throw new Error('Invalid Size')
   }
}

export const getInputPrefixClassName = (customPrefixEnhancer: boolean) => {
   return customPrefixEnhancer
      ? 'flex justify-center items-center pl-14px pr-0px'
      : 'flex justify-center items-center pl-14px pr-8px'
}

export const popoverClassName = `mt-4px`

export const inputGroupContainerClassName = `w-full flex`

export const inputContainerClassName = `w-full flex flex-row`

export const getCloseIconContainerClassName = (enableCustomTrigger?: boolean) =>
   `pl-8px flex justify-center items-center ${enableCustomTrigger && 'pr-14px'}`

export const fieldButtonContainerClassName = `pr-14px pl-8px flex justify-center items-center `

export const comboBoxWithCustomTriggerContainerClassName = `flex w-auto`

export const comboBoxWithCustomTriggerContentContainerClassName = `mt-4px px-8px pt-8px`

export const textFieldBaseContainerClassName = `w-full flex`

export const inputFieldClassName = `w-full truncate`

export const comboBoxFieldContainerClassName = `w-full rounded-lg relative inline-flex flex-row flex-nowrap`

export const emptyListBoxContainerClassName = `mx-14px mt-10px w-full flex justify-center`

export const loaderContainerClassName = `flex justify-center items-center pl-8px`

export const emptyViewButtonClass =
   'w-full outline-none focus:outline-none flex justify-center empty-view-container'

export const getButtonTextStyles = (theme: any): string =>
   `${theme.retryTextColor} text-sm-semibold`

export const getButtonStyles = (theme: any): string =>
   `flex items-center justify-center px-14px py-8px ${theme.buttonBorderColor} border border-solid rounded-8px min-w-[93px]`

export const errorViewClassName =
   'flex justify-center items-center py-24px min-h-[240px]'

export const loadingViewClassName =
   'h-full flex items-center justify-center min-h-[156px] w-full'

export const mobileComboboxContainerClassName = 'flex flex-col justify-center'

export const mobileComboboxInputContainerClassName =
   'bg-gray-100 rounded-lg px-3 flex items-center w-full'

export const mobileComboboxInputClassName =
   'ml-2 bg-gray-100 text-sm outline-none grow rounded-lg text-gray-900'

export const mobileComboboxValueContainerClassName = `mt-2 flex justify-between items-center w-full`

export const mobileComboboxPlaceholderClassName = `text-gray-500 text-sm flex-1 text-left truncate mobile-combobox-text`

export const mobileComboboxClearIconClassName = `absolute top-1/2 -translate-y-1/2 right-10`

export const mobileComboboxHeaderClassName =
   'justify-between items-center w-full shrink-0 pr-6  mb-[10px]'

export const mobileComboboxTrayContainerClassName =
   'flex h-full flex-col w-full p-6 pr-0'

export const mobileComboboxOptionsContainerClassName = `outline-none py-[6px] pr-5 `

export const getMobileOptionStyles = (isSelected: boolean): string =>
   `text-sm rounded-2xl text-sm font-medium flex box-border w-full p-4 ${
      isSelected
         ? 'border-2 border-primary-600 text-primary-600 p-[15px] bg-primary-50'
         : 'border border-gray-200 text-gray-700'
   }`

export const noResultsViewContainerClassName =
   'm-auto pb-3 w-full h-full flex items-center justify-center flex-col'

export const noResultsViewTextClassName =
   'text-center text-gray-600 font-medium'

export const comboboxDisableStyles = 'cursor-not-allowed'
