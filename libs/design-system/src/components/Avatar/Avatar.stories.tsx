import React from 'react';

import { ProfileIcon } from '@nx-repo/design-system-icons';
import { DESIGN_SYSTEM_BASE_URL_PREFIX } from '../../constants/ImageConstants';

import { ThemeContextProvider } from '../../Theme/Provider';
import { defaultTheme } from '../../Theme/theme';

import { AvatarGroup } from '../Avatar/AvatarGroup/AvatarGroup';

import { Avatar } from './Avatar';
import { AvatarDetails } from './types';
import { AvatarLabelGroup } from './AvatarLabelGroup/AvatarLabelGroup';

export default {
  component: Avatar,
  title: 'components/Avatar',
};

const avatars: AvatarDetails[] = [
  {
    name: 'Leela',
    imageURL: `${DESIGN_SYSTEM_BASE_URL_PREFIX}/images/sample-avatar.jpg`,
    userIcon: (width, height) => <ProfileIcon height={height} width={width} />,
  },
  {
    name: 'Leela',
    imageURL: `${DESIGN_SYSTEM_BASE_URL_PREFIX}/images/sample-avatar.jpg`,
    userIcon: (width, height) => <ProfileIcon height={height} width={width} />,
  },
  {
    name: 'Leela',
    imageURL: `${DESIGN_SYSTEM_BASE_URL_PREFIX}/images/sample-avatar.jpg`,
    userIcon: (width, height) => <ProfileIcon height={height} width={width} />,
  },
  {
    name: 'Leela',
    imageURL: `${DESIGN_SYSTEM_BASE_URL_PREFIX}/images/sample-avatar.jpg`,
    userIcon: (width, height) => <ProfileIcon height={height} width={width} />,
  },
  {
    name: 'Leela',
    imageURL: `${DESIGN_SYSTEM_BASE_URL_PREFIX}/images/sample-avatar.jpg`,
    userIcon: (width, height) => <ProfileIcon height={height} width={width} />,
  },
  {
    name: 'Leela',
    imageURL: `${DESIGN_SYSTEM_BASE_URL_PREFIX}/images/sample-avatar.jpg`,
    userIcon: (width, height) => <ProfileIcon height={height} width={width} />,
  },
  {
    name: 'Leela',
    imageURL: `${DESIGN_SYSTEM_BASE_URL_PREFIX}/images/sample-avatar.jpg`,
    userIcon: (width, height) => <ProfileIcon height={height} width={width} />,
  },
];

const AvatarWithGroupTemplate = (args) => (
  <ThemeContextProvider theme={defaultTheme}>
    <div className="flex flex-col justify-center items-center">
      <AvatarGroup
        type="Image"
        shape="Circular"
        size="Small"
        avatars={avatars}
        maxDisplayCount={5}
        {...args}
      />
    </div>
  </ThemeContextProvider>
);

export const AvatarWithGroup = AvatarWithGroupTemplate.bind({});

AvatarWithGroup.args = {
  maxDisplayCount: 5,
  userIcon: (width, height) => <ProfileIcon height={height} width={width} />,
};

const AvatarTemplate = (args) => (
  <ThemeContextProvider theme={defaultTheme}>
    <Avatar
      name={'jagadeesh '}
      type="Image"
      shape="Circular"
      size="Medium"
      imageURL={`${DESIGN_SYSTEM_BASE_URL_PREFIX}/images/sample-avatar.jpg`}
      {...args}
    />
  </ThemeContextProvider>
);

export const BasicAvatar = AvatarTemplate.bind({});

BasicAvatar.args = {
  userIcon: (width, height) => <ProfileIcon height={height} width={width} />,
};

const AvatarLabelTemplate = (args) => (
  <ThemeContextProvider theme={defaultTheme}>
    <AvatarLabelGroup
      name={'Olivia Rhye'}
      type="Image"
      shape="Circular"
      size="Small"
      imageURL={`${DESIGN_SYSTEM_BASE_URL_PREFIX}/images/sample-avatar.jpg`}
      description="olivia@untitledui.com"
      status={'Online'}
      {...args}
    />
  </ThemeContextProvider>
);

export const AvatarWithLabelGroup = AvatarLabelTemplate.bind({});

AvatarWithLabelGroup.args = {
  userIcon: (width, height) => <ProfileIcon height={height} width={width} />,
};
