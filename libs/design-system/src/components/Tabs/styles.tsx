import cn from 'classnames'
import { Orientation } from '@react-types/shared'
import { TabsOrientation } from './constants/index'

export const getTabContainerStyles = (
   coloredTheme: any,
   tabSize: any,
   isSelected: boolean,
   isHovered: boolean,
   isDisabled: boolean
): string =>
   cn(
      'relative box-border z-10 no-underline whitespace-nowrap outline-none cursor-pointer',
      tabSize.typography,
      'mr-20px px-4px pb-11px pt-[1px]',
      {
         [coloredTheme.selectedTextColor]: isSelected || isHovered,
         [`${coloredTheme.disabledTextColor} cursor-not-allowed`]: isDisabled,
         [coloredTheme.defaultTextColor]:
            !isSelected && !isHovered && !isDisabled
      }
   )

export const getTabsChildrenContainerStyles = (orientation: Orientation) =>
   cn('flex w-full', {
      ['flex-row']: orientation === TabsOrientation.vertical,
      ['flex-col']: orientation === TabsOrientation.horizontal
   })

export const tabPanelContainerClassName = cn(
   'flex-grow border-transparent border-1 border-solid',
   'focus:outline-none'
)

export const tabListMainContainerClassName = 'flex relative mb-16px'

export const getTabListStyles = (orientation?: Orientation) =>
   cn('grow shrink-0 basis-0', {
      ['grow-0']: orientation === TabsOrientation.vertical
   })

export const getTabContentContainerStyle = (
   coloredTheme: any,
   orientation?: Orientation
) =>
   cn(
      'flex relative items-top outline-none select-none',
      'm-0 p-0 z-0',
      `border-b-1 ${coloredTheme.borderBottomColor}`,
      {
         ['items-end ']: orientation === TabsOrientation.horizontal,
         ['inline-flex flex-col p-0 grow-0']:
            orientation === TabsOrientation.vertical
      }
   )

export const getTabLineStyles = () =>
   cn('absolute z-0 bg-primary-700 h-2px -mb-[1px]')
