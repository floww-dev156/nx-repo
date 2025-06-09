// #region - Common for both Async & Normal SectionOptionsSelector(s)
export interface BaseOptionItemType {
   // TODO: use the common type for both `BaseOptionItemType` && `OptionsSelectorOptionType`
   id: string
   name?: string | null
}

export interface SectionItemType {
   item: BaseOptionItemType
   key: string
   section: string
}

export interface SectionType {
   children: SectionItemType[]
   key: string
   section: string
}

interface CommonSectionOptionsSelectorProps {
   containerClassName: string
   shouldEnableLocalFiltering?: boolean

   renderNoOptionsView?: () => React.ReactElement

   renderCustomOptionContent?: (
      option: BaseOptionItemType,
      isSelected: boolean
   ) => React.ReactElement

   /* TODO: need to implement the below props (not needed for now)
   selectedOption?: Option

  
   renderCustomSection?: (section: Section) => React.ReactElement
   */
}
// #endregion

// #region - Async SectionOptionsSelector Props

interface AsyncSectionOptionsSelectorSearchProps {
   debounceTimeDelay?: number
   placeholderText?: string
}

export interface CommonAsyncSectionOptionsSelectorProps
   extends CommonSectionOptionsSelectorProps {
   searchProps?: AsyncSectionOptionsSelectorSearchProps

   renderCustomLoader?: () => React.ReactElement
   selectedBadgesContainerClassName?: string
   selectedBadgesListContainerClassName?: string
}
// #endregion
