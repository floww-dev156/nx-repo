import cn from 'classnames'
import { observer } from 'mobx-react'
import React, { useMemo, useState } from 'react'

import { useThemeContext } from '../../Theme/Provider'

import OptionsList from './OptionsList'
import SearchInput from './SearchInput'
import SelectedOptionBadgesList from './SelectedOptionBadgesList'
import SelectedOptionBadgesListWithSearch from './SelectedOptionBadgesListWithSearch'

import { SEARCH_INPUT_OPTIONS_MIN_THRESHOLD_LIMIT } from './constants'
import * as Styles from './styles'
import {
   OptionsSelectorOptionType,
   OptionsSelectorProps,
   OptionsSelectorSectionType
} from './types'
import { getSearchBasedFilteredOptions } from './utils'

import './index.css'

// NOTE: `OptionsSelector.tsx` && `AsyncOptionsSelector.tsx` implementations should be in sync

interface Props<T extends OptionsSelectorOptionType>
   extends OptionsSelectorProps<T> {
   optionClassName?: string
   withSections?: boolean
}

const OptionsSelector = <
   T extends OptionsSelectorOptionType | OptionsSelectorSectionType
>(
   props: Props<T>
): React.ReactElement => {
   const {
      containerClassName,
      options,
      selectedOptions,
      shouldEnableInlineSearch,
      onChangeSelectedOptions,

      searchProps = {},
      shouldEnableLocalFiltering = true,
      optionClassName,
      withSections = false,
      renderCustomOptionContent,
      renderCustomOption,
      renderCustomSelectedOptionBadge,
      renderNoOptionsView,
      disabledKeys,
      autoFocus,
      placeholder,
      disallowEmptySelection,
      shouldEnableSearch = true,
      shouldFixListBoxHeight = true
   } = props

   const [searchKey, setSearchKey] = useState<string>('')

   const { theme, colorScheme } = useThemeContext()
   const { optionsSelector } = theme[colorScheme]

   const selectedOptionIds: string[] = useMemo(
      () => selectedOptions.map(each => each.id),
      [selectedOptions]
   )
   const filteredOptions: T[] = useMemo(
      () =>
         shouldEnableLocalFiltering
            ? getSearchBasedFilteredOptions(options, searchKey)
            : options,
      [searchKey, selectedOptions]
   )

   const shouldRenderSearchInput =
      options.length >
         (searchProps.optionsMinThresholdLimit ??
            SEARCH_INPUT_OPTIONS_MIN_THRESHOLD_LIMIT) && shouldEnableSearch

   const getOption = <T extends OptionsSelectorOptionType>(
      optionId: string
   ): T => {
      if (!withSections) {
         const availableOption = options.find(each => each.id === optionId)
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

   const renderSearchView = (): React.ReactElement | null =>
      shouldRenderSearchInput ? (
         <SearchInput
            searchText={searchKey}
            shouldFocusAtInitial={true}
            updateSearchText={setSearchKey}
            containerClassName={Styles.optionsHeaderContainerStyles}
            placeholderText={searchProps.placeholderText}
         />
      ) : null

   return (
      <div
         className={cn(
            Styles.optionsSelectorContainerStyles,
            containerClassName
         )}
      >
         {renderSearchView()}

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
                  setSearchKey={setSearchKey}
                  searchKey={searchKey}
                  autoFocus={autoFocus}
                  placeholder={placeholder}
               />
            ) : (
               <SelectedOptionBadgesList
                  selectedOptionsList={selectedOptions}
                  removeOption={removeSelectedOption}
                  containerClassName={cn(
                     Styles.getSelectedOptionBadgesListContainerStyles(
                        optionsSelector
                     ),
                     props.selectedOptionsBadgesContainerClassName
                  )}
                  renderCustomSelectedOptionBadge={
                     renderCustomSelectedOptionBadge
                  }
               />
            )}

            <OptionsList
               optionsList={filteredOptions}
               selectedOptionIds={selectedOptionIds}
               updateSelectedOptionIds={updateSelectedOptionsWithIds}
               withSections={withSections}
               containerClassName={cn(
                  Styles.getOptionsListBoxContainerStyles(
                     shouldFixListBoxHeight
                  ),
                  'options-list',
                  props.listBoxContainerClassName
               )}
               renderCustomOptionContent={renderCustomOptionContent}
               renderCustomOption={renderCustomOption}
               renderNoOptionsView={renderNoOptionsView}
               disabledKeys={disabledKeys}
               optionClassName={optionClassName}
               selectionMode={props.selectionMode}
               estimatedRowHeight={props.estimatedRowHeight}
               rowHeight={props.rowHeight}
               disallowEmptySelection={disallowEmptySelection}
               virtualizerRenderCount={props.virtualizerRenderCount}
            />
         </div>
      </div>
   )
}

export default observer(OptionsSelector)
