import DOMPurify from 'dompurify'

export const getFormattedVariableMarkdownContent = (
   markdown: string
): string => {
   const variableRegex = /\{\{.*?\s*.*?\}\}/g
   return markdown
      .replace(/\n/g, '  \n')
      .replace(variableRegex, match => `{{\`${match.slice(2, -2)}\`}}`)
}


export const getDomSanitizedValue = (value: string): string => {
   const sanitizedValue = DOMPurify.sanitize(value)

   return sanitizedValue
}