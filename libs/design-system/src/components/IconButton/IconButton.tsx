import cn from 'classnames'
import React, { forwardRef, ReactNode, useRef } from 'react'

import { useButton } from '@react-aria/button'
import { useHover } from '@react-aria/interactions'
import { mergeProps } from '@react-aria/utils'
import { AriaButtonProps } from '@react-types/button'

import { useThemeContext } from '../../Theme/Provider'
import { ExtendedSize } from '../../types'

import { FocusRing } from '../FocusRing'
import { Loader } from '../Loader/Loader'

import { IconButtonHierarchy, IconButtonSubVariant } from './'
import { buttonSizes } from './sizes'
import { getButtonStyles } from './styles'
import { ButtonStyles, IconStyles } from './types'

export interface IconButtonProps extends AriaButtonProps {
   hierarchy: IconButtonHierarchy
   size: Exclude<ExtendedSize, 'ExtraSmall'>
   subVariant: IconButtonSubVariant
   isLoading?: boolean
   isDisabled?: boolean
   ref?: React.ForwardedRef<HTMLButtonElement>
   id?: string
   autoFocus?: boolean
   icon: (iconProps: IconStyles) => ReactNode
   onClick?: (_: any) => void
   className?: string
   title?: string
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
   (
      {
         id,
         autoFocus = false,
         isDisabled = false,
         isLoading = false,
         icon,
         onClick,
         size = 'Medium',
         className = '',
         subVariant = IconButtonSubVariant.Primary,
         hierarchy = IconButtonHierarchy.Primary,
         ...others
      }: IconButtonProps,
      forwardedRef
   ): React.ReactElement => {
      const _ref = useRef<HTMLButtonElement>(null)
      const ref = forwardedRef || _ref

      const _isDisabled = isDisabled || isLoading
      const { buttonProps, isPressed } = useButton(
         {
            id,
            isDisabled: _isDisabled,
            autoFocus,
            onPress: onClick,
            ...others
         },
         ref as React.RefObject<HTMLButtonElement>
      )
      const { hoverProps, isHovered } = useHover({ isDisabled: _isDisabled })

      const { theme, colorScheme } = useThemeContext()
      const coloredTheme = theme[colorScheme]

      const sizedTheme = buttonSizes[size]

      const {
         bgColor,
         border,
         loaderColor,
         focusRingVariant,
         iconColor
      }: ButtonStyles = getButtonStyles(
         { isHovered, isPressed, isDisabled, hierarchy, subVariant },
         coloredTheme
      )

      const renderIcon = (): React.ReactElement => {
         return <div>{icon({ ...iconColor, ...sizedTheme.iconSize })}</div>
      }

      const renderLoader = (): React.ReactElement => {
         return <Loader fill={loaderColor} />
      }

      const renderNormalButtonContent = (): React.ReactElement =>
         isLoading ? renderLoader() : renderIcon()

      return (
         <FocusRing within variant={focusRingVariant} size={size}>
            <button
               {...others}
               id={id}
               lens-role='button'
               ref={ref}
               {...mergeProps(hoverProps, buttonProps)}
               className={cn(
                  {
                     'cursor-not-allowed': _isDisabled
                  },
                  'flex justify-center items-center outline-none',
                  bgColor,
                  border,
                  sizedTheme.borderRadius,
                  sizedTheme.padding,
                  className
               )}
            >
               {renderNormalButtonContent()}
            </button>
         </FocusRing>
      )
   }
)
