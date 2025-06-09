import cn from 'classnames'
import { observer } from 'mobx-react'
import React, { Key } from 'react'

import { LoadingState, Selection } from '@react-types/shared'

import { useThemeContext } from '../../Theme/Provider'
import { CustomOptionType } from '../../types'

import { Button, Hierarchy, SubVariant } from '../Button'
import { Item, ListBox } from '../ListBox'
import { Loader } from '../Loader/Loader'

import Option from './Option'
import { EACH_OPTION_ESTIMATED_ROW_HEIGHT } from './constants'
import * as Styles from './styles'
import { OptionsSelectorOptionType } from './types'

// NOTE: This `SingleOptionsList.tsx` && `OptionsList.tsx` implementation should be in sync

// NOTE: This component is designed to handle both Normal & Async cases

interface OptionsListAPIProps {
   isAPIFailed: boolean
   isLoading: boolean
   loadingState: LoadingState

   onLoadMore: () => void
   onRetry: () => void

   renderCustomLoader?: () => void
}

interface Props<T extends OptionsSelectorOptionType> {
   optionsList: T[]

   onChangeSelectedOptionId: (optionId: string) => void

   estimatedRowHeight?: number
   rowHeight?: number
   apiProps?: OptionsListAPIProps
   containerClassName?: string
   selectedOption?: T

   renderCustomOptionContent?: (
      option: T,
      isSelected: boolean
   ) => React.ReactElement

   renderCustomOption?: (
      option: T,
      containerProps: any,
      isSelected: boolean,
      isDisabled?: boolean
   ) => React.ReactElement

   renderNoOptionsView?: () => React.ReactElement
}

const SingleOptionsList = <T extends OptionsSelectorOptionType>(
   props: Props<T>
): React.ReactElement => {
   const {
      optionsList,

      onChangeSelectedOptionId: onChangeSelectedOption,

      estimatedRowHeight = EACH_OPTION_ESTIMATED_ROW_HEIGHT,
      rowHeight,
      apiProps,
      containerClassName,
      selectedOption,
      renderCustomOption,

      renderCustomOptionContent,
      renderNoOptionsView
   } = props

   const { theme, colorScheme } = useThemeContext()
   const { optionsSelector } = theme[colorScheme]

   const isNoOptionsAvailable = optionsList.length === 0
   const selectedOptionIds = selectedOption ? [selectedOption.id] : []

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

   if (isNoOptionsAvailable) {
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
            ? optionsList.slice(0, 1).map(option => option.id)
            : Array.from(keys)
      const selectedOptionId = selectedOptionIds[0] as string

      onChangeSelectedOption(selectedOptionId)
   }

   const renderOptionContent = (
      option: T,
      isSelected: boolean
   ): React.ReactElement =>
      renderCustomOptionContent?.(option, isSelected) ?? (
         <p className={cn(Styles.getDefaultOptionTextStyles(optionsSelector))}>
            {option?.name}
         </p>
      )

   const renderOption = (props: CustomOptionType<T>): React.ReactElement => {
      const { item, isSelected, optionRef, optionProps } = props

      const option = item.value
      const containerProps = { ...optionProps, ref: optionRef }

      const className = cn(
         containerProps['className'],
         Styles.getDefaultOptionContainerStyles(optionsSelector)
      )

      if (renderCustomOption) {
         return renderCustomOption(option, containerProps, isSelected)
      }

      return option ? (
         <div {...containerProps} className={className} title={option?.name}>
            {renderOptionContent(option, isSelected)}
         </div>
      ) : (
         <></>
      )
   }

   return (
      <ListBox
         aria-labelledby='label'
         isLoading={apiProps?.isLoading}
         items={optionsList}
         listBoxClassName={cn(containerClassName)}
         selectedKeys={selectedOptionIds}
         selectionMode='single'
         size={'Small'}
         customLoader={renderLoader}
         customOption={renderOption}
         onLoadMore={apiProps?.onLoadMore}
         onSelectionChange={handleOnSelectionChange}
         listLayoutOptions={{
            estimatedRowHeight,
            rowHeight
         }}
      >
         {option => (
            <Item key={option.id} textValue={option.name}>
               {option.name}
            </Item>
         )}
      </ListBox>
   )
}

export default observer(SingleOptionsList)
