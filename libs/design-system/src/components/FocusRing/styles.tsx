import cn from 'classnames'

import { ExtendedSize, FocusRingVariant } from '../../types'

import { focusRingSizes } from '.'

export const getFocusRingSizes = (size: ExtendedSize) => {
   return cn(`${focusRingSizes[size].borderRadius} `)
}

export const getFocusRingStyles = (theme: any, variant: FocusRingVariant) => {
   //TODO: add type
   return cn([`${theme[variant].ringColor}`])
}

export const getFocusRingStylesWithBorder = (
   theme: any,
   variant: FocusRingVariant
) => {
   //TODO: add type
   return cn([`${theme[variant].ringColor} ${theme[variant].borderColor}`])
}
