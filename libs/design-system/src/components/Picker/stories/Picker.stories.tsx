import { addParameters } from '@storybook/react'
import React, { Key, useState } from 'react'

import { ThemeContextProvider } from '../../../Theme/Provider'
import { defaultTheme } from '../../../Theme/theme'
import { Item } from '../../Item'
import { Section } from '../../Section'
import { UserIcon } from '../../../icons/UserIcon'

import { Picker } from '../Picker'
import { PickerContextProvider, ValueContainerState } from '../Context/Provider'

const instruction =
   'Go through this Component Guide to get to know about ths Picker Component'
addParameters({ notes: instruction })
export default {
   title: 'Components/Picker',
   component: Picker,
   argTypes: {
      size: {
         options: ['ExtraSmall', 'Small', 'Medium'],
         control: { type: 'radio' }
      }
   }
}

export const Default = props => {
   const onBlur = () => {
      console.log('in onBlur')
   }

   const onFocus = () => {
      console.log('in onFocus')
   }

   return (
      <div style={{ width: '400px' }}>
         <ThemeContextProvider theme={defaultTheme}>
            <PickerContextProvider>
               <Picker
                  {...props}
                  onBlur={onBlur}
                  onFocus={onFocus}
                  onOpenChange={() => {}}
               >
                  <Item key='A1'>A1</Item>
                  <Item key='A2'>A2</Item>
                  <Item key='A3'>A3</Item>
               </Picker>
            </PickerContextProvider>
         </ThemeContextProvider>
      </div>
   )
}

export const PickerWithPlaceholder = props => {
   return (
      <div style={{ width: '400px' }}>
         <ThemeContextProvider theme={defaultTheme}>
            <PickerContextProvider>
               <Picker {...props} placeholder={'select'}>
                  <Item key='A1'>A1</Item>
                  <Item key='A2'>A2</Item>
                  <Item key='A3'>A3</Item>
               </Picker>
            </PickerContextProvider>
         </ThemeContextProvider>
      </div>
   )
}

export const PickerWithLabel = props => {
   return (
      <div style={{ width: '400px' }}>
         <ThemeContextProvider theme={defaultTheme}>
            <PickerContextProvider>
               <Picker
                  label='PickerWithLabel'
                  placeholder={'select'}
                  {...props}
               >
                  <Item key='A1'>A1</Item>
                  <Item key='A2'>A2</Item>
                  <Item key='A3'>A3</Item>
               </Picker>
            </PickerContextProvider>
         </ThemeContextProvider>
      </div>
   )
}

export const PickerWithLabelAndHint = props => {
   return (
      <div style={{ width: '400px' }}>
         <ThemeContextProvider theme={defaultTheme}>
            <PickerContextProvider>
               <Picker
                  label='PickerWithLabelAndHint'
                  hint='select a key'
                  placeholder={'select'}
                  {...props}
               >
                  <Item key='A1'>A1</Item>
                  <Item key='A2'>A2</Item>
                  <Item key='A3'>A3</Item>
               </Picker>
            </PickerContextProvider>
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
            <PickerContextProvider renderLeadingIcon={renderLeadingIcon}>
               <Picker
                  {...props}
                  placeholder={'select'}
                  label='Picker with error Message'
                  errorMessage={'Oops its an error :)'}
               >
                  <Item key='A1'>A1</Item>
                  <Item key='A2'>A2</Item>
                  <Item key='A3'>A3</Item>
               </Picker>
            </PickerContextProvider>
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
            <PickerContextProvider renderLeadingIcon={renderLeadingIcon}>
               <Picker
                  {...props}
                  placeholder={'select'}
                  label='Disabled picker'
                  isDisabled={true}
               >
                  <Item key='A1'>A1</Item>
                  <Item key='A2'>A2</Item>
                  <Item key='A3'>A3</Item>
               </Picker>
            </PickerContextProvider>
         </ThemeContextProvider>
      </div>
   )
}

export const PickerWithSections = props => {
   return (
      <div style={{ width: '400px' }}>
         <ThemeContextProvider theme={defaultTheme}>
            <PickerContextProvider>
               <Picker {...props} placeholder={'select'}>
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
               </Picker>
            </PickerContextProvider>
         </ThemeContextProvider>
      </div>
   )
}

