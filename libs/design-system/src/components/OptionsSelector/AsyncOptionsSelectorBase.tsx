import './index.css'

import cn from 'classnames'
import { observer } from 'mobx-react'
import React, { useMemo, useState } from 'react'

import { LoadingState } from '@react-types/shared'

import { useThemeContext } from '../../Theme/Provider'
import OptionsList from './OptionsList'
import SearchInput from './SearchInput'
import SelectedOptionBadgesList from './SelectedOptionBadgesList'
import SelectedOptionBadgesListWithSearch from './SelectedOptionBadgesListWithSearch'
import * as Styles from './styles'
import {
   CommonAsyncOptionsSelectorProps,
   OptionsSelectorOptionType,
   OptionsSelectorSectionType
} from './types'
import { getSearchBasedFilteredOptions } from './utils'

// NOTE: `OptionsSelector.tsx` && `AsyncOptionsSelector.tsx` implementations should be in sync

interface AsyncOptionsSelectorAPIProps {
   isAPIFailed: boolean
   isLoading: boolean
   loadingState: LoadingState
   shouldFetchMore: boolean

   fetchOnLoadMore: () => void
   fetchOnUpdateSearch: (searchKey: string) => void
   onRetry: () => void
}

interface Props<T extends OptionsSelectorOptionType>
   extends CommonAsyncOptionsSelectorProps<T> {
   apiProps: AsyncOptionsSelectorAPIProps
   options: T[]
   showSelectedOptions?: boolean
   withSections?: boolean
   selectionMode?: 'multiple' | 'single'
   shouldEnableInlineSearch?: boolean
   autoFocus?: boolean
}

const AsyncOptionsSelectorBase = <
   T extends OptionsSelectorOptionType | OptionsSelectorSectionType
>(
   props: Props<T>
): React.ReactElement => {
   const {
      apiProps,
      containerClassName,
      options,
      selectedOptions,
      autoFocus = true,
      onChangeSelectedOptions,

      searchProps = {},
      shouldEnableLocalFiltering = false,

      renderCustomLoader,
      renderCustomOptionContent,
      renderCustomSelectedOptionBadge,
      renderNoOptionsView,
      shouldFixListBoxHeight = true,
      shouldEnableInlineSearch = false,
      showSelectedOptions = true
   } = props

   const [searchKey, setSearchKey] = useState<string>('')

   const { theme, colorScheme } = useThemeContext()
   const { optionsSelector } = theme[colorScheme]

   const selectedOptionIds: string[] = useMemo(
      () => selectedOptions.map(each => each.id),
      [selectedOptions]
   )
   const filteredOptions: T[] = useMemo(
      // NOTE: doing client-side filtering as well to get the result quickly
      () =>
         shouldEnableLocalFiltering
            ? getSearchBasedFilteredOptions(options, searchKey)
            : options,
      [searchKey, options]
   )
   const getOption = <T extends OptionsSelectorOptionType>(
      optionId: string
   ): T => {
      if (!props.withSections) {
         const searchOptions = [...selectedOptions, ...options]
         const availableOption = searchOptions.find(
            each => each.id === optionId
         )

         if (!availableOption)
            throw new Error(
               'OptionsSelector - OptionNotFound - InvalidOptionId'
            )

         return availableOption as any
      }

      for (const section of props.options) {
         if ('children' in section && Array.isArray(section.children)) {
            const foundOption = section.children.find(
               option => option.id === optionId
            )
            if (foundOption) return foundOption as T
         }
      }

      throw new Error('Invalid option id')
   }

   const updateSelectedOptionsWithIds = (selectedOptionIds: string[]): void => {
      const updatedSelectedOptions = selectedOptionIds.map(getOption)
      onChangeSelectedOptions(updatedSelectedOptions as any)
   }

   const removeSelectedOption = (removeOptionId: string): void => {
      const filteredSelectedOptionIds = selectedOptionIds.filter(
         each => each !== removeOptionId
      )
      updateSelectedOptionsWithIds(filteredSelectedOptionIds)
   }

   const renderSearchView = (): React.ReactElement => (
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
   )

   return (
      <div
         className={cn(
            Styles.optionsSelectorContainerStyles,
            containerClassName
         )}
      >
         {!shouldEnableInlineSearch && renderSearchView()}

         <div
            className={cn(
               Styles.optionsBodyContainerStyles,
               'selected-options-and-options-list'
            )}
         >
            {shouldEnableInlineSearch ? (
               <SelectedOptionBadgesListWithSearch
                  selectedOptionsList={selectedOptions}
                  removeOption={removeSelectedOption}
                  containerClassName={cn(
                     Styles.getSelectedOptionBadgesListContainerWithSearchStyles(
                        optionsSelector
                     ),
                     props.selectedOptionsBadgesContainerClassName
                  )}
                  renderCustomSelectedOptionBadge={
                     renderCustomSelectedOptionBadge
                  }
                  debounceProps={{
                     timeDelay: searchProps.debounceTimeDelay,
                     triggerUpdate: apiProps.fetchOnUpdateSearch
                  }}
                  setSearchKey={setSearchKey}
                  searchKey={searchKey}
                  autoFocus={autoFocus}
                  placeholder={searchProps.placeholderText}
               />
            ) : showSelectedOptions ? (
               <SelectedOptionBadgesList
                  selectedOptionsList={selectedOptions}
                  removeOption={removeSelectedOption}
                  containerClassName={cn(
                     Styles.getSelectedOptionBadgesListContainerStyles(
                        optionsSelector
                     )
                  )}
                  renderCustomSelectedOptionBadge={
                     renderCustomSelectedOptionBadge
                  }
               />
            ) : null}

            <OptionsList
               optionsList={filteredOptions}
               selectedOptionIds={selectedOptionIds}
               updateSelectedOptionIds={updateSelectedOptionsWithIds}
               apiProps={{
                  isAPIFailed: apiProps.isAPIFailed,
                  isLoading: apiProps.isLoading,
                  loadingState: apiProps.loadingState,

                  onLoadMore: apiProps.fetchOnLoadMore,
                  onRetry: apiProps.onRetry,
                  renderCustomLoader: renderCustomLoader
               }}
               containerClassName={cn(
                  Styles.getOptionsListBoxContainerStyles(
                     shouldFixListBoxHeight
                  ),
                  'options-list'
               )}
               disabledKeys={props.disabledKeys}
               renderCustomOptionContent={renderCustomOptionContent}
               renderNoOptionsView={renderNoOptionsView}
               renderCustomOption={props.renderCustomOption}
               withSections={props.withSections}
               selectionMode={props.selectionMode}
            />
         </div>
      </div>
   )
}

export default observer(AsyncOptionsSelectorBase)
