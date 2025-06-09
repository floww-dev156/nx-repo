import cn from 'classnames';
import { observer } from 'mobx-react';
import React, { ReactElement, useRef } from 'react';
import { PlacesType, Tooltip } from 'react-tooltip';
import { v4 as uuidV4 } from 'uuid';

import { useFocusRing } from '@react-aria/focus';
import { colors } from '@nx-repo/shared-style-guide';

import { useThemeContext } from '../../../Theme/Provider';
import { ExtendedSize } from '../../../types';

import { Avatar } from '../Avatar';
import { AvatarDetails, AvatarShape, AvatarStatus, AvatarType } from '../types';
import {
  getAvatarShape,
  getAvatarSize,
  getFontSize,
  getLeftMargin,
  getZIndex,
} from '../utils';
import {
  avatarCountContainerClassName,
  avatarCounterWrapper,
  avatarCountTextClassName,
  avatarFocusClassName,
  avatarGroupContainerClassName,
  avatarWrapperClassName,
} from './styles';
import '../Avatar.css';
export interface AvatarGroupProps {
  type: AvatarType;
  shape: AvatarShape;
  size: ExtendedSize;
  maxDisplayCount: number;
  children?: ReactElement;
  avatars: AvatarDetails[];
  shouldShowBrowserTooltip?: boolean;
  status?: AvatarStatus;
  usersListToolTipClassName?: string;
  tooltipPlacement?: PlacesType;
}

const AvatarGroup = observer((props: AvatarGroupProps) => {
  const {
    type,
    shape,
    size,
    maxDisplayCount,
    children,
    avatars,
    shouldShowBrowserTooltip,
    status,
    usersListToolTipClassName,
    tooltipPlacement = 'top',
  } = props;

  const { theme } = useThemeContext();
  let { isFocused, focusProps } = useFocusRing({
    within: true,
  });
  let counterZIndex = 0;
  const tooltipIdRef = useRef(uuidV4());

  const renderCount = (remainingAvatarsCount: number): React.ReactElement => (
    <span
      className={`${cn(avatarCountTextClassName)} ${getFontSize(size)}`}
    >{`+${remainingAvatarsCount}`}</span>
  );

  const customTooltip = (): React.ReactElement => (
    <div className={'w-[200px] break-words'}>
      {avatars.map((item, index) => {
        const isLastItem = index === avatars.length - 1;

        return (
          <span>
            {item.name}
            {isLastItem ? null : ', '}
          </span>
        );
      })}
    </div>
  );

  const renderBrowserToolTip = (): string => {
    const avatarNames = avatars.map((item) => item.name);

    return avatarNames.join(',');
  };

  const renderRemainingAvailableAvatarsCount =
    (): React.ReactElement | null => {
      const remainingAvatarsCount = avatars.length - maxDisplayCount;
      const shouldDisplayRemainingAvatarsCount = remainingAvatarsCount > 0;
      const counterZIndexValue = getZIndex(counterZIndex);
      if (shouldDisplayRemainingAvatarsCount) {
        return (
          <div
            className={`
            ${counterZIndexValue}      
            ${getAvatarShape(size, shape)} 
            ${getLeftMargin(size, counterZIndex + 1)} 
            ${cn(avatarCounterWrapper)}
            `}
            title={
              shouldShowBrowserTooltip ? renderBrowserToolTip() : undefined
            }
          >
            <div
              className={`
               ${
                 theme.light.avatar.avatarWithUserIcon.default.backgroundColor
               }  
               ${getAvatarShape(size, shape)} 
               ${getAvatarSize(size)}
               ${cn(avatarCountContainerClassName)}
               `}
              data-tooltip-id={
                shouldShowBrowserTooltip ? undefined : tooltipIdRef.current
              }
              data-tooltip-position-strategy="fixed"
            >
              {renderCount(remainingAvatarsCount)}
            </div>
            {!shouldShowBrowserTooltip ? (
              <Tooltip
                id={tooltipIdRef.current}
                classNameArrow={colors['gray-900']}
                className={`rounded-[8px] ${usersListToolTipClassName}`}
                place={tooltipPlacement}
              >
                {customTooltip()}
              </Tooltip>
            ) : null}
          </div>
        );
      }
      return null;
    };

  const renderAvatar = (
    avatarDetails: AvatarDetails,
    zIndex: number,
    childrenPosition: number
  ): ReactElement => {
    const { name, imageURL, userIcon } = avatarDetails;
    const avatarZIndex = getZIndex(zIndex);
    const isFirstChild = childrenPosition === 0;
    return (
      <div
        key={uuidV4()}
        className={`${avatarZIndex}
            ${getAvatarShape(size, shape)}
            ${isFirstChild ? '' : getLeftMargin(size, zIndex)} 
            ${cn(isFirstChild ? '' : avatarWrapperClassName)}
            ${cn(isFocused ? avatarFocusClassName : '')}
            `}
        {...focusProps}
      >
        <Avatar
          name={name}
          type={avatarDetails.avatarType ? avatarDetails.avatarType : type}
          shape={shape}
          size={size}
          imageURL={imageURL && imageURL}
          userIcon={userIcon && userIcon}
          status={status}
        />
      </div>
    );
  };

  const getAvatarZIndex = (index: number): number => {
    const zIndex = index;
    counterZIndex = zIndex + 1;
    return zIndex;
  };

  const renderAvatars = (): ReactElement[] => {
    const numberOfMaximumAvatarsToBeDisplayed: AvatarDetails[] = avatars.slice(
      0,
      maxDisplayCount
    );

    return numberOfMaximumAvatarsToBeDisplayed.map(
      (avatarDetails: AvatarDetails, index: number) =>
        renderAvatar(avatarDetails, getAvatarZIndex(index), index)
    );
  };

  return (
    <div className={cn(avatarGroupContainerClassName)}>
      {renderAvatars()}
      {renderRemainingAvailableAvatarsCount()}
      {children ? children : null}
    </div>
  );
});

export { AvatarGroup };
