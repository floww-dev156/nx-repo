import { SectionType } from './types'

export const getSearchBasedFilteredSections = <T extends SectionType>(
   sections: T[],
   searchKey: string
): T[] => {
   if (!searchKey) return sections

   const lowerSearchKey = searchKey.toLowerCase()
   const filteredSectionItems: T[] = sections.map(eachSection => {
      const filteredChildren = eachSection.children.filter(eachChild => {
         const lowerName = eachChild.item.name?.toLowerCase() || ''
         return (
            // NOTE: confirm the Search logic with PMs
            lowerSearchKey.includes(lowerName) ||
            lowerName.includes(lowerSearchKey)
         )
      })
      return { ...eachSection, children: filteredChildren }
   })

   return filteredSectionItems.filter(({ children }) => children.length > 0)
}
