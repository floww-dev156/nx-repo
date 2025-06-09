import { action } from '@storybook/addon-actions';

import {
  ArrowLeftIcon,
  ButtonRightArrowIcon,
} from '@nx-repo/design-system-icons';

import { ThemeContextProvider } from '../../Theme/Provider';
import { defaultTheme } from '../../Theme/theme';

import { Badge } from '.';

export const BadgeVariants = (args: any) => {
  return (
    <ThemeContextProvider theme={defaultTheme}>
      <Badge variant={'PRIMARY'} {...args}>
        Sample Badge
      </Badge>
    </ThemeContextProvider>
  );
};

const BadgeComponent = BadgeVariants.bind({});

export const BadgeWithIcons = (args: any) => {
  return (
    <ThemeContextProvider theme={defaultTheme}>
      <div className="flex items-center">
        <Badge
          variant={'ERROR'}
          leftElement={(color) => <ArrowLeftIcon fill={color} />}
          {...args}
        >
          Badge With Left Icon
        </Badge>
        <div className="ml-4" />
        <Badge
          variant={'ERROR'}
          rightElement={(color) => <ButtonRightArrowIcon fill={color} />}
          {...args}
        >
          Badge With Right Icon
        </Badge>

        <div className="ml-4" />
        <Badge
          variant={'ERROR'}
          leftElement={(color) => <ArrowLeftIcon fill={color} />}
          rightElement={(color) => <ButtonRightArrowIcon fill={color} />}
          {...args}
        >
          Badge With Left And Right Icons
        </Badge>
      </div>
    </ThemeContextProvider>
  );
};

const BadgeWithIconsComponent = BadgeWithIcons.bind({});

export const BadgeWithDot = (args: any) => {
  return (
    <ThemeContextProvider theme={defaultTheme}>
      <div className="flex items-center">
        <Badge variant={'SUCCESS'} showDot {...args}>
          Badge With Dot
        </Badge>
        <div className="ml-4" />
      </div>
    </ThemeContextProvider>
  );
};

const BadgeWithDotComponent = BadgeWithDot.bind({});

export default {
  title: 'Components/Badge',
  component: Badge,
};
