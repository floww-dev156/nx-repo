import { colors } from '../../style-guide/colors'

export const checkboxGroupTheme = {
   light: {
      selected: {
         borderColor: colors['primary-600'],
         background: {
            default: colors['primary-50'],
            hovered: colors['primary-100'],
            focus: colors['primary-50']
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
            background: {
               default: colors['error-50'],
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
               backgroundColor: colors['base-white']
            },
            default: {
               borderColor: colors['error-300'],
               backgroundColor: colors['base-white']
            },
            background: {
               default: colors['base-white'],
               hovered: colors['error-100']
            }
         }
      },
      disabled: {
         borderColor: colors['gray-300'],
         backgroundColor: colors['gray-100']
      },
      label: 'text-gray-700'
   },
   dark: {}
}
