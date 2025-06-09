import { observer } from 'mobx-react'
import React, { useEffect, useRef, useState } from 'react'

import { useThemeContext } from '../../Theme/Provider'

import { useAsyncList } from '../AsyncComboBox/hooks/useAsyncListWithSections'
import { CheckBoxComponent } from '../CheckBox/CheckBox'
import { Item } from '../Item'
import { OptionsSelectorOptionType } from '../OptionsSelector/types'
import { Section } from '../Section'
import AsyncSectionMultiOptionsSelectorBase from './AsyncSectionMultiOptionsSelectorBase'

import AsyncSectionOptionsSelectorBase from './AsyncSectionOptionsSelectorBase'
import { SECTION_AND_ITEM_IDS_SEPARATOR } from './constants'
import SectionAsyncStore from './SectionAsyncStore'
import * as Styles from './styles'
import { BaseOptionItemType, SectionItemType, SectionType } from './types'

interface FilterDataStateType {
   data: SectionType[]
   filterText: string
}

interface Props {
   selectedOptions: SectionItemType[]
   isAPIFailed: boolean
   shouldFetchMore: boolean
   containerClassName: string
   fetchOptionsAPI: (
      scrollCount: number | undefined,
      filterText?: string
   ) => Promise<SectionType[] | null>
   onUpdateSelectedOptions: (item: SectionItemType[]) => void
   renderNoOptionsView?: () => React.ReactElement

   renderCustomOptionContent?: (
      option: BaseOptionItemType,
      isSelected: boolean
   ) => React.ReactElement

   renderFetchAPIFailureView?: (onRetry: () => void) => React.ReactElement
   selectedBadgesContainerClassName?: string
   selectedBadgesListContainerClassName?: string
   disabledKeys?: Iterable<React.Key>
}

const AsyncSectionMultiOptionsSelector = (props: Props): React.ReactElement => {
   const {
      isAPIFailed,
      shouldFetchMore,
      fetchOptionsAPI,
      selectedOptions,
      onUpdateSelectedOptions,
      ...otherProps
   } = props

   const [filterData, setFilterData] = useState<FilterDataStateType>({
      filterText: '',
      data: []
   })
   const [count, setCount] = useState<number>(0)

   const { current: sectionAsyncStore } = useRef(new SectionAsyncStore())

   const updateShouldInvalidate = (
      updatedInValidate: boolean,
      sectionKey?: string
   ): void => {
      const shouldInvalidateData = {
         ...sectionAsyncStore.searchSectionsInvalidations
      }
      if (!sectionKey) return
      shouldInvalidateData[sectionKey] = updatedInValidate
      sectionAsyncStore.updateSearchSectionsInvalidations(shouldInvalidateData)
   }

   let list = useAsyncList<SectionType, string>({
      async load({ signal, filterText, defaultCount }) {
         let res: SectionType[] = []

         try {
            const shouldDoAPI =
               !(filterData.filterText === filterText && !shouldFetchMore) ||
               defaultCount === 0

            if (shouldDoAPI) {
               const updatedCount =
                  defaultCount !== undefined ? defaultCount : count

               res = (await fetchOptionsAPI(updatedCount, filterText)) ?? []

               setCount(updatedCount + 1)
               setFilterData({ filterText: filterText || '', data: res })
            }
         } catch (error) {
            console.log(error)
         }

         return {
            items: res,
            cursor: shouldFetchMore ? '' : undefined
         }
      },
      enableCache: false,
      initialFilterText: '',

      setShouldInvalidate: updateShouldInvalidate
   })

   useEffect(() => {
      list.reload(0)
   }, [])

   const onSelectionChange = (items: SectionItemType[]): void => {
      onUpdateSelectedOptions(items)
   }

   const renderSectionItem = (
      eachItem: SectionItemType
   ): React.ReactElement => (
      <Item textValue={eachItem.item.name || ''} key={eachItem.item.id}>
         <></>
      </Item>
   )

   const renderSection = (sectionItem: SectionType): React.ReactElement => (
      <Section
         key={sectionItem.key}
         items={sectionItem.children}
         title={sectionItem.section}
         shouldInvalidate={() => {
            //FIXME: need to fix this
            const invalidationState = sectionAsyncStore.searchSectionsInvalidations
               ? sectionAsyncStore.searchSectionsInvalidations?.[
                    sectionItem.key
                 ]
               : false

            return true
         }}
      >
         {renderSectionItem}
      </Section>
   )

   const onAPIRetry = (): void => list.reload(0)

   const doFetchOptionsAPI = (searchKey: string): void => {
      setCount(0)
      list.setFilterText(searchKey)
   }

   const doFetchMoreOptionsAPI = (): void => {
      if (shouldFetchMore) list.loadMore()
   }

   return (
      <AsyncSectionMultiOptionsSelectorBase
         selectedOptions={selectedOptions}
         onChangeSelectedOptions={onSelectionChange}
         apiProps={{
            isAPIFailed: isAPIFailed,
            isLoading: list.isLoading,
            loadingState: list.loadingState,
            shouldFetchMore: shouldFetchMore,

            fetchOnLoadMore: doFetchMoreOptionsAPI,
            fetchOnUpdateSearch: doFetchOptionsAPI,
            onRetry: onAPIRetry
         }}
         sectionWiseOptions={list.items}
         renderSection={renderSection}
         {...otherProps}
      />
   )
}

export default observer(AsyncSectionMultiOptionsSelector)
