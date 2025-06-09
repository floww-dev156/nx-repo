import cn from 'classnames'

import { BasicSize } from '../../../../types/index'

import { commonDateFieldTriggerSizes } from './sizes'

export const getDateFieldTriggerThemeStyles = (
   coloredTheme: any,
   isDisabled: boolean | undefined
): string =>
   cn('flex', {
      [coloredTheme.disabledBgColor]: isDisabled,
      [coloredTheme.background]: !isDisabled
   })

export const getDateFieldTriggerSizingStyles = (size: BasicSize): string => {
   const sizing = commonDateFieldTriggerSizes[size]

   return cn(sizing.padding, sizing.radius, sizing.shadow, sizing.height)
}
