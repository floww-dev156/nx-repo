export interface CustomDayProps {
   date: number
   givenDate: Date
   isDisabled: boolean
   onChangeDate: (date: Date) => void
   isCurrentMonth: boolean
   selected?: boolean
   empty?: boolean
   minValue?: Date
   maxValue?: Date
}
