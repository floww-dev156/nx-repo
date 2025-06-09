import { useState } from 'react'

import { ThemeContextProvider } from '../../Theme/Provider'
import { defaultTheme } from '../../Theme/theme'
import { resolveWithTimeout } from '../../utils/apiUtils'

import AsyncOptionsSelector from './AsyncOptionsSelector'
import {
   AsyncOptionsSelectorResponseDataType,
   OptionsSelectorOptionType
} from './types'

type StoryBookResponseType = AsyncOptionsSelectorResponseDataType<
   OptionsSelectorOptionType
>

const getOptionsList = (
   multiplicativeOffset: number
): OptionsSelectorOptionType[] => {
   const limit = 10

   return Array(limit)
      .fill(0)
      .map((_, index) => {
         const offsetIndex = index + 1
         const finalVal = multiplicativeOffset
            ? multiplicativeOffset * limit + offsetIndex
            : offsetIndex

         return { id: finalVal.toString(), name: finalVal.toString() }
      })
}

export const Base = () => {
   const [selectedOptions, setSelectedOptions] = useState<
      OptionsSelectorOptionType[]
   >([])

   const fetchOptionsAPI = (
      pageNumber: number,
      searchText: string
   ): Promise<StoryBookResponseType> => {
      const slicedOptionsList: OptionsSelectorOptionType[] = getOptionsList(
         pageNumber
      )
      const response: StoryBookResponseType = {
         options: slicedOptionsList,
         totalCount: 21
      }

      return resolveWithTimeout(response, 300) // TODO: when the API is speed, we are getting 2 API calls simultaneously
   }

   return (
      <ThemeContextProvider theme={defaultTheme}>
         <AsyncOptionsSelector
            containerClassName='max-h-[420px] w-[420px] border border-blue-500'
            fetchOptionsAPI={fetchOptionsAPI}
            selectedOptions={selectedOptions}
            onChangeSelectedOptions={setSelectedOptions}
            searchProps={{ placeholderText: 'Search Numbers' }}
         />
      </ThemeContextProvider>
   )
}

export const WithoutTotalCount = () => {
   const [selectedOptions, setSelectedOptions] = useState<
      OptionsSelectorOptionType[]
   >([])

   const fetchOptionsAPI = (
      pageNumber: number,
      searchText: string
   ): Promise<StoryBookResponseType> => {
      const slicedOptionsList: OptionsSelectorOptionType[] = getOptionsList(
         pageNumber
      )
      const response: StoryBookResponseType = {
         options: pageNumber < 5 ? slicedOptionsList : []
      }

      return resolveWithTimeout(response, 2000)
   }

   return (
      <ThemeContextProvider theme={defaultTheme}>
         <AsyncOptionsSelector
            containerClassName='max-h-[420px] w-[420px] border border-blue-500'
            fetchOptionsAPI={fetchOptionsAPI}
            selectedOptions={selectedOptions}
            onChangeSelectedOptions={setSelectedOptions}
            searchProps={{ placeholderText: 'Search Numbers' }}
         />
      </ThemeContextProvider>
   )
}

export const WithEmptyResponseList = () => {
   const [selectedOptions, setSelectedOptions] = useState<
      OptionsSelectorOptionType[]
   >([])

   const fetchOptionsAPI = (
      pageNumber: number,
      searchText: string
   ): Promise<StoryBookResponseType> => {
      const response: StoryBookResponseType = {
         options: [],
         totalCount: 21
      }

      return resolveWithTimeout(response, 2000)
   }

   return (
      <ThemeContextProvider theme={defaultTheme}>
         <AsyncOptionsSelector
            containerClassName='max-h-[420px] w-[420px] border border-blue-500'
            fetchOptionsAPI={fetchOptionsAPI}
            selectedOptions={selectedOptions}
            onChangeSelectedOptions={setSelectedOptions}
            searchProps={{ placeholderText: 'Search Numbers' }}
         />
      </ThemeContextProvider>
   )
}

export default {
   title: 'Components/AsyncOptionsSelector',
   component: AsyncOptionsSelector
}
