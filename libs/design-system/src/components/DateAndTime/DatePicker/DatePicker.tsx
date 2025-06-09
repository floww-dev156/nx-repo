import React, { ReactElement, ReactNode } from 'react'

import {
   DateValue,
   MappedDateValue,
   SpectrumDatePickerProps
} from '@react-types/datepicker'
import { Placement } from '@react-types/overlays'
import { FocusableRef } from '@react-types/shared'
import { useMediaQuery } from 'react-responsive'

import { positionConstants } from '../../../constants/OverlayConstants'
import { basicSizes } from '../../../constants/SizingConstants'
import { MOBILE_DEVICE_MAX_WIDTH } from '../../../constants/MediaQueryConstants'
import { BasicSize } from '../../../types'

import {
   convertDateValueObjToDateObj,
   convertDateObjToDateValueObj
} from '../common/utils/conversionUtils'

import { AdobeDatePicker } from './AdobeDatePicker'
import { MobileDatePicker } from '../common/components/MobileDatePicker/MobileDatePicker'

export interface DatePickerProps {
   size?: BasicSize
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
   isOpen?: boolean
   defaultOpen?: boolean
   minValue?: Date
   maxValue?: Date
   value?: Date | null
   defaultValue?: Date
   placement?: Placement
   isDateUnavailable?: (date: Date) => boolean
   onChange?: (value: Date | null) => void
   onFocus?: (e: React.FocusEvent<Element>) => void
   onBlur?: (e: React.FocusEvent<Element>) => void
   placeholderText?: string
   customFormat?: string
   isClearable?: boolean
   onOpenChange?: (isOpen: boolean) => void
   renderCustomTrigger?: () => ReactElement
   containerClassName?: string
   descriptionClassName?: string
   labelClassName?: string
   offset?: number
   triggerRef?: React.RefObject<HTMLElement>
   shouldShowClearButtonInCalender?: boolean
   shouldDisablePageActions?: boolean
}

const DatePicker = (props: DatePickerProps) => {
   const {
      labelText,
      labelComponent,
      descriptionText,
      descriptionComponent,
      errorMessage,
      errorMessageComponent,
      size,
      placement,
      defaultValue,
      value,
      minValue,
      maxValue,
      isDateUnavailable,
      containerClassName,
      descriptionClassName,
      labelClassName,
      ...otherProps
   } = props

   const convertedDateValue: DateValue | undefined | null | Date = value
      ? convertDateObjToDateValueObj(value)
      : value

   const convertedDefaultDateValue: DateValue | undefined = defaultValue
      ? convertDateObjToDateValueObj(defaultValue)
      : undefined

   const convertedMaxValue: DateValue | undefined = maxValue
      ? convertDateObjToDateValueObj(maxValue)
      : undefined

   const convertedMinValue: DateValue | undefined = minValue
      ? convertDateObjToDateValueObj(minValue)
      : undefined

   const onChange = (value: MappedDateValue<DateValue> | null) => {
      const convertedValue: Date | null = value
         ? convertDateValueObjToDateObj(value)
         : null

      otherProps.onChange && otherProps.onChange(convertedValue)
   }

   const convertIsDateUnavailable = (value: DateValue): boolean => {
      const convertedValue: Date = convertDateValueObjToDateObj(value)
      return isDateUnavailable ? isDateUnavailable(convertedValue) : false
   }

   //TODO: need to update proper type
   const customProps: SpectrumDatePickerProps<any> = {
      ...otherProps,
      defaultValue: convertedDefaultDateValue,
      onChange: onChange,
      value: convertedDateValue,
      maxValue: convertedMaxValue,
      minValue: convertedMinValue,
      isDateUnavailable: convertIsDateUnavailable,
      label: labelText ? labelText : labelComponent,
      description: descriptionText ? descriptionText : descriptionComponent,
      errorMessage: errorMessage ? errorMessage : errorMessageComponent
   }

   const isMobileDevice = useMediaQuery({
      query: `(max-width: ${MOBILE_DEVICE_MAX_WIDTH}px)`
   })

   const onClearDate = (): void => {
      onChange(null)
   }

   return isMobileDevice ? (
      <MobileDatePicker
         {...customProps}
         minValue={minValue}
         maxValue={maxValue}
         size={basicSizes['extraSmall']}
         onClearDate={onClearDate}
         containerClassName={containerClassName}
         descriptionClassName={descriptionClassName}
         labelClassName={labelClassName}
         value={props.value}
         defaultValue={props.defaultValue}
         onChange={props.onChange}
      />
   ) : (
      <AdobeDatePicker
         size={size || basicSizes['small']}
         placement={placement ?? positionConstants['bottom']}
         onClearDate={onClearDate}
         containerClassName={containerClassName}
         descriptionClassName={descriptionClassName}
         labelClassName={labelClassName}
         {...customProps}
         offset={props.offset}
         triggerRef={props.triggerRef}
         shouldShowClearButtonInCalender={props.shouldShowClearButtonInCalender}
         shouldDisablePageActions={props.shouldDisablePageActions}
      />
   )
}

const _DatePicker = React.forwardRef(DatePicker) as (
   props: DatePickerProps & { ref?: FocusableRef<HTMLElement> }
) => ReactElement

export { _DatePicker as DatePicker }
