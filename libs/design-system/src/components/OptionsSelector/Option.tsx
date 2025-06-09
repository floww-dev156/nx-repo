import cn from 'classnames'
import { observer } from 'mobx-react'
import React from 'react'

import { useThemeContext } from '../../Theme/Provider'

import { CheckBoxComponent } from '../CheckBox/CheckBox'

import * as Styles from './styles'
import { OptionsSelectorOptionType } from './types'

interface Props<T extends OptionsSelectorOptionType> {
   containerProps: Record<string, any>
   isSelected: boolean
   isDisabled?: boolean
   option: T | null
   optionClassName?: string

   renderCustomOption?: (
      option: T,
      containerProps: any,
      isSelected: boolean,
      isDisabled?: boolean
   ) => React.ReactElement
   renderCustomContent?: (option: T, isSelected: boolean) => React.ReactElement
}

const Option = <T extends OptionsSelectorOptionType>(
   props: Props<T>
): React.ReactElement => {
   const {
      containerProps,
      isSelected,
      isDisabled,
      option,
      optionClassName,
      renderCustomOption,
      renderCustomContent
   } = props

   const { theme, colorScheme } = useThemeContext()
   const { optionsSelector } = theme[colorScheme]

   const renderOptionContent = (): React.ReactElement =>
      option ? (
         renderCustomContent?.(option, isSelected) ?? (
            <p
               className={cn(
                  Styles.getDefaultOptionTextStyles(optionsSelector),
                  'notranslate',
                  optionClassName
               )}
            >
               {option?.name}
            </p>
         )
      ) : (
         <></>
      )

   return (
      renderCustomOption?.(
         option as T,
         containerProps,
         isSelected,
         isDisabled
      ) ?? (
         <div
            {...containerProps}
            className={cn(
               containerProps['className'],
               Styles.getDefaultOptionContainerStyles(optionsSelector),
               { 'cursor-pointer': !isDisabled }
            )}
            title={option?.name}
         >
            <CheckBoxComponent
               isSelected={isSelected}
               isDisabled={isDisabled}
            />

            {renderOptionContent()}
         </div>
      )
   )
}

export default observer(Option)
