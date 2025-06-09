import React, { ReactElement, useRef, ReactNode } from 'react'
import cn from 'classnames'

import { useUnwrapDOMRef } from '@react-spectrum/utils'
import { FocusableRef, FocusableRefValue } from '@react-types/shared'
// @ts-ignore
import { useFilter } from '@react-aria/i18n'
import { useProviderProps } from '@react-spectrum/provider'

import ComboBoxInput from './ComboBoxInput'
import { useComboboxContext } from './context/Provider'
import { Dialog } from '../DialogTrigger/Dialog'
import { DialogTrigger } from '../DialogTrigger/DialogTrigger'
import { useComboBox } from './hooks/useComboBox'
import { useComboBoxState } from './hooks/useComboBoxState'
import { ListBoxBase, useListBoxLayout } from '../ListBox'
import { ComboBoxBaseProps } from './types'
import {
   comboBoxWithCustomTriggerContainerClassName,
   emptyListBoxContainerClassName,
   comboBoxWithCustomTriggerContentContainerClassName
} from './styles'

function ComboBoxWithTriggerBase<T>(
   props: ComboBoxBaseProps<T>,
   ref: FocusableRef<HTMLElement>
) {
   props = useProviderProps(props)

   //@ts-ignore
   return <ComboBoxBase {...props} ref={ref} />
}

const ComboBoxBase = React.forwardRef(function ComboBoxBase<T>(
   props: ComboBoxBaseProps<T>,
   ref: FocusableRef<HTMLElement>
) {
   let {
      menuTrigger = 'input',
      defaultOpen,
      loadingState,
      isApiFailed,
      onLoadMore,
      shouldRenderClearIcon = true,
      size = 'Small'
   } = props

   let buttonRef = useRef<FocusableRefValue<HTMLElement>>(null)
   let unwrappedButtonRef = useUnwrapDOMRef(buttonRef)

   let listBoxRef = useRef(null)
   let inputRef = useRef<HTMLInputElement>(null)

   let { contains } = useFilter({ sensitivity: 'base' })
   let state = useComboBoxState({
      ...props,
      defaultFilter: contains,
      allowsEmptyCollection: true,
      defaultOpen: defaultOpen
   })
   let layout = useListBoxLayout(state, props.listLayoutOptions)

   let { buttonProps, inputProps, listBoxProps } = useComboBox(
      {
         ...props,
         keyboardDelegate: layout,
         buttonRef: unwrappedButtonRef,
         listBoxRef,
         inputRef: inputRef,
         menuTrigger
      },
      state
   )

   const {
      renderNoItemsView,
      renderLoadingView,
      renderErrorView
   } = useComboboxContext()

   const getLoadingView = (): ReactNode => {
      return renderLoadingView ? renderLoadingView() : <>Loading...</>
   }

   const getNoDataView = (): ReactNode => {
      return renderNoItemsView ? renderNoItemsView() : <>No Results Found</>
   }

   const getErrorView = (): ReactNode => {
      return renderErrorView ? renderErrorView() : <>Error : API Failed</>
   }

   return (
      <div>
         <ComboBoxInput
            {...props}
            isOpen={state.isOpen}
            loadingState={loadingState}
            shouldRenderClearIcon={shouldRenderClearIcon}
            inputProps={inputProps}
            inputRef={inputRef}
            triggerProps={buttonProps}
            triggerRef={buttonRef}
            state={state}
            size={size}
         />

         <div style={{ marginTop: '10px' }}>
            <ListBoxBase
               size={size}
               {...listBoxProps}
               ref={listBoxRef}
               disallowEmptySelection
               autoFocus={state.focusStrategy || true}
               shouldSelectOnPressUp
               focusOnPointerEnter
               shouldUseVirtualFocus
               layout={layout}
               state={state}
               isLoading={
                  loadingState === 'loadingMore' || loadingState === 'loading'
               }
               onLoadMore={onLoadMore}
               customOption={props.customOption}
               UNSAFE_style={{ maxHeight: 'inherit' }}
               renderEmptyState={() => (
                  <div className={cn(emptyListBoxContainerClassName)}>
                     <span>
                        {isApiFailed
                           ? getErrorView()
                           : loadingState === 'loading'
                           ? getLoadingView()
                           : getNoDataView()}
                     </span>
                  </div>
               )}
            />
         </div>
      </div>
   )
})

const _ComboBoxWithTriggerBase = React.forwardRef(ComboBoxWithTriggerBase) as <
   T
>(
   props: ComboBoxBaseProps<T> & { ref?: FocusableRef<HTMLElement> }
) => ReactElement
export { _ComboBoxWithTriggerBase as ComboBoxWithTriggerBase }

export const ComboBoxWithCustomTrigger = <T extends unknown>(
   props: ComboBoxBaseProps<T>
) => {
   return (
      <div className={cn(comboBoxWithCustomTriggerContainerClassName)}>
         <DialogTrigger isDismissable={true} type='popover' hideArrow>
            {props.customTrigger ? (
               props.customTrigger()
            ) : (
               <button>Default Custom Trigger</button>
            )}
            {close => (
               <Dialog>
                  <div
                     className={
                        comboBoxWithCustomTriggerContentContainerClassName
                     }
                  >
                     <ComboBoxWithTriggerBase
                        {...props}
                        defaultOpen={true}
                        autoFocus={true}
                        enableCustomTrigger={true}
                        onSelectionChange={value => {
                           props.onSelectionChange &&
                              props.onSelectionChange(value)
                           close()
                        }}
                     />
                  </div>
               </Dialog>
            )}
         </DialogTrigger>
      </div>
   )
}
