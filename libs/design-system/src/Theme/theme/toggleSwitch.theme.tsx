export const toggleSwitch = {
   light: {
      default: {
         switchInActiveBGColor: 'bg-gray-100',
         switchActiveBGColor: 'bg-primary-600',
         switchBGColor: 'bg-gray-50',
         borderColor: 'border-transparent'
      },
      hover: {
         switchInActiveBGColor: 'bg-gray-200',
         switchActiveBGColor: 'bg-primary-700',
         switchBGColor: 'bg-white',
         borderColor: 'border-primary-600'
      },
      focused: {
         switchInActiveBGColor: 'bg-gray-50',
         switchActiveBGColor: 'bg-primary-700',
         focusRingVariant: 'Primary',
         switchBGColor: 'bg-white',
         borderColor: 'border-primary-600'
      },
      disabled: {
         switchInActiveBGColor: 'bg-gray-100',
         switchActiveBGColor: 'bg-gray-100',
         switchBGColor: 'bg-gray-50',
         borderColor: 'border-transparent'
      }
   },

   dark: {}
}
