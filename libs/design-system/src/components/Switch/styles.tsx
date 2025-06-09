import { FocusRingVariant } from '../../types'

interface UIStates {
   isDisabled: boolean
   isFocused: boolean
   isHovered: boolean
   isPressed: boolean
   isChecked: boolean
}

export interface ToggleSwitchStyleProps {
   bgColor: string
   focusRingVariant?: FocusRingVariant
}

export const getSwitchLabelStyles = (
   states: UIStates,
   theme: any
): ToggleSwitchStyleProps => {
   const isHoveredState = states.isHovered && !states.isPressed

   if (states.isChecked) {
      if (isHoveredState) {
         return {
            bgColor: theme.toggleSwitch.hover.switchActiveBGColor,
            focusRingVariant: 'None'
         }
      } else if (states.isPressed) {
         return {
            bgColor: theme.toggleSwitch.focused.switchActiveBGColor,
            focusRingVariant: theme.toggleSwitch.focused.focusRingVariant
         }
      } else if (states.isDisabled) {
         return {
            bgColor: theme.toggleSwitch.disabled.switchActiveBGColor,
            focusRingVariant: 'None'
         }
      }
      return {
         bgColor: theme.toggleSwitch.default.switchActiveBGColor,
         focusRingVariant: 'None'
      }
   }

   if (isHoveredState) {
      return {
         bgColor: theme.toggleSwitch.hover.switchInActiveBGColor,
         focusRingVariant: 'None'
      }
   } else if (states.isPressed) {
      return {
         bgColor: theme.toggleSwitch.focused.switchInActiveBGColor,
         focusRingVariant: theme.toggleSwitch.focused.focusRingVariant
      }
   } else if (states.isDisabled) {
      return {
         bgColor: theme.toggleSwitch.disabled.switchInActiveBGColor,
         focusRingVariant: 'None'
      }
   }
   return {
      bgColor: theme.toggleSwitch.default.switchInActiveBGColor,
      focusRingVariant: 'None'
   }
}

export const getToggleSwitchStyles = (states: UIStates, theme: any) => {
   const isHoveredState = states.isHovered && !states.isPressed

   if (isHoveredState) {
      return {
         bgColor: theme.toggleSwitch.hover.switchBGColor,
         borderColor: theme.toggleSwitch.hover.borderColor
      }
   } else if (states.isPressed) {
      return {
         bgColor: theme.toggleSwitch.focused.switchBGColor,
         borderColor: theme.toggleSwitch.focused.borderColor
      }
   } else if (states.isDisabled) {
      return {
         bgColor: theme.toggleSwitch.disabled.switchBGColor,
         borderColor: theme.toggleSwitch.disabled.borderColor
      }
   }
   return {
      bgColor: theme.toggleSwitch.default.switchBGColor,
      borderColor: theme.toggleSwitch.default.borderColor
   }
}

export const switchLabelStyles = `
   flex items-start shrink-0 grow-0
   p-[2px]
   rounded-[12px]
   transition-colors transition-[border] 
   duration-300 ease-in-out
   cursor-pointer
   relative
`

export const noInteractionStyles = `!cursor-not-allowed`

export const switchStyles = `
   shrink-0 grow-0
   mx-[2px]
   shadow-md
   absolute
   transition-all
   duration-300 
   ease-in-out 
   z-10
`

export const wrapperContainerStyles = `flex items-center`

//FIX ME: If we set `display-hidden` then focus ring will be hidden
export const switchInputStyles = `opacity-0 m-0 p-0 cursor-pointer`
