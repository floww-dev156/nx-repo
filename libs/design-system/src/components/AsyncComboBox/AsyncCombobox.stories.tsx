import { useState } from 'react'

import { dummyStore } from './DummyStore'
import { ThemeContextProvider } from '../../Theme/Provider'
import { defaultTheme } from '../../Theme/theme'
import { ComboboxContextProvider } from '../Combobox/context/Provider'
import { Item } from '../Item'
import { Section } from '../Section'
import { getSectionFormattedItems } from '../../utils/ComboBoxUtils'
import { resolveWithTimeout } from '../../utils/apiUtils'
import {
   fixturePlainItemsData,
   activityCategoryData,
   leadCategoryData
} from '../../constants/ApiDataConstants'

import { AsyncComboBox } from './AsyncComboBox'
import AsyncComboBoxWithSections from './AsyncComboBoxWithSections'

export default {
   title: 'Components/AsyncComboBox',
   component: AsyncComboBox
}

const limit = 10

const apiTriggerFunctionWithSections = (
   scrollCount: number,
   filterText?: string
) => {
   const sectionData = scrollCount > 5 ? activityCategoryData : leadCategoryData
   const filteredData = sectionData.filter(data =>
      data.field.name.includes(filterText as string)
   )

   const data = filteredData.slice(
      scrollCount * limit,
      scrollCount * limit + limit
   )

   const sectionFormattedArray = getSectionFormattedItems(data)

   return resolveWithTimeout(sectionFormattedArray, 1000)
}

const apiTriggerFunctionWithoutSections = (
   scrollCount: number,
   filterText: string = ''
) => {
   const filteredData = fixturePlainItemsData.filter(data =>
      data.name.includes(filterText)
   )

   const data = filteredData.slice(
      scrollCount * limit,
      scrollCount * limit + limit
   )

   return resolveWithTimeout(data, 1000)
}

export const DefaultAsyncComboBox = () => {
   const [selectedKey, setSelectedKey] = useState()
   const [scrollCount, setScrollCount] = useState(0)

   const doNetworkCall = async (scrollCount: number, filterText?: string) => {
      const data = await apiTriggerFunctionWithoutSections(
         scrollCount,
         filterText
      )
      setScrollCount(scrollCount)
      return data
   }

   const onSelectionChange = key => {
      setSelectedKey(key)
   }

   return (
      <>
         <ThemeContextProvider theme={defaultTheme}>
            <ComboboxContextProvider>
               <AsyncComboBox
                  label={'People'}
                  hint={'This is a hintt ext to help user.'}
                  placeholder={'Search'}
                  apiProps={{
                     apiFunction: doNetworkCall,
                     isInfiniteScrollable: true,
                     shouldFetchMore: scrollCount < 10
                  }}
                  selectedKey={selectedKey}
                  onSelectionChange={onSelectionChange}
                  placement={'bottom left'}
               >
                  {(item: any) => (
                     <Item textValue={item.name} key={item.id}>
                        {item.name}
                     </Item>
                  )}
               </AsyncComboBox>
            </ComboboxContextProvider>
         </ThemeContextProvider>
      </>
   )
}

export const DefaultAsyncComboBoxWithSections = () => {
   const [selectedKey, setSelectedKey] = useState()
   const [scrollCount, setScrollCount] = useState(0)

   const doNetworkCall = async (scrollCount: number, filterText?: string) => {
      const data = await apiTriggerFunctionWithSections(scrollCount, filterText)
      setScrollCount(scrollCount)
      return data
   }

   const onSelectionChange = key => {
      setSelectedKey(key)
   }

   const updateShouldInvalidate = (
      updatedInValidate: boolean,
      sectionKey?: string
   ) => {
      const shouldInvalidateData: any = { ...dummyStore.data }
      if (sectionKey) {
         shouldInvalidateData[sectionKey] = updatedInValidate
         dummyStore.updateData(shouldInvalidateData)
      }
   }
   return (
      <>
         <ThemeContextProvider theme={defaultTheme}>
            <ComboboxContextProvider>
               <AsyncComboBoxWithSections
                  label={'People'}
                  hint={'This is a hintt ext to help user.'}
                  placeholder={'Search'}
                  apiProps={{
                     apiFunction: doNetworkCall,
                     isInfiniteScrollable: true,
                     shouldFetchMore: scrollCount < 10
                  }}
                  selectedKey={selectedKey}
                  onSelectionChange={onSelectionChange}
                  setShouldInvalidate={updateShouldInvalidate}
                  placement={'bottom left'}
               >
                  {sectionItem => (
                     <Section
                        key={sectionItem.key}
                        items={sectionItem.children}
                        title={sectionItem.section}
                        shouldInvalidate={() => {
                           const invalidationState =
                              dummyStore.data[sectionItem.key]
                           return invalidationState
                        }}
                     >
                        {(item: any) => (
                           <Item
                              textValue={item.field.name}
                              key={item.field.id}
                           >
                              {item.field.name}
                           </Item>
                        )}
                     </Section>
                  )}
               </AsyncComboBoxWithSections>
            </ComboboxContextProvider>
         </ThemeContextProvider>
      </>
   )
}
