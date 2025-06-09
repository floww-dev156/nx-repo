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
import { Transition } from 'react-transition-group'

const OPEN_STATES = {
   entering: false,
   entered: true
}

export function OpenTransition(props) {
   return (
      <Transition timeout={{ enter: 0, exit: 100 }} {...props}>
         {state =>
            React.Children.map(
               props.children,
               child =>
                  child &&
                  React.cloneElement(child, { isOpen: !!OPEN_STATES[state] })
            )
         }
      </Transition>
   )
}
