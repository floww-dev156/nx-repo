import React, { ReactElement } from 'react'

type ComboboxContextType = {
   renderNoItemsView?: () => React.ReactNode
   renderLoadingView?: () => React.ReactNode
   renderErrorView?: () => React.ReactNode
}

const ComboboxContext = React.createContext<ComboboxContextType>({
   renderNoItemsView: undefined,
   renderLoadingView: undefined,
   renderErrorView: undefined
})

export const useComboboxContext = () => {
   const context = React.useContext(ComboboxContext)

   if (!context) {
      throw new Error('Expected to be wrapped in Combobox Context Provider')
   }

   return context
}

export const ComboboxContextProvider = ({
   children,
   renderNoItemsView,
   renderLoadingView,
   renderErrorView
}: {
   children: ReactElement
   renderNoItemsView?: () => React.ReactNode
   renderLoadingView?: () => React.ReactNode
   renderErrorView?: () => React.ReactNode
}) => (
   <ComboboxContext.Provider
      value={{
         renderNoItemsView,
         renderLoadingView,
         renderErrorView
      }}
   >
      {children}
   </ComboboxContext.Provider>
)
