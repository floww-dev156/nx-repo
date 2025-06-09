import { ThemeContextProvider } from '../../Theme/Provider'
import { defaultTheme } from '../../Theme/theme'

import OptionsSelector from '../OptionsSelector/OptionsSelector'
import { OptionsSelectorOptionType } from '../OptionsSelector/types'

import PopoverWithTrigger from './PopoverWithTrigger'
import './index.css'

export default {
   title: 'components/PopoverWithTrigger',
   component: PopoverWithTrigger,
   argTypes: {
      size: {
         options: ['ExtraSmall', 'Small', 'Medium'],
         control: { type: 'radio' }
      },
      placement: {
         options: [
            'top',
            'top left',
            'top right',
            'top start',
            'top end',
            'bottom',
            'bottom left',
            'bottom right',
            'bottom start',
            'bottom end',
            'left',
            'left top',
            'left bottom',
            'start',
            'start top',
            'start bottom',
            'right',
            'right top',
            'right bottom',
            'end',
            'end top',
            'end bottom'
         ],
         control: { type: 'radio' }
      }
   }
}

export const DefaultPopoverWithTrigger = props => {
   const renderPopoverBody = () => (
      <div className='p-8px rounded-[4px]'>
         <p>Heading</p>
         <p>Description</p>
         <p>is simply dummy text</p>
      </div>
   )

   const renderPopoverTrigger = () => (
      <button className='outline-none'>Trigger</button>
   )

   return (
      <div
         style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '400px'
         }}
      >
         <ThemeContextProvider theme={defaultTheme}>
            <PopoverWithTrigger
               renderPopoverTrigger={renderPopoverTrigger}
               renderPopoverBody={renderPopoverBody}
               {...props}
            />
         </ThemeContextProvider>
      </div>
   )
}

export const PopoverWithTriggerWithCloseFun = props => {
   const renderPopoverBody = (close: () => void) => (
      <div className='p-8px rounded-[4px]'>
         <div style={{ textAlign: 'right' }}>
            <button onClick={close}>X</button>
         </div>
         <hr></hr>
         <p>Heading</p>
         <p>Description</p>
         <p>is simply dummy text</p>
      </div>
   )

   const renderPopoverTrigger = () => (
      <button className='outline-none'>Trigger</button>
   )

   return (
      <div
         style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '400px'
         }}
      >
         <ThemeContextProvider theme={defaultTheme}>
            <PopoverWithTrigger
               renderPopoverTrigger={renderPopoverTrigger}
               renderPopoverBody={renderPopoverBody}
               {...props}
            />
         </ThemeContextProvider>
      </div>
   )
}

export const ControlledPopoverWithTrigger = props => {
   const renderPopoverBody = (close: () => void) => (
      <div className='p-8px rounded-[4px]'>
         <div style={{ textAlign: 'right' }}>
            <button onClick={close}>X</button>
         </div>
         <hr></hr>
         <p>Heading</p>
         <p>Description</p>
         <p>is simply dummy text</p>
      </div>
   )

   const renderPopoverTrigger = () => (
      <button className='outline-none'>Trigger</button>
   )

   return (
      <div
         style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '400px'
         }}
      >
         <ThemeContextProvider theme={defaultTheme}>
            <PopoverWithTrigger
               {...props}
               renderPopoverTrigger={renderPopoverTrigger}
               renderPopoverBody={renderPopoverBody}
               isOpen={true}
            />
         </ThemeContextProvider>
      </div>
   )
}

export const NestedPopoverWithTrigger = props => {
   const renderChildrenPopoverBody = (close: () => void) => (
      <div className='p-8px rounded-[4px]'>
         <div style={{ textAlign: 'right' }}>
            <button onClick={close}>X</button>
         </div>
         <hr></hr>
         <p>Child Heading</p>
         <p>Description</p>
         <p>is simply dummy text</p>
      </div>
   )

   const renderChildrenPopoverTrigger = () => (
      <button className='outline-none border'>Child Trigger</button>
   )
   const renderChildrenPopover = () => (
      <PopoverWithTrigger
         renderPopoverTrigger={renderChildrenPopoverTrigger}
         renderPopoverBody={renderChildrenPopoverBody}
         {...props}
      />
   )

   const renderPopoverBody = (close: () => void) => (
      <div className='p-8px rounded-[4px]'>
         <div style={{ textAlign: 'right' }}>
            <button onClick={close}>X</button>
         </div>
         <hr></hr>
         <p>Heading</p>
         <p>Description</p>
         {renderChildrenPopover()}
      </div>
   )

   const renderPopoverTrigger = () => (
      <button className='outline-none'>Trigger</button>
   )

   return (
      <div
         style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '400px'
         }}
      >
         <ThemeContextProvider theme={defaultTheme}>
            <PopoverWithTrigger
               renderPopoverTrigger={renderPopoverTrigger}
               renderPopoverBody={renderPopoverBody}
               {...props}
            />
         </ThemeContextProvider>
      </div>
   )
}

export const CustomizedStylesPopoverWithTrigger = props => {
   const renderPopoverBody = (close: () => void) => (
      <div className='p-8px rounded-[4px] w-[300px] h-[600px]'>
         <div style={{ textAlign: 'right' }}>
            <button onClick={close}>X</button>
         </div>
         <hr></hr>
         <p>Heading</p>
         <p>Description</p>
         <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
         </p>
      </div>
   )

   const renderPopoverTrigger = () => (
      <button className='outline-none'>Trigger</button>
   )

   return (
      <div
         style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '400px'
         }}
      >
         <ThemeContextProvider theme={defaultTheme}>
            <PopoverWithTrigger
               {...props}
               renderPopoverTrigger={renderPopoverTrigger}
               renderPopoverBody={renderPopoverBody}
               popoverBodyContainerClassName={'sample-popover-body-container'}
            />
         </ThemeContextProvider>
      </div>
   )
}

export const PopoverWithTriggerAndOptionsSelector = props => {
   const options: OptionsSelectorOptionType[] = Array(47)
      .fill(0)
      .map((_, index) => ({ id: index.toString(), name: index.toString() }))
   const selectedOptions: OptionsSelectorOptionType[] = options.filter(
      (_, index) => index % 2 === 0
   )

   const renderPopoverBody = () => (
      <div className='p-8px rounded-[4px]'>
         <OptionsSelector
            options={options}
            selectedOptions={selectedOptions}
            onChangeSelectedOptions={options =>
               console.log(
                  'PopoverWithTriggerAndOptionsSelector > onChangeSelectedOptions',
                  options
               )
            }
            containerClassName='h-[420px] w-[420px]'
         />
      </div>
   )

   const renderPopoverTrigger = () => (
      <button className='outline-none'>Trigger</button>
   )

   return (
      <div
         style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '400px'
         }}
      >
         <ThemeContextProvider theme={defaultTheme}>
            <PopoverWithTrigger
               renderPopoverTrigger={renderPopoverTrigger}
               renderPopoverBody={renderPopoverBody}
               {...props}
            />
         </ThemeContextProvider>
      </div>
   )
}
