import React, { useState } from 'react'

import {
   CalendarDateTime,
   parseDate,
   parseDateTime
} from '@internationalized/date'
import { DateValue } from '@react-types/datepicker'
import { addParameters } from '@storybook/react'

import { ThemeContextProvider } from '../../../../Theme/Provider'
import { defaultTheme } from '../../../../Theme/theme'
import { Button, Hierarchy, SubVariant } from '../../../Button'

import { convertDateObjToCalendarDateTimeObj } from '../../common/utils/conversionUtils'

import { DateTimePicker, PrimaryActionArgs } from '../index'

const instruction =
   'Go through this Component Guide to get to know about ths Button Component'
addParameters({ notes: instruction })

export default {
   title: 'components/DateTimePicker',
   component: DateTimePicker,
   argTypes: {
      size: {
         options: ['ExtraSmall', 'Small', 'Medium'],
         control: { type: 'radio' }
      }
   }
}

export const DatePickerWithPlaceholder = props => (
   <ThemeContextProvider theme={defaultTheme}>
      <div
         style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
         }}
      >
         <div style={{ width: '328px' }}>
            <DateTimePicker labelText='Due Date' isRequired {...props} />
         </div>
      </div>
   </ThemeContextProvider>
)

export const DateTimePickerWithDefaultValue = props => {
   const defaultDateTimeValue = new Date(2023, 1, 5, 12, 30)

   return (
      <ThemeContextProvider theme={defaultTheme}>
         <div
            style={{
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center'
            }}
         >
            <div style={{ width: '328px' }}>
               <DateTimePicker
                  labelText='Due Date'
                  defaultValue={defaultDateTimeValue}
                  {...props}
               />
            </div>
         </div>
      </ThemeContextProvider>
   )
}

export const ControlledDateTimePicker = props => {
   let [value, setValue] = React.useState(new Date(2023, 1, 5, 12, 30))

   return (
      <ThemeContextProvider theme={defaultTheme}>
         <div
            style={{
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center'
            }}
         >
            <div style={{ width: '328px' }}>
               <DateTimePicker
                  labelText='Due Date'
                  value={value}
                  onChange={setValue}
                  {...props}
               />
            </div>
         </div>
      </ThemeContextProvider>
   )
}

export const DatePickerWithCustomTrigger = props => {
   const renderCustomTrigger = () => {
      return <div>Custom Trigger</div>
   }

   return (
      <ThemeContextProvider theme={defaultTheme}>
         <div
            style={{
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center'
            }}
         >
            <div style={{ width: '328px' }}>
               <DateTimePicker
                  labelText='Due Date'
                  isRequired
                  renderCustomTrigger={renderCustomTrigger}
                  {...props}
               />
            </div>
         </div>
      </ThemeContextProvider>
   )
}

export const DatePickerWithoutLabel = props => {
   return (
      <ThemeContextProvider theme={defaultTheme}>
         <div
            style={{
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center'
            }}
         >
            <div style={{ width: '328px' }}>
               <DateTimePicker {...props} />
            </div>
         </div>
      </ThemeContextProvider>
   )
}

export const ControlledDateTimePickerWithoutClearable = props => {
   let [value, setValue] = React.useState(new Date(2023, 1, 5, 12, 30))

   return (
      <ThemeContextProvider theme={defaultTheme}>
         <div
            style={{
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center'
            }}
         >
            <div style={{ width: '328px' }}>
               <DateTimePicker
                  labelText='Due Date'
                  value={value}
                  onChange={setValue}
                  isClearable={false}
                  {...props}
               />
            </div>
         </div>
      </ThemeContextProvider>
   )
}
export const DateTimePickerWithCustomFormat = props => {
   let [value, setValue] = React.useState(new Date(2023, 1, 5, 12, 30))

   return (
      <ThemeContextProvider theme={defaultTheme}>
         <div
            style={{
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center'
            }}
         >
            <div style={{ width: '328px' }}>
               <DateTimePicker
                  labelText='Due Date'
                  value={value}
                  onChange={setValue}
                  customFormat='YYYY-MM-DD HH:mm:ss'
                  {...props}
               />
            </div>
         </div>
      </ThemeContextProvider>
   )
}

