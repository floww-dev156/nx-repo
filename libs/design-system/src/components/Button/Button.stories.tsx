import { action } from '@storybook/addon-actions'

import { RadioUnSelectedIcon } from '../../icons/RadioUnSelectedIcon'

import { ThemeContextProvider } from '../../Theme/Provider'
import { defaultTheme } from '../../Theme/theme'

import { Hierarchy, SubVariant, Button } from '.'

export const PrimaryButton = () => (
   <ThemeContextProvider theme={defaultTheme}>
      <>
         <Button
            hierarchy={Hierarchy.Primary}
            subVariant={SubVariant.Primary}
            size={'Small'}
            onClick={action('clicked CommonButton')}
         >
            Primary Button
         </Button>
         <div className='mt-2' />
         <Button
            hierarchy={Hierarchy.Primary}
            subVariant={SubVariant.Primary}
            isLoading
            size={'Small'}
            onClick={action('clicked CommonButton')}
         >
            Primary Button
         </Button>
         <div className='mt-2' />
         <Button
            hierarchy={Hierarchy.Primary}
            subVariant={SubVariant.Primary}
            isDisabled
            size={'Small'}
            onClick={action('clicked CommonButton')}
         >
            Primary Button
         </Button>
         <div className='mt-2' />

         <Button
            hierarchy={Hierarchy.Primary}
            subVariant={SubVariant.Destructive}
            size={'Small'}
            onClick={action('clicked CommonButton')}
         >
            Destructive Button
         </Button>
         <div className='mt-2' />
         <Button
            hierarchy={Hierarchy.Primary}
            subVariant={SubVariant.Destructive}
            isLoading
            size={'Small'}
            onClick={action('clicked CommonButton')}
         >
            Destructive Button
         </Button>
         <div className='mt-2' />

         <Button
            hierarchy={Hierarchy.Primary}
            subVariant={SubVariant.Destructive}
            isDisabled
            size={'Small'}
            onClick={action('clicked CommonButton')}
         >
            Destructive Button
         </Button>
      </>
   </ThemeContextProvider>
)

