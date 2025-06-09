import React, { ReactNode, ReactElement } from 'react'
import cn from 'classnames'

import { BasicSize } from '../../types'
import { useThemeContext } from '../../Theme/Provider'
import { hintSizes } from './sizes'
import MarkdownContent from '../MarkdownContent/MarkdownContent'

import './styles.css'

export interface HintProps {
   id: string
   hint?: ReactNode
   error?: ReactNode
   containerClassName?: string
   size?: BasicSize
   errorTextClassName?: string
   renderLeftIcon?: () => ReactNode
   renderRightIcon?: () => ReactNode
   errorTransitionClassName?: string
}

export function Hint(props: HintProps): ReactElement {
   const {
      id,
      error,
      renderLeftIcon,
      renderRightIcon,
      size = 'Small',
      containerClassName,
      hint,
      errorTransitionClassName,
      errorTextClassName
   } = props

   const isHintStringType = typeof hint === 'string'

   const { theme, colorScheme } = useThemeContext()
   const coloredTheme = theme[colorScheme].hint
   const hintSize = hintSizes[size]
   const renderContent = (): ReactElement | null => {
      if (error)
         return (
            <div
               className={cn(
                  hintSize.errorText.containerClassName,
                  errorTextClassName
               )}
               style={{ color: coloredTheme.errorText.color }}
            >
               {error}
            </div>
         )
      else if (hint)
         return (
            <div
               className={hintSize.hintText.containerClassName}
               style={{ color: coloredTheme.hintText.color }}
            >
               {isHintStringType ? (
                  <MarkdownContent content={hint} className='markdown-hint' />
               ) : (
                  hint
               )}
            </div>
         )
      else return null
   }

   return (
      <>
         {error || hint ? (
            <div
               id={id}
               className={cn(
                  hintSize.containerClassName,
                  containerClassName,
                  error && errorTransitionClassName,
                  'hint-container-class-name'
               )}
            >
               {renderLeftIcon && renderLeftIcon()}
               {renderContent()}
               {renderRightIcon && renderRightIcon()}
            </div>
         ) : null}
      </>
   )
}
