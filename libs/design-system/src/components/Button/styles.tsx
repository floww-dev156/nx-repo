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
            textColor: theme.button[hierarchy][subVariant].hover.textColor,
            border: theme.button[hierarchy][subVariant].hover.border,
            loaderColor: theme.button[hierarchy][subVariant].loaderColor,
            focusRingVariant:
               theme.button[hierarchy][subVariant].hover.focusRingVariant,
            iconColor: theme.button[hierarchy][subVariant].hover.iconColor
         }
      } else if (isPressed) {
         return {
            bgColor: theme.button[hierarchy][subVariant].focused.bgColor,
            textColor: theme.button[hierarchy][subVariant].focused.textColor,
            border: theme.button[hierarchy][subVariant].focused.border,
            loaderColor: theme.button[hierarchy][subVariant].loaderColor,
            focusRingVariant:
               theme.button[hierarchy][subVariant].focused.focusRingVariant,
            iconColor: theme.button[hierarchy][subVariant].focused.iconColor
         }
      } else if (isDisabled) {
         return {
            bgColor: theme.button[hierarchy][subVariant].disabled.bgColor,
            textColor: theme.button[hierarchy][subVariant].disabled.textColor,
            border: theme.button[hierarchy][subVariant].disabled.border,
            loaderColor: theme.button[hierarchy][subVariant].loaderColor,
            focusRingVariant:
               theme.button[hierarchy][subVariant].disabled.focusRingVariant,
            iconColor: theme.button[hierarchy][subVariant].disabled.iconColor
         }
      }
      return {
         bgColor: theme.button[hierarchy][subVariant].default.bgColor,
         textColor: theme.button[hierarchy][subVariant].default.textColor,
         border: theme.button[hierarchy][subVariant].default.border,
         loaderColor: theme.button[hierarchy][subVariant].loaderColor,
         focusRingVariant:
            theme.button[hierarchy][subVariant].default.focusRingVariant,
         iconColor: theme.button[hierarchy][subVariant].default.iconColor
      }
   } catch {
      throw new Error(
         `Hierarchy: ${hierarchy}, SubVariant: ${subVariant} The Combination Doesn't Exit. You can add this combination in the theme config.`
      )
   }
}
