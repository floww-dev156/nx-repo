import React, { InputHTMLAttributes, RefObject } from 'react'

import { SpectrumComboBoxProps } from '@react-types/combobox'
import { AriaButtonProps } from '@react-types/button'
import { FocusableRefValue, LoadingState } from '@react-types/shared'
import { PositionProps } from '@react-types/overlays'

import { BasicSize, Placement } from '../../types'

import { ComboBoxState } from './hooks/useComboBoxState'
import { CustomOptionType } from '../Picker/types'
import { ListLayoutOptions } from '../ListBox/ListBoxBase'

export interface ComboBoxBaseProps<T extends any>
   extends SpectrumComboBoxProps<any> {
   size?: BasicSize
   label?: string
   hint?: React.ReactNode
   placeholder?: string
   errorMessage?: React.ReactNode
   isRequired?: boolean
   isAsync?: boolean
   inputStartEnhancer?: React.ReactNode
   customOption?: (props: CustomOptionType<T>) => JSX.Element
   mobileCustomOption?: (props: CustomOptionType<T>) => JSX.Element
   enableCustomTrigger?: boolean
   customTrigger?: () => JSX.Element
   defaultOpen?: boolean
   autoFocus?: boolean
   onInputChange?: (value: string) => void
   onSelectionChange?: (key: React.Key) => void
   onBlur?: () => void
   selectedKey?: string
   defaultSelectedKey?: string
   inputValue?: string
   id?: string
   dataTestId?: string
   isDisabled?: boolean
   inputPrefixEnhancerContainerClassName?: string
   inputClassName?: string
   closeIconContainerClassName?: string
   isApiFailed?: boolean
   prefixEnhancer?: () => JSX.Element
   popoverStyles?: Record<string, any>
   onApiRetry?: () => void
   listLayoutOptions?: ListLayoutOptions<T>
   className?: string
   shouldRenderClearIcon?: boolean
   placement?: Placement
   showToolTip?: boolean
   labelClassName?: string
   renderRequiredIcon?: () => React.ReactElement
   alwaysShowWebView?: boolean
}
//FIXME:fix the below type any with unknown
export interface ComboBoxInputProps extends SpectrumComboBoxProps<any> {
   inputProps: InputHTMLAttributes<HTMLInputElement>
   inputRef: RefObject<HTMLInputElement | HTMLTextAreaElement>
   triggerProps: AriaButtonProps
   triggerRef: RefObject<FocusableRefValue<HTMLElement>>
   style?: React.CSSProperties
   className?: string
   isOpen?: boolean
   prefixEnhancer?: () => JSX.Element
   state: ComboBoxState<any>
   size: BasicSize
   inputPrefixEnhancerContainerClassName?: string
   inputClassName?: string
   enableCustomTrigger?: boolean
   closeIconContainerClassName?: string
   shouldRenderClearIcon: boolean
   showToolTip?: boolean
}
export interface TrayComboBoxSearchInputProps
   extends Omit<SpectrumComboBoxProps<any>, 'children'> {
   inputProps: InputHTMLAttributes<HTMLInputElement>
   style?: React.CSSProperties
   className?: string
   prefixEnhancer?: () => JSX.Element
   size: BasicSize
   inputPrefixEnhancerContainerClassName?: string
   inputClassName?: string
}

export interface OverlayOptions extends PositionProps {
   boundaryElement?: HTMLElement
   targetRef?: RefObject<HTMLElement>
   overlayRef?: RefObject<HTMLElement>
   scrollRef?: RefObject<HTMLElement>
   shouldUpdatePosition?: boolean
   onClose?: () => void
   maxHeight?: number
}

export interface ComboBoxPropsTypes {
   error: string | undefined
   fieldContainerStyles?: string
   wrapperWithPopOverStyles?: string
   inputGroupStyles?: string
   inputFieldStyles?: string
   buttonStyles?: string
   errorMessageStyles?: string
   popOverStyles?: string
   listBoxStyles?: string
   dropDownIcon?: any
   selectedOptionIcon?: any
   listItemStyles?: string
   itemContentStyles?: string
   helperText?: string
   isDisabled?: boolean
   apiStatus?: string
   label?: string
   autoFocus?: boolean
   overlayOptions?: OverlayOptions
   getPopoverPositionStyles?: (
      positionProps: React.HTMLAttributes<Element>,
      triggerRef: React.RefObject<HTMLElement>
   ) => Record<string, any>
   customHeader?: (props: { onClose: () => void }) => JSX.Element
   trayContainerClassName?: string
   trayChildrenWrapperClassName?: string
   listboxLayoutOptions?: ListLayoutOptions<any>
   bottomSheetHeaderStyles?: string
   loadingState?: LoadingState
   onLoadMore?: () => any
   name?: string
}
