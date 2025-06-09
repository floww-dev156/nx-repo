// #region - OptionsSelector Styles
export const optionsSelectorContainerStyles = `flex flex-col`

export const optionsHeaderContainerStyles = `flex flex-col my-1 mx-4`

export const optionsHeaderSearchInputLeftElementStyles = `mr-2`

// NOTE: `overflow-y-auto` is for enabling the nested 2 child scrolling
export const optionsBodyContainerStyles = `flex-1 flex flex-col overflow-y-auto`
// #endregion

// #region - OptionsBody > SelectedOptionBadges styles
export const loaderContainerStyles = `flex justify-center items-center p-4`

export const getNoOptionsViewTextStyles = (
   optionsSelectorTheme: any
): string => `
   mx-4 my-[14px] text-sm-regular
   ${optionsSelectorTheme.noOptionsViewText}
`

export const getSelectedOptionBadgesListContainerStyles = (
   optionsSelectorTheme: any //  TODO: Need to facilitate for max height handling
): string => `
    flex-shrink-0 flex flex-col px-4 pt-2 pb-1 m-0 max-h-[136px] overflow-y-auto
    border-b-1 ${optionsSelectorTheme.selectedOptionBadgesListBottomBorder}
`

export const getSelectedOptionBadgesListContainerWithSearchStyles = (
   optionsSelectorTheme: any //  TODO: Need to facilitate for max height handling
): string => `
    flex-shrink-0 flex flex-col px-4 py-[6px] m-0 max-h-[136px] overflow-y-auto
    border-b-1 ${optionsSelectorTheme.selectedOptionBadgesListBottomBorder} ${optionsSelectorTheme.inlineSearchInputBg}
`

export const selectedOptionBadgesListStyles = `flex flex-row flex-wrap`
export const selectedOptionBadgesListWithSearchStyles = `flex flex-row flex-wrap gap-[8px] 
overflow-y-auto input-and-selected-tags-container max-h-[150px]`

export const getSelectedOptionBadgeContainerStyles = (
   optionsSelectorTheme: any
): string => `
    flex flex-row items-center pl-2 pr-1 py-[3px] mr-2 mb-2 rounded-[6px] max-w-[100%]
    border ${optionsSelectorTheme.selectedOptionBadgeContainerBorder}
`

export const getSelectedOptionBadgeTextStyles = (
   optionsSelectorTheme: any
): string => `
    flex-1 text-xs-medium truncate mr-[3px]
    ${optionsSelectorTheme.selectedOptionBadgeText}
`

export const selectedOptionBadgeCloseIconContainerStyles = `p-[2px] focus:outline-none`
// #endregion

// #region - OptionsBody > OptionsList styles
export const getOptionsListBoxContainerStyles = (
   shouldFixListBoxHeight: boolean
) => `flex-1 py-1 px-0 m-0 ${shouldFixListBoxHeight ? 'max-h-[60%]' : ''}`

export const getDefaultOptionContainerStyles = (
   optionsSelectorTheme: any
): string => `
   flex flex-row items-center justify-between
   px-[10px] py-[9px] my-[2px] mx-6px
   rounded-10px
   ${optionsSelectorTheme.defaultOptionContainer}
`

export const getDefaultOptionTextStyles = (
   optionsSelectorTheme: any
): string => `
    flex-1 text-sm-medium truncate ml-2
    ${optionsSelectorTheme.defaultOptionText}
`
export const inlineSearchInputClassName = `text-sm-medium text-gray-800 outline-none active:outline-none
 focus:outline-none min-w-[75px] min-h-[26px] rounded-lg py-xs px-[1px] flex flex-1 bg-transparent`

// #endregion
