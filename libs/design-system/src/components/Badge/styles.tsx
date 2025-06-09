import { ReactNode } from 'react'
import cn from 'classnames'

import { BadgeStyles } from '.'

export const getBadgeStyles = (
   colorVariant: string,
   theme: any
): BadgeStyles => {
   //TODO: update theme type
   return {
      bgColor: theme.badge[colorVariant]
         ? theme.badge[colorVariant].bgColor
         : theme.badge['PRIMARY'].bgColor,
      borderColor: theme.badge[colorVariant]
         ? theme.badge[colorVariant].borderColor
         : theme.badge['PRIMARY'].borderColor,
      withOutBorderTextColor: theme.badge[colorVariant]
         ? theme.badge[colorVariant].withOutBorderTextColor
         : theme.badge['PRIMARY'].withOutBorderTextColor,
      withBorderTextColor: theme.badge[colorVariant]
         ? theme.badge[colorVariant].withBorderTextColor
         : theme.badge['PRIMARY'].withBorderTextColor,
      withOutBorderIconColor: theme.badge[colorVariant]
         ? theme.badge[colorVariant].withOutBorderIconColor
         : theme.badge['PRIMARY'].withOutBorderIconColor,
      withBorderIconColor: theme.badge[colorVariant]
         ? theme.badge[colorVariant].withBorderIconColor
         : theme.badge['PRIMARY'].withBorderIconColor,
      withOutBorderDotColor: theme.badge[colorVariant]
         ? theme.badge[colorVariant].withOutBorderDotColor
         : theme.badge['PRIMARY'].withOutBorderDotColor,
      withBorderDotColor: theme.badge[colorVariant]
         ? theme.badge[colorVariant].withBorderDotColor
         : theme.badge['PRIMARY'].withBorderDotColor
   }
}

export const getBadgeBorderStyles = (
   isOutline: boolean,
   borderColor: string,
   badgeBorder: string
): string => {
   return `${isOutline ? `${badgeBorder} ${borderColor}` : 'border-none'}`
}

export const dotClassName = 'h-6px w-6px rounded-full'

export const getLeftAndRightPaddings = (
   showDot: boolean,
   sizedTheme: any,
   leftElement?: (iconColor: string) => ReactNode,
   rightElement?: (iconColor: string) => ReactNode
) => {
   return cn(
      { [`ml-0 ${sizedTheme.paddingRight}`]: showDot },
      {
         [`${sizedTheme.paddingLeft}`]: !leftElement && !showDot
      },
      {
         [`${sizedTheme.paddingRight}`]: !rightElement && !showDot
      }
   )
}

export const dotContainerClassName =
   'flex items-center justify-center h-full p-1px'

export const badgeIconsContainerClassName =
   'flex items-center justify-center h-full'
