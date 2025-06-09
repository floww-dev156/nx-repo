import { Hierarchy, SubVariant } from '../../components/Button'
import { colors } from '../../style-guide/colors'

export const closeIconButtonTheme = {
   light: {
      [Hierarchy.Tertiary]: {
         [SubVariant.Gray]: {
            focusRingVariant: 'None',
            default: {
               bgColor: 'bg-transparent',
               border: 'border-none',
               iconColor: colors['gray-500']
            },
            hover: {
               bgColor: 'bg-gray-50',
               border: 'border-none',
               iconColor: colors['gray-600']
            },
            focused: {
               bgColor: 'bg-gray-50',
               border: 'border-none',
               iconColor: colors['gray-500']
            }
         },
         [SubVariant.Primary]: {
            focusRingVariant: 'None',
            default: {
               bgColor: 'bg-transparent',
               border: 'border-none',
               iconColor: colors['primary-500']
            },
            hover: {
               bgColor: 'bg-primary-50',
               border: 'border-none',
               iconColor: colors['primary-600']
            },
            focused: {
               focusRingVariant: 'Primary',
               bgColor: 'bg-primary-50',
               border: 'border-none',
               iconColor: colors['primary-500']
            }
         }
      }
   },

   dark: {}
}
