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

import cn from 'classnames'
import React, { useRef } from 'react'

import { useDateSegment } from '@react-aria/datepicker'
import { DateFieldState, DateSegment } from '@react-stately/datepicker'
import { DatePickerBase, DateValue } from '@react-types/datepicker'

import { BasicSize } from '../../../../../types'
import { useThemeContext } from '../../../../../Theme/Provider'

import { getSegmentStylesCell, segmentPlaceHolderClassName } from './styles'

import { dateSegmentSizes } from './sizes'
import './styles.css'

interface DatePickerSegmentProps extends DatePickerBase<DateValue> {
   segment: DateSegment
   state: DateFieldState
   size: BasicSize
   isRequired?: boolean
}

interface LiteralSegmentProps {
   segment: DateSegment
   size: BasicSize
}

export function DatePickerSegment({
   segment,
   state,
   size,
   ...otherProps
}: DatePickerSegmentProps) {
   switch (segment.type) {
      // A separator, e.g. punctuation
      case 'literal':
         return <LiteralSegment segment={segment} size={size} />

      // Editable segment
      default:
         return (
            <EditableSegment
               segment={segment}
               state={state}
               size={size}
               {...otherProps}
            />
         )
   }
}

function LiteralSegment({ segment, size }: LiteralSegmentProps) {
   const { theme, colorScheme } = useThemeContext()
   const coloredTheme = theme[colorScheme].dateSegment
   const dateSegmentSize = dateSegmentSizes[size]

   return (
      <span
         aria-hidden='true'
         className={cn(
            coloredTheme.placeholderColor,
            dateSegmentSize.placeholderTextSize,
            'segment-literal'
         )}
         data-testid={segment.type === 'literal' ? undefined : segment.type}
      >
         {segment.text}
      </span>
   )
}

function EditableSegment({ segment, size, state }: DatePickerSegmentProps) {
   let ref = useRef<InstanceType<typeof HTMLDivElement>>(null)
   let { segmentProps } = useDateSegment(segment, state, ref)

   const { theme, colorScheme } = useThemeContext()
   const coloredTheme = theme[colorScheme].dateSegment

   const dateSegmentSize = dateSegmentSizes[size]

   return (
      <div
         {...segmentProps}
         ref={ref}
         style={{
            ...segmentProps.style,
            minWidth:
               segment.maxValue != null ? String(segment.maxValue).length : ''
         }}
         className={cn(
            getSegmentStylesCell(
               coloredTheme,
               state.isDisabled,
               dateSegmentSize
            ),
            { 'segment-value': !segment.isPlaceholder && !state.isDisabled },
            { 'segment-value-disabled': state.isDisabled },
            'notranslate'
         )}
         data-testid={segment.type}
      >
         {segment.isPlaceholder ? (
            <span
               aria-hidden='true'
               className={cn(
                  {
                     [segmentPlaceHolderClassName]: !segment.isPlaceholder,
                     [(dateSegmentSize.placeholderWidth,
                     dateSegmentSize.placeHolderHeight)]: !segment.isPlaceholder
                  },
                  coloredTheme.placeholderColor,
                  dateSegmentSize.placeholderTextSize,
                  'translate'
               )}
            >
               {segment.placeholder}
            </span>
         ) : (
            segment.text
         )}
      </div>
   )
}
