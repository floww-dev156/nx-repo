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
import React, { ReactElement, useRef } from 'react'

import { createCalendar } from '@internationalized/date'
import { useDateField } from '@react-aria/datepicker'
import { useLocale } from '@react-aria/i18n'
import { useFocusWithin } from '@react-aria/interactions'
import { useProviderProps } from '@react-spectrum/provider'
import { useDateFieldState } from '@react-stately/datepicker'
import { DateValue, SpectrumDateFieldProps } from '@react-types/datepicker'
import { FocusableRef } from '@react-types/shared'

import { useThemeContext } from '../../../Theme/Provider'
import { BasicSize } from '../../../types'

import { FocusRingWithBorder } from '../../FocusRing'
import { Hint } from '../../Hint'
import { Label } from '../../Label'

import { DatePickerSegment } from '../common/components/DatePickerSegment/DatePickerSegment'
import { Input } from '../common/components/Input/Input'
import { ValidationStateEnum } from '../common/constants/DateTimeConstants'

import {
   getDateFieldTriggerSizingStyles,
   getDateFieldTriggerThemeStyles
} from '../common/styles/styles'

//TODO: SpectrumDateFieldProps extends generic type <T extends DateValue>. we have error when we extends with T. need to resolve this
interface AdobeDateFieldProps extends SpectrumDateFieldProps<DateValue> {
   size: BasicSize
}

function AdobeDateField(
   props: AdobeDateFieldProps,
   ref: FocusableRef<HTMLElement>
) {
   props = useProviderProps(props)
   let {
      autoFocus,
      isDisabled,
      isReadOnly,
      isRequired,
      isQuiet,
      label,
      validationState,
      errorMessage,
      description,
      id,
      size,
      onChange
   } = props

   const { focusWithinProps } = useFocusWithin({
      isDisabled
   })
   const { theme, colorScheme } = useThemeContext()
   const commonDateFieldTriggerColoredTheme =
      theme[colorScheme].commonDateFieldTrigger

   let { locale } = useLocale()

   let state = useDateFieldState({
      ...props,
      locale,
      createCalendar
   })

   let inputRef = useRef(null)

   let { fieldProps, labelProps } = useDateField(props, state, inputRef)

   const isError =
      validationState === ValidationStateEnum.Invalid || !!errorMessage

   return (
      <>
         <Label
            labelProps={{ ...labelProps }}
            size={size}
            isRequired={isRequired}
         >
            {label}
         </Label>
         <FocusRingWithBorder within isError={isError}>
            <div
               {...focusWithinProps}
               className={cn(
                  getDateFieldTriggerThemeStyles(
                     commonDateFieldTriggerColoredTheme,
                     isDisabled
                  ),
                  getDateFieldTriggerSizingStyles(size)
               )}
            >
               <Input
                  ref={inputRef}
                  fieldProps={fieldProps}
                  isDisabled={isDisabled}
                  isQuiet={isQuiet}
                  autoFocus={autoFocus}
                  validationState={state.validationState}
                  size={size}
               >
                  {state.segments.map((segment, i) => (
                     <DatePickerSegment
                        key={i}
                        segment={segment}
                        size={size}
                        state={state}
                        isDisabled={isDisabled}
                        isReadOnly={isReadOnly}
                        isRequired={isRequired}
                     />
                  ))}
               </Input>
            </div>
         </FocusRingWithBorder>
         <Hint
            id={id || ''}
            size={size}
            hint={description}
            error={errorMessage}
         />
      </>
   )
}

const _AdobeDateField = React.forwardRef(AdobeDateField) as <
   T extends DateValue
>(
   props: AdobeDateFieldProps & { ref?: FocusableRef<HTMLElement> }
) => ReactElement
export { _AdobeDateField as AdobeDateField }
