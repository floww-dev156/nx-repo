import { addParameters } from '@storybook/react'
import React, { Key, ReactElement, RefObject } from 'react'

import { UserIcon } from '../../icons/UserIcon'
import { ThemeContextProvider } from '../../Theme/Provider'
import { defaultTheme } from '../../Theme/theme'
import { RadioSelectedIcon } from '../../icons/RadioSelectedIcon'
import { RadioUnSelectedIcon } from '../../icons/RadioUnSelectedIcon'

import { Item } from '../Item/Item'
import { Section } from '../Section/index'

import { MultiSelectPickerContextProvider } from './Context/Provider'
import { MultiSelectPicker } from './MultiSelectPicker'

const instruction =
   'Go through this Component Guide to get to know about ths Picker Component'
addParameters({ notes: instruction })
export default {
   title: 'Components/MultiSelectPicker',
   component: MultiSelectPicker,
   argTypes: {
      size: {
         options: ['ExtraSmall', 'Small', 'Medium'],
         control: { type: 'radio' }
      }
   }
}

export const MultiSelectPickerWithSections = props => {
   return (
      <div style={{ width: '400px' }}>
         <ThemeContextProvider theme={defaultTheme}>
            <MultiSelectPickerContextProvider>
               <MultiSelectPicker {...props}>
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
               </MultiSelectPicker>
            </MultiSelectPickerContextProvider>
         </ThemeContextProvider>
      </div>
   )
}

export const Default = props => {
   return (
      <div style={{ width: '400px' }}>
         <ThemeContextProvider theme={defaultTheme}>
            <MultiSelectPickerContextProvider>
               <MultiSelectPicker {...props}>
                  <Item key='A1'>A1</Item>
                  <Item key='A2'>A2</Item>
                  <Item key='A3'>A3</Item>
               </MultiSelectPicker>
            </MultiSelectPickerContextProvider>
         </ThemeContextProvider>
      </div>
   )
}

export const DynamicSimpleOptions = props => {
   let [animalId, setAnimalId] = React.useState<Key[]>([])
   let options = [
      { id: 1, name: 'Aardvark' },
      { id: 2, name: 'Cat' },
      { id: 3, name: 'Dog' },
      { id: 4, name: 'Kangaroo' },
      { id: 5, name: 'Koala' },
      { id: 6, name: 'Penguin' },
      { id: 7, name: 'Snake' },
      { id: 8, name: 'Turtle' },
      { id: 9, name: 'Wombat' }
   ]

   return (
      <div style={{ width: '400px' }}>
         <ThemeContextProvider theme={defaultTheme}>
            <MultiSelectPickerContextProvider>
               <div>
                  <MultiSelectPicker
                     label='Pick an animal'
                     items={options}
                     onSelectionChange={(selected: Key) =>
                        setAnimalId([...animalId, selected])
                     }
                     {...props}
                  >
                     {item => <Item>{item.name}</Item>}
                  </MultiSelectPicker>
               </div>
            </MultiSelectPickerContextProvider>
         </ThemeContextProvider>
      </div>
   )
}

export const DynamicOptionsWithSectionWithHint = props => {
   let [animalId, setAnimalId] = React.useState<Key[]>([])
   let options = [
      {
         name: 'Australian',
         children: [
            { id: 2, name: 'Koala', role: 'koala-role' },
            { id: 3, name: 'Kangaroo', role: 'Kangaroo-role' },
            { id: 4, name: 'Platypus', role: 'Platypus-role' }
         ]
      },
      {
         name: 'American',
         children: [
            { id: 6, name: 'Bald Eagle', role: 'bald-eagle-role' },
            { id: 7, name: 'Bison', role: 'bison-eagle-role' },
            { id: 8, name: 'Skunk', role: 'skunk-role' }
         ]
      }
   ]

   return (
      <div style={{ width: '400px' }}>
         <ThemeContextProvider theme={defaultTheme}>
            <MultiSelectPickerContextProvider>
               <MultiSelectPicker
                  label='Pick an animal'
                  items={options}
                  hint='Pick an animal bro'
                  onSelectionChange={(selected: Key) =>
                     setAnimalId([...animalId, selected])
                  }
                  getListItemKey={item => item.role}
                  {...props}
               >
                  {item => (
                     <Section
                        key={item.name}
                        items={item.children}
                        title={item.name}
                     >
                        {item => <Item>{item.name}</Item>}
                     </Section>
                  )}
               </MultiSelectPicker>
            </MultiSelectPickerContextProvider>
         </ThemeContextProvider>
      </div>
   )
}

export const MultiSelectPickerWithLeadingIcon = props => {
   const renderLeadingIcon = () => {
      return <UserIcon />
   }

   return (
      <div style={{ width: '400px' }}>
         <ThemeContextProvider theme={defaultTheme}>
            <MultiSelectPickerContextProvider
               renderLeadingIcon={renderLeadingIcon}
            >
               <MultiSelectPicker {...props}>
                  <Item key='A1'>A1</Item>
                  <Item key='A2'>A2</Item>
                  <Item key='A3'>A3</Item>
               </MultiSelectPicker>
            </MultiSelectPickerContextProvider>
         </ThemeContextProvider>
      </div>
   )
}

export const PickerWithDefaultSelectedKeys = props => {
   return (
      <div style={{ width: '400px' }}>
         <ThemeContextProvider theme={defaultTheme}>
            <MultiSelectPickerContextProvider>
               <MultiSelectPicker
                  placeholder={'select'}
                  selectedKeys={['A3', 'A2']}
                  {...props}
               >
                  <Item key='A1'>A1</Item>
                  <Item key='A2'>A2</Item>
                  <Item key='A3'>A3</Item>
               </MultiSelectPicker>
            </MultiSelectPickerContextProvider>
         </ThemeContextProvider>
      </div>
   )
}

