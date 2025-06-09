import cn from 'classnames'
import { observer } from 'mobx-react'
import React, { ReactElement, useEffect, useRef, useState } from 'react'

import { useThemeContext } from '../../Theme/Provider'

import { useAsyncList } from '../AsyncComboBox/hooks/useAsyncListWithSections'
import { Item } from '../Item'
import { Section } from '../Section'

import AsyncSectionOptionsSelectorBase from './AsyncSectionOptionsSelectorBase'
import { SECTION_AND_ITEM_IDS_SEPARATOR } from './constants'
import SectionAsyncStore from './SectionAsyncStore'
import * as Styles from './styles'
import { SectionItemType, SectionType } from './types'

interface FilterDataStateType {
   data: SectionType[]
   filterText: string
}

// TODO: use `CommonAsyncSectionOptionsSelectorProps`
interface Props {
   containerClassName: string
   isAPIFailed: boolean
   shouldFetchMore: boolean

   fetchOptionsAPI: (
      scrollCount: number | undefined,
      filterText?: string
   ) => Promise<SectionType[] | null>
   onChangeValue: (itemId: string | null, sectionId: string | null) => void

   sectionId?: string
   selectedValue?: string
   optionClassName?: string
   renderFieldIcon?: (fieldId: string) => ReactElement
   renderNoOptionsView?: () => React.ReactElement
}

const AsyncSectionOptionsSelector = (props: Props): React.ReactElement => {
   const {
      isAPIFailed,
      shouldFetchMore,
      optionClassName,

      fetchOptionsAPI,
      onChangeValue,

      ...otherProps
   } = props

   const [filterData, setFilterData] = useState<FilterDataStateType>({
      filterText: '',
      data: []
   })
   const [count, setCount] = useState<number>(0)

   const { current: sectionAsyncStore } = useRef(new SectionAsyncStore())

   const { theme, colorScheme } = useThemeContext()
   const { optionsSelector } = theme[colorScheme]

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

   const onSelectionChange = (key: any): void => {
      const [itemId, sectionId] = key.split(SECTION_AND_ITEM_IDS_SEPARATOR)
      onChangeValue(itemId, sectionId)
   }

   const renderIcon = (key: string): ReactElement => {
      const [itemId, _] = key.split(SECTION_AND_ITEM_IDS_SEPARATOR)
      return props.renderFieldIcon ? props.renderFieldIcon(itemId) : <></>
   }

   const renderSectionItem = (
      eachItem: SectionItemType
   ): React.ReactElement => (
      <Item textValue={eachItem.item.name || ''} key={eachItem.item.id}>
         <div className='flex items-start gap-2'>
            {props.renderFieldIcon ? renderIcon(eachItem.item.id) : null}
            <p
               className={cn(
                  Styles.getDefaultOptionTextStyles(optionsSelector),
                  optionClassName
               )}
               title={eachItem.item.name || ''}
            >
               {eachItem.item.name}
            </p>
         </div>
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
      <AsyncSectionOptionsSelectorBase
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
         onChangeSelectedOption={onSelectionChange}
      />
   )
}

export default observer(AsyncSectionOptionsSelector)