export const SecondaryGrayButton = () => (
   <ThemeContextProvider theme={defaultTheme}>
      <>
         <Button
            hierarchy={Hierarchy.Secondary}
            subVariant={SubVariant.GrayOutline}
            size={'Small'}
            onClick={action('clicked CommonButton')}
         >
            Secondary Gray Outline Button
         </Button>
         <div className='mt-2' />
         <Button
            hierarchy={Hierarchy.Secondary}
            subVariant={SubVariant.GrayOutline}
            size={'Small'}
            onClick={action('clicked CommonButton')}
            isLoading
         >
            Secondary Gray Outline Button
         </Button>
         <div className='mt-2' />
         <Button
            hierarchy={Hierarchy.Secondary}
            subVariant={SubVariant.GrayOutline}
            onClick={action('clicked CommonButton')}
            size={'Small'}
            isDisabled
         >
            Secondary Gray Outline Button
         </Button>
         <div className='mt-2' />

         <Button
            hierarchy={Hierarchy.Secondary}
            subVariant={SubVariant.DestructiveOutline}
            size={'Small'}
            onClick={action('clicked CommonButton')}
         >
            Secondary Destructive Outline Button
         </Button>
         <div className='mt-2' />
         <Button
            hierarchy={Hierarchy.Secondary}
            subVariant={SubVariant.GrayOutline}
            size={'Small'}
            onClick={action('clicked CommonButton')}
            isLoading
         >
            Secondary Destructive Outline Button
         </Button>
         <div className='mt-2' />
         <Button
            hierarchy={Hierarchy.Secondary}
            subVariant={SubVariant.DestructiveOutline}
            size={'Small'}
            onClick={action('clicked CommonButton')}
            isDisabled
         >
            Secondary Destructive Outline Button
         </Button>
         <div className='mt-2' />

         <Button
            hierarchy={Hierarchy.Secondary}
            subVariant={SubVariant.Primary}
            size={'Small'}
            onClick={action('clicked CommonButton')}
         >
            Secondary Primary Button
         </Button>
         <div className='mt-2' />
         <Button
            hierarchy={Hierarchy.Secondary}
            subVariant={SubVariant.Primary}
            size={'Small'}
            isLoading
            onClick={action('clicked CommonButton')}
         >
            Secondary Primary Button
         </Button>
         <div className='mt-2' />
         <Button
            hierarchy={Hierarchy.Secondary}
            subVariant={SubVariant.Primary}
            size={'Small'}
            isDisabled
            onClick={action('clicked CommonButton')}
         >
            Secondary Primary Button
         </Button>
         <div className='mt-2' />

         <Button
            hierarchy={Hierarchy.Secondary}
            subVariant={SubVariant.Destructive}
            size={'Small'}
            onClick={action('clicked CommonButton')}
         >
            Secondary Destructive Button
         </Button>
         <div className='mt-2' />
         <Button
            hierarchy={Hierarchy.Secondary}
            subVariant={SubVariant.Destructive}
            size={'Small'}
            onClick={action('clicked CommonButton')}
            isLoading
         >
            Secondary Destructive Button
         </Button>
         <div className='mt-2' />
         <Button
            hierarchy={Hierarchy.Secondary}
            subVariant={SubVariant.Destructive}
            onClick={action('clicked CommonButton')}
            size={'Small'}
            isDisabled
         >
            Secondary Destructive Button
         </Button>

         <div className='mt-2' />
         <Button
            hierarchy={Hierarchy.Secondary}
            subVariant={SubVariant.Violet}
            size={'Small'}
            onClick={action('clicked CommonButton')}
         >
            Secondary Violet Button
         </Button>
         <div className='mt-2' />
         <Button
            hierarchy={Hierarchy.Secondary}
            subVariant={SubVariant.Violet}
            size={'Small'}
            onClick={action('clicked CommonButton')}
            isLoading
         >
            Secondary Violet Button
         </Button>
         <div className='mt-2' />
         <Button
            hierarchy={Hierarchy.Secondary}
            subVariant={SubVariant.Violet}
            onClick={action('clicked CommonButton')}
            size={'Small'}
            isDisabled
         >
            Secondary Violet Button
         </Button>

         <div className='mt-2' />
         <Button
            hierarchy={Hierarchy.Secondary}
            subVariant={SubVariant.Success}
            size={'Small'}
            onClick={action('clicked CommonButton')}
         >
            Secondary Success Button
         </Button>
         <div className='mt-2' />
         <Button
            hierarchy={Hierarchy.Secondary}
            subVariant={SubVariant.Success}
            size={'Small'}
            onClick={action('clicked CommonButton')}
            isLoading
         >
            Secondary Success Button
         </Button>
         <div className='mt-2' />
         <Button
            hierarchy={Hierarchy.Secondary}
            subVariant={SubVariant.Success}
            onClick={action('clicked CommonButton')}
            size={'Small'}
            isDisabled
         >
            Secondary Success Button
         </Button>
      </>
   </ThemeContextProvider>
)

export const TertiaryButton = () => (
   <ThemeContextProvider theme={defaultTheme}>
      <>
         <Button
            hierarchy={Hierarchy.Tertiary}
            subVariant={SubVariant.Gray}
            size={'Small'}
            onClick={action('clicked CommonButton')}
         >
            Tertiary Gray Button
         </Button>
         <div className='mt-2' />
         <Button
            hierarchy={Hierarchy.Tertiary}
            subVariant={SubVariant.Gray}
            size={'Small'}
            onClick={action('clicked CommonButton')}
            isLoading
         >
            Tertiary Gray Button
         </Button>
         <div className='mt-2' />

         <Button
            hierarchy={Hierarchy.Tertiary}
            subVariant={SubVariant.Gray}
            size={'Small'}
            onClick={action('clicked CommonButton')}
            isDisabled
         >
            Tertiary Gray Button
         </Button>
         <div className='mt-2' />

         <Button
            hierarchy={Hierarchy.Tertiary}
            subVariant={SubVariant.Primary}
            size={'Small'}
            onClick={action('clicked CommonButton')}
         >
            Tertiary Primary Button
         </Button>
         <div className='mt-2' />
         <Button
            hierarchy={Hierarchy.Tertiary}
            subVariant={SubVariant.Primary}
            size={'Small'}
            onClick={action('clicked CommonButton')}
            isLoading
         >
            Tertiary Primary Button
         </Button>
         <div className='mt-2' />

         <Button
            hierarchy={Hierarchy.Tertiary}
            subVariant={SubVariant.Primary}
            size={'Small'}
            onClick={action('clicked CommonButton')}
            isDisabled
         >
            Tertiary Primary Button
         </Button>
         <div className='mt-2' />

         <Button
            hierarchy={Hierarchy.Tertiary}
            subVariant={SubVariant.Destructive}
            size={'Small'}
            onClick={action('clicked CommonButton')}
         >
            Tertiary Destructive Button
         </Button>
         <div className='mt-2' />
         <Button
            hierarchy={Hierarchy.Tertiary}
            subVariant={SubVariant.Destructive}
            size={'Small'}
            onClick={action('clicked CommonButton')}
            isLoading
         >
            Tertiary Destructive Button
         </Button>
         <div className='mt-2' />
         <Button
            hierarchy={Hierarchy.Tertiary}
            subVariant={SubVariant.Destructive}
            size={'Small'}
            onClick={action('clicked CommonButton')}
            isDisabled
         >
            Tertiary Destructive Button
         </Button>
      </>
   </ThemeContextProvider>
)

