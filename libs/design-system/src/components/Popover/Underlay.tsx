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

interface UnderlayProps {
   isOpen?: boolean
   isTransparent?: boolean
   underlayClassName?: string
   shouldDisablePageActions?: boolean
}

//FIXME: need to update styles
export function Underlay({
   isOpen,
   isTransparent,
   underlayClassName,
   shouldDisablePageActions = false
}: UnderlayProps) {
   return (
      <div
         className={isOpen ? underlayClassName : ''}
         style={
            isOpen
               ? {
                    overflow: 'hidden',
                    // NOTE: need to validate z-index for all use cases
                    zIndex: shouldDisablePageActions ? 9999 : 1,
                    position: 'fixed',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    transitionDelay: '0s',
                    transitionDuration: '0.3s',
                    transitionProperty: 'opacity',
                    transitionTimingFunction: 'cubic-bezier(0, 0, 0.4, 1)'
                 }
               : {}
         }
      />
   )
}