// NOTE: updated the `Min` & `Max` Values to differentiate with a proper in between `defaultValue`
export const DateTimePickerWithMinAndMaxValue = props => (
   <ThemeContextProvider theme={defaultTheme}>
      <div
         style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
         }}
      >
         <div style={{ width: '328px' }}>
            <DateTimePicker
               defaultValue={new Date('2023-09-21')}
               isRequired
               labelText='Due Date'
               maxValue={new Date('2023-12-18')}
               minValue={new Date('2023-03-16')}
               {...props}
            />
         </div>
      </div>
   </ThemeContextProvider>
)

export const DateTimePickerWithDefaultOpen = props => (
   <ThemeContextProvider theme={defaultTheme}>
      <div
         style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
         }}
      >
         <div style={{ width: '328px' }}>
            <DateTimePicker
               labelText='Due Date'
               isRequired
               defaultOpen={true}
               {...props}
            />
         </div>
      </div>
   </ThemeContextProvider>
)

export const DateTimePickerWithDescription = props => (
   <ThemeContextProvider theme={defaultTheme}>
      <div
         style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
         }}
      >
         <div style={{ width: '328px' }}>
            <DateTimePicker
               labelText='Due Date'
               descriptionText='This is a hint text to help user.'
               {...props}
            />
         </div>
      </div>
   </ThemeContextProvider>
)

export const DateTimePickerWithDisabled = props => (
   <ThemeContextProvider theme={defaultTheme}>
      <div
         style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
         }}
      >
         <div style={{ width: '328px' }}>
            <DateTimePicker
               labelText='Due Date'
               descriptionText='This is a hint text to help user.'
               isDisabled={true}
               {...props}
            />
         </div>
      </div>
   </ThemeContextProvider>
)

export const DateTimePickerWithError = props => (
   <ThemeContextProvider theme={defaultTheme}>
      <div
         style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
         }}
      >
         <div style={{ width: '328px' }}>
            <DateTimePicker
               labelText='Due Date'
               descriptionText='This is a hint text to help user.'
               errorMessage='This is an error message.'
               {...props}
            />
         </div>
      </div>
   </ThemeContextProvider>
)

export const DateTimePickerWithErrorAndDefaultValue = props => {
   const defaultDateTimeValue = new Date(2023, 1, 5, 12, 30)

   return (
      <ThemeContextProvider theme={defaultTheme}>
         <div
            style={{
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center'
            }}
         >
            <div style={{ width: '328px' }}>
               <DateTimePicker
                  labelText='Due Date'
                  descriptionText='This is a hint text to help user.'
                  errorMessage='This is an error message.'
                  defaultValue={defaultDateTimeValue}
                  {...props}
               />
            </div>
         </div>
      </ThemeContextProvider>
   )
}

export const DatePickerWithCustomPrimaryActionButton = props => {
   const renderRescheduleActionButton = (
      args: PrimaryActionArgs
   ): React.ReactElement => {
      const [scheduledTime, setScheduledTime] = useState<Date | null>()
      const { isDisabled, setDateTime, closeCalendar } = args

      const onClickRescheduleReminder = (
         setDateTime: (value: DateValue) => void,
         closeCalendar: () => void
      ): void => {
         const dateTime = scheduledTime
            ? convertDateObjToCalendarDateTimeObj(scheduledTime)
            : null

         if (dateTime) setDateTime(dateTime)
         closeCalendar()
      }

      return (
         <Button
            hierarchy={Hierarchy.Primary}
            subVariant={SubVariant.Primary}
            size={'Medium'}
            className={'w-[104px]'}
            onClick={() =>
               onClickRescheduleReminder(setDateTime, closeCalendar)
            }
         >
            Reschedule
         </Button>
      )
   }

   const onSelectDateTime = (value: Date) => {
      setScheduledTime(value)
   }

   return (
      <ThemeContextProvider theme={defaultTheme}>
         <div
            style={{
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center'
            }}
         >
            <div style={{ width: '328px' }}>
               <DateTimePicker
                  isRequired
                  labelText='Due Date'
                  onSelectDateTime={onSelectDateTime}
                  renderPrimaryAction={renderRescheduleActionButton}
                  {...props}
               />
            </div>
         </div>
      </ThemeContextProvider>
   )
}