export const ButtonWithIcons = () => {
   return (
      <ThemeContextProvider theme={defaultTheme}>
         <>
            <Button
               hierarchy={Hierarchy.Primary}
               subVariant={SubVariant.Primary}
               size={'Small'}
               onClick={action('clicked CommonButton')}
               leftIcon={() => <RadioUnSelectedIcon />}
            >
               Button with Left Icon
            </Button>
            <div className='mt-2' />
            <Button
               hierarchy={Hierarchy.Primary}
               subVariant={SubVariant.Primary}
               onClick={action('clicked CommonButton')}
               size={'Small'}
               rightIcon={() => <RadioUnSelectedIcon />}
            >
               Button with Right Icon
            </Button>
            <div className='mt-2' />
            <Button
               hierarchy={Hierarchy.Primary}
               subVariant={SubVariant.Primary}
               onClick={action('clicked CommonButton')}
               size={'Small'}
               leftIcon={() => <RadioUnSelectedIcon />}
               rightIcon={() => <RadioUnSelectedIcon />}
            >
               Button With Left And Right Icons
            </Button>
            <div className='mt-2' />
            <Button
               hierarchy={Hierarchy.Primary}
               subVariant={SubVariant.Primary}
               onClick={action('clicked CommonButton')}
               size={'Small'}
               leftIcon={() => <RadioUnSelectedIcon />}
               rightIcon={() => <RadioUnSelectedIcon />}
               isLoading
            >
               Button With Left And Right Icons
            </Button>
            <div className='mt-2' />
         </>
      </ThemeContextProvider>
   )
}

export const PrimaryButtonWithSizes = () => (
   <ThemeContextProvider theme={defaultTheme}>
      <div>
         <div>
            hierarchy: Primary, subVariant: Primary
            <div className='mt-2' />
            <Button
               hierarchy={Hierarchy.Primary}
               subVariant={SubVariant.Primary}
               size={'Small'}
               onClick={action('clicked CommonButton')}
            >
               Primary Button
            </Button>
            <div className='mt-2' />
            <Button
               hierarchy={Hierarchy.Primary}
               subVariant={SubVariant.Primary}
               size={'Medium'}
               onClick={action('clicked CommonButton')}
            >
               Primary Button
            </Button>
            <div className='mt-2' />
            <Button
               hierarchy={Hierarchy.Primary}
               subVariant={SubVariant.Primary}
               size={'Large'}
               onClick={action('clicked CommonButton')}
            >
               Primary Button
            </Button>
            <div className='mt-2' />
            <Button
               hierarchy={Hierarchy.Primary}
               subVariant={SubVariant.Primary}
               size={'ExtraLarge'}
               onClick={action('clicked CommonButton')}
            >
               Primary Button
            </Button>
            <div className='mt-2' />
            <Button
               hierarchy={Hierarchy.Primary}
               subVariant={SubVariant.Primary}
               size={'DoubleExtraLarge'}
               onClick={action('clicked CommonButton')}
            >
               Primary Button
            </Button>
         </div>

         <div className='m-2' />

         <div>
            hierarchy: Primary, subVariant: Destructive
            <div className='mt-2' />
            <Button
               hierarchy={Hierarchy.Primary}
               subVariant={SubVariant.Destructive}
               size={'Small'}
               onClick={action('clicked CommonButton')}
            >
               Primary Button
            </Button>
            <div className='mt-2' />
            <Button
               hierarchy={Hierarchy.Primary}
               subVariant={SubVariant.Destructive}
               size={'Medium'}
               onClick={action('clicked CommonButton')}
            >
               Primary Button
            </Button>
            <div className='mt-2' />
            <Button
               hierarchy={Hierarchy.Primary}
               subVariant={SubVariant.Destructive}
               size={'Large'}
               onClick={action('clicked CommonButton')}
            >
               Primary Button
            </Button>
            <div className='mt-2' />
            <Button
               hierarchy={Hierarchy.Primary}
               subVariant={SubVariant.Destructive}
               size={'ExtraLarge'}
               onClick={action('clicked CommonButton')}
            >
               Primary Button
            </Button>
            <div className='mt-2' />
            <Button
               hierarchy={Hierarchy.Primary}
               subVariant={SubVariant.Destructive}
               size={'DoubleExtraLarge'}
               onClick={action('clicked CommonButton')}
            >
               Primary Button
            </Button>
         </div>
      </div>
   </ThemeContextProvider>
)

