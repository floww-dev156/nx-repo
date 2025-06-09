import React, { ReactElement, Key } from 'react'

export interface ValueContainerState {
   selectedKey: Key
   rendered: React.ReactNode
}

type PickerContextType = {
   renderValueContainer?: (state: ValueContainerState) => React.ReactNode
   renderLeadingIcon?: () => React.ReactNode
}

const PickerContext = React.createContext<PickerContextType>({
   renderValueContainer: undefined,
   renderLeadingIcon: undefined
})

export const usePickerContext = () => {
   const context = React.useContext(PickerContext)

   if (!context) {
      throw new Error('Expected to be wrapped in Picker Context Provider')
   }

   return context
}

export const PickerContextProvider = ({
   children,
   renderValueContainer,
   renderLeadingIcon
}: {
   children: ReactElement
   renderValueContainer?: (state: ValueContainerState) => React.ReactNode
   renderLeadingIcon?: () => React.ReactNode
}) => (
   <PickerContext.Provider
      value={{
         renderValueContainer,
         renderLeadingIcon
      }}
   >
      {children}
   </PickerContext.Provider>
)
