import cn from 'classnames'
import { observer } from 'mobx-react'
import React, { useMemo, useState } from 'react'

import { LoadingState } from '@react-types/shared'

import { useThemeContext } from '../../Theme/Provider'
import Option from '../OptionsSelector/Option'
import SearchInput from '../OptionsSelector/SearchInput'
import SelectedOptionBadgesList from '../OptionsSelector/SelectedOptionBadgesList'
import { getSelectedOptionBadgesListContainerStyles } from '../OptionsSelector/styles'
import { OptionsSelectorOptionType } from '../OptionsSelector/types'
import SectionMultiOptionsList from './SectionMultiOptionsList'
import {
   CommonAsyncSectionOptionsSelectorProps,
   SectionItemType,
   SectionType
} from './types'
import { getSearchBasedFilteredSections } from './utils'

import * as Styles from './styles'
import './index.css'

interface APIProps {
   isAPIFailed: boolean
   isLoading: boolean
   loadingState: LoadingState
   shouldFetchMore: boolean

   fetchOnLoadMore: () => void
   fetchOnUpdateSearch: (searchKey: string) => void
   onRetry: () => void
}

interface Props extends CommonAsyncSectionOptionsSelectorProps {
   apiProps: APIProps
   sectionWiseOptions: SectionType[]
   selectedOptions: SectionItemType[]
   renderSection: (section: SectionType) => React.ReactElement
   onChangeSelectedOptions: (options: SectionItemType[]) => void
   renderCustomSelectedOptionBadge?: (
      option: OptionsSelectorOptionType,
      removeOption: (optionId: string) => void
   ) => React.ReactElement
   renderFetchAPIFailureView?: (onRetry: () => void) => React.ReactElement
   disabledKeys?: Iterable<React.Key>
}

const AsyncSectionMultiOptionsSelectorBase = (
   props: Props
): React.ReactElement => {
   const {
      apiProps,
      containerClassName,
      sectionWiseOptions,
      selectedOptions,
      disabledKeys,

      onChangeSelectedOptions,
      renderSection,

      searchProps = {},
      shouldEnableLocalFiltering = false,

      renderCustomLoader,
      renderNoOptionsView,
      renderCustomSelectedOptionBadge,
      renderCustomOptionContent,
      renderFetchAPIFailureView,
      selectedBadgesContainerClassName,
      selectedBadgesListContainerClassName
   } = props

   const { theme, colorScheme } = useThemeContext()
   const { optionsSelector } = theme[colorScheme]

   const [searchKey, setSearchKey] = useState<string>('')

   const selectedOptionIds: string[] = useMemo(
      () => selectedOptions.map(each => each.item.id),
      [selectedOptions]
   )

   const filteredSectionWiseOptions: SectionType[] = useMemo(
      // NOTE: need to do client-side filtering as well to get the result quickly
      () =>
         shouldEnableLocalFiltering
            ? getSearchBasedFilteredSections(sectionWiseOptions, searchKey)
            : sectionWiseOptions,
      [searchKey, sectionWiseOptions]
   )

   const getAllSectionOptions = (): SectionItemType[] => {
      let allAvailableOptions: SectionItemType[] = [...selectedOptions]
      sectionWiseOptions.forEach(section => {
         allAvailableOptions = [...allAvailableOptions, ...section.children]
      })
      allAvailableOptions = [...new Set(allAvailableOptions)]

      return allAvailableOptions
   }

   const onUpdateSelectedOptions = (optionIds: string[]): void => {
      let updatedSelectedOptions: SectionItemType[] = []

      const allAvailableOptions = getAllSectionOptions()

      optionIds.forEach(optionId => {
         const availableOption = allAvailableOptions.find(
            each => each.item.id === optionId
         )
         if (availableOption) updatedSelectedOptions.push(availableOption)
      })

      onChangeSelectedOptions(updatedSelectedOptions)
   }

   const removeSelectedOption = (removeOptionId: string): void => {
      const filteredSelectedOptions = selectedOptions.filter(each => {
         return each.item.id !== removeOptionId
      })
      onChangeSelectedOptions(filteredSelectedOptions)
   }

   const getSelectedOptionsForBadges = (
      selectedOptions: SectionItemType[]
   ): OptionsSelectorOptionType[] => {
      const selectedOptionsForBadges: OptionsSelectorOptionType[] = []

      selectedOptions.forEach(selectedOption => {
         const option: OptionsSelectorOptionType = {
            id: selectedOption.item.id,
            name: selectedOption.item.name ?? ''
         }
         selectedOptionsForBadges.push(option)
      })

      return selectedOptionsForBadges
   }

   //TODO: Fix Type Issue
   const renderOption = (props: any): React.ReactElement => {
      const { item, isSelected, optionRef, optionProps, isDisabled } = props
      const containerProps = { ...optionProps, ref: optionRef }

      if (!item.value.item) return <></>

      const option: OptionsSelectorOptionType = {
         id: item.value.item.id,
         name: item.value.item.name ?? ''
      }

      return (
         <Option
            containerProps={containerProps}
            isSelected={isSelected}
            option={option}
            renderCustomContent={renderCustomOptionContent}
            isDisabled={isDisabled}
         />
      )
   }

   return (
      <div
         className={cn(
            Styles.optionsSelectorContainerStyles,
            containerClassName,
            'async-section-options-selector'
         )}
      >
         <SearchInput
            searchText={searchKey}
            shouldFocusAtInitial={true}
            updateSearchText={setSearchKey}
            containerClassName={Styles.optionsHeaderContainerStyles}
            debounceProps={{
               timeDelay: searchProps.debounceTimeDelay,
               triggerUpdate: apiProps.fetchOnUpdateSearch
            }}
            placeholderText={searchProps.placeholderText}
         />

         <SelectedOptionBadgesList
            selectedOptionsList={getSelectedOptionsForBadges(selectedOptions)}
            removeOption={removeSelectedOption}
            containerClassName={cn(
               getSelectedOptionBadgesListContainerStyles(optionsSelector),
               '!max-h-[96px]',
               selectedBadgesContainerClassName
            )}
            renderCustomSelectedOptionBadge={renderCustomSelectedOptionBadge}
            selectedBadgesListContainerClassName={
               selectedBadgesListContainerClassName
            }
         />

         <SectionMultiOptionsList
            sectionWiseOptionsList={filteredSectionWiseOptions}
            onChangeSelectedOptions={onUpdateSelectedOptions}
            selectedOptionIds={selectedOptionIds}
            apiProps={{
               isAPIFailed: apiProps.isAPIFailed,
               isLoading: apiProps.isLoading,
               loadingState: apiProps.loadingState,

               onLoadMore: apiProps.fetchOnLoadMore,
               onRetry: apiProps.onRetry,
               renderCustomLoader: renderCustomLoader
            }}
            containerClassName={cn(
               Styles.optionsListBoxContainerStyles,
               'options-list'
            )}
            renderNoOptionsView={renderNoOptionsView}
            renderCustomOption={renderOption}
            renderFetchAPIFailureView={renderFetchAPIFailureView}
            disabledKeys={disabledKeys}
         >
            {renderSection}
         </SectionMultiOptionsList>
      </div>
   )
}

export default observer(AsyncSectionMultiOptionsSelectorBase)