export const SecondaryButtonWithSizes = () => (
   <ThemeContextProvider theme={defaultTheme}>
      <div>
         <div>
            hierarchy: Secondary, subVariant: Primary
            <div className='mt-2' />
            <Button
               hierarchy={Hierarchy.Secondary}
               subVariant={SubVariant.Primary}
               size={'Small'}
               onClick={action('clicked CommonButton')}
            >
               Secondary Button
            </Button>
            <div className='mt-2' />
            <Button
               hierarchy={Hierarchy.Secondary}
               subVariant={SubVariant.Primary}
               size={'Medium'}
               onClick={action('clicked CommonButton')}
            >
               Secondary Button
            </Button>
            <div className='mt-2' />
            <Button
               hierarchy={Hierarchy.Secondary}
               subVariant={SubVariant.Primary}
               size={'Large'}
               onClick={action('clicked CommonButton')}
            >
               Secondary Button
            </Button>
            <div className='mt-2' />
            <Button
               hierarchy={Hierarchy.Secondary}
               subVariant={SubVariant.Primary}
               size={'ExtraLarge'}
               onClick={action('clicked CommonButton')}
            >
               Secondary Button
            </Button>
            <div className='mt-2' />
            <Button
               hierarchy={Hierarchy.Secondary}
               subVariant={SubVariant.Primary}
               size={'DoubleExtraLarge'}
               onClick={action('clicked CommonButton')}
            >
               Secondary Button
            </Button>
         </div>

         <div className='mt-2' />

         <div>
            hierarchy: Secondary, subVariant: Destructive
            <div className='mt-2' />
            <Button
               hierarchy={Hierarchy.Secondary}
               subVariant={SubVariant.Destructive}
               size={'Small'}
               onClick={action('clicked CommonButton')}
            >
               Secondary Button
            </Button>
            <div className='mt-2' />
            <Button
               hierarchy={Hierarchy.Secondary}
               subVariant={SubVariant.Destructive}
               size={'Medium'}
               onClick={action('clicked CommonButton')}
            >
               Secondary Button
            </Button>
            <div className='mt-2' />
            <Button
               hierarchy={Hierarchy.Secondary}
               subVariant={SubVariant.Destructive}
               size={'Large'}
               onClick={action('clicked CommonButton')}
            >
               Secondary Button
            </Button>
            <div className='mt-2' />
            <Button
               hierarchy={Hierarchy.Secondary}
               subVariant={SubVariant.Destructive}
               size={'ExtraLarge'}
               onClick={action('clicked CommonButton')}
            >
               Secondary Button
            </Button>
            <div className='mt-2' />
            <Button
               hierarchy={Hierarchy.Secondary}
               subVariant={SubVariant.Destructive}
               size={'DoubleExtraLarge'}
               onClick={action('clicked CommonButton')}
            >
               Secondary Button
            </Button>
         </div>

         <div className='mt-2' />

         <div>
            hierarchy: Secondary, subVariant: GrayOutline
            <div className='mt-2' />
            <Button
               hierarchy={Hierarchy.Secondary}
               subVariant={SubVariant.GrayOutline}
               size={'Small'}
               onClick={action('clicked CommonButton')}
            >
               Secondary Button
            </Button>
            <div className='mt-2' />
            <Button
               hierarchy={Hierarchy.Secondary}
               subVariant={SubVariant.GrayOutline}
               size={'Medium'}
               onClick={action('clicked CommonButton')}
            >
               Secondary Button
            </Button>
            <div className='mt-2' />
            <Button
               hierarchy={Hierarchy.Secondary}
               subVariant={SubVariant.GrayOutline}
               size={'Large'}
               onClick={action('clicked CommonButton')}
            >
               Secondary Button
            </Button>
            <div className='mt-2' />
            <Button
               hierarchy={Hierarchy.Secondary}
               subVariant={SubVariant.GrayOutline}
               size={'ExtraLarge'}
               onClick={action('clicked CommonButton')}
            >
               Secondary Button
            </Button>
            <div className='mt-2' />
            <Button
               hierarchy={Hierarchy.Secondary}
               subVariant={SubVariant.GrayOutline}
               size={'DoubleExtraLarge'}
               onClick={action('clicked CommonButton')}
            >
               Secondary Button
            </Button>
         </div>

         <div>
            hierarchy: Secondary, subVariant: DestructiveOutline
            <div className='mt-2' />
            <Button
               hierarchy={Hierarchy.Secondary}
               subVariant={SubVariant.DestructiveOutline}
               size={'Small'}
               onClick={action('clicked CommonButton')}
            >
               Secondary Button
            </Button>
            <div className='mt-2' />
            <Button
               hierarchy={Hierarchy.Secondary}
               subVariant={SubVariant.DestructiveOutline}
               size={'Medium'}
               onClick={action('clicked CommonButton')}
            >
               Secondary Button
            </Button>
            <div className='mt-2' />
            <Button
               hierarchy={Hierarchy.Secondary}
               subVariant={SubVariant.DestructiveOutline}
               size={'Large'}
               onClick={action('clicked CommonButton')}
            >
               Secondary Button
            </Button>
            <div className='mt-2' />
            <Button
               hierarchy={Hierarchy.Secondary}
               subVariant={SubVariant.DestructiveOutline}
               size={'ExtraLarge'}
               onClick={action('clicked CommonButton')}
            >
               Secondary Button
            </Button>
            <div className='mt-2' />
            <Button
               hierarchy={Hierarchy.Secondary}
               subVariant={SubVariant.DestructiveOutline}
               size={'DoubleExtraLarge'}
               onClick={action('clicked CommonButton')}
            >
               Secondary Button
            </Button>
         </div>
      </div>
   </ThemeContextProvider>
)

