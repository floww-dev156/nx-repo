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

import React, { ReactNode, useContext, useRef } from 'react'
import cn from 'classnames'

import { useStyleProps } from '@react-spectrum/utils'
import { ListCollection } from '@react-stately/list'
import { SpectrumTabPanelsProps } from '@react-types/tabs'
import { useCollection } from '@react-stately/collections'
import { useTabPanel } from '@react-aria/tabs'

import { TabContext } from './Tabs'
import { tabPanelContainerClassName } from './styles'

/**
 * TabPanels is used within Tabs as a container for the content of each tab.
 * The keys of the items within the <TabPanels> must match up with a corresponding item inside the <TabList>.
 */
export function TabPanels<T>(props: SpectrumTabPanelsProps<T>) {
   const { tabState, tabProps } = useContext(TabContext)
   const { tabListState } = tabState

   const factory = nodes => new ListCollection(nodes)
   const collection = useCollection(
      { items: tabProps.items, ...props },
      factory,
      { suppressTextValueWarning: true }
   )
   const selectedItem = tabListState
      ? collection.getItem(tabListState.selectedKey)
      : null

   const selectedItemChildren = selectedItem
      ? selectedItem.props.children
      : null

   return (
      <TabPanel
         {...props}
         key={tabListState?.selectedKey}
         selectedItemChildren={selectedItemChildren}
      >
         {selectedItemChildren}
      </TabPanel>
   )
}
interface TabPanelProps<T> extends SpectrumTabPanelsProps<T> {
   selectedItemChildren: ReactNode
}

// @private
function TabPanel<T>(props: TabPanelProps<T>) {
   const { tabState, tabPanelProps: ctxTabPanelProps } = useContext(TabContext)
   const { tabListState } = tabState
   if (!tabListState) return null
   let ref = useRef(null)
   const { tabPanelProps } = useTabPanel(props, tabListState, ref)
   let { styleProps } = useStyleProps(props)

   if (ctxTabPanelProps['aria-labelledby']) {
      tabPanelProps['aria-labelledby'] = ctxTabPanelProps['aria-labelledby']
   }

   return (
      <div
         {...styleProps}
         {...tabPanelProps}
         ref={ref}
         className={cn(tabPanelContainerClassName, styleProps.className)}
      >
         {props.selectedItemChildren}
      </div>
   )
}
