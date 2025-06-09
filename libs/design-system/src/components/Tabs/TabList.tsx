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

import React, { useContext, useEffect, useState } from 'react'
import cn from 'classnames'

import { useStyleProps } from '@react-spectrum/utils'
import { SpectrumTabListProps } from '@react-types/tabs'
import { useTabListState } from '@react-stately/tabs'
import { useTabList } from '@react-aria/tabs'

import { useThemeContext } from '../../Theme/Provider'

import { TabsOrientation } from './constants'

import {
   getTabContentContainerStyle,
   getTabListStyles,
   tabListMainContainerClassName
} from './styles'
import { Tab } from './Tab'
import { TabContext } from './Tabs'
import { TabLine } from './TabLine'

/**
 * A TabList is used within Tabs to group tabs that a user can switch between.
 * The keys of the items within the <TabList> must match up with a corresponding item inside the <TabPanels>.
 */

export interface TabListProps<T> extends SpectrumTabListProps<T> {
   onHoveredTabLineClassName?: string
   onSelectedTabLineClassName?: string
   tabContainerClassName?: string
   tabsListContentClassName?: string
   tabListMainContainerClassName?: string
}

export function TabList<T extends object>(props: TabListProps<T>) {
   const tabContext = useContext(TabContext)
   const { refs, tabState, tabProps, tabPanelProps, size } = tabContext
   const { isQuiet, density, isEmphasized, orientation } = tabProps
   const { selectedTab, collapsed, setTabListState } = tabState
   const { tablistRef, wrapperRef } = refs
   // Pass original Tab props but override children to create the collection.
   const state = useTabListState({ ...tabProps, children: props.children })
   let [hoveredTab, setHoveredTab] = useState<HTMLElement | null>(null)

   const { theme, colorScheme } = useThemeContext()
   const coloredTheme = theme[colorScheme].tabs

   let { styleProps } = useStyleProps(props)
   const { tabListProps } = useTabList(
      { ...tabProps, ...props },
      state,
      tablistRef
   )

   useEffect(() => {
      // Passing back to root as useTabPanel needs the TabListState
      setTabListState(state)
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [
      state.disabledKeys,
      state.selectedItem,
      state.selectedKey,
      props.children
   ])

   let collapseStyle: React.CSSProperties =
      collapsed && orientation !== TabsOrientation.vertical
         ? {
              maxWidth: 'calc(100% + 1px)',
              overflow: 'hidden',
              visibility: 'hidden',
              position: 'absolute'
           }
         : { maxWidth: 'calc(100% + 1px)' }

   let stylePropsFinal =
      orientation === TabsOrientation.vertical
         ? styleProps
         : { style: collapseStyle }

   if (collapsed && orientation !== TabsOrientation.vertical) {
      tabListProps['aria-hidden'] = true
   }

   const tabItemsKeys = Array.from(state.collection.getKeys())

   const tabContent = (
      <div
         {...stylePropsFinal}
         {...tabListProps}
         ref={tablistRef}
         className={cn(
            getTabContentContainerStyle(coloredTheme.tabsList, orientation),
            getTabListStyles(orientation),
            orientation === TabsOrientation.vertical && styleProps.className,
            props.tabsListContentClassName
         )}
      >
         {tabItemsKeys.map(key => {
            const item = state.collection.getItem(key) as any

            return (
               <Tab
                  key={item.key}
                  item={item}
                  size={size}
                  tabContainerClassName={props.tabContainerClassName}
                  state={state}
                  orientation={orientation}
                  setHoveredTab={setHoveredTab}
               />
            )
         })}
         <TabLine
            key={`${tabItemsKeys.join(', ')}-tab-line`}
            orientation={orientation}
            selectedTab={selectedTab || undefined}
            tabLineClassName={props.onSelectedTabLineClassName}
         />
         {hoveredTab ? (
            <TabLine
               orientation={orientation}
               selectedTab={hoveredTab}
               tabLineClassName={props.onHoveredTabLineClassName}
            />
         ) : null}
      </div>
   )

   //NOTE: TabPicker component isn't integrated yet, will do it when required
   if (orientation === TabsOrientation.vertical) {
      return tabContent
   } else {
      return (
         <div
            {...styleProps}
            ref={wrapperRef}
            className={cn(
               tabListMainContainerClassName,
               styleProps.className,
               props.tabListMainContainerClassName
            )}
         >
            {/* <TabPicker
               {...props}
               {...tabProps}
               visible={collapsed}
               id={tabPanelProps['aria-labelledby']}
               state={state}
               // className={tabListclassName}
            /> */}
            {tabContent}
         </div>
      )
   }
}
