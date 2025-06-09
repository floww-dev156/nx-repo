import { addParameters } from '@storybook/react'
import { useState } from 'react'

import { ThemeContextProvider } from '../../../Theme/Provider'
import { defaultTheme } from '../../../Theme/theme'
import { Item } from '../../Item'
import { Section } from '../../Section/Section'

import ComboBoxWrapper from '../ComboboxWrapper'
import { ComboboxContextProvider } from '../context/Provider'

const instruction =
   'Go through this Component Guide to get to know about ths ComboBox Component'
addParameters({ notes: instruction })
export default {
   title: 'Components/Combobox',
   component: ComboBoxWrapper
}

const ComboBoxDefaultStory = args => {
   const noItemsView = () => <p>Custom No Items View</p>
   const loadingView = () => <p>Custom Loading View</p>

   const [inputValue, setInputValue] = useState('')

   return (
      <ThemeContextProvider theme={defaultTheme}>
         <ComboboxContextProvider
            renderNoItemsView={noItemsView}
            renderLoadingView={loadingView}
         >
            <ComboBoxWrapper
               {...args}
               label={'City'}
               hint={'This is a hint text to help user.'}
               inputValue={inputValue}
               onInputChange={setInputValue}
               placeholder={'Search'}
            >
               <Item key='Item1'>Vijayanagaram</Item>
               <Item key='Item2'>Visakhapatnam</Item>
               <Item key='Item3'>Vijayawada</Item>
               <Item key='Item4'>V.kota</Item>
               <Item key='Item5'>Venkatapuram</Item>
               <Item key='Item6'>Vemulawada</Item>
               <Item key='Item7'>Vijayanagaram</Item>
               <Item key='Item8'>Visakhapatnam</Item>
               <Item key='Item9'>Vijayawada</Item>
               <Item key='Item10'>V.kota</Item>
               <Item key='Item11'>Venkatapuram</Item>
               <Item key='Item12'>Vemulawada</Item>
               <Item key='Item13'>Vijayanagaram</Item>
               <Item key='Item14'>Visakhapatnam</Item>
               <Item key='Item15'>Vijayawada</Item>
               <Item key='Item16'>V.kota</Item>
               <Item key='Item17'>Venkatapuram</Item>
               <Item key='Item18'>Vemulawada</Item>
               <Item key='Item19'>Vijayanagaram</Item>
               <Item key='Item20'>Visakhapatnam</Item>
               <Item key='Item21'>Vijayawada</Item>
               <Item key='Item22'>V.kota</Item>
               <Item key='Item23'>Venkatapuram</Item>
               <Item key='Item24'>Vemulawada</Item>
               <Item key='Item25'>Vijayanagaram</Item>
               <Item key='Item26'>Visakhapatnam</Item>
               <Item key='Item27'>Vijayawada</Item>
               <Item key='Item44'>V.kota</Item>
               <Item key='Item28'>Venkatapuram</Item>
               <Item key='Item29'>Vemulawada</Item>
               <Item key='Item30'>Vijayanagaram</Item>
               <Item key='Item31'>Visakhapatnam</Item>
               <Item key='Item32'>Vijayawada</Item>
               <Item key='Item33'>V.kota</Item>
               <Item key='Item34'>Venkatapuram</Item>
               <Item key='Item35'>Vemulawada</Item>
               <Item key='Item36'>Vijayanagaram</Item>
               <Item key='Item37'>Visakhapatnam</Item>
               <Item key='Item38'>Vijayawada</Item>
               <Item key='Item39'>V.kota</Item>
               <Item key='Item40'>Venkatapuram</Item>
               <Item key='Item41'>Vemulawada</Item>
            </ComboBoxWrapper>
         </ComboboxContextProvider>
      </ThemeContextProvider>
   )
}

export const Default = ComboBoxDefaultStory.bind({})

Default.args = {}

export const WithDefaultValue = props => {
   const [inputValue, setInputValue] = useState('Visakhapatnam')

   const noItemsView = () => <p>Custom No Items View</p>
   const loadingView = () => <p>Custom Loading View</p>

   return (
      <ThemeContextProvider theme={defaultTheme}>
         <ComboboxContextProvider
            renderNoItemsView={noItemsView}
            renderLoadingView={loadingView}
         >
            <ComboBoxWrapper
               {...props}
               label={'City'}
               hint={'This is a hint text to help user.'}
               inputValue={inputValue}
               onInputChange={setInputValue}
               placeholder={'Search'}
               defaultSelectedKey={'Item2'}
            >
               <Item key='Item1'>Vijayanagaram</Item>
               <Item key='Item2'>Visakhapatnam</Item>
               <Item key='Item3'>Vijayawada</Item>
               <Item key='Item4'>V.kota</Item>
               <Item key='Item5'>Venkatapuram</Item>
               <Item key='Item6'>Vemulawada</Item>
            </ComboBoxWrapper>
         </ComboboxContextProvider>
      </ThemeContextProvider>
   )
}

