import cn from 'classnames'
import { observer } from 'mobx-react'
import React from 'react'
import { useDateSegment } from 'react-aria'
import { DateFieldState, DateSegment } from 'react-stately'

import { useThemeContext } from '../../../Theme/Provider'

import { SegmentTypeEnum } from '../constants/constants'

import { getSegmentValueThemeStyles, segmentClassName } from './styles'

import '../index.css'

interface DateSegmentFieldProps {
   segment: DateSegment
   state: DateFieldState
   isDisabled: boolean
}

const DateSegmentField = (props: DateSegmentFieldProps): React.ReactElement => {
   const { segment, state, isDisabled } = props

   const { theme, colorScheme } = useThemeContext()
   const coloredTheme = theme[colorScheme]

   const segmentRef = React.useRef(null)

   const { segmentProps } = useDateSegment(segment, state, segmentRef)

   const segmentPlaceHolder = (): string => {
      switch (segment.type) {
         case SegmentTypeEnum.Hour:
            return 'hh'
         case SegmentTypeEnum.Minute:
            return 'mm'
      }
      return ''
   }

   const hasHoursText = (): boolean => {
      const hourSegment = state.segments.find(
         segment => segment.type === SegmentTypeEnum.Hour
      )
      return hourSegment?.text !== '––' && !isDisabled
   }

   const hasSegmentText = (): boolean => {
      if (segment.type === SegmentTypeEnum.Literal) {
         return hasHoursText()
      }
      return segment.text !== '––' && !isDisabled
   }

   const shouldDisplaySegmentText = segment.text !== '––'

   return (
      <div
         {...segmentProps}
         ref={segmentRef}
         className={cn(
            `${segmentClassName} 
            ${getSegmentValueThemeStyles(
               coloredTheme.timePicker,
               hasSegmentText()
            )}
              `,
            'notranslate',
            'segment'
         )}
      >
         <span>
            {shouldDisplaySegmentText ? segment.text : segmentPlaceHolder()}
         </span>
      </div>
   )
}

export default observer(DateSegmentField)
