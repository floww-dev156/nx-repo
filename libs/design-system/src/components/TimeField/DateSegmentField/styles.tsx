import cn from 'classnames'

export const segmentsContainerClassName = cn(`flex items-center`)

export const getSegmentValueThemeStyles = (
   theme: any,
   hasSegmentText: boolean
): string => {
   const color = hasSegmentText
      ? theme.segmentTextColor
      : theme.segmentPlaceholderTextColor

   return ` ${color} text-sm-regular `
}

export const segmentClassName = `outline-none`