export const TertiaryButtonWithSizes = () => (
   <ThemeContextProvider theme={defaultTheme}>
      <div>
         <div>
            hierarchy: Tertiary, subVariant: Primary
            <div className='mt-2' />
            <Button
               hierarchy={Hierarchy.Tertiary}
               subVariant={SubVariant.Primary}
               size={'Small'}
               onClick={action('clicked CommonButton')}
            >
               Tertiary Button
            </Button>
            <div className='mt-2' />
            <Button
               hierarchy={Hierarchy.Tertiary}
               subVariant={SubVariant.Primary}
               size={'Medium'}
               onClick={action('clicked CommonButton')}
            >
               Tertiary Button
            </Button>
            <div className='mt-2' />
            <Button
               hierarchy={Hierarchy.Tertiary}
               subVariant={SubVariant.Primary}
               size={'Large'}
               onClick={action('clicked CommonButton')}
            >
               Tertiary Button
            </Button>
            <div className='mt-2' />
            <Button
               hierarchy={Hierarchy.Tertiary}
               subVariant={SubVariant.Primary}
               onClick={action('clicked CommonButton')}
               size={'ExtraLarge'}
            >
               Tertiary Button
            </Button>
            <div className='mt-2' />
            <Button
               hierarchy={Hierarchy.Tertiary}
               subVariant={SubVariant.Primary}
               size={'DoubleExtraLarge'}
               onClick={action('clicked CommonButton')}
            >
               Tertiary Button
            </Button>
         </div>

         <div className='m-2' />

         <div>
            hierarchy: Tertiary, subVariant: Destructive
            <div className='mt-2' />
            <Button
               hierarchy={Hierarchy.Tertiary}
               subVariant={SubVariant.Destructive}
               size={'Small'}
               onClick={action('clicked CommonButton')}
            >
               Tertiary Button
            </Button>
            <div className='mt-2' />
            <Button
               hierarchy={Hierarchy.Tertiary}
               subVariant={SubVariant.Destructive}
               size={'Medium'}
               onClick={action('clicked CommonButton')}
            >
               Tertiary Button
            </Button>
            <div className='mt-2' />
            <Button
               hierarchy={Hierarchy.Tertiary}
               subVariant={SubVariant.Destructive}
               size={'Large'}
               onClick={action('clicked CommonButton')}
            >
               Tertiary Button
            </Button>
            <div className='mt-2' />
            <Button
               hierarchy={Hierarchy.Tertiary}
               subVariant={SubVariant.Destructive}
               onClick={action('clicked CommonButton')}
               size={'ExtraLarge'}
            >
               Tertiary Button
            </Button>
            <div className='mt-2' />
            <Button
               hierarchy={Hierarchy.Tertiary}
               subVariant={SubVariant.Destructive}
               onClick={action('clicked CommonButton')}
               size={'DoubleExtraLarge'}
            >
               Tertiary Button
            </Button>
         </div>

         <div className='m-2' />

         <div>
            hierarchy: Tertiary, subVariant: Gray
            <div className='mt-2' />
            <Button
               hierarchy={Hierarchy.Tertiary}
               subVariant={SubVariant.Gray}
               onClick={action('clicked CommonButton')}
               size={'Small'}
            >
               Tertiary Button
            </Button>
            <div className='mt-2' />
            <Button
               hierarchy={Hierarchy.Tertiary}
               subVariant={SubVariant.Gray}
               size={'Medium'}
               onClick={action('clicked CommonButton')}
            >
               Tertiary Button
            </Button>
            <div className='mt-2' />
            <Button
               hierarchy={Hierarchy.Tertiary}
               subVariant={SubVariant.Gray}
               size={'Large'}
               onClick={action('clicked CommonButton')}
            >
               Tertiary Button
            </Button>
            <div className='mt-2' />
            <Button
               hierarchy={Hierarchy.Tertiary}
               subVariant={SubVariant.Gray}
               size={'ExtraLarge'}
               onClick={action('clicked CommonButton')}
            >
               Tertiary Button
            </Button>
            <div className='mt-2' />
            <Button
               hierarchy={Hierarchy.Tertiary}
               subVariant={SubVariant.Gray}
               size={'DoubleExtraLarge'}
               onClick={action('clicked CommonButton')}
            >
               Tertiary Button
            </Button>
         </div>
      </div>
   </ThemeContextProvider>
)

