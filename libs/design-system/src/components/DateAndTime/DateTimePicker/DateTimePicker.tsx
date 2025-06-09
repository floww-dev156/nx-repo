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
   convertDateObjToCalendarDateTimeObj,
   convertDateValueObjToDateObj
} from '../common/utils/conversionUtils'
import { MobileDatePicker } from '../common/components/MobileDatePicker/MobileDatePicker'
import { AdobeDateTimePicker } from './AdobeDateTimePicker'

export interface PrimaryActionArgs {
   isDisabled: boolean
   setDateTime: (value: DateValue) => void
   closeCalendar: () => void
}

export interface DateTimePickerProps {
   size?: BasicSize
   placeholderText?: string
   isReadOnly?: boolean
   isDisabled?: boolean
   isRequired?: boolean
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
   showTime?: boolean
   hourPlaceholderText?: string
   minutePlaceholderText?: string
   customFormat?: string
   primaryActionText?: string
   secondaryActionText?: string
   isClearable?: boolean
   onOpenChange?: (isOpen: boolean) => void
   renderCustomTrigger?: () => ReactElement
   onSelectDateTime?: (value: Date | null) => void
   renderPrimaryAction?: (args: PrimaryActionArgs) => ReactElement
   containerClassName?: string
   descriptionClassName?: string
   labelClassName?: string
   offset?: number
   triggerRef?: React.RefObject<HTMLElement>
   shouldShowClearButtonInCalender?: boolean
   shouldDisablePageActions?: boolean
}

const DateTimePicker = (props: DateTimePickerProps) => {
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

   const convertedDateValue = value
      ? convertDateObjToCalendarDateTimeObj(value)
      : value

   const convertedDefaultDateValue = defaultValue
      ? convertDateObjToCalendarDateTimeObj(defaultValue)
      : undefined

   const convertedMaxValue = maxValue
      ? convertDateObjToCalendarDateTimeObj(maxValue)
      : undefined

   const convertedMinValue = minValue
      ? convertDateObjToCalendarDateTimeObj(minValue)
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

   //TODO: need to update type here
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
         canSelectTime
      />
   ) : (
      <AdobeDateTimePicker
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

const _DateTimePicker = React.forwardRef(DateTimePicker) as (
   props: DateTimePickerProps & { ref?: FocusableRef<HTMLElement> }
) => ReactElement

export { _DateTimePicker as DateTimePicker }
