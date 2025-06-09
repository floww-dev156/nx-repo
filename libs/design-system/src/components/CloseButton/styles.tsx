import { SubVariant } from '../Button/constants'

import { ButtonStyleProps, ButtonStyles } from './types'

export const getButtonStyles = (
   { isHovered, isPressed, hierarchy, subVariant }: ButtonStyleProps,
   theme: any //TODO: add type
): ButtonStyles => {
   const isHoveredState = isHovered && !isPressed
   try {
      if (isHoveredState) {
         return {
            bgColor: theme.closeIconButton[hierarchy][subVariant].hover.bgColor,
            border: theme.closeIconButton[hierarchy][subVariant].hover.border,
            focusRingVariant:
               theme.closeIconButton[hierarchy][subVariant].focusRingVariant,
            iconColor:
               theme.closeIconButton[hierarchy][subVariant].hover.iconColor
         }
      } else if (isPressed) {
         const isVariantPrimary = subVariant === SubVariant.Primary

         return {
            bgColor:
               theme.closeIconButton[hierarchy][subVariant].focused.bgColor,
            border: theme.closeIconButton[hierarchy][subVariant].focused.border,
            focusRingVariant: isVariantPrimary
               ? theme.closeIconButton[hierarchy][subVariant].focused
                    .focusRingVariant
               : theme.closeIconButton[hierarchy][subVariant].focusRingVariant,
            iconColor:
               theme.closeIconButton[hierarchy][subVariant].focused.iconColor
         }
      }
      return {
         bgColor: theme.closeIconButton[hierarchy][subVariant].default.bgColor,
         border: theme.closeIconButton[hierarchy][subVariant].default.border,
         focusRingVariant:
            theme.closeIconButton[hierarchy][subVariant].focusRingVariant,
         iconColor:
            theme.closeIconButton[hierarchy][subVariant].default.iconColor
      }
   } catch {
      throw new Error(
         `Hierarchy: ${hierarchy}, SubVariant: ${subVariant} The Combination Doesn't Exit. You can add this combination in the theme config.`
      )
   }
}

export const buttonClassName = 'flex justify-center items-center outline-none'