export const PickerWithCustomValueContainer = props => {
   const renderValueContainer = (state: ValueContainerState) => {
      return (
         <div>
            <p
               style={{
                  backgroundColor: 'gold',
                  width: '200px',
                  borderRadius: '12px'
               }}
            >
               {state.rendered ? (
                  <div
                     style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                     }}
                  >
                     {state.rendered}
                  </div>
               ) : null}
            </p>
         </div>
      )
   }
   return (
      <div style={{ width: '300px' }}>
         <ThemeContextProvider theme={defaultTheme}>
            <PickerContextProvider renderValueContainer={renderValueContainer}>
               <Picker {...props} placeholder={'select'}>
                  <Item key='A1'>A1</Item>
                  <Item key='A2'>A2</Item>
                  <Item key='A3'>A3</Item>
               </Picker>
            </PickerContextProvider>
         </ThemeContextProvider>
      </div>
   )
}

export const PickerWithDynamicSimpleOptions = props => {
   let [animalId, setAnimalId] = React.useState<Key>()
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
      <div style={{ width: '300px' }}>
         <ThemeContextProvider theme={defaultTheme}>
            <PickerContextProvider>
               <div>
                  <Picker
                     label='Pick an animal'
                     items={options}
                     placeholder={'select'}
                     onSelectionChange={(selected: Key) =>
                        setAnimalId(selected)
                     }
                     {...props}
                  >
                     {item => <Item>{item.name}</Item>}
                  </Picker>
               </div>
            </PickerContextProvider>
         </ThemeContextProvider>
      </div>
   )
}

export const PickerWithDynamicOptionsWithSections = props => {
   let [animalId, setAnimalId] = React.useState<Key>()
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
      <div style={{ width: '300px' }}>
         <ThemeContextProvider theme={defaultTheme}>
            <PickerContextProvider>
               <Picker
                  label='Pick an animal'
                  items={options}
                  hint='pick biggest one first'
                  placeholder={'select'}
                  onSelectionChange={(selected: Key) => setAnimalId(selected)}
                  {...props}
               >
                  {item => (
                     <Section
                        key={item.name}
                        items={item.children}
                        title={item.name}
                     >
                        {item => <Item key={item.role}>{item.name}</Item>}
                     </Section>
                  )}
               </Picker>
            </PickerContextProvider>
         </ThemeContextProvider>
      </div>
   )
}

export const PickerWithLeadingIcon = props => {
   const renderLeadingIcon = () => {
      return <UserIcon />
   }

   return (
      <div style={{ width: '300px' }}>
         <ThemeContextProvider theme={defaultTheme}>
            <PickerContextProvider renderLeadingIcon={renderLeadingIcon}>
               <Picker placeholder={'select'} {...props}>
                  <Item key='A1'>A1</Item>
                  <Item key='A2'>A2</Item>
                  <Item key='A3'>A3</Item>
               </Picker>
            </PickerContextProvider>
         </ThemeContextProvider>
      </div>
   )
}

export const PickerWithDefaultSelectedKey = props => {
   return (
      <div style={{ width: '300px' }}>
         <ThemeContextProvider theme={defaultTheme}>
            <PickerContextProvider>
               <Picker placeholder={'select'} selectedKey={'A3'} {...props}>
                  <Item key='A1'>A1</Item>
                  <Item key='A2'>A2</Item>
                  <Item key='A3'>A3</Item>
               </Picker>
            </PickerContextProvider>
         </ThemeContextProvider>
      </div>
   )
}

export const ControlledPickerWithSelectedKey = props => {
   const [value, setValue] = useState(null)

   const onSelectionChange = key => {
      setValue(key)
   }
   return (
      <div style={{ width: '300px' }}>
         <ThemeContextProvider theme={defaultTheme}>
            <PickerContextProvider>
               <Picker
                  placeholder={'select'}
                  onSelectionChange={onSelectionChange}
                  selectedKey={value}
                  {...props}
               >
                  <Item key='A1'>A1</Item>
                  <Item key='A2'>A2</Item>
                  <Item key='A3'>A3</Item>
               </Picker>
            </PickerContextProvider>
         </ThemeContextProvider>
      </div>
   )
}

