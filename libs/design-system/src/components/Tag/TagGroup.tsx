import { mergeProps } from '@react-aria/utils'
import { useProviderProps } from '@react-spectrum/provider'
import { useDOMRef, useStyleProps } from '@react-spectrum/utils'
import {
   AriaLabelingProps,
   CollectionBase,
   DOMProps,
   DOMRef,
   StyleProps
} from '@react-types/shared'
import React, { Key, ReactElement, useRef } from 'react'
import { Tooltip } from 'react-tooltip'
import { v4 as uuid } from 'uuid'

import { useThemeContext } from '../../Theme/Provider'
import { BasicSize, CustomBadgeArgs } from '../../types'
import { colors } from '../../style-guide'

import { MultiSelectListProps } from '../MultiSelectPicker/useMultiSelectListState'

import { Tag } from './Tag'
import { useTagGroup } from './useTagGroup'
import { useTagGroupState } from './useTagGroupState'

export interface TagGroupProps<T>
   extends MultiSelectListProps<T>,
      Omit<CollectionBase<T>, 'disabledKeys'> {
   allowsRemoving?: boolean
   onRemove: (key: Key) => void
   maxValuesToShow?: number
   remainingTagsContainerClass?: string
   remainingTagsTextClass?: string
   size?: BasicSize
   customBadge?: (args: CustomBadgeArgs) => React.ReactNode
   tagsCountToolTipClassName?: string
   tagsContainerClassName?: string
}

export interface AriaTagGroupProps<T>
   extends TagGroupProps<T>,
      DOMProps,
      AriaLabelingProps {}

export interface SpectrumTagGroupProps<T>
   extends AriaTagGroupProps<T>,
      StyleProps {}

function TagGroup<T extends object>(
   props: SpectrumTagGroupProps<T>,
   ref: DOMRef<HTMLDivElement>
) {
   props = useProviderProps(props)
   let {
      allowsRemoving,
      onRemove,
      maxValuesToShow = 2,
      remainingTagsContainerClass,
      remainingTagsTextClass,
      customBadge,
      tagsCountToolTipClassName,
      tagsContainerClassName,
      ...otherProps
   } = props

   let domRef = useDOMRef(ref)
   let { styleProps } = useStyleProps(otherProps)
   const tooltipIdRef = useRef(uuid())

   let state = useTagGroupState(props)

   const { theme, colorScheme } = useThemeContext()
   const coloredTheme = theme[colorScheme]

   let { tagGroupProps } = useTagGroup(props, state, domRef)

   const totalKeys = Array.from(state.collection.getKeys())

   const keysToShow = totalKeys.slice(0, maxValuesToShow)

   const customTooltip = (): React.ReactElement => (
      <div className={`${tagsCountToolTipClassName} max-w-[200px]`}>
         {totalKeys.map((key, index) => {
            const item = state.collection.getItem(key)

            const isLastKey = index === totalKeys.length - 1
            return (
               <span>
                  {item?.rendered}
                  {isLastKey ? null : ', '}
               </span>
            )
         })}
      </div>
   )

   return (
      <div
         {...mergeProps(styleProps, tagGroupProps)}
         className={`flex items-center ${tagsContainerClassName}`}
         //@ts-ignore
         role={state.collection.size ? 'grid' : null}
         ref={domRef}
      >
         {keysToShow.map(key => {
            const item = state.collection.getItem(key)
            {
               return customBadge ? (
                  customBadge({ onRemove, item })
               ) : (
                  <Tag
                     {...item?.props}
                     key={item?.key}
                     item={item}
                     state={state}
                     allowsRemoving={allowsRemoving}
                     onRemove={onRemove}
                     size={props.size}
                  >
                     <span className='notranslate'>{item?.rendered}</span>
                  </Tag>
               )
            }
         })}

         {maxValuesToShow < totalKeys.length ? (
            <div
               className={`${coloredTheme.tag.countLabelColor} ${
                  theme.size.tag.countLabel[props.size ?? 'Medium']
               } ${remainingTagsContainerClass} `}
               data-tooltip-id={tooltipIdRef.current}
               data-tooltip-position-strategy='fixed'
            >
               <span className={remainingTagsTextClass}>
                  + {totalKeys.length - maxValuesToShow}
               </span>
               <Tooltip
                  id={tooltipIdRef.current}
                  classNameArrow={colors['gray-900']}
                  className='z-20 rounded-[8px]'
                  place='top'
               >
                  {customTooltip()}
               </Tooltip>
            </div>
         ) : null}
      </div>
   )
}

const _TagGroup = React.forwardRef(TagGroup) as <T>(
   props: SpectrumTagGroupProps<T> & { ref?: DOMRef<HTMLDivElement> }
) => ReactElement
export { _TagGroup as TagGroup }
