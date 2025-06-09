import { InputSize } from '../../components/TextInputs'

export const textBaseField = {
   light: {
      default: {
         borderColor: 'border-gray-300 shadow-xs',
         bgColor: 'bg-base-white',
         textColor: 'text-gray-900'
      },
      focused: {
         borderColor: 'border-primary-300 shadow-xs',
         bgColor: 'bg-base-white',
         textColor: 'text-gray-900'
      },
      disabled: {
         borderColor: 'border-gray-300 shadow-xs',
         bgColor: 'bg-gray-50',
         textColor: 'text-gray-500'
      },
      error: {
         borderColor: 'border-error-300 shadow-xs',
         bgColor: 'bg-base-white',
         textColor: 'text-gray-900',
         color: 'error-500'
      },
      placeholderColor: 'placeholder:text-gray-500'
   },
   dark: {}
}
