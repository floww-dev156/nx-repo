// #region - Common for both Async & Normal OptionsSelector(s)
export interface OptionsSelectorOptionType {
   // TODO: use the common type for both `OptionsSingleSelectorOptionType` && `OptionsSelectorOptionType`
   id: string
   name: string
}

export interface OptionsSelectorSectionType {
   id: string
   name: string
   children: OptionsSelectorOptionType[]
}

interface CommonOptionsSelectorProps<Option extends OptionsSelectorOptionType> {
   containerClassName: string
   selectedOptions: Option[]

   shouldEnableSearch?: boolean
   onChangeSelectedOptions: (options: Option[]) => void
   shouldEnableInlineSearch?: boolean
   shouldEnableLocalFiltering?: boolean
   selectedOptionsBadgesContainerClassName?: string
   listBoxContainerClassName?: string
   shouldFixListBoxHeight?: boolean

   renderCustomOptionContent?: (
      option: Option,
      isSelected: boolean
   ) => React.ReactElement

   renderCustomOption?: (
      option: Option,
      containerProps: any,
      isSelected: boolean,
      isDisabled?: boolean
   ) => React.ReactElement
   renderCustomSelectedOptionBadge?: (
      option: Option,
      removeOption: (optionId: string) => void
   ) => React.ReactElement

   selectionMode?: 'multiple' | 'single'

   renderNoOptionsView?: () => React.ReactElement
   disabledKeys?: Iterable<React.Key>
   estimatedRowHeight?: number
   rowHeight?: number
   autoFocus?: boolean
   placeholder?: string
   disallowEmptySelection?: boolean
   virtualizerRenderCount?: number
}

interface CommonSingleOptionsSelectorProps<
   Option extends OptionsSelectorOptionType
>
   extends Omit<
      CommonOptionsSelectorProps<Option>,
      'selectedOptions' | 'onChangeSelectedOptions'
   > {
   onChangeSelectedOption: (option?: Option) => void

   selectedOption?: Option
}
// #endregion

// #region - Normal OptionsSelector Props
interface OptionsSelectorSearchProps {
   optionsMinThresholdLimit?: number
   placeholderText?: string
}

export interface OptionsSelectorProps<Option extends OptionsSelectorOptionType>
   extends CommonOptionsSelectorProps<Option> {
   options: Option[]

   searchProps?: OptionsSelectorSearchProps
}
// #endregion

// #region - Async OptionsSelector Props
export interface AsyncOptionsSelectorResponseDataType<
   Option extends OptionsSelectorOptionType
> {
   options: Option[]

   totalCount?: number
}

export interface AsyncOptionsSelectorSearchProps {
   debounceTimeDelay?: number
   placeholderText?: string
}

export interface CommonAsyncOptionsSelectorProps<
   Option extends OptionsSelectorOptionType
> extends CommonOptionsSelectorProps<Option> {
   searchProps?: AsyncOptionsSelectorSearchProps

   renderCustomLoader?: () => React.ReactElement
}

export interface CommonAsyncSingleOptionsSelectorProps<
   Option extends OptionsSelectorOptionType
> extends CommonSingleOptionsSelectorProps<Option> {
   estimatedRowHeight?: number
   rowHeight?: number
   searchProps?: AsyncOptionsSelectorSearchProps

   renderCustomLoader?: () => React.ReactElement
}
// #endregion
