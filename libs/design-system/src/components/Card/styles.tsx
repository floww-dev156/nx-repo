export const getCardContainerClassNames = (
   isOutline: boolean,
   coloredTheme: any
): string => {
   return `
   ${
      isOutline
         ? `border border-solid ${coloredTheme.card.borderColor}`
         : 'border-none'
   }  
   rounded-24px
   
   `
}
