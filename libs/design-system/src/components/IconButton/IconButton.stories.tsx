import { action } from '@storybook/addon-actions'

import { RadioUnSelectedIcon } from '../../icons/RadioUnSelectedIcon'

import { ThemeContextProvider } from '../../Theme/Provider'
import { defaultTheme } from '../../Theme/theme'

import { IconButtonHierarchy, IconButtonSubVariant, IconButton } from '.'

export const PrimaryButtonWithIcon = () => (
   <ThemeContextProvider theme={defaultTheme}>
      <div>
         <div>
            hierarchy: Primary, subVariant: Primary
            <div className='mt-2' />
            <IconButton
               hierarchy={IconButtonHierarchy.Primary}
               subVariant={IconButtonSubVariant.Primary}
               onClick={action('clicked CommonButton')}
               size={'Small'}
               icon={iconProps => {
                  return (
                     <RadioUnSelectedIcon
                        bgColor={iconProps.fill}
                        borderColor={iconProps.stroke}
                        {...iconProps}
                     />
                  )
               }}
               isDisabled={true}
            />
            <div className='mt-2' />
            <IconButton
               hierarchy={IconButtonHierarchy.Primary}
               subVariant={IconButtonSubVariant.Primary}
               onClick={action('clicked CommonButton')}
               size={'Small'}
               icon={iconProps => (
                  <RadioUnSelectedIcon
                     bgColor={iconProps.fill}
                     borderColor={iconProps.stroke}
                     {...iconProps}
                  />
               )}
            />
            <div className='mt-2' />
            <IconButton
               hierarchy={IconButtonHierarchy.Primary}
               subVariant={IconButtonSubVariant.Primary}
               size={'Medium'}
               onClick={action('clicked CommonButton')}
               icon={iconProps => (
                  <RadioUnSelectedIcon
                     bgColor={iconProps.fill}
                     borderColor={iconProps.stroke}
                     {...iconProps}
                  />
               )}
            />
            <div className='mt-2' />
            <IconButton
               hierarchy={IconButtonHierarchy.Primary}
               subVariant={IconButtonSubVariant.Primary}
               size={'Large'}
               onClick={action('clicked CommonButton')}
               icon={iconProps => (
                  <RadioUnSelectedIcon
                     bgColor={iconProps.fill}
                     borderColor={iconProps.stroke}
                     {...iconProps}
                  />
               )}
            />
            <div className='mt-2' />
            <IconButton
               hierarchy={IconButtonHierarchy.Primary}
               subVariant={IconButtonSubVariant.Primary}
               size={'ExtraLarge'}
               onClick={action('clicked CommonButton')}
               icon={iconProps => (
                  <RadioUnSelectedIcon
                     bgColor={iconProps.fill}
                     borderColor={iconProps.stroke}
                     {...iconProps}
                  />
               )}
            />
            <div className='mt-2' />
            <IconButton
               hierarchy={IconButtonHierarchy.Primary}
               subVariant={IconButtonSubVariant.Primary}
               size={'DoubleExtraLarge'}
               onClick={action('clicked CommonButton')}
               icon={iconProps => (
                  <RadioUnSelectedIcon
                     bgColor={iconProps.fill}
                     borderColor={iconProps.stroke}
                     {...iconProps}
                  />
               )}
            />
         </div>

         <div className='m-2' />

         <div>
            hierarchy: Primary, subVariant: Destructive
            <div className='mt-2' />
            <IconButton
               hierarchy={IconButtonHierarchy.Primary}
               subVariant={IconButtonSubVariant.Destructive}
               size={'Small'}
               onClick={action('clicked CommonButton')}
               icon={iconProps => (
                  <RadioUnSelectedIcon
                     bgColor={iconProps.fill}
                     borderColor={iconProps.stroke}
                     {...iconProps}
                  />
               )}
               isDisabled={true}
            />
            <div className='mt-2' />
            <IconButton
               hierarchy={IconButtonHierarchy.Primary}
               subVariant={IconButtonSubVariant.Destructive}
               size={'Small'}
               onClick={action('clicked CommonButton')}
               icon={iconProps => (
                  <RadioUnSelectedIcon
                     bgColor={iconProps.fill}
                     borderColor={iconProps.stroke}
                     {...iconProps}
                  />
               )}
            />
            <div className='mt-2' />
            <IconButton
               hierarchy={IconButtonHierarchy.Primary}
               subVariant={IconButtonSubVariant.Destructive}
               size={'Medium'}
               onClick={action('clicked CommonButton')}
               icon={iconProps => (
                  <RadioUnSelectedIcon
                     bgColor={iconProps.fill}
                     borderColor={iconProps.stroke}
                     {...iconProps}
                  />
               )}
            />
            <div className='mt-2' />
            <IconButton
               hierarchy={IconButtonHierarchy.Primary}
               subVariant={IconButtonSubVariant.Destructive}
               size={'Large'}
               onClick={action('clicked CommonButton')}
               icon={iconProps => (
                  <RadioUnSelectedIcon
                     bgColor={iconProps.fill}
                     borderColor={iconProps.stroke}
                     {...iconProps}
                  />
               )}
            />
            <div className='mt-2' />
            <IconButton
               hierarchy={IconButtonHierarchy.Primary}
               subVariant={IconButtonSubVariant.Destructive}
               size={'ExtraLarge'}
               onClick={action('clicked CommonButton')}
               icon={iconProps => (
                  <RadioUnSelectedIcon
                     bgColor={iconProps.fill}
                     borderColor={iconProps.stroke}
                     {...iconProps}
                  />
               )}
            />
            <div className='mt-2' />
            <IconButton
               hierarchy={IconButtonHierarchy.Primary}
               subVariant={IconButtonSubVariant.Destructive}
               size={'DoubleExtraLarge'}
               onClick={action('clicked CommonButton')}
               icon={iconProps => (
                  <RadioUnSelectedIcon
                     bgColor={iconProps.fill}
                     borderColor={iconProps.stroke}
                     {...iconProps}
                  />
               )}
            />
         </div>
      </div>
   </ThemeContextProvider>
)