export const WithErrorMessage = props => {
   const [inputValue, setInputValue] = useState('')

   return (
      <ThemeContextProvider theme={defaultTheme}>
         <ComboboxContextProvider>
            <ComboBoxWrapper
               {...props}
               label={'City'}
               hint={'This is a hint text to help user.'}
               errorMessage={'This is an error message.'}
               inputValue={inputValue}
               onInputChange={setInputValue}
               placeholder={'Search'}
            >
               <Item key='Item1'>Vijayanagaram</Item>
               <Item key='Item2'>Visakhapatnam</Item>
               <Item key='Item3'>Vijayawada</Item>
               <Item key='Item4'>V.kota</Item>
               <Item key='Item5'>Venkatapuram</Item>
               <Item key='Item6'>Vemulawada</Item>
            </ComboBoxWrapper>
         </ComboboxContextProvider>
      </ThemeContextProvider>
   )
}

export const WithContainer = props => {
   const [inputValue, setInputValue] = useState('')

   return (
      <ThemeContextProvider theme={defaultTheme}>
         <ComboboxContextProvider>
            <div style={{ width: '500px' }}>
               <ComboBoxWrapper
                  {...props}
                  label={'City'}
                  hint={'This is a hint text to help user.'}
                  inputValue={inputValue}
                  onInputChange={setInputValue}
                  placeholder={'Search'}
               >
                  <Item key='Item1'>Vijayanagaram</Item>
                  <Item key='Item2'>Visakhapatnam</Item>
                  <Item key='Item3'>Vijayawada</Item>
                  <Item key='Item4'>V.kota</Item>
                  <Item key='Item5'>Venkatapuram</Item>
                  <Item key='Item6'>Vemulawada</Item>
               </ComboBoxWrapper>
            </div>
         </ComboboxContextProvider>
      </ThemeContextProvider>
   )
}

export const WithCustomTrigger = props => {
   const [inputValue, setInputValue] = useState('')
   const [selectedKey, setSelectedKey] = useState()

   let items = [
      { value: 'Aardvark', label: '1', id: '1' },
      { value: 'Kangaroo', label: '2', id: '2' },
      { value: 'Snake', label: '3', id: '3' }
   ]

   return (
      <ThemeContextProvider theme={defaultTheme}>
         <ComboboxContextProvider>
            <ComboBoxWrapper
               {...props}
               label={'City'}
               hint={'This is a hint text to help user.'}
               inputValue={inputValue}
               defaultItems={items}
               placeholder={'Search'}
               onInputChange={value => {
                  setInputValue(value)

                  if (!value) setSelectedKey('')
               }}
               enableCustomTrigger={true}
               selectedKey={selectedKey}
               onSelectionChange={value => {
                  setSelectedKey(value)

                  const inputValue = items.find(item => item.id === value)
                     ?.value

                  inputValue && setInputValue(inputValue)
               }}
            >
               {(item: { value: string; label: string; id: string }) => (
                  <Item key={item.id}>{item.value}</Item>
               )}
            </ComboBoxWrapper>
         </ComboboxContextProvider>
      </ThemeContextProvider>
   )
}

export const WithDynamicOptions = props => {
   const [inputValue, setInputValue] = useState('')
   const [selectedKey, setSelectedKey] = useState()

   let items = [
      { value: 'Aardvark', label: '1', id: '1' },
      { value: 'Kangaroo', label: '2', id: '2' },
      { value: 'Snake', label: '3', id: '3' }
   ]

   return (
      <ThemeContextProvider theme={defaultTheme}>
         <ComboboxContextProvider>
            <ComboBoxWrapper
               {...props}
               label={'City'}
               hint={'This is a hint text to help user.'}
               inputValue={inputValue}
               defaultItems={items}
               placeholder={'Search'}
               onInputChange={value => {
                  setInputValue(value)

                  if (!value) setSelectedKey('')
               }}
               selectedKey={selectedKey}
               onSelectionChange={value => {
                  setSelectedKey(value)

                  const inputValue = items.find(item => item.id === value)
                     ?.value

                  inputValue && setInputValue(inputValue)
               }}
            >
               {(item: { value: string; label: string; id: string }) => (
                  <Item key={item.id}>{item.value}</Item>
               )}
            </ComboBoxWrapper>
         </ComboboxContextProvider>
      </ThemeContextProvider>
   )
}

