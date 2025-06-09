import { colors } from '../../style-guide'

export const optionsSelectorTheme = {
   light: {
      common: {
         loaderFillColor: colors['primary-600']
      },

      defaultOptionContainer:
         'focus:bg-gray-50 focus:outline-none hover:bg-gray-50',
      defaultOptionText: 'text-gray-700',
      noOptionsViewText: 'text-gray-500',
      selectedOptionBadgeContainerBorder: 'border-gray-300',
      selectedOptionBadgesListBottomBorder: 'border-gray-300',
      selectedOptionBadgeText: 'text-gray-700',
      inlineSearchInputBg: 'bg-gray-50'
   },

   dark: {}
}
