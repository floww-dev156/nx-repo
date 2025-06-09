import { FocusRingVariant } from '../../types'

export interface ButtonStyleProps {
   isHovered: boolean
   isPressed: boolean
   isDisabled: boolean
   hierarchy: string
   subVariant: string
}

export interface ButtonStyles {
   bgColor: string
   textColor: string
   border: string
   loaderColor: string
   focusRingVariant: FocusRingVariant
   iconColor: IconStyles
}

export interface IconStyles {
   fill: string
   stroke: string
}
