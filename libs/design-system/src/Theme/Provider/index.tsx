import React, { ReactElement } from 'react'

type ThemeContextType = {
   theme: any //TODO:update type here,
   colorScheme: 'light' | 'dark'
}

const ThemeContext = React.createContext<ThemeContextType>({
   theme: {},
   colorScheme: 'light'
})

export const useThemeContext = () => {
   const context = React.useContext(ThemeContext)

   if (!context) {
      throw new Error('Expected to be wrapped in Theme Context Provider')
   }

   return context
}

export const ThemeContextProvider = ({
   children,
   theme,
   colorScheme
}: {
   children: ReactElement
   theme: any
   colorScheme?: 'light' | 'dark'
}) => (
   <ThemeContext.Provider
      value={{
         theme: theme,
         colorScheme: colorScheme ? colorScheme : 'light'
      }}
   >
      {children}
   </ThemeContext.Provider>
)
