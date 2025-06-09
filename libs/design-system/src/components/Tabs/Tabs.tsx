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

import React, {
   MutableRefObject,
   ReactElement,
   useCallback,
   useEffect,
   useRef,
   useState
} from 'react'
import cn from 'classnames'

import { useDOMRef, useStyleProps } from '@react-spectrum/utils'
import { DOMRef, Orientation } from '@react-types/shared'
import { filterDOMProps } from '@react-aria/utils'
import { useId } from '@react-aria/utils'
import { SpectrumTabsProps } from '@react-types/tabs'

import { TabListState } from '@react-stately/tabs'
import { useLocale } from '@react-aria/i18n'
import { useProviderProps } from '@react-spectrum/provider'
import { useResizeObserver } from '@react-aria/utils'

import { SmallAndMedium } from '../../types'

import { TabsOrientation } from './constants'
import { getTabsChildrenContainerStyles } from './styles'

interface TabsContext<T> {
   tabProps: SpectrumTabsProps<T>
   tabState: {
      tabListState: TabListState<T> | null
      setTabListState: (state: TabListState<T>) => void
      selectedTab: HTMLElement | null
      collapsed: boolean
   }
   refs: {
      wrapperRef: MutableRefObject<HTMLDivElement | null>
      tablistRef: MutableRefObject<HTMLDivElement | null>
   }
   tabPanelProps: {
      'aria-labelledby': string
   }
   tabLineState: Array<DOMRect>
   size: SmallAndMedium
}

export const TabContext = React.createContext<TabsContext<any>>(null as any)

export interface TabsProps<T> extends SpectrumTabsProps<T> {
   size?: SmallAndMedium
}
function Tabs<T extends object>(
   props: TabsProps<T>,
   ref: DOMRef<HTMLDivElement>
) {
   props = useProviderProps(props)
   let {
      orientation = 'horizontal',
      density = 'regular',
      children,
      ...otherProps
   } = props

   let domRef = useDOMRef(ref)
   let tablistRef = useRef<HTMLDivElement>(null)
   let wrapperRef = useRef<HTMLDivElement>(null)

   let { direction } = useLocale()
   let { styleProps } = useStyleProps(otherProps)
   let [collapsed, setCollapsed] = useState(false)
   let [selectedTab, setSelectedTab] = useState<HTMLElement | null>(null)
   const [tabListState, setTabListState] = useState<TabListState<T> | null>(
      null
   )
   let [tabPositions, setTabPositions] = useState<DOMRect[]>([])
   let prevTabPositions = useRef(tabPositions)

   useEffect(() => {
      if (tablistRef.current) {
         let selectedTab: HTMLElement | null = tablistRef.current.querySelector(
            `[data-key="${tabListState?.selectedKey}"]`
         )

         if (selectedTab != null) {
            setSelectedTab(selectedTab)
         }
      }
      // collapse is in the dep array so selectedTab can be updated for TabLine positioning
   }, [children, tabListState?.selectedKey, collapsed, tablistRef])

   let checkShouldCollapse = useCallback(() => {
      if (wrapperRef.current && orientation !== TabsOrientation.vertical) {
         let tabsComponent = wrapperRef.current
         let tabs = tablistRef.current?.querySelectorAll('[role="tab"]')
         if (!tabs?.length) return

         let tabDimensions: DOMRect[] = []
         tabs.forEach(tab => {
            tabDimensions.push(tab.getBoundingClientRect())
         })

         let farEdgeTabList = tabsComponent.getBoundingClientRect()[
            direction === 'rtl' ? 'left' : 'right'
         ]
         let farEdgeLastTab =
            tabDimensions[tabDimensions.length - 1][
               direction === 'rtl' ? 'left' : 'right'
            ]
         let shouldCollapse =
            direction === 'rtl'
               ? farEdgeLastTab < farEdgeTabList
               : farEdgeTabList < farEdgeLastTab
         setCollapsed(shouldCollapse)
         if (
            tabDimensions.length !== prevTabPositions.current.length ||
            tabDimensions.some(
               (box, index) =>
                  box?.left !== prevTabPositions.current[index]?.left ||
                  box?.right !== prevTabPositions.current[index]?.right
            )
         ) {
            setTabPositions(tabDimensions)

            prevTabPositions.current = tabDimensions
         }
      }
   }, [
      tablistRef,
      wrapperRef,
      direction,
      orientation,
      setCollapsed,
      prevTabPositions,
      setTabPositions
   ])

   useEffect(() => {
      checkShouldCollapse()
   }, [children, checkShouldCollapse])

   useResizeObserver({ ref: wrapperRef, onResize: checkShouldCollapse })

   let tabPanelProps = {
      'aria-labelledby': ''
   }

   // When the tabs are collapsed, the tabPanel should be labelled by the Picker button element.
   let collapsibleTabListId = useId()
   if (collapsed && orientation !== TabsOrientation.vertical) {
      tabPanelProps['aria-labelledby'] = collapsibleTabListId
   }
   return (
      <TabContext.Provider
         value={{
            tabProps: { ...props, orientation, density },
            tabState: { tabListState, setTabListState, selectedTab, collapsed },
            refs: { tablistRef, wrapperRef },
            tabPanelProps,
            tabLineState: tabPositions,
            size: props.size || 'Small'
         }}
      >
         <div
            {...filterDOMProps(otherProps)}
            {...styleProps}
            ref={domRef}
            className={cn(
               getTabsChildrenContainerStyles(orientation),
               styleProps.className
            )}
         >
            {props.children}
         </div>
      </TabContext.Provider>
   )
}

/**
 * Tabs organize content into multiple sections and allow users to navigate between them. The content under the set of tabs should be related and form a coherent unit.
 */
// forwardRef doesn't support generic parameters, so cast the result to the correct type
// https://stackoverflow.com/questions/58469229/react-with-typescript-generics-while-using-react-forwardref
const _Tabs = React.forwardRef(Tabs) as <T>(
   props: TabsProps<T> & { ref?: DOMRef<HTMLDivElement> }
) => ReactElement
export { _Tabs as Tabs }
