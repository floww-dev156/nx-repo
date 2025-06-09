export const getTagStyles = (colorTheme: any, sizeTheme: any) => {
   return `${colorTheme.borderColor} 
   flex items-center justify-between border border-solid ${sizeTheme}
   `
}

export const getLabelStyles = (colorTheme: any, sizeTheme: any) => {
   return `${colorTheme.labelColor} 
   ${sizeTheme} truncate self-start text-left`
}
