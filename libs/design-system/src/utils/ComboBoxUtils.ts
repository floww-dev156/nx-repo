export const getSectionFormattedItems = (dataArray: Array<any>) => {
   const sectionFormattedArray = dataArray.reduce(function (
      acc: Array<any>,
      curr
   ) {
      const findIfSectionExist = acc.findIndex(function (item: any) {
         return item.section === curr.template
      })

      if (findIfSectionExist === -1) {
         const obj = {
            key: curr.template,
            section: curr.template,
            children: [curr]
         }
         acc.push(obj)
      } else {
         acc[findIfSectionExist].children.push(curr)
      }
      return acc
   },
   [])
   return sectionFormattedArray
}

function deduplicateSectionOptions(sections) {
   return sections.map(section => {
      // Create a map to track seen options
      const uniqueOptions = new Map()

      // Filter children to only keep the first occurrence of each option value
      const dedupedChildren = section.children.filter(child => {
         const optionValue = child.option.toLowerCase() // Case-insensitive comparison

         if (uniqueOptions.has(optionValue)) {
            return false // Skip this duplicate
         }
         uniqueOptions.set(optionValue, true)
         return true
      })

      // Return the section with deduplicated children
      return {
         ...section,
         children: dedupedChildren
      }
   })
}

export function getFilteredUniqueAsyncData(data) {
   // Deep clone the data to avoid mutating the original
   const clonedData = JSON.parse(JSON.stringify(data))

   // Deduplicate options within each section
   return deduplicateSectionOptions(clonedData)
}
