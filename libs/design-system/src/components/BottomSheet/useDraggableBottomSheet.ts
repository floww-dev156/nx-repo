import React, { useState, useEffect, useRef } from 'react'

import {
   BOTTOM_SHEET_MAX_DRAG,
   DRAG_THRESHOLD,
   MAX_DRAG_DURATION
} from './BottomSheetConstants'

const useDraggableBottomSheet = (isOpen: boolean, onClose?: () => void) => {
   const [isDragging, setIsDragging] = useState<boolean>(false)
   const [startY, setStartY] = useState<number>(0)
   const [lastY, setLastY] = useState<number>(0)
   const [startTime, setStartTime] = useState<number>(0)
   const bottomSheetCustomRef = useRef<HTMLDivElement | null>(null)
   const bottomSheetDraggedRef = useRef<boolean>(false)

   const getBottomSheetBottomValue = (): number | undefined => {
      if (!bottomSheetCustomRef?.current) return
      const draggedHeight = startY - lastY
      const minBottomValue = -bottomSheetCustomRef.current.offsetHeight
      const maxBottomValue = 0

      if (draggedHeight < minBottomValue) {
         return minBottomValue
      } else if (draggedHeight > maxBottomValue) {
         return maxBottomValue
      } else {
         return draggedHeight
      }
   }
   const bottomSheetBottomValue = getBottomSheetBottomValue()

   const handleBottomSheetCloseWhileDrag = (): void => {
      const bottomSheetDraggedTo =
         (bottomSheetCustomRef.current?.offsetHeight ?? 0) - (lastY - startY)
      const isSheetDraggedToBottom =
         bottomSheetDraggedTo <=
         BOTTOM_SHEET_MAX_DRAG *
            (bottomSheetCustomRef.current?.offsetHeight ?? 0)
      if (isSheetDraggedToBottom) {
         onClose?.()
      } else setLastY(startY) // opening the bottom sheet to initial
   }

   const quickBottomSheetClose = (): void => {
      const currentTime = Date.now()
      const dragDistance = Math.abs(lastY - startY)
      const dragDuration = currentTime - startTime

      const shouldCloseBottomSheet =
         (!bottomSheetBottomValue && !bottomSheetDraggedRef.current) ||
         (dragDistance < DRAG_THRESHOLD && dragDuration < MAX_DRAG_DURATION)

      if (shouldCloseBottomSheet) {
         onClose?.()
      }
   }

   const handleEventRelease = (event: any): void => {
      if (isDragging) {
         setIsDragging(false)

         handleBottomSheetCloseWhileDrag()
         quickBottomSheetClose()
      }

      if (bottomSheetDraggedRef.current) {
         bottomSheetDraggedRef.current = false
      }
   }

   const handleDragPointerDown = (event: any): void => {
      setIsDragging(true)
      setStartY(event.clientY)
      setLastY(event.clientY)
      setStartTime(Date.now())
   }

   const handlePointerMove = (event: any): void => {
      if (isDragging) {
         const mouseY = event.clientY
         setLastY(mouseY)
         bottomSheetDraggedRef.current = true
      }
   }

   const handleWindowEventRelease = (): void => {
      if (isDragging) {
         setIsDragging(false)
         setLastY(0)
      }
   }

   const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
      setIsDragging(true)
      setStartY(event.touches[0].clientY)
      setLastY(event.touches[0].clientY)
      setStartTime(Date.now())
   }

   const handleTouchMove = (event: any): void => {
      if (isDragging) {
         const touchY = event.touches[0].clientY
         setLastY(touchY)
         bottomSheetDraggedRef.current = true
      }
   }

   useEffect(() => {
      window.addEventListener('pointerup', handleWindowEventRelease)

      return () => {
         window.addEventListener('pointerup', handleWindowEventRelease)
      }
   }, [isDragging, lastY])

   useEffect(() => {
      if (isOpen) return
      setStartY(0)
      setLastY(0)
   }, [isOpen])

   return {
      bottomSheetBottomValue,
      bottomSheetCustomRef,
      handleDragPointerDown,
      handleTouchStart,
      handlePointerMove,
      handleEventRelease,
      handleTouchMove,
      isDragging
   }
}

export default useDraggableBottomSheet
