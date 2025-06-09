import cn from 'classnames'
import React, { ReactElement } from 'react'

import { useThemeContext } from '../../Theme/Provider'

import { getCardContainerClassNames } from './styles'
import { Elevation } from './types'

export interface CardProps {
   onClick?: (e: React.MouseEvent<HTMLElement>) => void
   isOutline?: boolean
   elevation?: Elevation
   className?: string
   children: React.ReactNode
}

export const Card = (props: CardProps): ReactElement => {
   const {
      className,
      elevation = 'None',
      isOutline = false,
      children,
      onClick
   } = props
   const { theme, colorScheme } = useThemeContext()
   const coloredTheme = theme[colorScheme]

   const getThemeStyles = (): string => {
      const { card } = coloredTheme
      const { backgroundColor, boxShadow } = card[elevation]
      return `${backgroundColor} ${boxShadow}`
   }

   return (
      <div
         className={cn(
            `${getCardContainerClassNames(
               isOutline,
               coloredTheme
            )} ${getThemeStyles()} ${className}`
         )}
         onClick={onClick}
      >
         {children}
      </div>
   )
}
