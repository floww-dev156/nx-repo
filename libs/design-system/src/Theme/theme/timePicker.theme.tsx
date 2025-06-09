import { colors } from '../../style-guide'

export const timePickerTheme = {
   light: {
      labelTextColor: 'text-gray-700',
      segmentTextColor: 'text-gray-900',
      segmentPlaceholderTextColor: 'text-gray-500',
      timePickerContainerStyles: {
         default: {
            borderColor: 'border-gray-300'
         },
         selected: {
            borderColor: 'border-primary-300'
         },
         disableBgColor: 'bg-gray-50'
      },
      toggle: {
         backgroundColor: 'bg-gray-100',
         color: 'text-gray-500',
         selected: {
            bgColor: 'bg-base-white',
            color: 'text-gray-700'
         },

         clockFillIconColor: colors['gray-500']
      },
      separatorBorderColor: 'border-gray-300'
   },
   dark: {}
}
