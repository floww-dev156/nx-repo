import { observer } from 'mobx-react'
import { useEffect, useState } from 'react'

import { dummyStore } from './DummyStore'
import { ThemeContextProvider } from '../../Theme/Provider'
import { defaultTheme } from '../../Theme/theme'
import { Item } from '../Item'
import { Section } from '../Section'
import { getSectionFormattedItems } from '../../utils/ComboBoxUtils'
import { resolveWithTimeout } from '../../utils/apiUtils'

import { AsyncMultiSelectComboBox } from './AsyncMultiSelectComboBox'
import AsyncMultiSelectComboBoxWithSections from './AsyncMultiSelectComboBoxWithSections'

import {
   fixturePlainItemsData,
   activityCategoryData,
   leadCategoryData
} from '../../constants/ApiDataConstants'
import { SelectedItem } from '../../types'
import { MultiSelectComboboxContextProvider } from '../MultiSelectCombobox'

export default {
   title: 'Components/AsyncMultiSelectComboBox',
   component: AsyncMultiSelectComboBox
}

const limit = 10

export const AsyncMultiSelectComboboxWithSections = () => {
   const [selectedKeys, setSelectedKeys] = useState()
   const [selectedItems, setSelectedItems] = useState<Array<SelectedItem>>([])

   const onSelectionChange = keys => {
      setSelectedKeys(keys)
      const selectedItems: Array<any> = []

      keys.forEach(key => {
         const found = dummyStore.apiData.find(
            (item: any) => item.field.id === key
         )
         if (found) {
            selectedItems.push({
               name: found.field.name,
               key: key,
               props: {}
            })
         }
      })
      setSelectedItems(selectedItems)
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

   const doNetworkCall = async (scrollCount: number, filterText?: string) => {
      const sectionData =
         scrollCount > 5 ? activityCategoryData : leadCategoryData

      const filteredData = sectionData.filter(data =>
         data.field.name.includes(filterText as string)
      )

      const data = filteredData.slice(
         scrollCount * limit,
         scrollCount * limit + limit
      )

      const sectionFormattedData = getSectionFormattedItems(data)
      const assigneeData =
         sectionFormattedData.length > 0 ? sectionFormattedData[0].children : []

      dummyStore.setApiData(assigneeData)

      return resolveWithTimeout(sectionFormattedData, 1000)
   }

   const renderCustomBadge = ({ onRemove, item }) => {
      return (
         <div className='flex bg-gray-500 rounded-4px p-4px mr-2px text-gray-800'>
            <div>Hiiii</div>
            <div
               className='ml-[16px]'
               onPointerDown={e => {
                  onRemove(item.key)
                  e.preventDefault()
               }}
            >
               X
            </div>
         </div>
      )
   }

   return (
      <div>
         <>
            <ThemeContextProvider theme={defaultTheme}>
               <MultiSelectComboboxContextProvider>
                  <AsyncMultiSelectComboBoxWithSections
                     label={'People'}
                     hint={'This is a hint ext to help user.'}
                     placeholder={'Search'}
                     customBadge={renderCustomBadge}
                     apiProps={{
                        apiFunction: doNetworkCall,
                        isInfiniteScrollable: true,
                        shouldFetchMore: true
                     }}
                     selectedKeys={selectedKeys}
                     onSelectionChange={onSelectionChange}
                     setShouldInvalidate={updateShouldInvalidate}
                     selectedItems={selectedItems}
                     shouldRenderClearIcon={false}
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
                  </AsyncMultiSelectComboBoxWithSections>
               </MultiSelectComboboxContextProvider>
            </ThemeContextProvider>
         </>
      </div>
   )
}

export const AsyncMultiSelectComboboxWithOutClearIcon = () => {
   const [selectedKeys, setSelectedKeys] = useState()
   const [selectedItems, setSelectedItems] = useState<Array<SelectedItem>>([])

   const onSelectionChange = keys => {
      setSelectedKeys(keys)
      const selectedItems: Array<any> = []

      keys.forEach(key => {
         const found = dummyStore.apiData.find(
            (item: any) => item.field.id === key
         )
         if (found) {
            selectedItems.push({
               name: found.field.name,
               key: key,
               props: {}
            })
         }
      })
      setSelectedItems(selectedItems)
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

   const doNetworkCall = async (scrollCount: number, filterText?: string) => {
      const sectionData =
         scrollCount > 5 ? activityCategoryData : leadCategoryData

      const filteredData = sectionData.filter(data =>
         data.field.name.includes(filterText as string)
      )

      const data = filteredData.slice(
         scrollCount * limit,
         scrollCount * limit + limit
      )

      const sectionFormattedData = getSectionFormattedItems(data)
      const assigneeData =
         sectionFormattedData.length > 0 ? sectionFormattedData[0].children : []

      dummyStore.setApiData(assigneeData)

      return resolveWithTimeout(sectionFormattedData, 1000)
   }

   return (
      <div>
         <>
            <ThemeContextProvider theme={defaultTheme}>
               <MultiSelectComboboxContextProvider>
                  <AsyncMultiSelectComboBoxWithSections
                     label={'People'}
                     hint={'This is a hint ext to help user.'}
                     placeholder={'Search'}
                     apiProps={{
                        apiFunction: doNetworkCall,
                        isInfiniteScrollable: true,
                        shouldFetchMore: true
                     }}
                     selectedKeys={selectedKeys}
                     onSelectionChange={onSelectionChange}
                     setShouldInvalidate={updateShouldInvalidate}
                     selectedItems={selectedItems}
                     shouldRenderClearIcon={false}
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
                  </AsyncMultiSelectComboBoxWithSections>
               </MultiSelectComboboxContextProvider>
            </ThemeContextProvider>
         </>
      </div>
   )
}

export const AsyncMultiComboboxWithOutSections = () => {
   const [selectedKeys, setSelectedKeys] = useState()
   const [selectedItems, setSelectedItems] = useState<Array<SelectedItem>>([])

   const onSelectionChange = keys => {
      setSelectedKeys(keys)
      const selectedItems: Array<any> = []

      keys.forEach(key => {
         const found = dummyStore.apiData.find((item: any) => item.id === key)
         if (found) {
            selectedItems.push({
               name: found.name,
               key: key,
               props: {}
            })
         }
      })
      setSelectedItems(selectedItems)
   }

   const doNetworkCall = async (scrollCount: number, filterText = '') => {
      const filteredData = fixturePlainItemsData.filter(data =>
         data.name.includes(filterText)
      )

      const data = filteredData.slice(
         scrollCount * limit,
         scrollCount * limit + limit
      )

      dummyStore.setApiData(data)
      return resolveWithTimeout(data, 1000)
   }

   return (
      <div>
         <>
            <ThemeContextProvider theme={defaultTheme}>
               <MultiSelectComboboxContextProvider>
                  <AsyncMultiSelectComboBox
                     label={'People'}
                     hint={'This is a hint ext to help user.'}
                     placeholder={'Search'}
                     apiProps={{
                        apiFunction: doNetworkCall,
                        isInfiniteScrollable: true,
                        shouldFetchMore: true
                     }}
                     selectedKeys={selectedKeys}
                     onSelectionChange={onSelectionChange}
                     selectedItems={selectedItems}
                  >
                     {(item: any) => {
                        return (
                           <Item textValue={item.name} key={item.id}>
                              {item.name}
                           </Item>
                        )
                     }}
                  </AsyncMultiSelectComboBox>
               </MultiSelectComboboxContextProvider>
            </ThemeContextProvider>
         </>
      </div>
   )
}

export const DisabledAsyncMultiCombobox = () => {
   const [selectedKeys, setSelectedKeys] = useState()
   const [selectedItems, setSelectedItems] = useState<Array<SelectedItem>>([])

   const onSelectionChange = keys => {
      setSelectedKeys(keys)
      const selectedItems: Array<any> = []

      keys.forEach(key => {
         const found = dummyStore.apiData.find((item: any) => item.id === key)
         if (found) {
            selectedItems.push({
               name: found.name,
               key: key,
               props: {}
            })
         }
      })
      setSelectedItems(selectedItems)
   }

   const doNetworkCall = async (scrollCount: number, filterText = '') => {
      const filteredData = fixturePlainItemsData.filter(data =>
         data.name.includes(filterText)
      )

      const data = filteredData.slice(
         scrollCount * limit,
         scrollCount * limit + limit
      )

      dummyStore.setApiData(data)
      return resolveWithTimeout(data, 1000)
   }

   return (
      <div>
         <>
            <ThemeContextProvider theme={defaultTheme}>
               <MultiSelectComboboxContextProvider>
                  <AsyncMultiSelectComboBox
                     label={'People'}
                     hint={'This is a hint ext to help user.'}
                     placeholder={'Search'}
                     apiProps={{
                        apiFunction: doNetworkCall,
                        isInfiniteScrollable: true,
                        shouldFetchMore: true
                     }}
                     selectedKeys={selectedKeys}
                     onSelectionChange={onSelectionChange}
                     selectedItems={selectedItems}
                     isDisabled={true}
                  >
                     {(item: any) => {
                        return (
                           <Item textValue={item.name} key={item.id}>
                              {item.name}
                           </Item>
                        )
                     }}
                  </AsyncMultiSelectComboBox>
               </MultiSelectComboboxContextProvider>
            </ThemeContextProvider>
         </>
      </div>
   )
}

export const AsyncMultiSelectComboboxWithSectionsWithCustomBadge = () => {
   const [selectedKeys, setSelectedKeys] = useState()
   const [selectedItems, setSelectedItems] = useState<Array<SelectedItem>>([])

   const onSelectionChange = keys => {
      setSelectedKeys(keys)
      const selectedItems: Array<any> = []

      keys.forEach(key => {
         const found = dummyStore.apiData.find(
            (item: any) => item.field.id === key
         )
         if (found) {
            selectedItems.push({
               name: found.field.name,
               key: key,
               props: {}
            })
         }
      })
      setSelectedItems(selectedItems)
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

   const doNetworkCall = async (scrollCount: number, filterText?: string) => {
      const sectionData =
         scrollCount > 5 ? activityCategoryData : leadCategoryData

      const filteredData = sectionData.filter(data =>
         data.field.name.includes(filterText as string)
      )

      const data = filteredData.slice(
         scrollCount * limit,
         scrollCount * limit + limit
      )

      const sectionFormattedData = getSectionFormattedItems(data)
      const assigneeData =
         sectionFormattedData.length > 0 ? sectionFormattedData[0].children : []

      dummyStore.setApiData(assigneeData)

      return resolveWithTimeout(sectionFormattedData, 1000)
   }

   return (
      <div>
         <>
            <ThemeContextProvider theme={defaultTheme}>
               <MultiSelectComboboxContextProvider>
                  <AsyncMultiSelectComboBoxWithSections
                     label={'People'}
                     placeholder={'Search'}
                     apiProps={{
                        apiFunction: doNetworkCall,
                        isInfiniteScrollable: true,
                        shouldFetchMore: true
                     }}
                     selectedKeys={selectedKeys}
                     onSelectionChange={onSelectionChange}
                     setShouldInvalidate={updateShouldInvalidate}
                     selectedItems={selectedItems}
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
                  </AsyncMultiSelectComboBoxWithSections>
               </MultiSelectComboboxContextProvider>
            </ThemeContextProvider>
         </>
      </div>
   )
}
