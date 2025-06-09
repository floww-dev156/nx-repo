import { ColorScheme, Scale } from '@react-types/provider'
import { Theme } from '@react-types/provider'
import { useMediaQuery } from '@react-spectrum/utils'

export function useColorScheme(
   theme: Theme | null,
   defaultColorScheme: ColorScheme | undefined
): ColorScheme {
   let matchesDark = useMediaQuery('(prefers-color-scheme: dark)')
   let matchesLight = useMediaQuery('(prefers-color-scheme: light)')

   if (theme && theme.dark && matchesDark) {
      return 'dark'
   }

   if (theme && theme.light && matchesLight) {
      return 'light'
   }

   if (theme && theme.dark && defaultColorScheme === 'dark') {
      return 'dark'
   }

   if (theme && theme.light && defaultColorScheme === 'light') {
      return 'light'
   }

   if (theme && !theme.dark) {
      return 'light'
   }

   if (theme && !theme.light) {
      return 'dark'
   }

   return 'light'
}

export function useScale(theme: Theme | null): Scale {
   let matchesFine = useMediaQuery('(any-pointer: fine)')
   if (matchesFine && theme && theme.medium) {
      return 'medium'
   }

   if (theme && theme.large) {
      return 'large'
   }

   return 'medium'
}