export const SecondaryButtonWithIcon = () => (
   <ThemeContextProvider theme={defaultTheme}>
      <div>
         <div>
            hierarchy: Secondary, subVariant: Primary
            <div className='mt-2' />
            <IconButton
               hierarchy={IconButtonHierarchy.Secondary}
               subVariant={IconButtonSubVariant.Primary}
               size={'Small'}
               onClick={action('clicked CommonButton')}
               icon={iconProps => (
                  <RadioUnSelectedIcon
                     bgColor={iconProps.fill}
                     borderColor={iconProps.stroke}
                     {...iconProps}
                  />
               )}
               isDisabled={true}
            />
            <div className='mt-2' />
            <IconButton
               hierarchy={IconButtonHierarchy.Secondary}
               subVariant={IconButtonSubVariant.Primary}
               size={'Small'}
               onClick={action('clicked CommonButton')}
               icon={iconProps => (
                  <RadioUnSelectedIcon
                     bgColor={iconProps.fill}
                     borderColor={iconProps.stroke}
                     {...iconProps}
                  />
               )}
            />
            <div className='mt-2' />
            <IconButton
               hierarchy={IconButtonHierarchy.Secondary}
               subVariant={IconButtonSubVariant.Primary}
               size={'Medium'}
               onClick={action('clicked CommonButton')}
               icon={iconProps => (
                  <RadioUnSelectedIcon
                     bgColor={iconProps.fill}
                     borderColor={iconProps.stroke}
                     {...iconProps}
                  />
               )}
            />
            <div className='mt-2' />
            <IconButton
               hierarchy={IconButtonHierarchy.Secondary}
               subVariant={IconButtonSubVariant.Primary}
               size={'Large'}
               onClick={action('clicked CommonButton')}
               icon={iconProps => (
                  <RadioUnSelectedIcon
                     bgColor={iconProps.fill}
                     borderColor={iconProps.stroke}
                     {...iconProps}
                  />
               )}
            />
         </div>
         <div className='mt-2' />
         <IconButton
            hierarchy={IconButtonHierarchy.Secondary}
            subVariant={IconButtonSubVariant.Primary}
            size={'ExtraLarge'}
            onClick={action('clicked CommonButton')}
            icon={iconProps => (
               <RadioUnSelectedIcon
                  bgColor={iconProps.fill}
                  borderColor={iconProps.stroke}
                  {...iconProps}
               />
            )}
         />
         <div className='mt-2' />
         <IconButton
            hierarchy={IconButtonHierarchy.Secondary}
            subVariant={IconButtonSubVariant.Primary}
            size={'DoubleExtraLarge'}
            onClick={action('clicked CommonButton')}
            icon={iconProps => (
               <RadioUnSelectedIcon
                  bgColor={iconProps.fill}
                  borderColor={iconProps.stroke}
                  {...iconProps}
               />
            )}
         />

         <div className='mt-2' />

         <div>
            hierarchy: Secondary, subVariant: Destructive
            <div className='mt-2' />
            <IconButton
               hierarchy={IconButtonHierarchy.Secondary}
               subVariant={IconButtonSubVariant.Destructive}
               size={'Small'}
               onClick={action('clicked CommonButton')}
               icon={iconProps => (
                  <RadioUnSelectedIcon
                     bgColor={iconProps.fill}
                     borderColor={iconProps.stroke}
                     {...iconProps}
                  />
               )}
               isDisabled={true}
            />
            <div className='mt-2' />
            <IconButton
               hierarchy={IconButtonHierarchy.Secondary}
               subVariant={IconButtonSubVariant.Destructive}
               size={'Small'}
               onClick={action('clicked CommonButton')}
               icon={iconProps => (
                  <RadioUnSelectedIcon
                     bgColor={iconProps.fill}
                     borderColor={iconProps.stroke}
                     {...iconProps}
                  />
               )}
            />
            <div className='mt-2' />
            <IconButton
               hierarchy={IconButtonHierarchy.Secondary}
               subVariant={IconButtonSubVariant.Destructive}
               size={'Medium'}
               onClick={action('clicked CommonButton')}
               icon={iconProps => (
                  <RadioUnSelectedIcon
                     bgColor={iconProps.fill}
                     borderColor={iconProps.stroke}
                     {...iconProps}
                  />
               )}
            />
            <div className='mt-2' />
            <IconButton
               hierarchy={IconButtonHierarchy.Secondary}
               subVariant={IconButtonSubVariant.Destructive}
               size={'Large'}
               onClick={action('clicked CommonButton')}
               icon={iconProps => (
                  <RadioUnSelectedIcon
                     bgColor={iconProps.fill}
                     borderColor={iconProps.stroke}
                     {...iconProps}
                  />
               )}
            />
            <div className='mt-2' />
            <IconButton
               hierarchy={IconButtonHierarchy.Secondary}
               subVariant={IconButtonSubVariant.Destructive}
               size={'ExtraLarge'}
               onClick={action('clicked CommonButton')}
               icon={iconProps => (
                  <RadioUnSelectedIcon
                     bgColor={iconProps.fill}
                     borderColor={iconProps.stroke}
                     {...iconProps}
                  />
               )}
            />
            <div className='mt-2' />
            <IconButton
               hierarchy={IconButtonHierarchy.Secondary}
               subVariant={IconButtonSubVariant.Destructive}
               size={'DoubleExtraLarge'}
               onClick={action('clicked CommonButton')}
               icon={iconProps => (
                  <RadioUnSelectedIcon
                     bgColor={iconProps.fill}
                     borderColor={iconProps.stroke}
                     {...iconProps}
                  />
               )}
            />
         </div>

         <div className='mt-2' />

         <div>
            hierarchy: Secondary, subVariant: GrayOutline
            <div className='mt-2' />
            <IconButton
               hierarchy={IconButtonHierarchy.Secondary}
               subVariant={IconButtonSubVariant.GrayOutline}
               size={'Small'}
               onClick={action('clicked CommonButton')}
               icon={iconProps => (
                  <RadioUnSelectedIcon
                     bgColor={iconProps.fill}
                     borderColor={iconProps.stroke}
                     {...iconProps}
                  />
               )}
               isDisabled={true}
            />
            <div className='mt-2' />
            <IconButton
               hierarchy={IconButtonHierarchy.Secondary}
               subVariant={IconButtonSubVariant.GrayOutline}
               size={'Small'}
               onClick={action('clicked CommonButton')}
               icon={iconProps => (
                  <RadioUnSelectedIcon
                     bgColor={iconProps.fill}
                     borderColor={iconProps.stroke}
                     {...iconProps}
                  />
               )}
            />
            <div className='mt-2' />
            <IconButton
               hierarchy={IconButtonHierarchy.Secondary}
               subVariant={IconButtonSubVariant.GrayOutline}
               size={'Medium'}
               onClick={action('clicked CommonButton')}
               icon={iconProps => (
                  <RadioUnSelectedIcon
                     bgColor={iconProps.fill}
                     borderColor={iconProps.stroke}
                     {...iconProps}
                  />
               )}
            />
            <div className='mt-2' />
            <IconButton
               hierarchy={IconButtonHierarchy.Secondary}
               subVariant={IconButtonSubVariant.GrayOutline}
               size={'Large'}
               onClick={action('clicked CommonButton')}
               icon={iconProps => (
                  <RadioUnSelectedIcon
                     bgColor={iconProps.fill}
                     borderColor={iconProps.stroke}
                     {...iconProps}
                  />
               )}
            />
            <div className='mt-2' />
            <IconButton
               hierarchy={IconButtonHierarchy.Secondary}
               subVariant={IconButtonSubVariant.GrayOutline}
               size={'Large'}
               onClick={action('clicked CommonButton')}
               icon={iconProps => (
                  <RadioUnSelectedIcon
                     bgColor={iconProps.fill}
                     borderColor={iconProps.stroke}
                     {...iconProps}
                  />
               )}
            />
            <div className='mt-2' />
            <IconButton
               hierarchy={IconButtonHierarchy.Secondary}
               subVariant={IconButtonSubVariant.GrayOutline}
               size={'ExtraLarge'}
               onClick={action('clicked CommonButton')}
               icon={iconProps => (
                  <RadioUnSelectedIcon
                     bgColor={iconProps.fill}
                     borderColor={iconProps.stroke}
                     {...iconProps}
                  />
               )}
            />
            <div className='mt-2' />
            <IconButton
               hierarchy={IconButtonHierarchy.Secondary}
               subVariant={IconButtonSubVariant.GrayOutline}
               size={'DoubleExtraLarge'}
               onClick={action('clicked CommonButton')}
               icon={iconProps => (
                  <RadioUnSelectedIcon
                     bgColor={iconProps.fill}
                     borderColor={iconProps.stroke}
                     {...iconProps}
                  />
               )}
            />
         </div>

         <div>
            hierarchy: Secondary, subVariant: DestructiveOutline
            <div className='mt-2' />
            <IconButton
               hierarchy={IconButtonHierarchy.Secondary}
               subVariant={IconButtonSubVariant.DestructiveOutline}
               size={'Small'}
               onClick={action('clicked CommonButton')}
               icon={iconProps => (
                  <RadioUnSelectedIcon
                     bgColor={iconProps.fill}
                     borderColor={iconProps.stroke}
                     {...iconProps}
                  />
               )}
               isDisabled={true}
            />
            <div className='mt-2' />
            <IconButton
               hierarchy={IconButtonHierarchy.Secondary}
               subVariant={IconButtonSubVariant.DestructiveOutline}
               size={'Small'}
               onClick={action('clicked CommonButton')}
               icon={iconProps => (
                  <RadioUnSelectedIcon
                     bgColor={iconProps.fill}
                     borderColor={iconProps.stroke}
                     {...iconProps}
                  />
               )}
            />
            <div className='mt-2' />
            <IconButton
               hierarchy={IconButtonHierarchy.Secondary}
               subVariant={IconButtonSubVariant.DestructiveOutline}
               size={'Medium'}
               onClick={action('clicked CommonButton')}
               icon={iconProps => (
                  <RadioUnSelectedIcon
                     bgColor={iconProps.fill}
                     borderColor={iconProps.stroke}
                     {...iconProps}
                  />
               )}
            />
            <div className='mt-2' />
            <IconButton
               hierarchy={IconButtonHierarchy.Secondary}
               subVariant={IconButtonSubVariant.DestructiveOutline}
               size={'Large'}
               onClick={action('clicked CommonButton')}
               icon={iconProps => (
                  <RadioUnSelectedIcon
                     bgColor={iconProps.fill}
                     borderColor={iconProps.stroke}
                     {...iconProps}
                  />
               )}
            />
            <div className='mt-2' />
            <IconButton
               hierarchy={IconButtonHierarchy.Secondary}
               subVariant={IconButtonSubVariant.DestructiveOutline}
               size={'ExtraLarge'}
               onClick={action('clicked CommonButton')}
               icon={iconProps => (
                  <RadioUnSelectedIcon
                     bgColor={iconProps.fill}
                     borderColor={iconProps.stroke}
                     {...iconProps}
                  />
               )}
            />
            <div className='mt-2' />
            <IconButton
               hierarchy={IconButtonHierarchy.Secondary}
               subVariant={IconButtonSubVariant.DestructiveOutline}
               size={'DoubleExtraLarge'}
               onClick={action('clicked CommonButton')}
               icon={iconProps => (
                  <RadioUnSelectedIcon
                     bgColor={iconProps.fill}
                     borderColor={iconProps.stroke}
                     {...iconProps}
                  />
               )}
            />
         </div>

         <div>
            hierarchy: Secondary, subVariant: Violet
            <div className='mt-2' />
            <IconButton
               hierarchy={IconButtonHierarchy.Secondary}
               subVariant={IconButtonSubVariant.Violet}
               size={'Small'}
               onClick={action('clicked CommonButton')}
               icon={iconProps => (
                  <RadioUnSelectedIcon
                     bgColor={iconProps.fill}
                     borderColor={iconProps.stroke}
                     {...iconProps}
                  />
               )}
               isDisabled={true}
            />
            <div className='mt-2' />
            <IconButton
               hierarchy={IconButtonHierarchy.Secondary}
               subVariant={IconButtonSubVariant.Violet}
               size={'Small'}
               onClick={action('clicked CommonButton')}
               icon={iconProps => (
                  <RadioUnSelectedIcon
                     bgColor={iconProps.fill}
                     borderColor={iconProps.stroke}
                     {...iconProps}
                  />
               )}
            />
            <div className='mt-2' />
            <IconButton
               hierarchy={IconButtonHierarchy.Secondary}
               subVariant={IconButtonSubVariant.Violet}
               size={'Medium'}
               onClick={action('clicked CommonButton')}
               icon={iconProps => (
                  <RadioUnSelectedIcon
                     bgColor={iconProps.fill}
                     borderColor={iconProps.stroke}
                     {...iconProps}
                  />
               )}
            />
            <div className='mt-2' />
            <IconButton
               hierarchy={IconButtonHierarchy.Secondary}
               subVariant={IconButtonSubVariant.Violet}
               size={'Large'}
               onClick={action('clicked CommonButton')}
               icon={iconProps => (
                  <RadioUnSelectedIcon
                     bgColor={iconProps.fill}
                     borderColor={iconProps.stroke}
                     {...iconProps}
                  />
               )}
            />
            <div className='mt-2' />
            <IconButton
               hierarchy={IconButtonHierarchy.Secondary}
               subVariant={IconButtonSubVariant.Violet}
               size={'ExtraLarge'}
               onClick={action('clicked CommonButton')}
               icon={iconProps => (
                  <RadioUnSelectedIcon
                     bgColor={iconProps.fill}
                     borderColor={iconProps.stroke}
                     {...iconProps}
                  />
               )}
            />
            <div className='mt-2' />
            <IconButton
               hierarchy={IconButtonHierarchy.Secondary}
               subVariant={IconButtonSubVariant.Violet}
               size={'DoubleExtraLarge'}
               onClick={action('clicked CommonButton')}
               icon={iconProps => (
                  <RadioUnSelectedIcon
                     bgColor={iconProps.fill}
                     borderColor={iconProps.stroke}
                     {...iconProps}
                  />
               )}
            />
         </div>

         <div>
            hierarchy: Secondary, subVariant: Success
            <div className='mt-2' />
            <IconButton
               hierarchy={IconButtonHierarchy.Secondary}
               subVariant={IconButtonSubVariant.Success}
               size={'Small'}
               onClick={action('clicked CommonButton')}
               icon={iconProps => (
                  <RadioUnSelectedIcon
                     bgColor={iconProps.fill}
                     borderColor={iconProps.stroke}
                     {...iconProps}
                  />
               )}
               isDisabled={true}
            />
            <div className='mt-2' />
            <IconButton
               hierarchy={IconButtonHierarchy.Secondary}
               subVariant={IconButtonSubVariant.Success}
               size={'Small'}
               onClick={action('clicked CommonButton')}
               icon={iconProps => (
                  <RadioUnSelectedIcon
                     bgColor={iconProps.fill}
                     borderColor={iconProps.stroke}
                     {...iconProps}
                  />
               )}
            />
            <div className='mt-2' />
            <IconButton
               hierarchy={IconButtonHierarchy.Secondary}
               subVariant={IconButtonSubVariant.Success}
               size={'Medium'}
               onClick={action('clicked CommonButton')}
               icon={iconProps => (
                  <RadioUnSelectedIcon
                     bgColor={iconProps.fill}
                     borderColor={iconProps.stroke}
                     {...iconProps}
                  />
               )}
            />
            <div className='mt-2' />
            <IconButton
               hierarchy={IconButtonHierarchy.Secondary}
               subVariant={IconButtonSubVariant.Success}
               size={'Large'}
               onClick={action('clicked CommonButton')}
               icon={iconProps => (
                  <RadioUnSelectedIcon
                     bgColor={iconProps.fill}
                     borderColor={iconProps.stroke}
                     {...iconProps}
                  />
               )}
            />
            <div className='mt-2' />
            <IconButton
               hierarchy={IconButtonHierarchy.Secondary}
               subVariant={IconButtonSubVariant.Success}
               size={'ExtraLarge'}
               onClick={action('clicked CommonButton')}
               icon={iconProps => (
                  <RadioUnSelectedIcon
                     bgColor={iconProps.fill}
                     borderColor={iconProps.stroke}
                     {...iconProps}
                  />
               )}
            />
            <div className='mt-2' />
            <IconButton
               hierarchy={IconButtonHierarchy.Secondary}
               subVariant={IconButtonSubVariant.Success}
               size={'DoubleExtraLarge'}
               onClick={action('clicked CommonButton')}
               icon={iconProps => (
                  <RadioUnSelectedIcon
                     bgColor={iconProps.fill}
                     borderColor={iconProps.stroke}
                     {...iconProps}
                  />
               )}
            />
         </div>
      </div>
   </ThemeContextProvider>
)

