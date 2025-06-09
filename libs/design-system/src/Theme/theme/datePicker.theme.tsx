import { colors } from '../../style-guide'

export const datePickerTheme = {
   light: {
      hoveredCell: 'bg-gray-50 text-gray-700',
      todayCell: 'bg-gray-100 text-gray-700',
      disabledCell: 'text-gray-500',
      selectedCell: 'text-base-white bg-primary-600',
      prevAndNextIconsColor: colors['gray-500'],
      prevAndNextIconsDisabledColor: colors['gray-300'],
      monthTitleColor: 'text-gray-700',
      calenderIconColor: colors['gray-500'],
      borderFocusColor: 'border-primary-600',
      normalCellTextColor: ' text-gray-700',
      normalCell: 'bg-transparent text-gray-700',
      selectedWithHoverCell: 'text-base-white bg-primary-700',
      todayWithDisabledCell: 'bg-gray-50 text-gray-500',
      dotUnselectedColor: 'bg-primary-600',
      dotSelectedColor: 'bg-base-white',
      triggerPlaceHolderTextColor: 'text-gray-500',
      triggerTextColor: 'text-gray-900',
      closeIconColor: colors['gray-600']
   },
   dark: {}
}
