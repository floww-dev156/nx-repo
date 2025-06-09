export const getPopoverPositionStylesFn = (
   positionProps: React.HTMLAttributes<Element>,
   triggerRef: React.RefObject<HTMLElement>
) => {
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
