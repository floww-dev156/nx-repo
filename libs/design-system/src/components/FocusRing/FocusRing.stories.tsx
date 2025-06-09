import { FocusRing, FocusRingWithBorder } from '.'
import { ThemeContextProvider } from '../../Theme/Provider'
import { defaultTheme } from '../../Theme/theme'

export const FocusRingDefault = () => (
   <ThemeContextProvider theme={defaultTheme}>
      <FocusRing>
         <div className='w-fit border-blue-gray-300 border border-solid'>
            <input
               type='text'
               className='outline-none rounded-10px'
               autoFocus
            />
         </div>
      </FocusRing>
   </ThemeContextProvider>
)
FocusRingDefault.storyName = 'Default'

export const FocusRingDefaultError = () => (
   <ThemeContextProvider theme={defaultTheme}>
      <FocusRing isError={true}>
         <div className='w-fit border-blue-gray-300 border border-solid'>
            <input
               type='text'
               className='outline-none rounded-10px'
               autoFocus
            />
         </div>
      </FocusRing>
   </ThemeContextProvider>
)
FocusRingDefaultError.storyName = 'FocusRing with Error'

export const FocusRingDefaultVariant = () => (
   <ThemeContextProvider theme={defaultTheme}>
      <FocusRing variant={'Gray'}>
         <div className='w-fit border-blue-gray-300 border border-solid'>
            <input
               type='text'
               className='outline-none rounded-10px'
               autoFocus
            />
         </div>
      </FocusRing>
   </ThemeContextProvider>
)
FocusRingDefaultVariant.storyName = 'FocusRing with Variant'

export const FocusRingDefaultVariantAndError = () => (
   <ThemeContextProvider theme={defaultTheme}>
      <FocusRing isError={true} variant={'Gray'}>
         <div className='w-fit border-blue-gray-300 border border-solid'>
            <input
               type='text'
               className='outline-none rounded-10px'
               autoFocus
            />
         </div>
      </FocusRing>
   </ThemeContextProvider>
)
FocusRingDefaultVariantAndError.storyName = 'FocusRing with Variant and Error'

export const FocusRingWithBorderDefault = () => (
   <ThemeContextProvider theme={defaultTheme}>
      <FocusRingWithBorder>
         <div className='w-fit border-blue-gray-300 border border-solid'>
            <input
               type='text'
               className='outline-none rounded-10px'
               autoFocus
            />
         </div>
      </FocusRingWithBorder>
   </ThemeContextProvider>
)
FocusRingWithBorderDefault.storyName = 'FocusRingWithBorder'
export const FocusRingWithBorderError = () => (
   <ThemeContextProvider theme={defaultTheme}>
      <FocusRingWithBorder isError={true}>
         <div className='w-fit border-blue-gray-300 border border-solid'>
            <input
               type='text'
               className='outline-none rounded-10px'
               autoFocus
            />
         </div>
      </FocusRingWithBorder>
   </ThemeContextProvider>
)
FocusRingWithBorderError.storyName = 'FocusRingWithBorder with Error'

export const FocusRingWithBoarderVariant = () => (
   <ThemeContextProvider theme={defaultTheme}>
      <FocusRingWithBorder variant={'Gray'}>
         <div className='w-fit border-blue-gray-300 border border-solid'>
            <input
               type='text'
               className='outline-none rounded-10px'
               autoFocus
            />
         </div>
      </FocusRingWithBorder>
   </ThemeContextProvider>
)
FocusRingWithBoarderVariant.storyName = 'FocusRingWithBorder with Variant'

export const FocusRingWithBorderVariantAndError = () => (
   <ThemeContextProvider theme={defaultTheme}>
      <FocusRingWithBorder isError={true} variant={'Gray'}>
         <div className='w-fit border-blue-gray-300 border border-solid'>
            <input
               type='text'
               className='outline-none rounded-10px'
               autoFocus
            />
         </div>
      </FocusRingWithBorder>
   </ThemeContextProvider>
)

FocusRingWithBorderVariantAndError.storyName =
   'FocusRingWithBorder with Variant and Error'

export const FocusRingWithBorderNoneVariant = () => (
   <ThemeContextProvider theme={defaultTheme}>
      <FocusRingWithBorder variant={'None'}>
         <div className='w-fit border-blue-gray-300 border border-solid'>
            <input
               type='text'
               className='outline-none rounded-10px'
               autoFocus
            />
         </div>
      </FocusRingWithBorder>
   </ThemeContextProvider>
)

FocusRingWithBorderNoneVariant.storyName =
   'FocusRingWithBorder with Variant None'

export default {
   title: 'un-published/Components/FocusRing',
   component: FocusRing
}
