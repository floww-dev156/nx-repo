export const dayPeriodValues = {
   am: 'AM',
   pm: 'PM'
}

const Hour = 'hour'
const Minute = 'minute'
const Second = 'second'
const Day = 'day'

export type GranularityValuesType =
   | typeof Hour
   | typeof Minute
   | typeof Second
   | typeof Day

export const granularityValues: Record<string, GranularityValuesType> = {
   hour: Hour,
   minute: Minute,
   second: Second,
   day: Day
}

export const UP_ARROW_KEY = 38
export const DOWN_ARROW_KEY = 40
export const RIGHT_ARROW_KEY = 39
