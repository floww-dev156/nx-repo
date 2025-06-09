import {
   AriaLabelingProps,
   DOMProps,
   FocusStrategy,
   Node,
   StyleProps
} from '@react-types/shared'
import { AriaListBoxOptions, useListBox } from '@react-aria/listbox'
import { ListBoxContext } from './ListBoxContext'
import { ListBoxOption } from './ListBoxOption'
import { ListBoxSection } from './ListBoxSection'
import { ListLayout } from '@react-stately/layout'
import { ListState } from '@react-stately/list'
import { mergeProps } from '@react-aria/utils'
import { FocusScope } from 'react-aria'
import React, {
   HTMLAttributes,
   Key,
   ReactElement,
   ReactNode,
   RefObject,
   useMemo
} from 'react'
import { ReusableView } from '@react-stately/virtualizer'
import { useCollator } from '@react-aria/i18n'
import { Virtualizer, VirtualizerItem } from '@react-aria/virtualizer'
import { Collection } from '@react-types/shared'

import { BasicSize } from '../../types'
import { MobileOptionVariant } from './types'

import './index.css'
import { Loader } from '../Loader/Loader'
import { colors } from '../../style-guide'
import { getListBoxStyles } from './styles'

export type ListLayoutOptions<T> = {
   rowHeight?: number
   estimatedRowHeight?: number
   headingHeight?: number
   estimatedHeadingHeight?: number
   padding?: number
   indentationForItem?: (collection: Collection<Node<T>>, key: Key) => number
   collator?: Intl.Collator
   loaderHeight?: number
   placeholderHeight?: number
   allowDisabledKeyFocus?: boolean
}

interface ListBoxBaseProps<T extends unknown>
   extends AriaListBoxOptions<T>,
      DOMProps,
      AriaLabelingProps,
      StyleProps {
   //FIXME:update below any with respective type
   layout: ListLayout<any>
   state: ListState<T>
   autoFocus?: boolean | FocusStrategy
   shouldFocusWrap?: boolean
   shouldSelectOnPressUp?: boolean
   focusOnPointerEnter?: boolean
   domProps?: HTMLAttributes<HTMLElement>
   disallowEmptySelection?: boolean
   shouldUseVirtualFocus?: boolean
   transitionDuration?: number
   isLoading?: boolean
   onLoadMore?: () => void
   renderEmptyState?: () => ReactNode
   onScroll?: () => void
   customOption?: (props: any) => JSX.Element
   customLoader?: () => JSX.Element
   size: BasicSize
   listBoxClassName?: string
   isApiFailed?: boolean
   mobileOptionVariant?: MobileOptionVariant
   isFromMobile?: boolean
   virtualizerRenderCount?: number
}

/** @private */
export function useListBoxLayout<T>(
   state: ListState<T>,
   listLayoutOptions?: ListLayoutOptions<T>
): ListLayout<T> {
   let collator = useCollator({ usage: 'search', sensitivity: 'base' })
   let layout = useMemo(
      () =>
         new ListLayout<T>({
            estimatedRowHeight: listLayoutOptions?.estimatedRowHeight ?? 44,
            estimatedHeadingHeight: listLayoutOptions?.headingHeight ?? 33,
            padding: listLayoutOptions?.padding ?? 1,
            loaderHeight: listLayoutOptions?.loaderHeight ?? 40,
            placeholderHeight: listLayoutOptions?.placeholderHeight ?? 240,
            rowHeight: listLayoutOptions?.rowHeight,
            collator
         }),
      [collator]
   )

   layout.collection = state.collection
   layout.disabledKeys = state.disabledKeys
   return layout
}

