import { ReactElement, useState } from 'react'

import BottomSheet from './BottomSheet'

export default {
   title: 'components/BottomSheet'
}

const mobileContainerStyles = `bg-neutral-default-l3 h-screen flex flex-col items-center`
const triggerButtonStyles = `button-text-md text-primary font-semibold mt-common-sm-8`
const contentButtonStyles = `button-text-md h-[48px] rounded-full w-full text-primary font-semibold border border-button-primary-bg bg-button-primary-bg px-common-3xl-32 py-common-xl-16 shrink-0`

const BottomSheetDefaultContent = () => (
   <>
      <div className='flex flex-col items-center mb-common-6xl-64'>
         <div className='text-primary heading-xl font-semibold mb-common-sm-8'>
            Heading
         </div>
         <div className='text-secondary body-md font-normal text-center'>
            This is paragraph for the bottom sheet This is paragraph for the
            bottom sheet
         </div>
      </div>
      <button className={contentButtonStyles}>Button</button>
   </>
)

export const Basic = (): ReactElement => {

   const [open, setOpen] = useState(false)

   const openBottomSheet = (): void => {
      setOpen(true)
   }

   const closeBottomSheet = (): void => {
      setOpen(false)
   }

   return (
      <div className={mobileContainerStyles}>
         <button onClick={openBottomSheet} className={triggerButtonStyles}>
            Open Bottom Sheet
         </button>
         <BottomSheet isOpen={open} onRequestClose={closeBottomSheet}>
            <BottomSheetDefaultContent />
         </BottomSheet>
      </div>
   )
}

export const DraggableBottomSheet = (): ReactElement => {

   const [open, setOpen] = useState(false)

   const openBottomSheet = (): void => {
      setOpen(true)
   }

   const closeBottomSheet = (): void => {
      setOpen(false)
   }

   return (
      <div className={mobileContainerStyles}>
         <button onClick={openBottomSheet} className={triggerButtonStyles}>
            Open Bottom Sheet
         </button>
         <BottomSheet
            isOpen={open}
            onRequestClose={closeBottomSheet}
            isDraggable={true}
         >
            <BottomSheetDefaultContent />
         </BottomSheet>
      </div>
   )
}

export const NestedBottomSheet = (): ReactElement => {
   const [open, setOpen] = useState(false)
   const [open2, setOpen2] = useState(false)

   const openBottomSheet = (): void => {
      setOpen(true)
   }

   const closeBottomSheet = (): void => {
      setOpen(false)
   }

   const openBottomSheet2 = (): void => {
      setOpen2(true)
   }

   const closeBottomSheet2 = (): void => {
      setOpen2(false)
   }

   return (
      <div className={mobileContainerStyles}>
         <button onClick={openBottomSheet} className={triggerButtonStyles}>
            Open 1st Bottom Sheet
         </button>
         <BottomSheet isOpen={open} onRequestClose={closeBottomSheet}>
            <button onClick={openBottomSheet2} className={contentButtonStyles}>
               Open 2nd Bottom Sheet
            </button>
         </BottomSheet>
         <BottomSheet isOpen={open2} onRequestClose={closeBottomSheet2}>
            <BottomSheetDefaultContent />
         </BottomSheet>
      </div>
   )
}

export const BottomSheetWithScrolling = (): ReactElement => {
   const [open, setOpen] = useState(false)

   const openBottomSheet = (): void => {
      setOpen(true)
   }

   const closeBottomSheet = (): void => {
      setOpen(false)
   }

   const renderContent = (): ReactElement => {
      const items: string[] = [
         'Time Management',
         'Handling Emotions',
         'English',
         'Relationships',
         'Balance',
         'Growth',
         'Wisdom',
         'Communication',
         'Leadership'
      ]

      return (
         <>
            <h1 className='text-primary heading-xl font-semibold mb-common-sm-8'>
               Header
            </h1>
            <div className='w-full h-full flex flex-col overflow-y-auto px-common-lg-16'>
               {items.map(each => (
                  <div
                     key={each}
                     className='text-secondary body-md font-normal text-center border-b py-selectable-md-12 px-selectable-xl-24 rounded-common-full bg-neutral-default-l1 border-neutral-primary-on-l1 mb-common-lg-16'
                  >
                     {each}
                  </div>
               ))}
            </div>
         </>
      )
   }

   return (
      <div className={mobileContainerStyles}>
         <button className={triggerButtonStyles} onClick={openBottomSheet}>
            Open Bottom Sheet
         </button>
         <BottomSheet
            isOpen={open}
            onRequestClose={closeBottomSheet}
            containerClassName={`!px-[0px] !pb-[0px]`}
         >
            {renderContent()}
         </BottomSheet>
      </div>
   )
}
