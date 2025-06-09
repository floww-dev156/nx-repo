// #region - SectionOptionsSelector Styles
export const optionsSelectorContainerStyles = `flex flex-col`

export const optionsHeaderContainerStyles = `flex flex-col my-1 mx-4`
// #endregion

// #region - OptionsBody > OptionsList styles
export const loaderContainerStyles = `flex justify-center items-center p-4`

export const getNoOptionsViewTextStyles = (
   optionsSelectorTheme: any
): string => `
    mx-4 my-[14px] text-sm-regular
    ${optionsSelectorTheme.noOptionsViewText}
 `

export const optionsListBoxContainerStyles = `flex-1 py-1 px-0 m-0 max-h-[60%]`

export const getDefaultOptionTextStyles = (
   optionsSelectorTheme: any
): string => `
    flex-1 text-sm-medium truncate px-2
    ${optionsSelectorTheme.defaultOptionText}
`
// #endregion
