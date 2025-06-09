import React, { useEffect, useRef, useState } from 'react'

import { MultiSelectComboBox } from '../MultiSelectCombobox'
import { MultiSelectAsyncComboBoxInterface } from './types'
import { AsyncListData, useAsyncList } from './hooks/useAsyncList'

export const AsyncMultiSelectComboBox = <T extends unknown>(
   props: MultiSelectAsyncComboBoxInterface<T>
) => {
   const {
      debounceTime = 300,
      apiProps,
      onCloseMenu,
      onOpenMenu,
      shouldTriggerApiOnOpenChange
   } = props
   const { apiFunction, isInfiniteScrollable, shouldFetchMore } = apiProps

   const [value, setInputValue] = useState<string>(props.inputValue ?? '')
   const [isApiFailed, setIsApiFailed] = useState<boolean>(false)
   const [filterData, setFilterData] = useState<any>({})
   const isInitialRender = useRef(true)

   const [count, setCount] = useState<number>(0)

   let list = useAsyncList({
      async load({ signal, filterText, defaultCount }) {
         let res = []
         try {
            const shouldDoAPI =
               !(filterData.filterText === filterText && !shouldFetchMore) ||
               defaultCount === 0

            if (shouldDoAPI) {
               const updatedCount =
                  defaultCount !== undefined ? defaultCount : count
               res = await apiFunction(updatedCount, filterText)
               setCount(updatedCount + 1)

               setFilterData({ filterText: filterText, data: res })
               setIsApiFailed(false)
            }
         } catch (error) {
            console.log(error)
            setIsApiFailed(true)
            // return error
            //
         }

         return {
            items: res ?? [],
            cursor: shouldFetchMore ? '' : undefined
         }
      },
      setShouldInvalidate: props.setShouldInvalidate
   })

   useEffect(() => {
      if (isInitialRender.current) {
         isInitialRender.current = false

         return
      }

      if (props.inputValue === undefined) return

      setInputValue(props.inputValue as string)
      list.setFilterText(props.inputValue as string)
   }, [props.inputValue])

   const debounce = (func, timeout = 300) => {
      let timer
      return (...args) => {
         clearTimeout(timer)
         timer = setTimeout(() => {
            func.apply(this, args)
         }, timeout)
      }
   }

   const debounceInputChange = useRef(
      debounce((value: string, itemsList: AsyncListData<unknown>): void => {
         setCount(0)
         itemsList.setFilterText(value, 0)
      }, debounceTime)
   )

   const onInputChange = (value: string) => {
      setInputValue(value)
      debounceInputChange.current(value, list)
      props.onInputChange && props.onInputChange(value)
   }

   const onLoadMore = (): void => {
      const fetchMore = isInfiniteScrollable && shouldFetchMore
      if (fetchMore) {
         list.loadMore()
      }
   }

   const onApiRetry = () => {
      list.reload()
   }

   const onOpenChange = (open: boolean): void => {
      if (open) {
         const isFirstPage = count === 0

         if (isFirstPage) {
            setFilterData({})
            list.reload(0)
         } else if (shouldTriggerApiOnOpenChange) {
            setFilterData({})
            list.reload(0)
         }
         onOpenMenu && onOpenMenu()
      } else {
         onCloseMenu && onCloseMenu()
      }
   }

   return (
      <MultiSelectComboBox
         {...props}
         items={list.items}
         inputValue={value}
         loadingState={list.loadingState}
         isAsync={true}
         onInputChange={onInputChange}
         onLoadMore={onLoadMore}
         onApiRetry={onApiRetry}
         isApiFailed={isApiFailed}
         isControlledSelectedItems={true}
         onOpenChange={onOpenChange}
      >
         {props.children}
      </MultiSelectComboBox>
   )
}
