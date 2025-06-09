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
import { OptionsSelectorOptionType, OptionsSelectorSectionType } from './types'
import { Section } from '../Section/Section'

// NOTE: This `OptionsList.tsx` && `SingleOptionsList.tsx` implementation should be in sync

// NOTE: This component is designed to handle both Normal & Async cases

interface OptionsListAPIProps {
   isAPIFailed: boolean
   isLoading: boolean
   loadingState: LoadingState

   onLoadMore: () => void
   onRetry: () => void

   renderCustomLoader?: () => void
}

interface Props<
   T extends OptionsSelectorOptionType | OptionsSelectorSectionType
> {
   optionsList: T[]
   selectedOptionIds: string[]
   withSections?: boolean
   updateSelectedOptionIds: (selectedOptionIds: string[]) => void

   apiProps?: OptionsListAPIProps
   disabledKeys?: Iterable<Key>
   containerClassName?: string
   optionClassName?: string
   selectionMode?: 'multiple' | 'single'
   renderCustomOption?: (
      option: T,
      containerProps: any,
      isSelected: boolean,
      isDisabled?: boolean
   ) => React.ReactElement
   renderCustomOptionContent?: (
      option: T,
      isSelected: boolean
   ) => React.ReactElement
   renderNoOptionsView?: () => React.ReactElement
   estimatedRowHeight?: number
   rowHeight?: number
   disallowEmptySelection?: boolean
   virtualizerRenderCount?: number
}

const OptionsList = <T extends OptionsSelectorOptionType>(
   props: Props<T>
): React.ReactElement => {
   const {
      optionsList,
      selectedOptionIds,

      updateSelectedOptionIds,
      selectionMode = 'multiple',
      apiProps,
      containerClassName,
      optionClassName,
      renderCustomOption,
      renderCustomOptionContent,
      renderNoOptionsView,
      estimatedRowHeight,
      rowHeight,
      disallowEmptySelection = selectionMode === 'single',
      virtualizerRenderCount
   } = props

   const { theme, colorScheme } = useThemeContext()
   const { optionsSelector } = theme[colorScheme]

   const isNoOptionsAvailable = optionsList.length === 0

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
            ? optionsList.map(option => option.id)
            : Array.from(keys)

      updateSelectedOptionIds(selectedOptionIds as string[])
   }

   const renderOption = (props: CustomOptionType<T>): React.ReactElement => {
      const { item, isSelected, optionRef, isDisabled, optionProps } = props
      const containerProps = { ...optionProps, ref: optionRef }

      return (
         <Option
            containerProps={containerProps}
            isSelected={isSelected}
            option={item?.value}
            renderCustomContent={renderCustomOptionContent}
            renderCustomOption={renderCustomOption}
            isDisabled={isDisabled}
            optionClassName={optionClassName}
         />
      )
   }

   const renderOptionChildren = (option: any) => {
      return (
         <Item key={option.id} textValue={option.name}>
            {option.name}
         </Item>
      )
   }

   const renderSectionChildren = (sectionItem: any) => {
      return (
         <Section
            key={sectionItem.key}
            items={sectionItem.children}
            title={sectionItem.name}
            shouldInvalidate={() => {
               return true
            }}
         >
            {(item: any) => (
               <Item textValue={item.name} key={item.id}>
                  {item.name}
               </Item>
            )}
         </Section>
      )
   }

   return (
      <ListBox
         aria-labelledby='label'
         isLoading={apiProps?.isLoading}
         items={optionsList}
         listBoxClassName={cn(containerClassName)}
         selectedKeys={selectedOptionIds}
         selectionMode={selectionMode}
         size={'Small'}
         customLoader={renderLoader}
         customOption={renderOption}
         onLoadMore={apiProps?.onLoadMore}
         onSelectionChange={handleOnSelectionChange}
         disallowEmptySelection={disallowEmptySelection}
         listLayoutOptions={{
            estimatedRowHeight:
               estimatedRowHeight ?? EACH_OPTION_ESTIMATED_ROW_HEIGHT,
            rowHeight
         }}
         disabledKeys={props.disabledKeys}
         virtualizerRenderCount={virtualizerRenderCount}
      >
         {item => {
            return props.withSections
               ? renderSectionChildren(item)
               : renderOptionChildren(item)
         }}
      </ListBox>
   )
}

export default observer(OptionsList)