export const PrimaryButtonWithOnlyIcon = () => (
   <ThemeContextProvider theme={defaultTheme}>
      <div>
         <div>
            hierarchy: Primary, subVariant: Primary
            <div className='mt-2' />
            <Button
               hierarchy={Hierarchy.Primary}
               subVariant={SubVariant.Primary}
               onClick={action('clicked CommonButton')}
               size={'Small'}
               className={'px-8px py-8px'}
            >
               <RadioUnSelectedIcon />
            </Button>
            <div className='mt-2' />
            <Button
               hierarchy={Hierarchy.Primary}
               subVariant={SubVariant.Primary}
               size={'Medium'}
               className={'px-10px py-10px'}
               onClick={action('clicked CommonButton')}
            >
               <RadioUnSelectedIcon />
            </Button>
            <div className='mt-2' />
            <Button
               hierarchy={Hierarchy.Primary}
               subVariant={SubVariant.Primary}
               size={'Large'}
               className={'px-12px py-12px'}
               onClick={action('clicked CommonButton')}
            >
               <RadioUnSelectedIcon />
            </Button>
         </div>

         <div className='m-2' />

         <div>
            hierarchy: Primary, subVariant: Destructive
            <div className='mt-2' />
            <Button
               hierarchy={Hierarchy.Primary}
               subVariant={SubVariant.Destructive}
               size={'Small'}
               className={'px-8px py-8px'}
               onClick={action('clicked CommonButton')}
            >
               <RadioUnSelectedIcon />
            </Button>
            <div className='mt-2' />
            <Button
               hierarchy={Hierarchy.Primary}
               subVariant={SubVariant.Destructive}
               size={'Medium'}
               onClick={action('clicked CommonButton')}
               className={'px-10px py-10px'}
            >
               <RadioUnSelectedIcon />
            </Button>
            <div className='mt-2' />
            <Button
               hierarchy={Hierarchy.Primary}
               subVariant={SubVariant.Destructive}
               size={'Large'}
               className={'px-12px py-12px'}
               onClick={action('clicked CommonButton')}
            >
               <RadioUnSelectedIcon />
            </Button>
         </div>
      </div>
   </ThemeContextProvider>
)

