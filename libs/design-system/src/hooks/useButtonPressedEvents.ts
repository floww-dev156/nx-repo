import { useEffect, useState } from 'react'

interface useButtonPressedEventsProps {
   handlePointerDown: (e: any) => void
   handlePointerUp: (event: any) => void
   isPressed: boolean
}

const useButtonPressedEvents = (): useButtonPressedEventsProps => {
   const [isPressed, setIsPressed] = useState<boolean>(false)

   let timeOutId: NodeJS.Timeout

   const updatePressedState = (): void => {
      clearTimeout(timeOutId)
      timeOutId = setTimeout(() => {
         setIsPressed(false)
      }, 50)
   }

   const handlePointerDown = (e: any) => {
      setIsPressed(true)
   }

   const handleWindowPointerUp = (event: any) => {
      updatePressedState()
   }

   const handlePointerUp = (event: any) => {
      updatePressedState()
   }

   useEffect(() => {
      // Add event listeners to the window
      window.addEventListener('pointerup', handleWindowPointerUp)
      window.addEventListener('touchend', handleWindowPointerUp)

      // Cleanup event listeners on component unmount
      return () => {
         window.removeEventListener('pointerup', handleWindowPointerUp)
         window.removeEventListener('touchend', handleWindowPointerUp)
         clearTimeout(timeOutId)
      }
   }, [])

   return {
      handlePointerDown,
      handlePointerUp,
      isPressed
   }
}

export default useButtonPressedEvents
