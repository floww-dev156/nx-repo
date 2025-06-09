import { CustomBadgeArgs } from '../../types'
import { ComboBoxBaseProps } from '../Combobox/types'

import { MultiSelectComboBoxBaseProps } from '../MultiSelectCombobox/types'

interface ApiProps {
   isInfiniteScrollable: boolean
   isApiFailed?: boolean
   shouldFetchMore?: boolean
   apiFunction: (page: number, filterText?: string) => Promise<any>
}

interface BaseAsyncComboBoxInterface {
   debounceTime?: number
   apiProps: ApiProps
   label?: string
   inputValue?: string
   setShouldInvalidate?: (
      updatedInValidate: boolean,
      sectionKey?: string
   ) => void
   onInputChange?: (e: string) => void
}

export interface AsyncComboBoxInterface<T>
   extends BaseAsyncComboBoxInterface,
      ComboBoxBaseProps<T> {}

export interface MultiSelectAsyncComboBoxInterface<T>
   extends BaseAsyncComboBoxInterface,
      MultiSelectComboBoxBaseProps<T> {
   children: any
   onCloseMenu?: () => void
   onOpenMenu?: () => void
   customBadge?: (args: CustomBadgeArgs) => React.ReactNode
   shouldTriggerApiOnOpenChange?: boolean
   shouldTriggerAPIOnMount?: boolean
}