export const PickerWithDefaultOpen = props => {
   const renderLeadingIcon = () => {
      return <UserIcon />
   }

   return (
      <div style={{ width: '400px' }}>
         <ThemeContextProvider theme={defaultTheme}>
            <MultiSelectPickerContextProvider
               renderLeadingIcon={renderLeadingIcon}
            >
               <MultiSelectPicker
                  placeholder={'select'}
                  {...props}
                  defaultOpen={true}
               >
                  <Item key='A1'>A1</Item>
                  <Item key='A2'>A2</Item>
                  <Item key='A3'>A3</Item>
               </MultiSelectPicker>
            </MultiSelectPickerContextProvider>
         </ThemeContextProvider>
      </div>
   )
}

export const PickerWithDisabledKeys = props => {
   const renderLeadingIcon = () => {
      return <UserIcon />
   }

   return (
      <div style={{ width: '400px' }}>
         <ThemeContextProvider theme={defaultTheme}>
            <MultiSelectPickerContextProvider
               renderLeadingIcon={renderLeadingIcon}
            >
               <MultiSelectPicker
                  disabledKeys={['A1', 'A3']}
                  placeholder={'select'}
                  {...props}
                  defaultOpen={true}
               >
                  <Item key='A1'>A1</Item>
                  <Item key='A2'>A2</Item>
                  <Item key='A3'>A3</Item>
               </MultiSelectPicker>
            </MultiSelectPickerContextProvider>
         </ThemeContextProvider>
      </div>
   )
}

const CustomOption = React.forwardRef<HTMLDivElement, any>(
   (props: any, ref) => {
      console.log(ref)
      const {
         isSelected,
         item,
         isDisabled,
         optionProps,
         className = ''
      } = props

      return (
         <div
            ref={ref as RefObject<HTMLDivElement>}
            {...optionProps}
            // {...props}
         >
            <button>
               <div>
                  <span>{item.rendered}</span>
               </div>
               {isSelected ? <RadioSelectedIcon /> : <RadioUnSelectedIcon />}
            </button>
         </div>
      )
   }
)

export const PickerWithCustomOption = props => {
   const renderLeadingIcon = () => {
      return <UserIcon />
   }

   return (
      <div style={{ width: '400px' }}>
         <ThemeContextProvider theme={defaultTheme}>
            <MultiSelectPickerContextProvider
               renderLeadingIcon={renderLeadingIcon}
            >
               <MultiSelectPicker
                  placeholder={'select'}
                  {...props}
                  customOption={props => {
                     const { item, isSelected, optionRef, optionProps } = props
                     return (
                        <button
                           {...optionProps}
                           ref={optionRef}
                           style={{
                              background: `${isSelected && 'lightblue'}`
                           }}
                        >
                           {item.rendered}
                        </button>
                     )
                  }}
               >
                  <Item key='A1'>A1</Item>
                  <Item key='A2'>A2</Item>
                  <Item key='A3'>A3</Item>
               </MultiSelectPicker>
            </MultiSelectPickerContextProvider>
         </ThemeContextProvider>
      </div>
   )
}

export const PickerOnLabelClickPopoverOpen = props => {
   const renderLeadingIcon = () => {
      return <UserIcon />
   }

   return (
      <div style={{ width: '400px' }}>
         <ThemeContextProvider theme={defaultTheme}>
            <MultiSelectPickerContextProvider
               renderLeadingIcon={renderLeadingIcon}
            >
               <MultiSelectPicker
                  disabledKeys={['A1', 'A3']}
                  placeholder={'select'}
                  label='Picker on label click popover open'
                  {...props}
                  shouldOpenPopoverOnLabelClick={true}
               >
                  <Item key='A1'>A1</Item>
                  <Item key='A2'>A2</Item>
                  <Item key='A3'>A3</Item>
               </MultiSelectPicker>
            </MultiSelectPickerContextProvider>
         </ThemeContextProvider>
      </div>
   )
}

export const PickerWithErrorMessage = props => {
   const renderLeadingIcon = () => {
      return <UserIcon />
   }

   return (
      <div style={{ width: '400px' }}>
         <ThemeContextProvider theme={defaultTheme}>
            <MultiSelectPickerContextProvider
               renderLeadingIcon={renderLeadingIcon}
            >
               <MultiSelectPicker
                  {...props}
                  placeholder={'select'}
                  label='Picker with error Message'
                  errorMessage={'Oops its an error :)'}
               >
                  <Item key='A1'>A1</Item>
                  <Item key='A2'>A2</Item>
                  <Item key='A3'>A3</Item>
               </MultiSelectPicker>
            </MultiSelectPickerContextProvider>
         </ThemeContextProvider>
      </div>
   )
}

export const DisabledPicker = props => {
   const renderLeadingIcon = () => {
      return <UserIcon />
   }
   return (
      <div style={{ width: '400px' }}>
         <ThemeContextProvider theme={defaultTheme}>
            <MultiSelectPickerContextProvider
               renderLeadingIcon={renderLeadingIcon}
            >
               <MultiSelectPicker
                  {...props}
                  placeholder={'select'}
                  label='Disabled picker'
                  isDisabled={true}
               >
                  <Item key='A1'>A1</Item>
                  <Item key='A2'>A2</Item>
                  <Item key='A3'>A3</Item>
               </MultiSelectPicker>
            </MultiSelectPickerContextProvider>
         </ThemeContextProvider>
      </div>
   )
}
