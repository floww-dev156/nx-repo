import { IconButtonHierarchy, IconButtonSubVariant } from './constants'
import { ButtonStyleProps, ButtonStyles } from './types'

export const getButtonStyles = (
   {
      isHovered,
      isPressed,
      isDisabled,
      hierarchy,
      subVariant
   }: ButtonStyleProps,
   theme: any //TODO: add type
): ButtonStyles => {
   const isHoveredState = isHovered && !isPressed
   try {
      if (isHoveredState) {
         return {
            bgColor: theme.button[hierarchy][subVariant].hover.bgColor,
            border: theme.button[hierarchy][subVariant].hover.border,
            loaderColor: theme.button[hierarchy][subVariant].loaderColor,
            focusRingVariant:
               theme.button[hierarchy][subVariant].hover.focusRingVariant,
            iconColor: {
               fill: theme.button[hierarchy][subVariant].hover.iconColor.fill,
               stroke:
                  theme.button[hierarchy][subVariant].hover.iconColor.stroke
            }
         }
      } else if (isPressed) {
         const isVariantTertiaryGray =
            hierarchy === IconButtonHierarchy.Tertiary &&
            subVariant === IconButtonSubVariant.Gray

         return {
            bgColor: theme.button[hierarchy][subVariant].focused.bgColor,
            border: theme.button[hierarchy][subVariant].focused.border,
            loaderColor: theme.button[hierarchy][subVariant].loaderColor,
            focusRingVariant: isVariantTertiaryGray
               ? 'Primary'
               : theme.button[hierarchy][subVariant].focused.focusRingVariant,
            iconColor: {
               fill: theme.button[hierarchy][subVariant].focused.iconColor.fill,
               stroke:
                  theme.button[hierarchy][subVariant].focused.iconColor.stroke
            }
         }
      } else if (isDisabled) {
         return {
            bgColor: theme.button[hierarchy][subVariant].disabled.bgColor,
            border: theme.button[hierarchy][subVariant].disabled.border,
            loaderColor: theme.button[hierarchy][subVariant].loaderColor,
            focusRingVariant:
               theme.button[hierarchy][subVariant].disabled.focusRingVariant,
            iconColor: {
               fill:
                  theme.button[hierarchy][subVariant].disabled.iconColor.fill,
               stroke:
                  theme.button[hierarchy][subVariant].disabled.iconColor.stroke
            }
         }
      }
      return {
         bgColor: theme.button[hierarchy][subVariant].default.bgColor,
         border: theme.button[hierarchy][subVariant].default.border,
         loaderColor: theme.button[hierarchy][subVariant].loaderColor,
         focusRingVariant:
            theme.button[hierarchy][subVariant].default.focusRingVariant,

         iconColor: {
            fill: theme.button[hierarchy][subVariant].default.iconColor.fill,
            stroke: theme.button[hierarchy][subVariant].default.iconColor.stroke
         }
      }
   } catch {
      throw new Error(
         `Hierarchy: ${hierarchy}, SubVariant: ${subVariant} The Combination Doesn't Exit. You can add this combination in the theme config.`
      )
   }
}