export const SecondaryButtonWithOnlyIcon = () => (
   <ThemeContextProvider theme={defaultTheme}>
      <div>
         <div>
            hierarchy: Secondary, subVariant: Primary
            <div className='mt-2' />
            <Button
               hierarchy={Hierarchy.Secondary}
               subVariant={SubVariant.Primary}
               size={'Small'}
               className={'px-8px py-8px'}
               onClick={action('clicked CommonButton')}
            >
               <RadioUnSelectedIcon />
            </Button>
            <div className='mt-2' />
            <Button
               hierarchy={Hierarchy.Secondary}
               subVariant={SubVariant.Primary}
               size={'Medium'}
               className={'px-10px py-10px'}
               onClick={action('clicked CommonButton')}
            >
               <RadioUnSelectedIcon />
            </Button>
            <div className='mt-2' />
            <Button
               hierarchy={Hierarchy.Secondary}
               subVariant={SubVariant.Primary}
               size={'Large'}
               className={'px-12px py-12px'}
               onClick={action('clicked CommonButton')}
            >
               <RadioUnSelectedIcon />
            </Button>
         </div>

         <div className='mt-2' />

         <div>
            hierarchy: Secondary, subVariant: Destructive
            <div className='mt-2' />
            <Button
               hierarchy={Hierarchy.Secondary}
               subVariant={SubVariant.Destructive}
               size={'Small'}
               className={'px-8px py-8px'}
               onClick={action('clicked CommonButton')}
            >
               <RadioUnSelectedIcon />
            </Button>
            <div className='mt-2' />
            <Button
               hierarchy={Hierarchy.Secondary}
               subVariant={SubVariant.Destructive}
               size={'Medium'}
               className={'px-10px py-10px'}
               onClick={action('clicked CommonButton')}
            >
               <RadioUnSelectedIcon />
            </Button>
            <div className='mt-2' />
            <Button
               hierarchy={Hierarchy.Secondary}
               subVariant={SubVariant.Destructive}
               size={'Large'}
               className={'px-12px py-12px'}
               onClick={action('clicked CommonButton')}
            >
               <RadioUnSelectedIcon />
            </Button>
         </div>

         <div className='mt-2' />

         <div>
            hierarchy: Secondary, subVariant: GrayOutline
            <div className='mt-2' />
            <Button
               hierarchy={Hierarchy.Secondary}
               subVariant={SubVariant.GrayOutline}
               size={'Small'}
               onClick={action('clicked CommonButton')}
               className={'px-8px py-8px'}
            >
               <RadioUnSelectedIcon />
            </Button>
            <div className='mt-2' />
            <Button
               hierarchy={Hierarchy.Secondary}
               subVariant={SubVariant.GrayOutline}
               size={'Medium'}
               className={'px-10px py-10px'}
               onClick={action('clicked CommonButton')}
            >
               <RadioUnSelectedIcon />
            </Button>
            <div className='mt-2' />
            <Button
               hierarchy={Hierarchy.Secondary}
               subVariant={SubVariant.GrayOutline}
               size={'Large'}
               className={'px-12px py-12px'}
               onClick={action('clicked CommonButton')}
            >
               <RadioUnSelectedIcon />
            </Button>
         </div>

         <div>
            hierarchy: Secondary, subVariant: DestructiveOutline
            <div className='mt-2' />
            <Button
               hierarchy={Hierarchy.Secondary}
               subVariant={SubVariant.DestructiveOutline}
               size={'Small'}
               onClick={action('clicked CommonButton')}
               className={'px-8px py-8px'}
            >
               <RadioUnSelectedIcon />
            </Button>
            <div className='mt-2' />
            <Button
               hierarchy={Hierarchy.Secondary}
               subVariant={SubVariant.DestructiveOutline}
               size={'Medium'}
               className={'px-10px py-10px'}
               onClick={action('clicked CommonButton')}
            >
               <RadioUnSelectedIcon />
            </Button>
            <div className='mt-2' />
            <Button
               hierarchy={Hierarchy.Secondary}
               subVariant={SubVariant.DestructiveOutline}
               size={'Large'}
               className={'px-12px py-12px'}
               onClick={action('clicked CommonButton')}
            >
               <RadioUnSelectedIcon />
            </Button>
         </div>
      </div>
   </ThemeContextProvider>
)

