import { isAfter, isBefore } from 'date-fns'

export const isDateWithinRange = (
   date: Date,
   startDate?: Date,
   endDate?: Date
): boolean => {
   if (startDate) {
      if (isBefore(date, startDate)) return false
   }
   if (endDate) {
      if (isAfter(date, endDate)) return false
   }
   return true
}