export const BothControlledAndUnControlledCase = props => {
   const [value, setValue] = useState(null)

   const onSelectionChange = key => {
      setValue(key)
   }
   return (
      <div style={{ width: '300px' }}>
         <ThemeContextProvider theme={defaultTheme}>
            <PickerContextProvider>
               <Picker
                  placeholder={'select'}
                  onSelectionChange={onSelectionChange}
                  selectedKey={value}
                  defaultSelectedKey={value}
                  {...props}
               >
                  <Item key='A1'>A1</Item>
                  <Item key='A2'>A2</Item>
                  <Item key='A3'>A3</Item>
               </Picker>
            </PickerContextProvider>
         </ThemeContextProvider>
      </div>
   )
}

export const PickerWithDefaultOpen = props => {
   const renderLeadingIcon = () => {
      return <UserIcon />
   }

   return (
      <div style={{ width: '300px' }}>
         <ThemeContextProvider theme={defaultTheme}>
            <PickerContextProvider renderLeadingIcon={renderLeadingIcon}>
               <Picker placeholder={'select'} {...props} defaultOpen={true}>
                  <Item key='A1'>A1</Item>
                  <Item key='A2'>A2</Item>
                  <Item key='A3'>A3</Item>
               </Picker>
            </PickerContextProvider>
         </ThemeContextProvider>
      </div>
   )
}

export const PickerWithDisabledKeys = props => {
   const renderLeadingIcon = () => {
      return <UserIcon />
   }

   return (
      <div style={{ width: '300px' }}>
         <ThemeContextProvider theme={defaultTheme}>
            <PickerContextProvider renderLeadingIcon={renderLeadingIcon}>
               <Picker
                  disabledKeys={['A1', 'A3']}
                  placeholder={'select'}
                  {...props}
                  defaultOpen={true}
               >
                  <Item key='A1'>A1</Item>
                  <Item key='A2'>A2</Item>
                  <Item key='A3'>A3</Item>
               </Picker>
            </PickerContextProvider>
         </ThemeContextProvider>
      </div>
   )
}

export const PickerWithCustomOption = props => {
   const renderLeadingIcon = () => {
      return <UserIcon />
   }

   return (
      <div style={{ width: '300px' }}>
         <ThemeContextProvider theme={defaultTheme}>
            <PickerContextProvider renderLeadingIcon={renderLeadingIcon}>
               <Picker
                  placeholder={'select'}
                  {...props}
                  customOption={props => {
                     const { item, isSelected, optionRef, optionProps } = props
                     return (
                        <p
                           {...optionProps}
                           ref={optionRef}
                           style={{
                              fontWeight: 'bold',
                              backgroundColor: `${
                                 isSelected ? '#53B1FD' : 'gold'
                              }`,
                              color: `${isSelected ? 'white' : 'black'}`,
                              width: '100%',
                              padding: '10px',
                              borderRadius: '12px',
                              marginBottom: '4px'
                           }}
                        >
                           <span>Custom option</span>
                           {item.rendered}
                        </p>
                     )
                  }}
               >
                  <Item key='A1'>A1</Item>
                  <Item key='A2'>A2</Item>
                  <Item key='A3'>A3</Item>
               </Picker>
            </PickerContextProvider>
         </ThemeContextProvider>
      </div>
   )
}

export const PickerOnLabelClickPopoverOpen = props => {
   const renderLeadingIcon = () => {
      return <UserIcon />
   }

   return (
      <div style={{ width: '300px' }}>
         <ThemeContextProvider theme={defaultTheme}>
            <PickerContextProvider renderLeadingIcon={renderLeadingIcon}>
               <Picker
                  disabledKeys={['A1', 'A3']}
                  placeholder={'select'}
                  label='Picker on label click popover open'
                  {...props}
                  shouldOpenPopoverOnLabelClick={true}
               >
                  <Item key='A1'>A1</Item>
                  <Item key='A2'>A2</Item>
                  <Item key='A3'>A3</Item>
               </Picker>
            </PickerContextProvider>
         </ThemeContextProvider>
      </div>
   )
}
