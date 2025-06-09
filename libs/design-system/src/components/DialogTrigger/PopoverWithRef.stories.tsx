import React from 'react'
import { PopoverWithTriggerWithRef } from './PopoverWithTriggerWithRef'
import { ThemeContextProvider } from '../../Theme/Provider'
import { defaultTheme } from '../../Theme/theme'

export default {
   title: 'Components/PopoverWithTriggerWithRef',
   component: PopoverWithTriggerWithRef
}

export const PopoverWithRefStory = () => {
   const divElementRef = React.useRef<HTMLDivElement>(null)
   const [isOpen, setIsOpen] = React.useState(false)

   const renderPopoverBody = () => {
      return <div className='border border-gray-500 '>Popover content</div>
   }

   return (
      <ThemeContextProvider theme={defaultTheme}>
         <div className='w-full flex flex-col items-center'>
            <PopoverWithTriggerWithRef
               triggerRef={divElementRef}
               popoverBody={renderPopoverBody}
               isOpen={isOpen}
               onOpenChange={setIsOpen}
            />
            <h1 className='h-[100]'>Heading Element</h1>
            <p className='h-[150px]'>Paragraph</p>
            <div
               className='w-[200px] rounded-[16px]
            bg-primary-600 text-white text-center'
               ref={divElementRef}
               onClick={() => setIsOpen(!isOpen)}
               role='button'
            >
               Trigger Button
            </div>
         </div>
      </ThemeContextProvider>
   )
}
