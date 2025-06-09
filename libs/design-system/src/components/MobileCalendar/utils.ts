const { format } = require('date-fns')

export const getIST = (date: Date): string =>
   date.toLocaleString('en-IN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
   })

export const getMonthYear = (date: Date): string =>
   date.toLocaleString('en-IN', {
      year: 'numeric',
      month: 'long'
   })

export function formatTimeInAMPM(date: Date) {
   // Ensure 'date' is a valid Date object
   if (!(date instanceof Date)) {
      throw new Error('Invalid Date object')
   }

   // Use the 'format' function from date-fns to format the time
   const formattedTime = format(date, 'hh:mm A')

   return formattedTime
}
