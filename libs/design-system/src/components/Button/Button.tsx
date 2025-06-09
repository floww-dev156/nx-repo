import React, { forwardRef, ReactNode, useRef } from 'react'
import cn from 'classnames'
import { useButton } from '@react-aria/button'
import { AriaButtonProps } from '@react-types/button'
import { useHover } from '@react-aria/interactions'
import { mergeProps } from '@react-aria/utils'

import { useThemeContext } from '../../Theme/Provider'
import { ExtendedSize } from '../../types'

import { FocusRing } from '../FocusRing'

import { Loader } from '../Loader/Loader'

import { Hierarchy, SubVariant } from '.'

import { getButtonStyles } from './styles'
import { buttonSizes } from './sizes'

import { ButtonStyles, IconStyles } from './types'

export interface ButtonProps extends AriaButtonProps {
   hierarchy: Hierarchy
   size: ExtendedSize
   subVariant: SubVariant
   children: any
   autoFocus?: boolean
   className?: string
   id?: string
   isDisabled?: boolean
   isLoading?: boolean
   ref?: React.ForwardedRef<HTMLButtonElement>
   shouldShrinkButtonWhileLoading?: boolean
   loadingFillColor?: string
   leftIconContainerClassName?: string

   leftIcon?: (iconProps: IconStyles) => ReactNode
   onClick?: (_: any) => void
   rightIcon?: (iconProps: IconStyles) => ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
   (
      {
         hierarchy = Hierarchy.Primary,
         size = 'Medium',
         subVariant = SubVariant.Primary,

         autoFocus = false,
         className = '',
         id,
         isDisabled = false,
         isLoading = false,
         shouldShrinkButtonWhileLoading = false,
         loadingFillColor,
         leftIconContainerClassName,
         leftIcon,
         onClick,
         rightIcon,

         children,
         ...others
      }: ButtonProps,
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

      const isLinkButton = hierarchy === Hierarchy.Link

      const {
         bgColor,
         textColor,
         border,
         loaderColor,
         focusRingVariant,
         iconColor
      }: ButtonStyles = getButtonStyles(
         { isHovered, isPressed, isDisabled, hierarchy, subVariant },
         coloredTheme
      )

      const renderTransparentChildren = (): React.ReactElement => {
         return (
            <div
               className={cn('flex items-center', {
                  'text-transparent invisible': isLoading
               })}
            >
               {leftIcon ? (
                  <div
                     className={cn(
                        sizedTheme.leftIconMargin,
                        leftIconContainerClassName
                     )}
                  >
                     {leftIcon(iconColor)}
                  </div>
               ) : null}
               {children}
               {rightIcon ? (
                  <div className={cn(sizedTheme.rightIconMargin)}>
                     {rightIcon(iconColor)}
                  </div>
               ) : null}
            </div>
         )
      }

      const renderAbsoluteLoader = (): React.ReactElement | null => {
         return isLoading ? (
            <Loader
               className='absolute'
               fill={loadingFillColor ? loadingFillColor : loaderColor}
            />
         ) : null
      }

      const renderAbsoluteLoaderAndButton = (): React.ReactElement => (
         <>
            {renderAbsoluteLoader()}
            {renderTransparentChildren()}
         </>
      )

      const renderChildren = (): React.ReactElement => {
         return (
            <div className={cn('flex items-center')}>
               {leftIcon ? (
                  <div
                     className={cn(
                        sizedTheme.leftIconMargin,
                        leftIconContainerClassName
                     )}
                  >
                     {leftIcon(iconColor)}
                  </div>
               ) : null}
               {children}
               {rightIcon ? (
                  <div className={cn(sizedTheme.rightIconMargin)}>
                     {rightIcon(iconColor)}
                  </div>
               ) : null}
            </div>
         )
      }

      const renderLoader = (): React.ReactElement => {
         return (
            <Loader fill={loadingFillColor ? loadingFillColor : loaderColor} />
         )
      }

      const renderNormalButtonContent = (): React.ReactElement =>
         isLoading ? renderLoader() : renderChildren()

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
                     'cursor-not-allowed': _isDisabled,
                     relative: !shouldShrinkButtonWhileLoading
                  },
                  'flex justify-center items-center outline-none',
                  bgColor,
                  textColor,
                  border,
                  sizedTheme.typography,
                  sizedTheme.borderRadius,
                  { 'px-0 py-0': isLinkButton },
                  { [sizedTheme.padding]: !isLinkButton },
                  className
               )}
            >
               {shouldShrinkButtonWhileLoading
                  ? renderNormalButtonContent()
                  : renderAbsoluteLoaderAndButton()}
            </button>
         </FocusRing>
      )
   }
)
