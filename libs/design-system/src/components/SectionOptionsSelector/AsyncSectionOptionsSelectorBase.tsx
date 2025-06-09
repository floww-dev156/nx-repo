import cn from 'classnames'
import { observer } from 'mobx-react'
import React, { useMemo, useState } from 'react'

import { LoadingState } from '@react-types/shared'

import SearchInput from '../OptionsSelector/SearchInput'

import SectionOptionsList from './SectionOptionsList'
import * as Styles from './styles'
import { CommonAsyncSectionOptionsSelectorProps, SectionType } from './types'
import { getSearchBasedFilteredSections } from './utils'

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

   onChangeSelectedOption: (optionId: string) => void

   renderSection: (section: SectionType) => React.ReactElement
}

const AsyncSectionOptionsSelectorBase = (props: Props): React.ReactElement => {
   const {
      apiProps,
      containerClassName,
      sectionWiseOptions,

      onChangeSelectedOption,
      renderSection,

      searchProps = {},
      shouldEnableLocalFiltering = false,

      renderCustomLoader,
      renderNoOptionsView
   } = props

   const [searchKey, setSearchKey] = useState<string>('')

   const filteredSectionWiseOptions: SectionType[] = useMemo(
      // NOTE: need to do client-side filtering as well to get the result quickly
      () =>
         shouldEnableLocalFiltering
            ? getSearchBasedFilteredSections(sectionWiseOptions, searchKey)
            : sectionWiseOptions,
      [searchKey, sectionWiseOptions]
   )

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

         <SectionOptionsList
            sectionWiseOptionsList={filteredSectionWiseOptions}
            onChangeSelectedOption={onChangeSelectedOption}
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
         >
            {renderSection}
         </SectionOptionsList>
      </div>
   )
}

export default observer(AsyncSectionOptionsSelectorBase)
