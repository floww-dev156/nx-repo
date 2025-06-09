export const getPopoverPositionStylesFn = (
   positionProps: React.HTMLAttributes<Element>,
   triggerRef: React.RefObject<HTMLElement>
) => {
   if (positionProps?.style?.top) {
      positionProps.style.top = Number(positionProps?.style?.top) + 4
   }
   return {
      ...positionProps.style,
      maxHeight:
         typeof positionProps.style?.maxHeight === 'string'
            ? parseInt(positionProps.style.maxHeight) + 6 //NOTE: Added this to remove the scroll in listbox
            : positionProps.style?.maxHeight
            ? positionProps.style.maxHeight + 6
            : undefined,
      paddingTop: '2px',
      paddingBottom: '2px',
      width: triggerRef ? triggerRef?.current?.offsetWidth : 0
   }
}

export const isOverlayOpen = ({
   state,
   isMobileDevice,
   isMobile,
   isDesktop
}: {
   state: any //NOTE: type is any as state can be of any type (selectState, comboBoxState etc)
   isMobileDevice: boolean
   isMobile: boolean | undefined
   isDesktop: boolean | undefined
}) => {
   if (isMobileDevice) {
      if (isDesktop) {
         return state.isOpen
      }
      return false
   } else {
      if (isMobile) {
         return false
      }
      return state.isOpen
   }
}
