/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */
import React, { useEffect, useRef } from 'react'
import cn from 'classnames'
import { useHover } from '@react-aria/interactions'
import { useTab } from '@react-aria/tabs'
import { filterDOMProps, mergeProps } from '@react-aria/utils'
import { Text } from '@react-spectrum/text'
import { SlotProvider } from '@react-spectrum/utils'
import { TabListState } from '@react-stately/tabs'
import { DOMProps, Node, Orientation } from '@react-types/shared'

import { useThemeContext } from '../../Theme/Provider'
import { SmallAndMedium } from '../../types'

import { tabsSizes } from './sizes'
import { getTabContainerStyles } from './styles'

interface TabProps<T> extends DOMProps {
   item: Node<T>
   state: TabListState<T>
   isDisabled?: boolean
   orientation?: Orientation
   size: SmallAndMedium
   setHoveredTab: (tabElement: HTMLDivElement | null) => void
   tabContainerClassName?: string
}

// @private
export function Tab<T>(props: TabProps<T>) {
   let { item, state, size, setHoveredTab, tabContainerClassName } = props
   let { key, rendered } = item

   let ref = useRef<InstanceType<typeof HTMLDivElement>>(null)
   let { tabProps, isSelected, isDisabled } = useTab({ key }, state, ref)

   const { theme, colorScheme } = useThemeContext()
   const coloredTheme = theme[colorScheme].tabs
   const tabSize = tabsSizes[size]

   let { hoverProps, isHovered } = useHover({
      ...props
   })

   useEffect(() => {
      const hoveredTab = isHovered ? ref.current : null
      setHoveredTab(hoveredTab)
   }, [isHovered, ref])

   let domProps = filterDOMProps(item.props)
   delete domProps.id

   return (
      <div
         {...mergeProps(tabProps, hoverProps, domProps)}
         ref={ref}
         className={cn(
            getTabContainerStyles(
               coloredTheme.tab,
               tabSize,
               isSelected,
               isHovered,
               isDisabled
            ),
            tabContainerClassName
         )}
      >
         <SlotProvider>
            {typeof rendered === 'string' ? <Text>{rendered}</Text> : rendered}
         </SlotProvider>
      </div>
   )
}
