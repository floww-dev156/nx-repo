import React, {
   ForwardedRef,
   ReactElement,
   ReactNode,
   RefObject,
   useCallback,
   useLayoutEffect,
   useRef,
   useState
} from 'react'
import { HiddenSelect } from 'react-aria'
import { useMediaQuery } from 'react-responsive'
import cn from 'classnames'

import {
   useUnwrapDOMRef,
   useResizeObserver,
   useFocusableRef
} from '@react-spectrum/utils'
import { useId } from '@react-aria/utils'
import {
   DOMRefValue,
   FocusableRef,
   FocusableRefValue
} from '@react-types/shared'
import { useComboBox } from '@react-aria/combobox'
import { useFilter } from '@react-aria/i18n'
import { useProviderProps } from '@react-spectrum/provider'

import { Hint } from '../Hint'
import { Label } from '../Label'
import { ListBoxBase, useListBoxLayout } from '../ListBox'
import { Popover } from '../Popover'
import { Loader } from '../Loader/Loader'
import { NoSearchResultsView } from '../NoSearchResultsView/NoSearchResultsView'
import { useThemeContext } from '../../Theme/Provider'

import ComboBoxInput from './ComboBoxInput'
import { useComboBoxState } from './hooks/useComboBoxState'
import { useComboboxContext } from './context/Provider'
import { ComboBoxBaseProps } from './types'
import {
   emptyListBoxContainerClassName,
   emptyViewButtonClass,
   loadingViewClassName,
   popoverClassName
} from './styles'
import { ErrorView } from './ErrorView'
import { MobileComboBox } from './MobileCombobox'
import { MOBILE_DEVICE_MAX_WIDTH } from '../../constants/MediaQueryConstants'

