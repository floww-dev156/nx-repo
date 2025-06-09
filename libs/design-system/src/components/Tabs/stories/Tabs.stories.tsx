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
import React from 'react'
import { addParameters } from '@storybook/react'

import { ThemeContextProvider } from '../../../Theme/Provider'
import { defaultTheme } from '../../../Theme/theme'

import { Tabs } from '../Tabs'

import { DefaultStory } from './DefaultStory'
import { DynamicTabsStory } from './DynamicTabsStory'
import { UnControlledTabs } from './UnControlledStory'
import { ControlledTabs } from './ControlledTabsStory'

const instruction =
   'Go through this Component Guide to get to know about ths Button Component'
addParameters({ notes: instruction })

export default {
   component: Tabs,
   title: 'Components/Tabs',
   argTypes: {
      size: {
         options: ['Small', 'Medium'],
         control: { type: 'radio' }
      }
   }
}

export const defaultTabs = props => (
   <ThemeContextProvider theme={defaultTheme}>
      <DefaultStory {...props} />
   </ThemeContextProvider>
)

export const unControlledTabs = props => (
   <ThemeContextProvider theme={defaultTheme}>
      <UnControlledTabs {...props} />
   </ThemeContextProvider>
)

export const controlledTabs = props => (
   <ThemeContextProvider theme={defaultTheme}>
      <ControlledTabs {...props} />
   </ThemeContextProvider>
)

export const dynamicTabs = props => (
   <ThemeContextProvider theme={defaultTheme}>
      <DynamicTabsStory {...props} />
   </ThemeContextProvider>
)
