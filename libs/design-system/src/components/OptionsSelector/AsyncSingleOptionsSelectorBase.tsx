import cn from 'classnames'
import { observer } from 'mobx-react'
import React, { useMemo, useState } from 'react'

import { LoadingState } from '@react-types/shared'

import { useThemeContext } from '../../Theme/Provider'

import SearchInput from './SearchInput'
import SingleOptionsList from './SingleOptionsList'
import * as Styles from './styles'
import {
   CommonAsyncSingleOptionsSelectorProps,
   OptionsSelectorOptionType
} from './types'
import { getSearchBasedFilteredOptions } from './utils'
import SelectedOptionBadgesListWithSearch from './SelectedOptionBadgesListWithSearch'

import './index.css'

// NOTE: `SingleOptionsSelector.tsx` && `AsyncSingleOptionsSelector.tsx` implementations should be in sync

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
   extends Omit<CommonAsyncSingleOptionsSelectorProps<T>, 'selectedOptions'> {
   apiProps?: AsyncOptionsSelectorAPIProps
   options: T[]
   renderEnhancerBetweenSearchAndResults?: (
      searchQuery: string
   ) => React.ReactElement
}

const AsyncSingleOptionsSelectorBase = <T extends OptionsSelectorOptionType>(
   props: Props<T>
): React.ReactElement => {
   const {
      apiProps,
      containerClassName,
      options,

      onChangeSelectedOption,

      estimatedRowHeight,
      rowHeight,
      searchProps = {},
      selectedOption,
      shouldEnableLocalFiltering = false,
      shouldEnableInlineSearch,
      autoFocus,
      renderCustomOption,
      renderCustomLoader,
      renderCustomOptionContent,
      renderCustomSelectedOptionBadge,
      shouldFixListBoxHeight = true,

      renderNoOptionsView
   } = props

   const [searchKey, setSearchKey] = useState<string>('')

   const filteredOptions: T[] = useMemo(
      // NOTE: doing client-side filtering as well to get the result quickly
      () =>
         shouldEnableLocalFiltering
            ? getSearchBasedFilteredOptions(options, searchKey)
            : options,
      [searchKey, options]
   )

   const { theme, colorScheme } = useThemeContext()
   const { optionsSelector } = theme[colorScheme]

   const getOption = (optionId: string): T | undefined =>
      options.find(each => each.id === optionId)

   const handleOnChangeSelectedOption = (selectedOptionId: string): void => {
      const selectedOption = getOption(selectedOptionId)
      onChangeSelectedOption(selectedOption)
   }

   return (
      <div
         className={cn(
            Styles.optionsSelectorContainerStyles,
            containerClassName,
            'async-single-options-selector'
         )}
      >
         {shouldEnableInlineSearch ? (
            <SelectedOptionBadgesListWithSearch
               selectedOptionsList={selectedOption ? [selectedOption] : []}
               removeOption={() => onChangeSelectedOption(undefined)}
               containerClassName={cn(
                  Styles.getSelectedOptionBadgesListContainerWithSearchStyles(
                     optionsSelector
                  ),
                  props.selectedOptionsBadgesContainerClassName
               )}
               renderCustomSelectedOptionBadge={renderCustomSelectedOptionBadge}
               setSearchKey={setSearchKey}
               searchKey={searchKey}
               autoFocus={autoFocus}
               placeholder={searchProps.placeholderText}
               debounceProps={{
                  timeDelay: searchProps.debounceTimeDelay,
                  triggerUpdate: apiProps?.fetchOnUpdateSearch
               }}
            />
         ) : (
            <SearchInput
               searchText={searchKey}
               shouldFocusAtInitial={true}
               updateSearchText={setSearchKey}
               containerClassName={Styles.optionsHeaderContainerStyles}
               debounceProps={{
                  timeDelay: searchProps.debounceTimeDelay,
                  triggerUpdate: apiProps?.fetchOnUpdateSearch
               }}
               placeholderText={searchProps.placeholderText}
            />
         )}

         {props.renderEnhancerBetweenSearchAndResults?.(searchKey)}
         <SingleOptionsList
            optionsList={filteredOptions}
            onChangeSelectedOptionId={handleOnChangeSelectedOption}
            apiProps={
               apiProps
                  ? {
                       isAPIFailed: apiProps.isAPIFailed,
                       isLoading: apiProps.isLoading,
                       loadingState: apiProps.loadingState,

                       onLoadMore: apiProps.fetchOnLoadMore,
                       onRetry: apiProps.onRetry,
                       renderCustomLoader: renderCustomLoader
                    }
                  : undefined
            }
            containerClassName={cn(
               Styles.getOptionsListBoxContainerStyles(shouldFixListBoxHeight),
               'options-list'
            )}
            selectedOption={selectedOption}
            renderCustomOptionContent={renderCustomOptionContent}
            renderCustomOption={renderCustomOption}
            renderNoOptionsView={renderNoOptionsView}
            estimatedRowHeight={estimatedRowHeight}
            rowHeight={rowHeight}
         />
      </div>
   )
}

export default observer(AsyncSingleOptionsSelectorBase)
