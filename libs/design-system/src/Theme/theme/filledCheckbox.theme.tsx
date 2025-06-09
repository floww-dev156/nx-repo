import { colors } from '../../style-guide/colors'

export const filledCheckboxGroupTheme = {
   light: {
      selected: {
         borderColor: colors['primary-600'],
         background: {
            default: colors['primary-600'],
            hovered: colors['primary-700'],
            focus: colors['primary-600']
         }
      },
      indeterminate: {
         borderColor: colors['primary-600'],
         background: {
            default: colors['primary-600'],
            hovered: colors['primary-700'],
            focus: colors['primary-600']
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
               default: colors['error-600'],
               hovered: colors['error-700']
            }
         },
         indeterminate: {
            borderColor: colors['error-600'],
            background: {
               default: colors['error-600'],
               hovered: colors['error-700']
            }
         },
         unSelected: {
            hover: {
               borderColor: colors['error-600'],
               backgroundColor: colors['error-100']
            },
            focus: {
               borderColor: colors['error-600'],
               backgroundColor: colors['error-600']
            },
            default: {
               borderColor: colors['error-300'],
               backgroundColor: colors['base-white']
            },
            background: {
               default: colors['base-white'],
               hovered: colors['error-300']
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
