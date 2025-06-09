import { observer } from 'mobx-react'
import React, { useEffect, useState } from 'react'

import { useAsyncList } from '../AsyncMultiSelectComboBox/hooks/useAsyncList'

import AsyncOptionsSelectorBase from './AsyncOptionsSelectorBase'
import {
   AsyncOptionsSelectorResponseDataType,
   CommonAsyncOptionsSelectorProps,
   OptionsSelectorOptionType
} from './types'

// NOTE: `OptionsSelector.tsx` && `AsyncOptionsSelector.tsx` implementations should be in sync

interface FilterDataStateType<T extends OptionsSelectorOptionType> {
   data: T[]
   filterText: string
}

interface Props<T extends OptionsSelectorOptionType>
   extends CommonAsyncOptionsSelectorProps<T> {
   fetchOptionsAPI: (
      pageNumber: number,
      searchText: string
   ) => Promise<AsyncOptionsSelectorResponseDataType<T>>
   showSelectedOptions?: boolean
   withSections?: boolean
   selectionMode?: 'multiple' | 'single'
   shouldAllowLocalFilter?: boolean
}

const AsyncOptionsSelector = <T extends OptionsSelectorOptionType>(
   props: Props<T>
): React.ReactElement => {
   const {
      fetchOptionsAPI,
      shouldAllowLocalFilter = false,
      ...otherProps
   } = props

   const [options, setOptions] = useState<T[]>([])
   const [filterData, setFilterData] = useState<FilterDataStateType<T>>({
      data: [],
      filterText: ''
   })

   const [count, setCount] = useState<number>(0)
   const [shouldFetchMore, setShouldFetchMore] = useState(true)
   const [isAPIFailed, setIsAPIFailed] = useState<boolean>(false)

   const list = useAsyncList<T, string>({
      async load({ signal, filterText = '', defaultCount }) {
         let res: T[] = []

         try {
            const shouldDoAPI =
               !(filterData.filterText === filterText && !shouldFetchMore) ||
               defaultCount === 0

            if (shouldDoAPI) {
               const updatedCount =
                  defaultCount !== undefined ? defaultCount : count
               const { options, totalCount } = await fetchOptionsAPI(
                  updatedCount,
                  filterText
               )

               setOptions(prevOptions => {
                  const isInitialFetch = updatedCount === 0
                  const finalOptions = isInitialFetch
                     ? options
                     : [...prevOptions, ...options] // TODO: check & handle duplicate cases

                  const isOptionsAvailableToFetch =
                     options.length > 0 &&
                     (totalCount ? finalOptions.length < totalCount : true)
                  setShouldFetchMore(isOptionsAvailableToFetch)

                  return finalOptions
               })

               res = options

               setCount(updatedCount + 1)
               setFilterData({ filterText: filterText, data: res })
               setIsAPIFailed(false)
            }
         } catch (error) {
            console.log(error)
            setIsAPIFailed(true)
         }

         return {
            items: res ?? [],
            cursor: shouldFetchMore ? '' : undefined
         }
      },
      enableCache: false
   })

   useEffect(() => {
      list.reload(0)
   }, [])

   const onAPIRetry = (): void => list.reload(0)

   const doFetchOptionsAPI = (searchKey: string): void => {
      setCount(0)
      list.setFilterText(searchKey)
   }

   const doFetchMoreOptionsAPI = (): void => {
      if (shouldFetchMore) list.loadMore()
   }

   const getUniqueOptions = data => {
      const seen = new Set()
      return data.filter(item => {
         if (seen.has(item.id)) return false
         seen.add(item.id)
         return true
      })
   }

   return (
      <AsyncOptionsSelectorBase
         apiProps={{
            isAPIFailed: isAPIFailed,
            isLoading: list.isLoading,
            loadingState: list.loadingState,
            shouldFetchMore: shouldFetchMore,

            fetchOnLoadMore: doFetchMoreOptionsAPI,
            fetchOnUpdateSearch: doFetchOptionsAPI,
            onRetry: onAPIRetry
         }}
         options={shouldAllowLocalFilter ? getUniqueOptions(options) : options} // TODO: check whether to use `options` || `list.items`
         {...otherProps}
      />
   )
}

export default observer(AsyncOptionsSelector)
