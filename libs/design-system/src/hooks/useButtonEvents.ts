import { useEffect, useState } from 'react'

interface UseButtonEventsProps {
   handlePointerDown: (e: any, targetId: string) => void
   handlePointerUp: (event: any, targetId: string) => void
   isPressed: boolean
}

const useButtonEvents = (onClick: (_: any) => void): UseButtonEventsProps => {
   const [isPressed, setIsPressed] = useState<boolean>(false)
   const [targetId, setTargetId] = useState<string | null>(null)
   let timeOutId: NodeJS.Timeout

   const updatePressedState = (): void => {
      clearTimeout(timeOutId)
      timeOutId = setTimeout(() => {
         setIsPressed(false)
      }, 50)
   }

   const handlePointerDown = (e: any, targetId: string) => {
      setTargetId(targetId)
      setIsPressed(true)
   }

   const handleWindowPointerUp = (event: any) => {
      updatePressedState()
      setTargetId(null)
   }

   const handlePointerUp = (event: any, targetIdValue: string) => {
      updatePressedState()

      // event.stopPropagation()
      if (targetIdValue === targetId) {
         onClick?.(event)
      }

      setTargetId(null)
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

export default useButtonEvents
