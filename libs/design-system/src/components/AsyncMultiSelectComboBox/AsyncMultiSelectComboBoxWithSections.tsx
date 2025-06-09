import React, { useEffect, useRef, useState } from 'react'

import { MultiSelectComboBox } from '../MultiSelectCombobox'
import { AsyncListData, useAsyncList } from './hooks/useAsyncListWithSections'
import { MultiSelectAsyncComboBoxInterface } from './types'

type MenuTriggerAction = 'focus' | 'input' | 'manual'

export const AsyncMultiComboBoxWithSections = <T extends unknown>(
   props: MultiSelectAsyncComboBoxInterface<T>
) => {
   const {
      debounceTime = 300,
      apiProps,
      shouldTriggerApiOnOpenChange,
      shouldTriggerAPIOnMount = true
   } = props
   const { apiFunction, isInfiniteScrollable, shouldFetchMore } = apiProps
   const [filterData, setFilterData] = useState<any>({})
   const [value, setInputValue] = useState<string>(props.inputValue ?? '')
   const [count, setCount] = useState<number>(0)
   const isInitialRender = useRef(true)

   let list = useAsyncList({
      async load({ signal, filterText, defaultCount }) {
         let data
         try {
            const shouldDoAPI =
               !(filterData.filterText === filterText && !shouldFetchMore) ||
               defaultCount === 0

            if (shouldDoAPI) {
               const updatedCount =
                  defaultCount !== undefined ? defaultCount : count

               data = await apiFunction(updatedCount, filterText)
               setCount(updatedCount + 1)
               setFilterData({ filterText: filterText, data: data })
            }
         } catch (error) {
            //
         }

         return {
            items: data ? data : [],
            cursor: shouldFetchMore ? '' : undefined
         }
      },
      setShouldInvalidate: props.setShouldInvalidate,
      initialSelectedKeys: props.selectedKeys,
      shouldTriggerAPIOnMount
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
      list.loadMore()
   }

   const onOpenChange = (
      open: boolean,
      otherProps?: MenuTriggerAction
   ): void => {
      if (open) {
         const isFirstPage = count === 0

         if (isFirstPage) {
            setFilterData({})
            list.reload(0)
         } else if (shouldTriggerApiOnOpenChange) {
            setFilterData({})
            list.reload(0)
         }
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
         onOpenChange={onOpenChange}
         onLoadMore={onLoadMore}
         onApiRetry={onApiRetry}
         isControlledSelectedItems={true}
      >
         {props.children}
      </MultiSelectComboBox>
   )
}

export default AsyncMultiComboBoxWithSections
