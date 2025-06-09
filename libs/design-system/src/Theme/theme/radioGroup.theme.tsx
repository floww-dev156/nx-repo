import { colors } from '../../style-guide/colors'
export const radioGroupTheme = {
   light: {
      selected: {
         borderColor: colors['primary-600'],
         dotColor: colors['primary-600'],
         background: {
            default: colors['base-white'],
            hovered: colors['primary-100']
         }
      },
      unSelected: {
         default: {
            borderColor: colors['gray-300'],
            backgroundColor: colors['base-white']
         },
         hover: {
            borderColor: colors['primary-600'],
            backgroundColor: colors['primary-100']
         },
         focus: {
            borderColor: colors['primary-300'],
            backgroundColor: colors['base-white'],
            focusRingColor: colors['primary-100']
         }
      },
      error: {
         selected: {
            borderColor: colors['error-600'],
            dotColor: colors['error-600'],
            background: {
               default: colors['base-white'],
               hovered: colors['error-100']
            }
         },
         unSelected: {
            hover: {
               borderColor: colors['error-600'],
               backgroundColor: colors['error-100']
            },
            focus: {
               borderColor: colors['error-300'],
               backgroundColor: colors['error-300']
            },
            default: {
               borderColor: colors['error-300']
            },
            dotColor: colors['error-600'],
            background: {
               default: colors['base-white'],
               hovered: colors['error-100']
            }
         }
      },
      disabled: {
         borderColor: colors['gray-300'],
         dotColor: colors['gray-300'],
         backgroundColor: colors['gray-100']
      },
      label: 'text-gray-700'
   },
   dark: {}
}
