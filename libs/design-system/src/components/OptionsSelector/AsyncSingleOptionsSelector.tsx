import { observer } from 'mobx-react'
import React, { useEffect, useState } from 'react'

import { useAsyncList } from '../AsyncMultiSelectComboBox/hooks/useAsyncList'

import AsyncSingleOptionsSelectorBase from './AsyncSingleOptionsSelectorBase'
import {
   CommonAsyncSingleOptionsSelectorProps,
   OptionsSelectorOptionType
} from './types'

// NOTE: `OptionsSelector.tsx` && `AsyncOptionsSelector.tsx` implementations should be in sync

interface FilterDataStateType<T extends OptionsSelectorOptionType> {
   data: T[]
   filterText: string
}
interface Props<T extends OptionsSelectorOptionType>
   extends CommonAsyncSingleOptionsSelectorProps<T> {
   isAPIFailed: boolean
   shouldFetchMore: boolean

   fetchOptionsAPI: (
      pageNumber: number,
      searchText: string
   ) => Promise<T[] | null>
   renderEnhancerBetweenSearchAndResults?: (
      searchQuery: string
   ) => React.ReactElement
}

const AsyncOptionsSelector = <T extends OptionsSelectorOptionType>(
   props: Props<T>
): React.ReactElement => {
   const {
      isAPIFailed,
      shouldFetchMore,

      fetchOptionsAPI,

      ...otherProps
   } = props

   const [filterData, setFilterData] = useState<FilterDataStateType<T>>({
      data: [],
      filterText: ''
   })
   const [count, setCount] = useState<number>(0)

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
               res = (await fetchOptionsAPI(updatedCount, filterText)) ?? []

               setCount(updatedCount + 1)
               setFilterData({ filterText: filterText, data: res })
            }
         } catch (error) {
            console.log(error)
         }

         return {
            items: res ?? [],
            cursor: shouldFetchMore ? '' : undefined
         }
      },
      enableCache: false,
      initialFilterText: ''
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

   return (
      <AsyncSingleOptionsSelectorBase
         apiProps={{
            isAPIFailed: isAPIFailed,
            isLoading: list.isLoading,
            loadingState: list.loadingState,
            shouldFetchMore: shouldFetchMore,

            fetchOnLoadMore: doFetchMoreOptionsAPI,
            fetchOnUpdateSearch: doFetchOptionsAPI,
            onRetry: onAPIRetry
         }}
         options={list.items}
         {...otherProps}
      />
   )
}

export default observer(AsyncOptionsSelector)
