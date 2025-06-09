import cn from 'classnames'
import { observer } from 'mobx-react'
import React, { Key, ReactElement } from 'react'

import { LoadingState, Selection } from '@react-types/shared'

import { useThemeContext } from '../../Theme/Provider'

import { Button, Hierarchy, SubVariant } from '../Button'
import { ListBox } from '../ListBox'
import { Loader } from '../Loader/Loader'

import { EACH_OPTION_ESTIMATED_ROW_HEIGHT } from './constants'
import * as Styles from './styles'
import { SectionItemType, SectionType } from './types'
import { CustomOptionType } from '../../types'

// NOTE: This component is designed to handle both Normal & Async cases

interface SectionMultiOptionsListAPIProps {
   isAPIFailed: boolean
   isLoading: boolean
   loadingState: LoadingState

   onLoadMore: () => void
   onRetry: () => void

   renderCustomLoader?: () => React.ReactElement
}

interface SectionMultiOptionsListProps {
   sectionWiseOptionsList: SectionType[]
   selectedOptionIds: string[]
   children: (section: SectionType) => React.ReactElement
   onChangeSelectedOptions: (optionIds: string[]) => void

   apiProps?: SectionMultiOptionsListAPIProps
   containerClassName?: string

   renderNoOptionsView?: () => React.ReactElement
   renderCustomOption?: (props: CustomOptionType<SectionType>) => ReactElement

   renderFetchAPIFailureView?: (onRetry: () => void) => React.ReactElement
   disabledKeys?: Iterable<Key>
}

const SectionMultiOptionsList = (
   props: SectionMultiOptionsListProps
): React.ReactElement => {
   const {
      sectionWiseOptionsList,
      selectedOptionIds,

      children,
      onChangeSelectedOptions,

      containerClassName,
      apiProps,

      renderNoOptionsView,

      renderCustomOption,
      renderFetchAPIFailureView,
      disabledKeys
   } = props

   const { theme, colorScheme } = useThemeContext()
   const { optionsSelector } = theme[colorScheme]

   const isNoSectionsAvailable = sectionWiseOptionsList.length === 0

   const renderLoader = (): React.ReactElement =>
      apiProps?.renderCustomLoader ? (
         apiProps.renderCustomLoader()
      ) : (
         <div className={Styles.loaderContainerStyles}>
            <Loader fill={optionsSelector.common.loaderFillColor} />
         </div>
      )

   const isInitialLoading =
      apiProps?.loadingState === 'loading' ||
      apiProps?.loadingState === 'filtering'
   if (isInitialLoading) return renderLoader()

   if (apiProps?.isAPIFailed)
      return renderFetchAPIFailureView ? (
         renderFetchAPIFailureView(apiProps.onRetry)
      ) : (
         <Button
            size={'Small'}
            hierarchy={Hierarchy.Primary}
            subVariant={SubVariant.Primary}
            onClick={apiProps.onRetry}
            className='m-4 self-center'
         >
            Retry
         </Button>
      )

   if (isNoSectionsAvailable) {
      return (
         renderNoOptionsView?.() ?? (
            <p className={Styles.getNoOptionsViewTextStyles(optionsSelector)}>
               No Result
            </p>
         )
      )
   }

   const handleOnSelectionChange = (keys: Selection): void => {
      const updatedSelectedOptionIds: Key[] =
         keys === 'all'
            ? sectionWiseOptionsList.map(option => option.section)
            : Array.from(keys)

      onChangeSelectedOptions(updatedSelectedOptionIds as string[])
   }

   return (
      <ListBox
         aria-labelledby='label'
         isLoading={apiProps?.isLoading}
         items={sectionWiseOptionsList}
         selectedKeys={selectedOptionIds}
         listBoxClassName={cn(containerClassName)}
         selectionMode='multiple'
         size={'Small'}
         customLoader={renderLoader}
         customOption={renderCustomOption}
         onLoadMore={apiProps?.onLoadMore}
         onSelectionChange={handleOnSelectionChange}
         listLayoutOptions={{
            estimatedRowHeight: EACH_OPTION_ESTIMATED_ROW_HEIGHT
         }}
         disabledKeys={disabledKeys}
      >
         {children}
      </ListBox>
   )
}

export default observer(SectionMultiOptionsList)
