import { FocusRingVariant } from '../../types'

export interface ButtonStyleProps {
   isHovered: boolean
   isPressed: boolean
   hierarchy: string
   subVariant: string
}

export interface ButtonStyles {
   bgColor: string
   border: string
   focusRingVariant: FocusRingVariant
   iconColor: string
}
