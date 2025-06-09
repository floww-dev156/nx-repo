import React, { ReactNode, ReactElement } from 'react'
import cn from 'classnames'

import { BasicSize } from '../../types'
import { useThemeContext } from '../../Theme/Provider'

import { localContainerClassName } from './styles'
import { labelSizes } from './sizes'

export type LabelProps = {
   /** An HTML ID attribute that will be attached to the the rendered component. Useful for targeting it from tests */
   id?: string
   /** The content of this label */
   children: ReactNode
   /** Additional props to spread over the label component */
   labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>
   isRequired?: boolean
   renderRequiredIcon?: () => React.ReactElement
   containerClassName?: string
   size?: BasicSize
}

export function Label(props: LabelProps): ReactElement {
   const {
      id,
      children,
      labelProps,
      isRequired,
      containerClassName,
      renderRequiredIcon,
      size = 'Small'
   } = props

   const { theme, colorScheme } = useThemeContext()
   const coloredTheme = theme[colorScheme].label
   const labelSize = labelSizes[size]

   const renderRequiredContent = (): ReactElement | null => {
      if (!isRequired) return null
      else if (renderRequiredIcon) return renderRequiredIcon()
      else
         return (
            <span className={cn(labelSize.requiredContentClassName)}>*</span>
         )
   }

   return (
      <label
         {...labelProps}
         id={id}
         lens-role='label'
         className={cn(
            coloredTheme.color,
            labelSize.typography,
            labelSize.margin,
            localContainerClassName,
            containerClassName
         )}
      >
         <p>
            {children}
            {renderRequiredContent()}
         </p>
      </label>
   )
}