/** @private */
function ListBoxBase<T>(
   props: ListBoxBaseProps<T>,
   ref: RefObject<HTMLDivElement>
) {
   let {
      layout,
      state,
      shouldSelectOnPressUp,
      focusOnPointerEnter,
      shouldUseVirtualFocus,
      domProps = {},
      transitionDuration = 0,
      onScroll,
      customOption,
      customLoader: CustomLoader,
      listBoxClassName,
      isApiFailed,
      isFromMobile,
      virtualizerRenderCount = -1
   } = props
   let { listBoxProps } = useListBox(
      {
         ...props,
         keyboardDelegate: layout,
         isVirtualized: true
      },
      state,
      ref
   )

   layout.isLoading = props.isLoading ? props.isLoading : false

   type View = ReusableView<Node<T>, unknown>
   let renderWrapper = (
      parent: View,
      reusableView: View,
      children: View[],
      renderChildren: (views: View[]) => ReactElement[]
   ) => {
      if (reusableView.viewType === 'section') {
         return (
            <ListBoxSection
               key={reusableView.key}
               reusableView={reusableView}
               //@ts-ignore

               header={children.find(c => c.viewType === 'header')}
            >
               {renderChildren(children.filter(c => c.viewType === 'item'))}
            </ListBoxSection>
         )
      }

      return (
         <VirtualizerItem
            key={reusableView.key}
            //@ts-ignore
            reusableView={reusableView}
            parent={parent as any}
         />
      )
   }
   const renderItem = (type: string, item: Node<T>): ReactElement | null => {
      if (type === 'item') {
         return (
            <ListBoxOption
               item={item}
               shouldSelectOnPressUp={shouldSelectOnPressUp}
               shouldFocusOnHover={focusOnPointerEnter}
               shouldUseVirtualFocus={shouldUseVirtualFocus}
               customOption={customOption}
               isFromMobile={props.isFromMobile}
               mobileOptionVariant={props.mobileOptionVariant}
               size={props.size}
            />
         )
      } else if (type === 'placeholder' || (type === 'loader' && isApiFailed)) {
         let emptyState = props.renderEmptyState
            ? props.renderEmptyState()
            : null
         if (emptyState == null) {
            return null
         }

         return (
            <div
               role='option'
               className='flex items-center justify-center flex-col h-full'
            >
               {emptyState}
            </div>
         )
      } else if (type === 'loader') {
         return CustomLoader ? (
            <CustomLoader />
         ) : (
            <div
               role='option'
               style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%'
               }}
            >
               <Loader fill={colors['gray-500']} height={20} width={20} />
            </div>
         )
      }
      return null
   }

   const isEmptyState = state.collection.size === 0
   const shouldRenderVirtualizer =
      state.collection.size > virtualizerRenderCount
   return (
      <ListBoxContext.Provider value={state}>
         <FocusScope restoreFocus={true}>
            {shouldRenderVirtualizer ? (
               <Virtualizer
                  {...mergeProps(listBoxProps, domProps)}
                  ref={ref}
                  focusedKey={state.selectionManager.focusedKey}
                  sizeToFit='height'
                  scrollDirection='vertical'
                  layout={layout}
                  collection={state.collection}
                  className={`${getListBoxStyles(
                     isEmptyState,
                     isFromMobile
                  )} ${listBoxClassName} `}
                  //@ts-ignore

                  renderWrapper={renderWrapper}
                  transitionDuration={transitionDuration}
                  isLoading={props.isLoading}
                  onLoadMore={props.onLoadMore}
                  shouldUseVirtualFocus={shouldUseVirtualFocus}
                  onScroll={onScroll}
               >
                  {renderItem}
               </Virtualizer>
            ) : (
               <div
                  className={`${getListBoxStyles(
                     isEmptyState,
                     isFromMobile
                  )} ${listBoxClassName} `}
               >
                  {Array.from(state.collection).map(item =>
                     renderItem(item.type, item)
                  )}
               </div>
            )}
         </FocusScope>
      </ListBoxContext.Provider>
   )
}

//@ts-ignore

const _ListBoxBase = React.forwardRef(ListBoxBase) as <T>(
   props: ListBoxBaseProps<T> & { ref?: RefObject<HTMLDivElement> }
) => ReactElement
export { _ListBoxBase as ListBoxBase }
