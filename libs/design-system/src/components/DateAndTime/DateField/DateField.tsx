import React, { ReactNode, ReactElement } from 'react'
import {
   DateValue,
   SpectrumDateFieldProps,
   MappedDateValue
} from '@react-types/datepicker'
import { FocusableRef } from '@react-types/shared'

import { BasicSize } from '../../../types'
import { basicSizes } from '../../../constants/SizingConstants'

import { AdobeDateField } from './AdobeDateField'

export interface DateFieldProps {
   size?: BasicSize
   placeholderValue?: DateValue
   isReadOnly?: boolean
   isDisabled?: boolean
   isRequired?: boolean
   autoFocus?: boolean
   labelText?: string
   labelComponent?: ReactNode
   descriptionText?: string
   descriptionComponent?: ReactNode
   errorMessage?: string
   errorMessageComponent?: ReactNode
   value?: DateValue
   defaultValue?: DateValue
   onChange?: (value: MappedDateValue<DateValue>) => void
   onFocus?: (e: React.FocusEvent<Element>) => void
   onBlur?: (e: React.FocusEvent<Element>) => void
}

const DateField = (props: DateFieldProps) => {
   const {
      labelText,
      labelComponent,
      descriptionText,
      descriptionComponent,
      errorMessage,
      errorMessageComponent,
      size,
      ...otherProps
   } = props

   const customProps: SpectrumDateFieldProps<DateValue> = {
      ...otherProps,
      label: labelText ? labelText : labelComponent,
      description: descriptionText ? descriptionText : descriptionComponent,
      errorMessage: errorMessage ? errorMessage : errorMessageComponent
   }

   return <AdobeDateField size={size || basicSizes['small']} {...customProps} />
}

const _DateField = React.forwardRef(DateField) as (
   props: DateFieldProps & { ref?: FocusableRef<HTMLElement> }
) => ReactElement

export { _DateField as DateField }
