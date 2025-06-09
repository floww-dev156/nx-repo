import { observer } from 'mobx-react'
import React, { useEffect } from 'react'

import { Time } from '@internationalized/date'
import { TimeValue } from '@react-types/datepicker'

import { FocusRingVariant } from '../../types'

import AdobeTimeField from './AdobeTimeField/AdobeTimeField'

interface TimeFieldProps {
   hourCycle?: 12
   autoFocus?: boolean
   isDisabled?: boolean
   label?: string
   errorMessage?: string
   hint?: React.ReactNode
   timeValue?: string
   setTimeValue?: (value: string | undefined) => void
   onFocus?: (e: React.FocusEvent<Element>) => void
   onBlur?: (e: React.FocusEvent<Element>) => void
   onKeyDown?: (e: React.KeyboardEvent<Element>) => void
   isRequired?: boolean
   containerClassName?: string
   segmentsContainerClassName?: string
   dayPeriodTogglerContainerClassName?: string
   focusRingVariant?: FocusRingVariant
}

const TimeField = (props: TimeFieldProps): React.ReactElement => {
   const {
      timeValue,
      setTimeValue,
      onFocus,
      onBlur,
      hint,
      isDisabled,
      label,
      errorMessage,
      hourCycle = 12,
      autoFocus,
      isRequired,
      containerClassName,
      segmentsContainerClassName,
      dayPeriodTogglerContainerClassName,
      onKeyDown,
      focusRingVariant
   } = props

   const convertStringToTimeObject = (): TimeValue | undefined => {
      const eachTimeSegments = timeValue?.split(':')
      const isValidSegments = timeValue !== '--:--'

      if (isValidSegments) {
         if (eachTimeSegments) {
            const hoursTimeSegment = parseInt(eachTimeSegments[0])
            const minutesTimeSegment = parseInt(eachTimeSegments[1])
            const timeObject = new Time(hoursTimeSegment, minutesTimeSegment)
            return timeObject
         }
      }
      return undefined
   }

   const [adobeTimeValue, setAdobeTimeValue] = React.useState(
      convertStringToTimeObject()
   )

   const onChangeTime = (value: TimeValue) => {
      if (value) {
         const hourSegment = value.hour < 10 ? `0${value.hour}` : value.hour
         const minuteSegment =
            value.minute < 10 ? `0${value.minute}` : value.minute
         const timeStringValue = hourSegment + ':' + minuteSegment

         setTimeValue && setTimeValue(timeStringValue)
      } else {
         setTimeValue && setTimeValue(undefined)
      }
   }

   useEffect(() => {
      const timeObject = convertStringToTimeObject()
      setAdobeTimeValue(timeObject)
   }, [timeValue])

   return (
      <AdobeTimeField
         value={adobeTimeValue}
         onChange={onChangeTime}
         hint={hint}
         isDisabled={isDisabled}
         label={label}
         errorMessage={errorMessage}
         hourCycle={hourCycle}
         onFocus={onFocus}
         onBlur={onBlur}
         onKeyDown={onKeyDown}
         focusRingVariant={focusRingVariant}
         autoFocus={autoFocus}
         //@ts-ignore
         isRequired={isRequired}
         containerClassName={containerClassName}
         segmentsContainerClassName={segmentsContainerClassName}
         dayPeriodTogglerContainerClassName={dayPeriodTogglerContainerClassName}
      />
   )
}

export default observer(TimeField)
