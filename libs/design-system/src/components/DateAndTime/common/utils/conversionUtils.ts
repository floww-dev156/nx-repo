import { CalendarDate, CalendarDateTime } from '@internationalized/date'
import { DateValue } from '@react-types/datepicker'

export const convertDateObjToDateValueObj = (date: Date): DateValue => {
   const convertedDate = new CalendarDate(
      date.getFullYear(),
      date.getMonth() + 1,
      date.getDate()
   )

   return convertedDate
}

export const convertDateValueObjToDateObj = (date: DateValue): Date => {
   if ('hour' in date) {
      return new Date(
         date.year,
         date.month - 1,
         date.day,
         date.hour,
         date.minute
      )
   }
   return new Date(date.year, date.month - 1, date.day)
}

export const convertDateObjToCalendarDateTimeObj = (date: Date): DateValue => {
   const convertedDate = new CalendarDateTime(
      date.getFullYear(),
      date.getMonth() + 1,
      date.getDate(),
      date.getHours(),
      date.getMinutes()
   )

   return convertedDate
}
