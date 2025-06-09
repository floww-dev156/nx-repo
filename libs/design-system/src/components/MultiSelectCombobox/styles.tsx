import { BasicSize } from '../../types'

export const getStylesBasedOnSize = (size: BasicSize): string => {
   switch (size) {
      case 'ExtraSmall':
         return `text-sm-regular py-8px`
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

export const textFieldBaseContainerClassName = `flex`

export const inputFieldClassName = `w-full`

export const comboBoxFieldContainerClassName = `w-full rounded-lg relative inline-flex flex-row flex-nowrap`

export const emptyListBoxContainerClassName = `mx-14px mt-10px w-full flex justify-center`

export const loaderContainerClassName = `flex justify-center items-center pl-8px`

export const emptyViewButtonClass =
   'w-full outline-none focus:outline-none flex justify-center empty-view-container'

export const loadingViewClassName =
   'h-full flex items-center justify-center min-h-[156px] w-full '

export const getContainerStyles = (isDisabled: boolean): string => {
   const disabledStyles = isDisabled ? 'pointer-events-none' : ''
   return disabledStyles
}
