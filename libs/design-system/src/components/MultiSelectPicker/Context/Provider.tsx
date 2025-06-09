import React, { ReactElement, Key } from 'react'

export interface ValueContainerState {
   selectedKeys: Key[]
}

type MultiSelectPickerContextType = {
   renderValueContainer?: (state: ValueContainerState) => React.ReactNode
   renderLeadingIcon?: () => React.ReactNode
}

const MultiSelectPickerContext = React.createContext<
   MultiSelectPickerContextType
>({
   renderValueContainer: undefined,
   renderLeadingIcon: undefined
})

export const useMultiSelectPickerContext = () => {
   const context = React.useContext(MultiSelectPickerContext)

   if (!context) {
      throw new Error(
         'Expected to be wrapped in MultiSelectPicker Context Provider'
      )
   }

   return context
}

export const MultiSelectPickerContextProvider = ({
   children,
   renderValueContainer,
   renderLeadingIcon
}: {
   children: ReactElement
   renderValueContainer?: (state: ValueContainerState) => React.ReactNode
   renderLeadingIcon?: () => React.ReactNode
}) => (
   <MultiSelectPickerContext.Provider
      value={{
         renderValueContainer: renderValueContainer,
         renderLeadingIcon: renderLeadingIcon
      }}
   >
      {children}
   </MultiSelectPickerContext.Provider>
)
