import { action } from '@storybook/addon-actions'

import { ThemeContextProvider } from '../../Theme/Provider'
import { defaultTheme } from '../../Theme/theme'

import AlertCard, { Props } from './AlertCard'
import { StoryObj } from '@storybook/react'

export const AlertCardVariants = (args: any): React.ReactElement => {
   const commonProps: Omit<Props, 'variant'> = {
      title: 'We’ve just released a new feature',
      description:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.',
      primaryAction: {
         text: 'View Changes',
         onClick: action('Primary Action Clicked')
      },
      secondaryAction: {
         text: 'Learn More',
         onClick: action('Secondary Action Clicked')
      },
      onClose: action('Close Button Clicked')
   }
   return (
      <ThemeContextProvider theme={defaultTheme}>
         <div className='flex flex-col gap-4'>
            <AlertCard variant={'DEFAULT'} {...commonProps} {...args} />

            <AlertCard variant={'PRIMARY'} {...commonProps} {...args} />

            <AlertCard variant={'GRAY'} {...commonProps} {...args} />

            <AlertCard variant={'ERROR'} {...commonProps} {...args} />

            <AlertCard variant={'WARNING'} {...commonProps} {...args} />

            <AlertCard variant={'SUCCESS'} {...commonProps} {...args} />
         </div>
      </ThemeContextProvider>
   )
}

export default {
   title: 'Components/AlertCard',
   component: AlertCard
}
