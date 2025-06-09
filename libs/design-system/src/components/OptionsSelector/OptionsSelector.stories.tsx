import { useState } from 'react'

import { ThemeContextProvider } from '../../Theme/Provider'
import { defaultTheme } from '../../Theme/theme'

import OptionsSelector from './OptionsSelector'
import { OptionsSelectorOptionType } from './types'

const options: OptionsSelectorOptionType[] = Array(97)
   .fill(0)
   .map((_, index) => ({ id: index.toString(), name: index.toString() }))
const searchInputOptionsMinThresholdLimit = 21

export const Base = () => {
   const [selectedOptions, setSelectedOptions] = useState<
      OptionsSelectorOptionType[]
   >(options.slice(0, 1))

   return (
      <ThemeContextProvider theme={defaultTheme}>
         <OptionsSelector
            containerClassName='max-h-[420px] w-[420px] border border-blue-500'
            options={options.slice(0, 21)}
            selectedOptions={selectedOptions}
            onChangeSelectedOptions={setSelectedOptions}
         />
      </ThemeContextProvider>
   )
}

export const EmptyView = () => {
   const [selectedOptions, setSelectedOptions] = useState<
      OptionsSelectorOptionType[]
   >(options.slice(0, 1))

   return (
      <ThemeContextProvider theme={defaultTheme}>
         <OptionsSelector
            containerClassName='max-h-[420px] w-[420px] border border-blue-500'
            options={[]}
            selectedOptions={selectedOptions}
            onChangeSelectedOptions={setSelectedOptions}
         />
      </ThemeContextProvider>
   )
}

export const OptionsGreaterThanSearchInputRequirement = () => {
   const [selectedOptions, setSelectedOptions] = useState<
      OptionsSelectorOptionType[]
   >(options.slice(0, 1))

   const upperLimit = searchInputOptionsMinThresholdLimit + 1

   return (
      <ThemeContextProvider theme={defaultTheme}>
         <OptionsSelector
            containerClassName='max-h-[420px] w-[420px] border border-blue-500'
            options={options.slice(0, upperLimit)}
            selectedOptions={selectedOptions}
            onChangeSelectedOptions={setSelectedOptions}
            searchProps={{
               optionsMinThresholdLimit: searchInputOptionsMinThresholdLimit
            }}
         />
      </ThemeContextProvider>
   )
}

export const OptionsLessThanSearchInputRequirement = () => {
   const [selectedOptions, setSelectedOptions] = useState<
      OptionsSelectorOptionType[]
   >(options.slice(0, 1))

   const upperLimit = searchInputOptionsMinThresholdLimit - 1

   return (
      <ThemeContextProvider theme={defaultTheme}>
         <OptionsSelector
            containerClassName='max-h-[420px] w-[420px] border border-blue-500'
            options={options.slice(0, upperLimit)}
            selectedOptions={selectedOptions}
            onChangeSelectedOptions={setSelectedOptions}
            searchProps={{
               optionsMinThresholdLimit: searchInputOptionsMinThresholdLimit
            }}
         />
      </ThemeContextProvider>
   )
}

export const OptionSelectorWithSections = () => {
   const [selectedOptions, setSelectedOptions] = useState<
      OptionsSelectorOptionType[]
   >([])

   const optionList = [
      {
         id: 'section1',
         name: 'Section 1',
         children: [
            { id: 'Child 11', name: 'Child 11' },
            { id: 'Child 12', name: 'Child 12' },
            { id: 'Child 13', name: 'Child 13' },
            { id: 'Child 14', name: 'Child 14' },
            { id: 'Child 15', name: 'Child 15' },
            { id: 'Child 16', name: 'Child 16' },
            { id: 'Child 17', name: 'Child 17' },
            { id: 'Child 18', name: 'Child 18' },
            { id: 'Child 19', name: 'Child 19' },
            { id: 'Child 20', name: 'Child 20' }
         ]
      },
      {
         id: 'section2',
         name: 'Section 2',
         children: [
            { id: 'Child 21', name: 'Child 21' },
            { id: 'Child 22', name: 'Child 22' },
            { id: 'Child 23', name: 'Child 23' },
            { id: 'Child 24', name: 'Child 24' },
            { id: 'Child 25', name: 'Child 25' },
            { id: 'Child 26', name: 'Child 26' },
            { id: 'Child 27', name: 'Child 27' },
            { id: 'Child 28', name: 'Child 28' },
            { id: 'Child 29', name: 'Child 29' },
            { id: 'Child 30', name: 'Child 30' }
         ]
      }
   ]

   return (
      <ThemeContextProvider theme={defaultTheme}>
         <OptionsSelector
            containerClassName='max-h-[420px] w-[420px] border border-blue-500'
            options={optionList}
            selectedOptions={selectedOptions}
            onChangeSelectedOptions={setSelectedOptions}
            withSections={true}
         />
      </ThemeContextProvider>
   )
}

export default {
   title: 'Components/OptionsSelector',
   component: OptionsSelector
}
