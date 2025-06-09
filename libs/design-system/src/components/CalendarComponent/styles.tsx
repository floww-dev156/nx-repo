export const calendarComponentContainerClassName = `h-[288px] flex flex-col`

export const weekDaysContainerClassName = `flex flex-row items-center justify-between px-3`

export const weekDayClassName = `text-gray-400 text-xs font-medium`

export const dayContainerClassName = `mb-1 flex flex-col justify-center cursor-pointer`

export const emptyDayClassName = `w-10 min-h-[40px]`

export const getDayContainerStyles = (
   isSelected?: boolean,
   isCurrentDay?: boolean
) =>
   `relative w-10 min-h-[40px] flex flex-col justify-center items-center rounded-full ${
      isSelected ? 'bg-primary-600 ' : isCurrentDay ? 'bg-gray-100' : 'bg-white'
   }`

export const getSelectedDayStyles = (
   isDisabled: boolean,
   isCurrentMonth?: boolean,
   isSelected?: boolean
) =>
   `text-md font-medium ${
      isCurrentMonth && isSelected
         ? 'text-white'
         : !isCurrentMonth || isDisabled
         ? 'text-gray-500'
         : 'text-gray-700'
   }`

export const getDayDotStyles = (isCurrentDay?: boolean) =>
   `absolute left-1/2 -translate-x-1/2 bottom-1 w-[5px] h-[5px] rounded-full ${
      isCurrentDay ? 'bg-rose-600' : 'bg-white'
   }`

export const monthContainerClassName = `flex flex-col justify-around mt-2`

export const weekContainerClassName = `flex flex-row justify-between`
