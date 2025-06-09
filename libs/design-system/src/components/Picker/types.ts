import React, {
   RefObject,
   AriaAttributes,
   AriaRole,
   DOMAttributes as ReactDOMAttributes,
   CSSProperties,
   Key,
   ReactNode
} from 'react'
import { Node } from '@react-types/shared'

import { SpectrumPickerProps } from '@react-types/select'
import { FocusableRef } from '@react-types/shared'
import { SingleSelectListState } from '@react-stately/list'
import { MenuTriggerState } from '@react-stately/menu'
import { BasicSize, FocusRingVariant, Placement } from '../../types'

import { ListLayoutOptions } from '../ListBox/ListBoxBase'

import { ValueContainerState } from './Context/Provider'

export interface PickerButtonPropTypes {
   state: SelectState<any>
   triggerProps?: any
   isDisabled?: boolean
   ref: FocusableRef<HTMLButtonElement>
   valueProps?: DOMAttributes<any>
   size: BasicSize
   id?: string
   error?: ReactNode
   placeholder?: string
   hoverProps: DOMAttributes<any>
   renderValueContainer?: (state: ValueContainerState) => React.ReactNode
   renderLeadingIcon?: () => React.ReactNode
   focusProps: DOMAttributes<any>
   autoFocus?: boolean
   inputButtonTextClassName?: string
   buttonClassName?: string
   showToolTip?: boolean
   showPickerButtonRightIcon?: boolean
   pickerButtonClassName?: string
   rightIconHeight?: number
   rightIconWidth?: number
   shouldShowClearButton: boolean
   onSelectionChange?: (key: Key) => any
}

export interface SelectState<T>
   extends SingleSelectListState<T>,
      MenuTriggerState {
   readonly isFocused: boolean
   setFocused(isFocused: boolean): void
}

export interface FocusableElement extends Element, HTMLOrSVGElement {}

export interface DOMAttributes<T = FocusableElement>
   extends AriaAttributes,
      ReactDOMAttributes<T> {
   id?: string | undefined
   role?: AriaRole | undefined
   tabIndex?: number | undefined
   style?: CSSProperties | undefined
   className?: string | undefined
}

export interface CustomOptionType<T> {
   optionRef: RefObject<HTMLDivElement>
   item: Node<T>
   labelProps: DOMAttributes
   descriptionProps: DOMAttributes
   isSelected: boolean
   isFocused: boolean
   isDisabled: boolean
   optionProps: DOMAttributes
}

export interface PickerProps<T> extends SpectrumPickerProps<T> {
   buttonClassName?: string
   containerClassName?: string
   dataTestId?: string
   defaultSelectedKey?: string
   focusRingVariant?: FocusRingVariant
   hint?: React.ReactNode
   hintClassName?: string
   id?: string
   inputButtonTextClassName?: string
   isDisabled?: boolean
   isRequired?: boolean
   label?: string
   labelClassName?: string
   listBoxClassName?: string
   listLayoutOptions?: ListLayoutOptions<T>
   pickerButtonClassName?: string
   pickerButtonRightIconHeight?: number
   pickerButtonRightIconWidth?: number
   placement?: Placement
   popOverStyles?: CSSProperties
   selectedKey?: string
   shouldOpenPopoverOnLabelClick?: boolean
   shouldShowClearButton?: boolean
   showLabel?: boolean
   showPickerButtonRightIcon?: boolean
   showToolTip?: boolean
   size?: BasicSize
   customOption?: (props: CustomOptionType<T>) => JSX.Element
   mobileCustomOption?: (props: CustomOptionType<T>) => JSX.Element
   onBlur?: () => void
   onFocus?: () => void
   renderRequiredIcon?: () => React.ReactElement
}
