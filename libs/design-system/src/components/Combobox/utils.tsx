import { ComboBoxState } from '@react-stately/combobox'
import cn from 'classnames'

export const getPopoverPositionStylesFn = (
   positionProps: React.HTMLAttributes<Element>,
   triggerRef: React.RefObject<HTMLElement>,
   inputRef: React.RefObject<HTMLElement>
) => {
   //    console.log(positionProps?.style?.left, 'position Props')

   return {
      ...positionProps.style,
      maxHeight:
         typeof positionProps.style?.maxHeight === 'string'
            ? parseInt(positionProps.style.maxHeight) - 5
            : positionProps.style?.maxHeight
            ? positionProps.style.maxHeight - 5
            : undefined,
      paddingTop: '2px',
      paddingBottom: '2px',
      width:
         inputRef?.current && triggerRef?.current
            ? triggerRef?.current?.offsetWidth +
              inputRef.current?.offsetWidth +
              70
            : 0,
      top:
         typeof positionProps.style?.top === 'string'
            ? parseInt(positionProps.style.top) + 0
            : positionProps.style?.top
            ? positionProps.style.top + 0
            : undefined,
      left:
         typeof positionProps.style?.left === 'string'
            ? parseInt(positionProps.style.left) + 8
            : positionProps.style?.left
            ? positionProps.style.left + 8
            : undefined
   }
}

export const getMobileComboboxWrapperStyles = (
   isFocus?: boolean,
   error?: string,
   isDisabled?: boolean,
   comboboxButtonClassname?: string
) =>
   cn(
      'flex items-center justify-between focus:outline-none pl-3 pr-2 w-full border-1 border-solid border-gray-300 rounded-8px',
      `${isFocus ? 'border-blue-600 border-1' : ''}`,
      `${error && 'border-error-300 border-1'}`,
      `${isDisabled && 'pointer-events-none bg-gray-100'}`,
      comboboxButtonClassname
   )

export const getMobileComboboxButtonStyles = (state: ComboBoxState<any>) =>
   cn(
      'text-sm leading-5 font-normal mr-1 flex-1 text-left truncate mobile-combobox-text',
      {
         'text-gray-900': state.selectedItem
      },
      {
         'text-gray-500': !state.selectedItem
      }
   )
