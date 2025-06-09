import React from 'react'
import { useLocale } from '@react-aria/i18n'
import { useListBoxSection } from '@react-aria/listbox'
import { useSeparator } from '@react-aria/separator'
import { layoutInfoToStyle, useVirtualizerItem } from '@react-aria/virtualizer'
import { ReusableView } from '@react-stately/virtualizer'
import { Node } from '@react-types/shared'

import { Fragment, ReactNode, RefObject, useContext, useRef } from 'react'
import { useThemeContext } from '../../Theme/Provider'

import { ListBoxContext } from './ListBoxContext'
import {
   getSectionHeaderStyles,
   getSectionSeperatorStyles,
   getSectionStyles
} from './styles'

interface ListBoxSectionProps<T> {
   reusableView: ReusableView<Node<T>, unknown>
   header: ReusableView<Node<T>, unknown>
   children?: ReactNode
}

/** @private */
export function ListBoxSection<T>(props: ListBoxSectionProps<T>) {
   let { children, reusableView, header } = props
   let item = reusableView.content
   let { headingProps, groupProps } = useListBoxSection({
      heading: item.rendered,
      'aria-label': item['aria-label']
   })

   let { separatorProps } = useSeparator({
      elementType: 'li'
   })

   let headerRef = useRef()
   useVirtualizerItem({
      //@ts-ignore
      reusableView: header,
      ref: (headerRef as unknown) as RefObject<HTMLElement>
   })

   let { direction } = useLocale()
   let state = useContext(ListBoxContext)

   const { theme, colorScheme } = useThemeContext()
   const coloredTheme = theme[colorScheme]

   const listBoxSectionStyles = getSectionSeperatorStyles(
      coloredTheme.listBox.listBoxSection
   )

   const sectionHeaderStyes = getSectionHeaderStyles()

   const sectionStyles = getSectionStyles()
   return (
      <Fragment>
         <div
            role='presentation'
            ref={(headerRef as unknown) as RefObject<HTMLDivElement>}
            style={layoutInfoToStyle(header.layoutInfo as any, direction)}
         >
            {item.key !== state.collection.getFirstKey() && (
               <div {...separatorProps} className={listBoxSectionStyles} />
            )}
            {item.rendered && (
               <div
                  {...headingProps}
                  className={`${listBoxSectionStyles} ${sectionHeaderStyes}`}
               >
                  {item.rendered}
               </div>
            )}
         </div>
         <div
            {...groupProps}
            style={layoutInfoToStyle(reusableView.layoutInfo as any, direction)}
            className={sectionStyles}
         >
            {children}
         </div>
      </Fragment>
   )
}
