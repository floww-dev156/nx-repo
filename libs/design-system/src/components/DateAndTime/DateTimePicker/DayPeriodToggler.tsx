import cn from 'classnames'
import React, { forwardRef, ReactElement, useEffect } from 'react'
import { useFocusWithin } from 'react-aria'

import { PlayDownArrowIcon } from '../../../icons/PlayDownArrowIcon'
import { PlayUpArrowIcon } from '../../../icons/PlayUpArrowIcon'
import { useThemeContext } from '../../../Theme/Provider'

import { FocusRingWithBorder } from '../../FocusRing/FocusRingWithBorder'

import { dayPeriodValues, DOWN_ARROW_KEY, UP_ARROW_KEY } from './constants'
import {
   dayPeriodTogglerContainerClassName,
   buttonClassName,
   togglerIconsContainerClassName,
   togglerUpIconClassName,
   getDayPeriodValueStyles
} from './styles'

interface DayPeriodTogglerProps {
   value: string
   onClickUpArrow: () => void
   onClickDownArrow: () => void
}
const DayPeriodToggler = forwardRef(
   (
      props: DayPeriodTogglerProps,
      ref: React.ForwardedRef<HTMLDivElement>
   ): ReactElement => {
      const { value, onClickUpArrow, onClickDownArrow } = props

      const { focusWithinProps } = useFocusWithin({})

      const { theme, colorScheme } = useThemeContext()

      const coloredTheme = theme[colorScheme].dateTimePicker

      const onKeyDownInteraction = event => {
         if (event.keyCode === UP_ARROW_KEY) {
            if (value === dayPeriodValues.pm) {
               onClickUpArrow()
            }
         } else if (event.keyCode === DOWN_ARROW_KEY) {
            if (value === dayPeriodValues.am) {
               onClickDownArrow()
            }
         }
      }

      useEffect(() => {
         window.addEventListener('keydown', onKeyDownInteraction)

         return () => {
            window.removeEventListener('keydown', onKeyDownInteraction)
         }
      })

      const onClickToggler = (): void => {
         if (value === dayPeriodValues.pm) {
            onClickUpArrow()
         } else {
            onClickDownArrow()
         }
      }

      const isUpArrowDisabled = value === dayPeriodValues.am
      const isDownArrowDisabled = value === dayPeriodValues.pm

      return (
         <FocusRingWithBorder within isError={false}>
            <div
               ref={ref}
               {...focusWithinProps}
               tabIndex={-1}
               className={dayPeriodTogglerContainerClassName}
            >
               <button
                  onClick={onClickToggler}
                  className={cn(
                     buttonClassName,
                     getDayPeriodValueStyles(coloredTheme)
                  )}
               >
                  {value}
               </button>
               <div className={togglerIconsContainerClassName}>
                  <button
                     onClick={onClickUpArrow}
                     className={cn(buttonClassName, togglerUpIconClassName)}
                  >
                     <PlayUpArrowIcon
                        fill={
                           isUpArrowDisabled
                              ? coloredTheme.disabledArrowIconColor
                              : coloredTheme.enableArrowIconColor
                        }
                     />
                  </button>
                  <button
                     onClick={onClickDownArrow}
                     className={cn(buttonClassName)}
                  >
                     <PlayDownArrowIcon
                        fill={
                           isDownArrowDisabled
                              ? coloredTheme.disabledArrowIconColor
                              : coloredTheme.enableArrowIconColor
                        }
                     />
                  </button>
               </div>
            </div>
         </FocusRingWithBorder>
      )
   }
)

export { DayPeriodToggler }
