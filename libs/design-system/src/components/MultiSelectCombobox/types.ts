import { InputHTMLAttributes, Key, RefObject } from 'react'

import { SpectrumComboBoxProps } from '@react-types/combobox'
import { AriaButtonProps } from '@react-types/button'
import { FocusableRefValue, Node } from '@react-types/shared'

import {
   BasicSize,
   CustomBadgeArgs,
   Placement,
   SelectedItem
} from '../../types'

import { ComboBoxState } from './hooks/useMultiSelectComboBoxState'
import { CustomOptionType } from '../Picker/types'
import { ListLayoutOptions } from '../ListBox/ListBoxBase'
import { ValueContainerState } from './context/Provider'

export interface MultiSelectComboBoxBaseProps<T extends any>
   extends Omit<SpectrumComboBoxProps<any>, 'onSelectionChange' | 'validate'> {
   size?: BasicSize
   label?: string
   labelClassName?: string
   hint?: React.ReactNode
   placeholder?: string
   errorMessage?: React.ReactNode
   isRequired?: boolean
   isAsync?: boolean
   hintClassName?: string
   children: any
   inputStartEnhancer?: React.ReactNode
   customOption?: (props: CustomOptionType<T>) => JSX.Element
   mobileCustomOption?: (props: CustomOptionType<T>) => JSX.Element
   enableCustomTrigger?: boolean
   customTrigger?: () => JSX.Element
   defaultOpen?: boolean
   autoFocus?: boolean
   onInputChange?: (value: string) => void
   onSelectionChange?: (keys: Array<React.Key>) => void
   onBlur?: () => void
   selectedKeys?: Array<Key>
   defaultSelectedKeys?: Array<string>
   inputValue?: string
   id?: string
   dataTestId?: string
   placement?: Placement
   isDisabled?: boolean
   inputPrefixEnhancerContainerClassName?: string
   inputClassName?: string
   closeIconContainerClassName?: string
   isApiFailed?: boolean
   prefixEnhancer?: () => JSX.Element
   popoverStyles?: Record<string, any>
   onApiRetry?: () => void
   maxTagsToShow?: number
   listLayoutOptions?: ListLayoutOptions<T>
   shouldRenderClearIcon?: boolean
   className?: string
   isControlledSelectedItems?: boolean
   onClearSelectedOptions?: () => void
   customBadge?: (args: CustomBadgeArgs) => React.ReactNode
   selectedItems: Array<SelectedItem>
   tagsCountToolTipClassName?: string
   onRemoveItem?: (key: Key) => void
   shouldTriggerOnSelectionChangeOnRemoveItem?: boolean
   renderRequiredIcon?: () => React.ReactElement
   trayContainerClassName?: string
   trayChildrenWrapperClassName?: string
   listboxLayoutOptions?: ListLayoutOptions<any>
   apiStatus?: string
   bottomSheetHeaderStyles?: string
   helperText?: string
}
//FIXME:fix the below type any with unknown
export interface MultiSelectComboBoxState<T> extends ComboBoxState<T> {
   selectedKeys: Array<Key>
   selectedItems: Node<T>[]
}
export interface ComboBoxInputProps
   extends Omit<SpectrumComboBoxProps<any>, 'onSelectionChange'> {
   inputProps: InputHTMLAttributes<HTMLInputElement>
   inputRef: RefObject<HTMLInputElement | HTMLTextAreaElement>
   triggerProps: AriaButtonProps
   triggerRef: RefObject<FocusableRefValue<HTMLElement>>
   style?: React.CSSProperties
   onSelectionChange?: (keys: Array<React.Key>) => void
   shouldRenderClearIcon: boolean
   className?: string
   renderValueContainer?: (state: ValueContainerState) => React.ReactNode
   isOpen?: boolean
   prefixEnhancer?: () => JSX.Element
   state: MultiSelectComboBoxState<any>
   size: BasicSize
   inputPrefixEnhancerContainerClassName?: string
   inputClassName?: string
   enableCustomTrigger?: boolean
   closeIconContainerClassName?: string
}
