import React, { useMemo, useRef, useState } from 'react'

import { ThemeContextProvider } from '../../Theme/Provider'
import { defaultTheme } from '../../Theme/theme'
import { resolveWithTimeout } from '../../utils/apiUtils'

import AsyncSingleOptionsSelector from './AsyncSingleOptionsSelector'
import Option from './Option'
import { OptionsSelectorOptionType } from './types'

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

export const Base = (): React.ReactElement => {
   const [options, setOptions] = useState<OptionsSelectorOptionType[]>([])
   const [selectedOption, setSelectedOption] = useState<
      OptionsSelectorOptionType
   >()

   const totalCountRef = useRef(21)

   const fetchOptionsAPI = (
      pageNumber: number,
      searchText: string
   ): Promise<OptionsSelectorOptionType[]> => {
      const slicedOptionsList = getOptionsList(pageNumber)
      const response: OptionsSelectorOptionType[] = [
         ...options,
         ...slicedOptionsList
      ]
      setOptions(response)

      return resolveWithTimeout(response, 300) // TODO: when the API is speed, we are getting 2 API calls simultaneously
   }

   return (
      <ThemeContextProvider theme={defaultTheme}>
         <AsyncSingleOptionsSelector
            containerClassName='max-h-[420px] w-[420px] border border-blue-500'
            isAPIFailed={false}
            shouldFetchMore={options.length < totalCountRef.current}
            fetchOptionsAPI={fetchOptionsAPI}
            onChangeSelectedOption={setSelectedOption}
            searchProps={{ placeholderText: 'Search Numbers' }}
            selectedOption={selectedOption}
         />
      </ThemeContextProvider>
   )
}

export const WithCustomOption = (): React.ReactElement => {
   const [options, setOptions] = useState<OptionsSelectorOptionType[]>([])
   const [selectedOption, setSelectedOption] = useState<
      OptionsSelectorOptionType
   >()

   const totalCountRef = useRef(21)

   const renderCustomOptionContent = (
      option: OptionsSelectorOptionType,
      isSelected: boolean
   ): React.ReactElement => (
      <Option containerProps={{}} isSelected={isSelected} option={option} />
   )

   const fetchOptionsAPI = (
      pageNumber: number,
      searchText: string
   ): Promise<OptionsSelectorOptionType[]> => {
      const slicedOptionsList = getOptionsList(pageNumber)
      const response: OptionsSelectorOptionType[] = [
         ...options,
         ...slicedOptionsList
      ]
      setOptions(response)

      return resolveWithTimeout(response, 500)
   }

   return (
      <ThemeContextProvider theme={defaultTheme}>
         <AsyncSingleOptionsSelector
            containerClassName='max-h-[420px] w-[420px] border border-blue-500'
            isAPIFailed={false}
            shouldFetchMore={options.length < totalCountRef.current}
            fetchOptionsAPI={fetchOptionsAPI}
            onChangeSelectedOption={setSelectedOption}
            searchProps={{ placeholderText: 'Search Numbers' }}
            selectedOption={selectedOption}
            renderCustomOptionContent={renderCustomOptionContent}
         />
      </ThemeContextProvider>
   )
}

export const WithAPIFailed = (): React.ReactElement => {
   const [selectedOption, setSelectedOption] = useState<
      OptionsSelectorOptionType
   >()

   const fetchOptionsAPI = (
      pageNumber: number,
      searchText: string
   ): Promise<OptionsSelectorOptionType[]> => {
      const response: OptionsSelectorOptionType[] = []
      return resolveWithTimeout(response, 2000)
   }

   return (
      <ThemeContextProvider theme={defaultTheme}>
         <AsyncSingleOptionsSelector
            containerClassName='max-h-[420px] w-[420px] border border-blue-500'
            isAPIFailed={true}
            shouldFetchMore={false}
            fetchOptionsAPI={fetchOptionsAPI}
            onChangeSelectedOption={setSelectedOption}
            searchProps={{ placeholderText: 'Search Numbers' }}
            selectedOption={selectedOption}
         />
      </ThemeContextProvider>
   )
}

export const WithSearchEmptyResponseList = (): React.ReactElement => {
   const [options, setOptions] = useState<OptionsSelectorOptionType[]>([])
   const [searchText, setSearchText] = useState('')
   const [selectedOption, setSelectedOption] = useState<
      OptionsSelectorOptionType
   >()

   const totalCountRef = useRef(21)

   const shouldFetchMore = useMemo(
      () => (searchText ? false : options.length < totalCountRef.current),
      [options, searchText]
   )

   const fetchOptionsAPI = (
      pageNumber: number,
      searchText: string
   ): Promise<OptionsSelectorOptionType[]> => {
      const slicedOptionsList = getOptionsList(pageNumber)
      const response: OptionsSelectorOptionType[] = searchText
         ? []
         : [...options, ...slicedOptionsList]

      setOptions(response)
      setSearchText(searchText)

      return resolveWithTimeout(response, 300) // TODO: when the API is speed, we are getting 2 API calls simultaneously
   }

   return (
      <ThemeContextProvider theme={defaultTheme}>
         <AsyncSingleOptionsSelector
            containerClassName='max-h-[420px] w-[420px] border border-blue-500'
            isAPIFailed={false}
            shouldFetchMore={shouldFetchMore}
            fetchOptionsAPI={fetchOptionsAPI}
            onChangeSelectedOption={setSelectedOption}
            searchProps={{ placeholderText: 'Search Numbers' }}
            selectedOption={selectedOption}
         />
      </ThemeContextProvider>
   )
}

export const WithEmptyResponseList = (): React.ReactElement => {
   const [selectedOption, setSelectedOption] = useState<
      OptionsSelectorOptionType
   >()

   const fetchOptionsAPI = (
      pageNumber: number,
      searchText: string
   ): Promise<OptionsSelectorOptionType[]> => {
      const response: OptionsSelectorOptionType[] = []
      return resolveWithTimeout(response, 2000)
   }

   return (
      <ThemeContextProvider theme={defaultTheme}>
         <AsyncSingleOptionsSelector
            containerClassName='max-h-[420px] w-[420px] border border-blue-500'
            isAPIFailed={false}
            shouldFetchMore={false}
            fetchOptionsAPI={fetchOptionsAPI}
            onChangeSelectedOption={setSelectedOption}
            searchProps={{ placeholderText: 'Search Numbers' }}
            selectedOption={selectedOption}
         />
      </ThemeContextProvider>
   )
}

export default {
   title: 'Components/AsyncSingleOptionsSelector',
   component: AsyncSingleOptionsSelector
}
