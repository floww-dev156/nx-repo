import { OptionsSelectorOptionType } from './types'

export const getSearchBasedFilteredOptions = <
   T extends OptionsSelectorOptionType
>(
   options: T[],
   searchKey: string
): T[] =>
   searchKey
      ? options.filter(each => {
           const lowercaseSearchKey = searchKey.toLowerCase()
           const lowercaseName = each.name.toLowerCase()

           // NOTE: confirm the Search logic with PMs
           return (
              lowercaseSearchKey.includes(lowercaseName) ||
              lowercaseName.includes(lowercaseSearchKey)
           )
        })
      : options