export const TertiaryButtonWithOnlyIcon = () => (
   <ThemeContextProvider theme={defaultTheme}>
      <div>
         <div>
            hierarchy: Tertiary, subVariant: Primary
            <div className='mt-2' />
            <Button
               hierarchy={Hierarchy.Tertiary}
               subVariant={SubVariant.Primary}
               size={'Small'}
               className={'px-8px py-8px'}
               onClick={action('clicked CommonButton')}
            >
               <RadioUnSelectedIcon />
            </Button>
            <div className='mt-2' />
            <Button
               hierarchy={Hierarchy.Tertiary}
               subVariant={SubVariant.Primary}
               size={'Medium'}
               className={'px-10px py-10px'}
               onClick={action('clicked CommonButton')}
            >
               <RadioUnSelectedIcon />
            </Button>
            <div className='mt-2' />
            <Button
               hierarchy={Hierarchy.Tertiary}
               subVariant={SubVariant.Primary}
               size={'Large'}
               className={'px-12px py-12px'}
               onClick={action('clicked CommonButton')}
            >
               <RadioUnSelectedIcon />
            </Button>
         </div>

         <div className='m-2' />

         <div>
            hierarchy: Tertiary, subVariant: Destructive
            <div className='mt-2' />
            <Button
               hierarchy={Hierarchy.Tertiary}
               subVariant={SubVariant.Destructive}
               size={'Small'}
               className={'px-8px py-8px'}
               onClick={action('clicked CommonButton')}
            >
               <RadioUnSelectedIcon />
            </Button>
            <div className='mt-2' />
            <Button
               hierarchy={Hierarchy.Tertiary}
               subVariant={SubVariant.Destructive}
               size={'Medium'}
               className={'px-10px py-10px'}
               onClick={action('clicked CommonButton')}
            >
               <RadioUnSelectedIcon />
            </Button>
            <div className='mt-2' />
            <Button
               hierarchy={Hierarchy.Tertiary}
               subVariant={SubVariant.Destructive}
               size={'Large'}
               className={'px-12px py-12px'}
               onClick={action('clicked CommonButton')}
            >
               <RadioUnSelectedIcon />
            </Button>
         </div>

         <div className='m-2' />

         <div>
            hierarchy: Tertiary, subVariant: Gray
            <div className='mt-2' />
            <Button
               hierarchy={Hierarchy.Tertiary}
               subVariant={SubVariant.Gray}
               size={'Small'}
               className={'px-8px py-8px'}
               onClick={action('clicked CommonButton')}
            >
               <RadioUnSelectedIcon />
            </Button>
            <div className='mt-2' />
            <Button
               hierarchy={Hierarchy.Tertiary}
               subVariant={SubVariant.Gray}
               size={'Medium'}
               className={'px-10px py-10px'}
               onClick={action('clicked CommonButton')}
            >
               <RadioUnSelectedIcon />
            </Button>
            <div className='mt-2' />
            <Button
               hierarchy={Hierarchy.Tertiary}
               subVariant={SubVariant.Gray}
               size={'Large'}
               className={'px-12px py-12px'}
               onClick={action('clicked CommonButton')}
            >
               <RadioUnSelectedIcon />
            </Button>
         </div>
      </div>
   </ThemeContextProvider>
)

export const LinkButton = () => (
   <ThemeContextProvider theme={defaultTheme}>
      <>
         <Button
            hierarchy={Hierarchy.Link}
            subVariant={SubVariant.Gray}
            size={'ExtraSmall'}
            onClick={action('clicked CommonButton')}
         >
            Link Gray Button
         </Button>
         <div className='mt-2' />
         <Button
            hierarchy={Hierarchy.Link}
            subVariant={SubVariant.Gray}
            size={'ExtraSmall'}
            onClick={action('clicked CommonButton')}
            isLoading
         >
            Link Gray Button
         </Button>
         <div className='mt-2' />

         <Button
            hierarchy={Hierarchy.Link}
            subVariant={SubVariant.Gray}
            size={'ExtraSmall'}
            onClick={action('clicked CommonButton')}
            isDisabled
         >
            Link Gray Button
         </Button>
         <div className='mt-2' />

         <Button
            hierarchy={Hierarchy.Link}
            subVariant={SubVariant.Primary}
            size={'Small'}
            onClick={action('clicked CommonButton')}
         >
            Link Primary Button
         </Button>
         <div className='mt-2' />
         <Button
            hierarchy={Hierarchy.Link}
            subVariant={SubVariant.Primary}
            size={'Small'}
            onClick={action('clicked CommonButton')}
            isLoading
         >
            Link Primary Button
         </Button>
         <div className='mt-2' />

         <Button
            hierarchy={Hierarchy.Link}
            subVariant={SubVariant.Primary}
            size={'Small'}
            onClick={action('clicked CommonButton')}
            isDisabled
         >
            Link Primary Button
         </Button>
         <div className='mt-2' />

         <Button
            hierarchy={Hierarchy.Link}
            subVariant={SubVariant.Destructive}
            size={'Small'}
            onClick={action('clicked CommonButton')}
         >
            Link Destructive Button
         </Button>
         <div className='mt-2' />
         <Button
            hierarchy={Hierarchy.Link}
            subVariant={SubVariant.Destructive}
            size={'Small'}
            onClick={action('clicked CommonButton')}
            isLoading
         >
            Link Destructive Button
         </Button>
         <div className='mt-2' />
         <Button
            hierarchy={Hierarchy.Link}
            subVariant={SubVariant.Destructive}
            size={'Small'}
            onClick={action('clicked CommonButton')}
            isDisabled
         >
            Link Destructive Button
         </Button>
      </>
   </ThemeContextProvider>
)

export default {
   title: 'Components/Button',
   component: Button
}
