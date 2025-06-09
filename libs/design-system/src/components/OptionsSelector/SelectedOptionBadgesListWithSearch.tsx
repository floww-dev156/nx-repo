import cn from 'classnames'
import { observer } from 'mobx-react'
import React, { useRef } from 'react'
import debounce from 'lodash/debounce'

import DefaultSelectedOptionBadge from './DefaultSelectedOptionBadge'
import * as Styles from './styles'
import { OptionsSelectorOptionType } from './types'
import './index.css'
import { DEFAULT_DEBOUNCE_UPDATE_SEARCH_TEXT_TIME_DELAY } from './constants'

interface DebounceSearchInputProps {
   timeDelay?: number

   triggerUpdate?: (value: string) => void
}

interface SelectedOptionBadgesListProps<T extends OptionsSelectorOptionType> {
   selectedOptionsList: T[]
   searchKey: string
   setSearchKey: (searchText: string) => void
   removeOption: (optionId: string) => void

   containerClassName?: string
   debounceProps?: DebounceSearchInputProps
   selectedBadgesListContainerClassName?: string

   renderCustomSelectedOptionBadge?: (
      option: T,
      removeOption: (optionId: string) => void
   ) => React.ReactElement
   autoFocus?: boolean
   placeholder?: string
}

const SelectedOptionBadgesList = <T extends OptionsSelectorOptionType>(
   props: SelectedOptionBadgesListProps<T>
): React.ReactElement => {
   const {
      selectedOptionsList,

      removeOption,

      containerClassName,
      debounceProps = {},
      selectedBadgesListContainerClassName,

      renderCustomSelectedOptionBadge,
      autoFocus = false,
      placeholder = ''
   } = props

   const debounceUpdateSearchTextRef = useRef(
      debounceProps.triggerUpdate
         ? debounce(
              debounceProps.triggerUpdate,
              debounceProps.timeDelay ??
                 DEFAULT_DEBOUNCE_UPDATE_SEARCH_TEXT_TIME_DELAY
           )
         : null
   )

   const renderOption = (option: T): React.ReactElement =>
      renderCustomSelectedOptionBadge?.(option, removeOption) ?? (
         <DefaultSelectedOptionBadge
            key={option.id}
            option={option}
            removeOption={removeOption}
         />
      )

   const onChangeInput = (e: any) => {
      props.setSearchKey(e.target.value)

      debounceUpdateSearchTextRef.current?.(e.target.value)
   }

   // NOTE: Not using `TagGroup` || `Tag` component here
   // NOTE: It's easier to implement `CustomSelectedOptionBadge` feature if implemented like this

   return (
      <div className={cn('scrollbar', containerClassName)}>
         <div
            className={cn(
               Styles.selectedOptionBadgesListWithSearchStyles,
               selectedBadgesListContainerClassName
            )}
         >
            {selectedOptionsList.map(renderOption)}
            <input
               value={props.searchKey}
               className={Styles.inlineSearchInputClassName}
               onChange={onChangeInput}
               autoFocus={autoFocus}
               placeholder={placeholder}
            />
         </div>
      </div>
   )
}

export default observer(SelectedOptionBadgesList)