export const TertiaryButtonWithIcon = () => (
   <ThemeContextProvider theme={defaultTheme}>
      <div>
         <div>
            hierarchy: Tertiary, subVariant: Primary
            <div className='mt-2' />
            <IconButton
               hierarchy={IconButtonHierarchy.Tertiary}
               subVariant={IconButtonSubVariant.Primary}
               size={'Small'}
               onClick={action('clicked CommonButton')}
               icon={iconProps => (
                  <RadioUnSelectedIcon
                     bgColor={iconProps.fill}
                     borderColor={iconProps.stroke}
                     {...iconProps}
                  />
               )}
               isDisabled={true}
            />
            <div className='mt-2' />
            <IconButton
               hierarchy={IconButtonHierarchy.Tertiary}
               subVariant={IconButtonSubVariant.Primary}
               size={'Small'}
               onClick={action('clicked CommonButton')}
               icon={iconProps => (
                  <RadioUnSelectedIcon
                     bgColor={iconProps.fill}
                     borderColor={iconProps.stroke}
                     {...iconProps}
                  />
               )}
            />
            <div className='mt-2' />
            <IconButton
               hierarchy={IconButtonHierarchy.Tertiary}
               subVariant={IconButtonSubVariant.Primary}
               size={'Medium'}
               onClick={action('clicked CommonButton')}
               icon={iconProps => (
                  <RadioUnSelectedIcon
                     bgColor={iconProps.fill}
                     borderColor={iconProps.stroke}
                     {...iconProps}
                  />
               )}
            />
            <div className='mt-2' />
            <IconButton
               hierarchy={IconButtonHierarchy.Tertiary}
               subVariant={IconButtonSubVariant.Primary}
               size={'Large'}
               onClick={action('clicked CommonButton')}
               icon={iconProps => (
                  <RadioUnSelectedIcon
                     bgColor={iconProps.fill}
                     borderColor={iconProps.stroke}
                     {...iconProps}
                  />
               )}
            />
            <div className='mt-2' />
            <IconButton
               hierarchy={IconButtonHierarchy.Tertiary}
               subVariant={IconButtonSubVariant.Primary}
               size={'ExtraLarge'}
               onClick={action('clicked CommonButton')}
               icon={iconProps => (
                  <RadioUnSelectedIcon
                     bgColor={iconProps.fill}
                     borderColor={iconProps.stroke}
                     {...iconProps}
                  />
               )}
            />
            <div className='mt-2' />
            <IconButton
               hierarchy={IconButtonHierarchy.Tertiary}
               subVariant={IconButtonSubVariant.Primary}
               size={'DoubleExtraLarge'}
               onClick={action('clicked CommonButton')}
               icon={iconProps => (
                  <RadioUnSelectedIcon
                     bgColor={iconProps.fill}
                     borderColor={iconProps.stroke}
                     {...iconProps}
                  />
               )}
            />
         </div>

         <div className='m-2' />

         <div>
            hierarchy: Tertiary, subVariant: Destructive
            <div className='mt-2' />
            <IconButton
               hierarchy={IconButtonHierarchy.Tertiary}
               subVariant={IconButtonSubVariant.Destructive}
               size={'Small'}
               onClick={action('clicked CommonButton')}
               icon={iconProps => (
                  <RadioUnSelectedIcon
                     bgColor={iconProps.fill}
                     borderColor={iconProps.stroke}
                     {...iconProps}
                  />
               )}
               isDisabled={true}
            />
            <div className='mt-2' />
            <IconButton
               hierarchy={IconButtonHierarchy.Tertiary}
               subVariant={IconButtonSubVariant.Destructive}
               size={'Small'}
               onClick={action('clicked CommonButton')}
               icon={iconProps => (
                  <RadioUnSelectedIcon
                     bgColor={iconProps.fill}
                     borderColor={iconProps.stroke}
                     {...iconProps}
                  />
               )}
            />
            <div className='mt-2' />
            <IconButton
               hierarchy={IconButtonHierarchy.Tertiary}
               subVariant={IconButtonSubVariant.Destructive}
               size={'Medium'}
               onClick={action('clicked CommonButton')}
               icon={iconProps => (
                  <RadioUnSelectedIcon
                     bgColor={iconProps.fill}
                     borderColor={iconProps.stroke}
                     {...iconProps}
                  />
               )}
            />
            <div className='mt-2' />
            <IconButton
               hierarchy={IconButtonHierarchy.Tertiary}
               subVariant={IconButtonSubVariant.Destructive}
               size={'Large'}
               onClick={action('clicked CommonButton')}
               icon={iconProps => (
                  <RadioUnSelectedIcon
                     bgColor={iconProps.fill}
                     borderColor={iconProps.stroke}
                     {...iconProps}
                  />
               )}
            />
            <div className='mt-2' />
            <IconButton
               hierarchy={IconButtonHierarchy.Tertiary}
               subVariant={IconButtonSubVariant.Destructive}
               size={'ExtraLarge'}
               onClick={action('clicked CommonButton')}
               icon={iconProps => (
                  <RadioUnSelectedIcon
                     bgColor={iconProps.fill}
                     borderColor={iconProps.stroke}
                     {...iconProps}
                  />
               )}
            />
            <div className='mt-2' />
            <IconButton
               hierarchy={IconButtonHierarchy.Tertiary}
               subVariant={IconButtonSubVariant.Destructive}
               size={'DoubleExtraLarge'}
               onClick={action('clicked CommonButton')}
               icon={iconProps => (
                  <RadioUnSelectedIcon
                     bgColor={iconProps.fill}
                     borderColor={iconProps.stroke}
                     {...iconProps}
                  />
               )}
            />
         </div>

         <div className='m-2' />

         <div>
            hierarchy: Tertiary, subVariant: Gray
            <div className='mt-2' />
            <IconButton
               hierarchy={IconButtonHierarchy.Tertiary}
               subVariant={IconButtonSubVariant.Gray}
               size={'Small'}
               onClick={action('clicked CommonButton')}
               icon={iconProps => (
                  <RadioUnSelectedIcon
                     bgColor={iconProps.fill}
                     borderColor={iconProps.stroke}
                     {...iconProps}
                  />
               )}
               isDisabled={true}
            />
            <div className='mt-2' />
            <IconButton
               hierarchy={IconButtonHierarchy.Tertiary}
               subVariant={IconButtonSubVariant.Gray}
               size={'Small'}
               onClick={action('clicked CommonButton')}
               icon={iconProps => (
                  <RadioUnSelectedIcon
                     bgColor={iconProps.fill}
                     borderColor={iconProps.stroke}
                     {...iconProps}
                  />
               )}
            />
            <div className='mt-2' />
            <IconButton
               hierarchy={IconButtonHierarchy.Tertiary}
               subVariant={IconButtonSubVariant.Gray}
               size={'Medium'}
               onClick={action('clicked CommonButton')}
               icon={iconProps => (
                  <RadioUnSelectedIcon
                     bgColor={iconProps.fill}
                     borderColor={iconProps.stroke}
                     {...iconProps}
                  />
               )}
            />
            <div className='mt-2' />
            <IconButton
               hierarchy={IconButtonHierarchy.Tertiary}
               subVariant={IconButtonSubVariant.Gray}
               size={'Large'}
               onClick={action('clicked CommonButton')}
               icon={iconProps => (
                  <RadioUnSelectedIcon
                     bgColor={iconProps.fill}
                     borderColor={iconProps.stroke}
                     {...iconProps}
                  />
               )}
            />
            <div className='mt-2' />
            <IconButton
               hierarchy={IconButtonHierarchy.Tertiary}
               subVariant={IconButtonSubVariant.Gray}
               size={'ExtraLarge'}
               onClick={action('clicked CommonButton')}
               icon={iconProps => (
                  <RadioUnSelectedIcon
                     bgColor={iconProps.fill}
                     borderColor={iconProps.stroke}
                     {...iconProps}
                  />
               )}
            />
            <div className='mt-2' />
            <IconButton
               hierarchy={IconButtonHierarchy.Tertiary}
               subVariant={IconButtonSubVariant.Gray}
               size={'DoubleExtraLarge'}
               onClick={action('clicked CommonButton')}
               icon={iconProps => (
                  <RadioUnSelectedIcon
                     bgColor={iconProps.fill}
                     borderColor={iconProps.stroke}
                     {...iconProps}
                  />
               )}
            />
         </div>
      </div>
   </ThemeContextProvider>
)

export default {
   title: 'Components/IconButton',
   component: IconButton
}
