import { colors } from '../../style-guide'

export const listBoxTheme = {
   light: {
      listBoxOption: {
         selected: {
            backgroundColor: 'bg-gray-50',
            textColor: 'text-gray-900',
            tickColor: colors['primary-600']
         },
         focused: { backgroundColor: 'bg-gray-50', textColor: '' },
         hovered: {
            backgroundColor: 'bg-gray-50',
            textColor: 'text-gray-900'
         },
         disabled: {
            backgroundColor: 'bg-gray-25',
            textColor: 'text-gray-300'
         },
         default: {
            backgroundColor: 'bg-base-white',
            textColor: 'text-gray-900'
         }
      },
      listBoxSection: {
         borderColor: ' border-gray-200'
      }
   },
   dark: {}
}
