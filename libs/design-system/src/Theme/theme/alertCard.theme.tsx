import { colors } from '../../style-guide'

export const alertCardTheme = {
   light: {
      DEFAULT: {
         bgColor: 'bg-base-white',
         borderColor: 'border-gray-300',
         titleColor: 'text-gray-700',
         descriptionColor: 'text-gray-600',
         primaryActionTextColor: 'text-primary-600',
         primaryActionIconColor: colors['primary-700'],
         secondaryActionTextColor: 'text-gray-700',
         alertIconColor: colors['gray-700'],
         closeIconColor: colors['gray-500']
      },
      GRAY: {
         bgColor: 'bg-gray-25',
         borderColor: 'border-gray-300',
         titleColor: 'text-gray-700',
         descriptionColor: 'text-gray-600',
         primaryActionTextColor: 'text-primary-600',
         primaryActionIconColor: colors['primary-700'],
         secondaryActionTextColor: 'text-gray-700',
         alertIconColor: colors['gray-600'],
         closeIconColor: colors['gray-500']
      },
      PRIMARY: {
         bgColor: 'bg-primary-25',
         borderColor: 'border-primary-300',
         titleColor: 'text-primary-700',
         descriptionColor: 'text-primary-700',
         primaryActionTextColor: 'text-primary-600',
         primaryActionIconColor: colors['primary-700'],
         secondaryActionTextColor: 'text-primary-600',
         alertIconColor: colors['primary-600'],
         closeIconColor: colors['primary-500']
      },
      ERROR: {
         bgColor: 'bg-error-25',
         borderColor: 'border-error-300',
         titleColor: 'text-error-700',
         descriptionColor: 'text-error-700',
         primaryActionTextColor: 'text-error-700',
         primaryActionIconColor: colors['error-700'],
         secondaryActionTextColor: 'text-error-600',
         alertIconColor: colors['error-600'],
         closeIconColor: colors['error-500']
      },
      SUCCESS: {
         bgColor: 'bg-success-25',
         borderColor: 'border-success-300',
         titleColor: 'text-success-700',
         descriptionColor: 'text-success-700',
         primaryActionTextColor: 'text-success-700',
         primaryActionIconColor: colors['success-700'],
         secondaryActionTextColor: 'text-success-600',
         alertIconColor: colors['success-600'],
         closeIconColor: colors['success-500']
      },
      WARNING: {
         bgColor: 'bg-warning-25',
         borderColor: 'border-warning-300',
         titleColor: 'text-warning-700',
         descriptionColor: 'text-warning-700',
         primaryActionTextColor: 'text-warning-700',
         primaryActionIconColor: colors['warning-700'],
         secondaryActionTextColor: 'text-warning-600',
         alertIconColor: colors['warning-600'],
         closeIconColor: colors['warning-500']
      }
   },
   dark: {}
}
