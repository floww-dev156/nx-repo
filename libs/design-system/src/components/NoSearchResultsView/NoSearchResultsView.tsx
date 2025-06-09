import React from 'react'

import { NO_RESULTS_VIEW_IMG_URL } from '../../constants/ImageConstants'
import { useThemeContext } from '../../Theme/Provider'

import { noDataViewClassName, getTitleStyles } from './styles'

interface NoSearchResultsViewProps {
   textClassName?: string
}
export const NoSearchResultsView = (
   props: NoSearchResultsViewProps
): React.ReactElement => {
   const { theme, colorScheme } = useThemeContext()
   const errorTheme = theme[colorScheme]

   const errorViewTheme = errorTheme.comboBox.noDataView

   const titleStyles = getTitleStyles(errorViewTheme)

   //TODO: update title to i18n

   return (
      <div className={noDataViewClassName}>
         <img
            src={NO_RESULTS_VIEW_IMG_URL}
            className='w-[80px] h-[80px]'
            alt='no results'
         />
         <span className={`${titleStyles} ${props.textClassName}`}>
            No Results Found
         </span>
      </div>
   )
}
