import React, { ReactNode } from 'react'
import cn from 'classnames'

import { useThemeContext } from '../../Theme/Provider'

import { ColorVariantEnum } from './types'
import {
   badgeIconsContainerClassName,
   dotClassName,
   dotContainerClassName
} from './styles'
import {
   Size,
   getBadgeStyles,
   badgeSizes,
   getBadgeBorderStyles,
   BadgeStyles,
   getLeftAndRightPaddings,
   BadgeSizesEnum,
   BadgeVariants
} from '.'

interface BadgeProps {
   size?: Size
   isOutline?: boolean
   variant?: ColorVariantEnum
   children: ReactNode
   title?: string
   showDot?: boolean
   leftElement?: (iconColor: string) => ReactNode
   rightElement?: (iconColor: string) => ReactNode
   containerClassName?: string
   badgeTextClassName?: string
   shouldTruncateText?: boolean
}

const Badge = (props: BadgeProps): React.ReactElement => {
   const {
      children,
      leftElement,
      rightElement,
      variant,
      title,
      containerClassName,
      size = BadgeSizesEnum.Medium,
      showDot = false,
      isOutline = false,
      badgeTextClassName,
      shouldTruncateText = true
   } = props

   const { theme, colorScheme } = useThemeContext()
   const coloredTheme = theme[colorScheme]
   const badgeVariant = variant ? variant : BadgeVariants.Primary

   const {
      bgColor,
      borderColor,
      withOutBorderTextColor,
      withBorderTextColor,
      withOutBorderIconColor,
      withBorderIconColor,
      withOutBorderDotColor,
      withBorderDotColor
   }: BadgeStyles = getBadgeStyles(badgeVariant, coloredTheme)

   const iconColor = isOutline ? withBorderIconColor : withOutBorderIconColor

   const dotColor = isOutline ? withBorderDotColor : withOutBorderDotColor

   const textColor = isOutline ? withBorderTextColor : withOutBorderTextColor

   const sizedTheme = badgeSizes[size]

   const badgeBorderStyles = getBadgeBorderStyles(
      isOutline,
      borderColor,
      sizedTheme.badgeBorder
   )

   const renderBadgeWithLeftAndRightElements = (): React.ReactElement => (
      <div className={badgeIconsContainerClassName}>
         {leftElement ? (
            <div className={cn(sizedTheme.leftIconMargin)}>
               {leftElement(iconColor)}
            </div>
         ) : null}
         <p
            className={cn(badgeTextClassName, {
               'truncate ': shouldTruncateText
            })}
         >
            {children}
         </p>
         {rightElement ? (
            <div className={cn('flex flex-col', sizedTheme.rightIconMargin)}>
               {rightElement(iconColor)}
            </div>
         ) : null}
      </div>
   )

   const renderBadgeWithDot = (): React.ReactElement => (
      <div className={dotContainerClassName}>
         <div className={sizedTheme.dotLeftMargin}>
            <div className={cn(dotColor, dotClassName)} />
         </div>
         <p
            className={cn(badgeTextClassName, {
               'truncate ': shouldTruncateText
            })}
         >
            {children}
         </p>
      </div>
   )

   const renderBadge = (): React.ReactElement => {
      if (showDot) {
         return renderBadgeWithDot()
      } else {
         return renderBadgeWithLeftAndRightElements()
      }
   }

   const leftAndRightPaddings = getLeftAndRightPaddings(
      showDot,
      sizedTheme,
      leftElement,
      rightElement
   )

   return (
      <div
         className={cn(
            `w-fit break-all max-w-full`,
            textColor,
            containerClassName,
            sizedTheme.padding,
            sizedTheme.typography,
            sizedTheme.borderRadius,
            badgeBorderStyles,
            leftAndRightPaddings,
            { [bgColor]: !isOutline }
         )}
         title={title}
      >
         {renderBadge()}
      </div>
   )
}

export { Badge }
