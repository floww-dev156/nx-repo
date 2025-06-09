import { colors } from '../../style-guide/colors'
export const pickerTheme = {
   light: {
      border: {
         default: 'border-gray-300',
         focus: 'border-transparent',
         error: 'border-error-300',
         focusedBorder: 'focus:border-primary-300',
         focusedErrorBorder: 'focus:border-error-300',
         openedBorder: 'border-primary-300'
      },
      placeholderColor: `text-gray-500`,
      textColor: `text-gray-900`,
      disabledTextColor: `text-gray-500`,
      icon: {
         stroke: colors['gray-500']
      },
      disabled: {
         styles: '!bg-gray-50 text-gray-500'
      }
   },
   dark: {}
}
