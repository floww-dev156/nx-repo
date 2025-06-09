import { colors } from '../../style-guide/colors'

export const comboBoxTheme = {
   light: {
      textColor: 'text-gray-900',
      loaderColor: colors['primary-600'],
      bgColor: 'bg-base-white',
      popoverLoaderColor: colors['gray-500'],
      noResultsTextColor: 'text-gray-500',
      border: {
         default: 'border border-gray-300',
         focus: 'border border-primary-300',
         error: 'border border-error-300'
      },
      icon: {
         stroke: colors['gray-500']
      },
      disabled: {
         styles: '!bg-gray-50 !text-gray-500'
      },
      errorView: {
         retryTextColor: 'text-gray-700',
         retryIconColor: colors['gray-700'],
         buttonBorderColor: 'border-gray-300',
         loaderColor: colors['gray-700']
      },
      noDataView: {
         titleColor: 'text-gray-500'
      }
   },
   dark: {}
}
