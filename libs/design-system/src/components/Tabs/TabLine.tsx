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

import React, { Key, useCallback, useContext, useState } from 'react'
import cn from 'classnames'
import { Orientation } from '@react-types/shared'
import { useLayoutEffect } from '@react-aria/utils'
import { useLocale } from '@react-aria/i18n'

import { TabContext } from './Tabs'
import { TabsOrientation } from './constants'
import { getTabLineStyles } from './styles'

interface TabLineProps {
   orientation?: Orientation
   selectedTab?: HTMLElement
   selectedKey?: Key
   tabLineClassName?: string
}

export function TabLine(props: TabLineProps) {
   let {
      orientation,
      // Is either the tab node (non-collapsed) or the picker node (collapsed)
      selectedTab,
      // selectedKey is provided so that the TabLine styles are updated when the TabPicker's width updates from a selection change
      selectedKey,
      tabLineClassName
   } = props

   let { direction } = useLocale()
   // let { scale } = useProvider()
   let { tabLineState } = useContext(TabContext)

   let [style, setStyle] = useState({
      width: '',
      height: ''
   })

   let onResize = useCallback(() => {
      if (selectedTab) {
         let styleObj = {
            transform: '',
            width: '',
            height: ''
         }
         // In RTL, calculate the transform from the right edge of the tablist so that resizing the window doesn't break the Tabline position due to offsetLeft changes
         let offset =
            direction === 'rtl'
               ? -1 *
                 ((selectedTab.offsetParent as HTMLElement)?.offsetWidth -
                    selectedTab.offsetWidth -
                    selectedTab.offsetLeft)
               : selectedTab.offsetLeft
         styleObj.transform =
            orientation === TabsOrientation.vertical
               ? `translateY(${selectedTab.offsetTop}px)`
               : `translateX(${offset}px)`

         if (orientation === TabsOrientation.horizontal) {
            styleObj.width = `${selectedTab.offsetWidth}px `
         } else {
            styleObj.height = `${selectedTab.offsetHeight}px`
         }
         setStyle(styleObj)
      }
   }, [direction, setStyle, selectedTab, orientation])

   useLayoutEffect(() => {
      onResize()
   }, [onResize, selectedKey, tabLineState])

   return (
      <div
         className={cn(getTabLineStyles(), tabLineClassName)}
         role='presentation'
         style={style}
      />
   )
}
