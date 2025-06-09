import cn from 'classnames'
import { observer } from 'mobx-react'
import React from 'react'

import DefaultSelectedOptionBadge from './DefaultSelectedOptionBadge'
import * as Styles from './styles'
import { OptionsSelectorOptionType } from './types'

interface SelectedOptionBadgesListProps<T extends OptionsSelectorOptionType> {
   selectedOptionsList: T[]

   removeOption: (optionId: string) => void

   containerClassName?: string
   selectedBadgesListContainerClassName?: string

   renderCustomSelectedOptionBadge?: (
      option: T,
      removeOption: (optionId: string) => void
   ) => React.ReactElement
}

const SelectedOptionBadgesList = <T extends OptionsSelectorOptionType>(
   props: SelectedOptionBadgesListProps<T>
): React.ReactElement => {
   const {
      selectedOptionsList,

      removeOption,

      containerClassName,
      selectedBadgesListContainerClassName,

      renderCustomSelectedOptionBadge
   } = props

   const isNoSelectedOptionsAvailable = selectedOptionsList.length === 0
   if (isNoSelectedOptionsAvailable) return <></>

   const renderOption = (option: T): React.ReactElement =>
      renderCustomSelectedOptionBadge?.(option, removeOption) ?? (
         <DefaultSelectedOptionBadge
            key={option.id}
            option={option}
            removeOption={removeOption}
         />
      )

   // NOTE: Not using `TagGroup` || `Tag` component here
   // NOTE: It's easier to implement `CustomSelectedOptionBadge` feature if implemented like this

   return (
      <div className={cn('scrollbar', containerClassName)}>
         <div
            className={cn(
               Styles.selectedOptionBadgesListStyles,
               selectedBadgesListContainerClassName
            )}
         >
            {selectedOptionsList.map(renderOption)}
         </div>
      </div>
   )
}

export default observer(SelectedOptionBadgesList)
