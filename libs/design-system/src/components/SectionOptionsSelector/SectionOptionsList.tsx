import cn from 'classnames'
import { observer } from 'mobx-react'
import React, { Key } from 'react'

import { LoadingState, Selection } from '@react-types/shared'

import { useThemeContext } from '../../Theme/Provider'

import { Button, Hierarchy, SubVariant } from '../Button'
import { ListBox } from '../ListBox'
import { Loader } from '../Loader/Loader'

import { EACH_OPTION_ESTIMATED_ROW_HEIGHT } from './constants'
import * as Styles from './styles'
import { SectionType } from './types'

// NOTE: This component is designed to handle both Normal & Async cases

interface OptionsListAPIProps {
   isAPIFailed: boolean
   isLoading: boolean
   loadingState: LoadingState

   onLoadMore: () => void
   onRetry: () => void

   renderCustomLoader?: () => void
}

interface OptionsListProps {
   sectionWiseOptionsList: SectionType[]

   children: (section: SectionType) => React.ReactElement
   onChangeSelectedOption: (optionId: string) => void

   apiProps?: OptionsListAPIProps
   containerClassName?: string

   renderNoOptionsView?: () => React.ReactElement
}

const OptionsList = (props: OptionsListProps): React.ReactElement => {
   const {
      sectionWiseOptionsList,

      children,
      onChangeSelectedOption,

      containerClassName,
      apiProps,

      renderNoOptionsView
   } = props

   const { theme, colorScheme } = useThemeContext()
   const { optionsSelector } = theme[colorScheme]

   const isNoSectionsAvailable = sectionWiseOptionsList.length === 0

   const renderLoader = (): React.ReactElement =>
      typeof apiProps?.renderCustomLoader?.() === 'undefined' ? (
         <div className={Styles.loaderContainerStyles}>
            <Loader fill={optionsSelector.common.loaderFillColor} />
         </div>
      ) : (
         <></>
      )

   const isInitialLoading =
      apiProps?.loadingState === 'loading' ||
      apiProps?.loadingState === 'filtering'
   if (isInitialLoading) return renderLoader()

   if (apiProps?.isAPIFailed)
      return (
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
      const selectedOptionIds: Key[] =
         keys === 'all'
            ? sectionWiseOptionsList.map(option => option.section)
            : Array.from(keys)

      onChangeSelectedOption(selectedOptionIds[0] as string)
   }

   return (
      <ListBox
         aria-labelledby='label'
         isLoading={apiProps?.isLoading}
         items={sectionWiseOptionsList}
         listBoxClassName={cn(containerClassName)}
         selectionMode='single'
         size={'Small'}
         customLoader={renderLoader}
         onLoadMore={apiProps?.onLoadMore}
         onSelectionChange={handleOnSelectionChange}
         listLayoutOptions={{
            estimatedRowHeight: EACH_OPTION_ESTIMATED_ROW_HEIGHT
         }}
      >
         {children}
      </ListBox>
   )
}

export default observer(OptionsList)
