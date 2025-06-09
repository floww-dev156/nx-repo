import { colors } from '../../style-guide/colors'
export const tagTheme = {
   light: {
      borderColor: 'border-gray-300',
      labelColor: 'text-gray-700',
      closeIconColor: colors['gray-400'],
      countLabelColor: 'text-gray-900'
   },
   dark: {},
   size: {
      tag: {
         ExtraSmall: 'mr-8px py-3px pl-4px pr-4px rounded-6px',
         Small: 'mr-8px py-2px pl-5px pr-4px rounded-6px',
         Medium: 'mr-8px py-2px pl-5px pr-4px rounded-6px'
      },
      label: {
         ExtraSmall: 'max-w-[56px] mr-3px text-xs-medium',
         Small: 'max-w-[56px] mr-3px text-sm-medium',
         Medium: 'max-w-[66px] mr-3px text-sm-medium'
      },
      closeIcon: {
         ExtraSmall: '14',
         Small: '16',
         Medium: '16'
      },
      countLabel: {
         ExtraSmall: 'text-sm-regular',
         Small: 'text-md-regular',
         Medium: 'text-md-regular'
      }
   }
}
