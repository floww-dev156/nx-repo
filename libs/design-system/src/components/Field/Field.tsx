import React, { ReactNode, ReactElement } from 'react'

import { Hint, HintProps } from '../Hint'
import { Label, LabelProps } from '../Label'

export interface FieldProps {
   labelProps?: LabelProps
   children: ReactNode
   hintProps?: HintProps
   containerClassName?: string
}

export const Field = (props: FieldProps): ReactElement => {
   const { hintProps, labelProps, children, containerClassName } = props

   const renderHint = (): ReactElement | null =>
      hintProps ? <Hint {...hintProps} /> : null

   const renderLabel = (): ReactElement | null => {
      if (!labelProps) return null

      const { children: labelChildren, ...others } = labelProps
      return <Label {...others}>{labelChildren}</Label>
   }

   return (
      <div className={containerClassName}>
         {renderLabel()}
         {children}
         {renderHint()}
      </div>
   )
}
