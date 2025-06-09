import React, { ReactElement, Key } from 'react'

export interface ValueContainerState {
   selectedKeys: Key[]
}

type MultiSelectComboboxContextType = {
   renderNoItemsView?: () => React.ReactNode
   renderLoadingView?: () => React.ReactNode
   renderErrorView?: () => React.ReactNode
   renderValueContainer?: (state: ValueContainerState) => React.ReactNode
}

const MultiSelectComboboxContext = React.createContext<
   MultiSelectComboboxContextType
>({
   renderNoItemsView: undefined,
   renderLoadingView: undefined,
   renderErrorView: undefined,
   renderValueContainer: undefined
})

export const useComboboxContext = () => {
   const context = React.useContext(MultiSelectComboboxContext)

   if (!context) {
      throw new Error('Expected to be wrapped in Combobox Context Provider')
   }

   return context
}

export const MultiSelectComboboxContextProvider = ({
   children,
   renderNoItemsView,
   renderLoadingView,
   renderErrorView,
   renderValueContainer
}: {
   children: ReactElement
   renderNoItemsView?: () => React.ReactNode
   renderLoadingView?: () => React.ReactNode
   renderErrorView?: () => React.ReactNode
   renderValueContainer?: (state: ValueContainerState) => React.ReactNode
}) => (
   <MultiSelectComboboxContext.Provider
      value={{
         renderNoItemsView,
         renderLoadingView,
         renderErrorView,
         renderValueContainer: renderValueContainer
      }}
   >
      {children}
   </MultiSelectComboboxContext.Provider>
)
