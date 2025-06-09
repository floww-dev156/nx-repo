import React, { ReactElement } from 'react'

import { useDOMRef } from '@react-spectrum/utils'
import { ListLayout } from '@react-stately/layout'
import { useListState } from '@react-stately/list'
import { SpectrumListBoxProps } from '@react-types/listbox'
import { DOMRef } from '@react-types/shared'

import { BasicSize, CustomOptionType } from '../../types'

import { ListBoxBase, ListLayoutOptions, useListBoxLayout } from './ListBoxBase'

interface ListBoxProps<T> extends SpectrumListBoxProps<T> {
   size: BasicSize

   listBoxClassName?: string
   listLayoutOptions?: ListLayoutOptions<T>

   customLoader?: () => React.ReactElement
   customOption?: (props: CustomOptionType<T>) => JSX.Element
   virtualizerRenderCount?: number
}

function ListBox<T extends object>(
   props: ListBoxProps<T>,
   ref: DOMRef<HTMLDivElement>
) {
   let state = useListState(props)
   let layout = useListBoxLayout(state, props.listLayoutOptions) as ListLayout<
      unknown
   >
   let domRef = useDOMRef(ref)

   return (
      <ListBoxBase
         {...props}
         size={props.size}
         ref={domRef}
         state={state}
         layout={layout}
      />
   )
}

const _ListBox = React.forwardRef(ListBox) as <T>(
   props: ListBoxProps<T> & {
      ref?: DOMRef<HTMLDivElement>
   }
) => ReactElement
export { _ListBox as ListBox }
