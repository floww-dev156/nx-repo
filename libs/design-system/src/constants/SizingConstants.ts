import { BasicSize, ExtendedSize } from '../types'

export const basicSizes: Record<string, BasicSize> = {
   extraSmall: 'ExtraSmall',
   small: 'Small',
   medium: 'Medium'
}

export const extendedSizes: Record<string, ExtendedSize> = {
   ...basicSizes,
   large: 'Large',
   extraLarge: 'ExtraLarge',
   doubleExtraLarge: 'DoubleExtraLarge'
}

export const MultiOptionsSelectPickerOffset = 8