export const WithCustomCustomTrigger = props => {
   const [selectedKey, setSelectedKey] = useState()

   let items = [
      { value: 'Aardvark', label: '1', id: '1' },
      { value: 'Kangaroo', label: '2', id: '2' },
      { value: 'Snake', label: '3', id: '3' }
   ]

   return (
      <ThemeContextProvider theme={defaultTheme}>
         <ComboboxContextProvider>
            <ComboBoxWrapper
               {...props}
               label={'City'}
               hint={'This is a hint text to help user.'}
               inputValue={''}
               defaultItems={items}
               placeholder={'Search'}
               customTrigger={() => <button>Custom Trigger</button>}
               enableCustomTrigger={true}
               selectedKey={selectedKey}
               onSelectionChange={value => {
                  setSelectedKey(value)
               }}
            >
               {(item: { value: string; label: string; id: string }) => (
                  <Item>{item.value}</Item>
               )}
            </ComboBoxWrapper>
         </ComboboxContextProvider>
      </ThemeContextProvider>
   )
}

export const withCustomOption = args => {
   const noItemsView = () => <p>Custom No Items View</p>
   const loadingView = () => <p>Custom Loading View</p>

   const [inputValue, setInputValue] = useState('')

   return (
      <ThemeContextProvider theme={defaultTheme}>
         <ComboboxContextProvider
            renderNoItemsView={noItemsView}
            renderLoadingView={loadingView}
         >
            <ComboBoxWrapper
               {...args}
               label={'City'}
               hint={'This is a hint text to help user.'}
               inputValue={inputValue}
               onInputChange={setInputValue}
               placeholder={'Search'}
               customOption={props => {
                  const { item, isSelected, optionRef, optionProps } = props
                  return (
                     <button
                        {...optionProps}
                        ref={optionRef}
                        style={{ background: `${isSelected && 'lightblue'}` }}
                     >
                        {item.rendered}
                     </button>
                  )
               }}
            >
               <Item key='Item1'>Vijayanagaram</Item>
               <Item key='Item2'>Visakhapatnam</Item>
               <Item key='Item3'>Vijayawada</Item>
               <Item key='Item4'>V.kota</Item>
               <Item key='Item5'>Venkatapuram</Item>
               <Item key='Item6'>Vemulawada</Item>
            </ComboBoxWrapper>
         </ComboboxContextProvider>
      </ThemeContextProvider>
   )
}

export const WithSections = args => {
   const noItemsView = () => <p>Custom No Items View</p>
   const loadingView = () => <p>Custom Loading View</p>

   const [inputValue, setInputValue] = useState('')

   return (
      <ThemeContextProvider theme={defaultTheme}>
         <ComboboxContextProvider
            renderNoItemsView={noItemsView}
            renderLoadingView={loadingView}
         >
            <ComboBoxWrapper
               {...args}
               label={'City'}
               hint={'This is a hint text to help user.'}
               inputValue={inputValue}
               onInputChange={setInputValue}
               placeholder={'Search'}
            >
               <Section title='Things'>
                  <Item textValue='Book'>Book</Item>
                  <Item textValue='Pen'>Pen</Item>
                  <Item textValue='Pencil'>Pencil</Item>
               </Section>
               <Section title='Behavior'>
                  <Item textValue='Read'>Read</Item>
                  <Item textValue='Write'>Write</Item>
                  <Item textValue='Learn'>Learn</Item>
               </Section>
            </ComboBoxWrapper>
         </ComboboxContextProvider>
      </ThemeContextProvider>
   )
}

export const WithDisabledKeys = args => {
   const noItemsView = () => <p>Custom No Items View</p>
   const loadingView = () => <p>Custom Loading View</p>

   const [inputValue, setInputValue] = useState('')

   return (
      <ThemeContextProvider theme={defaultTheme}>
         <ComboboxContextProvider
            renderNoItemsView={noItemsView}
            renderLoadingView={loadingView}
         >
            <ComboBoxWrapper
               {...args}
               label={'City'}
               hint={'This is a hint text to help user.'}
               inputValue={inputValue}
               onInputChange={setInputValue}
               placeholder={'Search'}
               disabledKeys={['Item1', 'Item2']}
            >
               <Item key='Item1'>Vijayanagaram</Item>
               <Item key='Item2'>Visakhapatnam</Item>
               <Item key='Item3'>Vijayawada</Item>
               <Item key='Item4'>V.kota</Item>
               <Item key='Item5'>Venkatapuram</Item>
               <Item key='Item6'>Vemulawada</Item>
            </ComboBoxWrapper>
         </ComboboxContextProvider>
      </ThemeContextProvider>
   )
}