function ComboBox<T extends object>(
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
      shouldFlip = true,
      size = 'Small',
      defaultOpen,
      isApiFailed,
      loadingState,
      onLoadMore,
      popoverStyles = {},
      className = '',
      placement = 'bottom',
      shouldRenderClearIcon = true,
      showToolTip,
      customOption,
      mobileCustomOption,
      labelClassName,
      renderRequiredIcon,
      alwaysShowWebView = false
   } = props

   const isMobileDevice = useMediaQuery({
      query: `(max-width: ${MOBILE_DEVICE_MAX_WIDTH}px)`
   })

   if (isMobileDevice && !alwaysShowWebView) {
      return <MobileComboBox error={props.errorMessage as string} {...props} />
   }

   let popoverRef = useRef<DOMRefValue<HTMLDivElement>>(null)
   let unwrappedPopoverRef = useUnwrapDOMRef(popoverRef)
   let triggerRef = useRef<FocusableRefValue<HTMLElement>>(null)
   let unWrappedTriggerRef = useUnwrapDOMRef(triggerRef)
   let listBoxRef = useRef(null)
   let inputRef = useRef<any>()
   const comboBoxInputRef = useRef<any>(null)
   let domRef = useFocusableRef(ref, inputRef)

   const hintId = useId()

   let { contains } = useFilter({ sensitivity: 'base' })
   let state = useComboBoxState({
      ...props,
      defaultFilter: contains,
      allowsEmptyCollection: true,
      defaultOpen: defaultOpen
   })
   let layout = useListBoxLayout(state, props.listLayoutOptions)

   const { theme, colorScheme } = useThemeContext()
   const colorTheme = theme[colorScheme]

   let { buttonProps, inputProps, listBoxProps, labelProps } = useComboBox(
      {
         ...props,
         keyboardDelegate: layout,
         buttonRef: unWrappedTriggerRef,
         popoverRef: unwrappedPopoverRef,
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
      return renderLoadingView ? (
         renderLoadingView()
      ) : (
         <div className={loadingViewClassName}>
            <Loader fill={colorTheme.comboBox.popoverLoaderColor} />
         </div>
      )
   }

   const getNoDataView = (): ReactNode => {
      return renderNoItemsView ? (
         renderNoItemsView()
      ) : (
         <NoSearchResultsView
            textClassName={`${colorTheme.comboBox.noResultsTextColor}`}
         />
      )
   }

   const onRetryButtonClick = () => {
      return props.onApiRetry && props.onApiRetry()
   }

   const getErrorView = (): ReactNode => {
      return renderErrorView ? (
         renderErrorView()
      ) : (
         <ErrorView
            onRetryClick={onRetryButtonClick}
            isLoading={
               loadingState === 'loadingMore' || loadingState === 'loading'
            }
         />
      )
   }

   const renderEmptyView = (className?: string) => {
      return (
         <button ref={listBoxRef} className={emptyViewButtonClass}>
            <div className={cn(emptyListBoxContainerClassName, className)}>
               {isApiFailed
                  ? getErrorView()
                  : loadingState === 'loading' || loadingState === 'filtering'
                  ? getLoadingView()
                  : getNoDataView()}
            </div>
         </button>
      )
   }

   let [menuWidth, setMenuWidth] = useState<number | null>(null)

   let onResize = useCallback(() => {
      if (comboBoxInputRef.current) {
         let buttonWidth = comboBoxInputRef.current.offsetWidth
         setMenuWidth(buttonWidth)
      }
   }, [unWrappedTriggerRef, inputRef, setMenuWidth])

   useResizeObserver({
      ref: domRef,
      onResize: onResize
   })

   const scale = 'medium'
   useLayoutEffect(onResize, [scale, onResize])

   let style = {
      width: menuWidth,
      minWidth: menuWidth
   }

   const renderListBox = (
      isMobile?: boolean,
      className?: string,
      mobileOption?: (props: any) => React.ReactElement
   ) => {
      return (
         <ListBoxBase
            {...listBoxProps}
            size={size}
            ref={listBoxRef}
            disallowEmptySelection
            autoFocus={state.focusStrategy || true}
            shouldSelectOnPressUp
            focusOnPointerEnter
            layout={layout}
            state={state}
            customOption={
               isMobile
                  ? mobileCustomOption
                     ? mobileCustomOption
                     : mobileOption
                  : customOption
            }
            isLoading={
               loadingState === 'loadingMore' || loadingState === 'loading'
            }
            isApiFailed={isApiFailed}
            onLoadMore={onLoadMore}
            shouldUseVirtualFocus
            renderEmptyState={renderEmptyView}
            listBoxClassName={className}
         />
      )
   }

   const popover = (
      <Popover
         state={state}
         ref={popoverRef}
         triggerRef={comboBoxInputRef as RefObject<Element>}
         scrollRef={listBoxRef}
         placement={placement}
         hideArrow
         containerPadding={0}
         isNonModal
         shouldFlip={shouldFlip}
         className={cn(popoverClassName)}
         style={{ ...style, ...popoverStyles }}
      >
         {state.collection.size > 0 ? renderListBox() : renderEmptyView()}
      </Popover>
   )

   return (
      <>
         {props.label ? (
            <Label
               isRequired={props.isRequired}
               labelProps={{
                  ...labelProps
               }}
               size={props.size}
               containerClassName={labelClassName}
               renderRequiredIcon={renderRequiredIcon}
            >
               {props.label}
            </Label>
         ) : null}
         <ComboBoxInput
            {...props}
            ref={comboBoxInputRef as ForwardedRef<HTMLDivElement>}
            isOpen={state.isOpen}
            loadingState={loadingState}
            inputProps={inputProps}
            inputRef={
               inputRef as RefObject<HTMLInputElement | HTMLTextAreaElement>
            }
            triggerProps={buttonProps}
            triggerRef={triggerRef}
            state={state}
            size={size}
            shouldRenderClearIcon={shouldRenderClearIcon}
            className={className}
            showToolTip={showToolTip}
         />
         <HiddenSelect
            state={state}
            triggerRef={unWrappedTriggerRef}
            label={props.label}
            name={props.name}
         />
         {popover}
         <Hint
            id={hintId}
            error={props.errorMessage}
            hint={props.hint}
            size={props.size}
         />
      </>
   )
})

const _ComboBox = React.forwardRef(ComboBox) as <T>(
   props: ComboBoxBaseProps<T> & { ref?: FocusableRef<HTMLElement> }
) => ReactElement
export { _ComboBox as ComboBoxComponent }
