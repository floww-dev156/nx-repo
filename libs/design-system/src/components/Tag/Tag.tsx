import React from 'react';
import { useFocusRing } from '@react-aria/focus';
import { useHover } from '@react-aria/interactions';
import { mergeProps } from '@react-aria/utils';
import { ClearSlots, SlotProvider, useStyleProps } from '@react-spectrum/utils';
import { ItemProps, Node } from '@react-types/shared';
import { OutlineCloseIcon } from '@nx-repo/design-system-icons';
import { Key, RefObject, useRef } from 'react';

import { useThemeContext } from '../../Theme/Provider';
import { BasicSize } from '../../types';

import { ClearButton } from './ClearButton';
import { getLabelStyles, getTagStyles } from './styles';
import { useTag } from './useTag';
import { TagGroupState } from './useTagGroupState';

export interface TagProps<T> extends ItemProps<any> {
  isFocused: boolean;
  allowsRemoving?: boolean;
  item: Node<T>;
  onRemove?: (key: Key) => void;
  tagRowRef: RefObject<HTMLElement>;
}

export interface SpectrumTagProps<T> extends TagProps<T> {
  state: TagGroupState<T>;
  size?: BasicSize;
}

export function Tag<T>(props: SpectrumTagProps<T>) {
  const {
    children,
    allowsRemoving,
    item,
    state,
    onRemove,
    size = 'Medium',
    ...otherProps
  } = props;

  const { theme, colorScheme } = useThemeContext();
  const coloredTheme = theme[colorScheme];

  const tagStyles = getTagStyles(coloredTheme.tag, theme.size.tag.tag[size]);

  const taglabelStyles = getLabelStyles(
    coloredTheme.tag,
    theme.size.tag.label[size]
  );

  let { hoverProps, isHovered } = useHover({});
  let { isFocused, isFocusVisible, focusProps } = useFocusRing({
    within: true,
  });
  let tagRowRef = useRef(null);
  let { clearButtonProps, labelProps, tagProps, tagRowProps } = useTag(
    {
      ...props,
      isFocused,
      allowsRemoving,
      item,
      onRemove,
      tagRowRef,
    },
    state
  );

  const title = typeof children === 'string' ? children : undefined;

  return (
    <div
      {...mergeProps(tagRowProps, hoverProps, focusProps)}
      className={'flex'}
      ref={tagRowRef}
    >
      <div title={title} className={tagStyles} {...tagProps}>
        <SlotProvider
          slots={{
            icon: {
              size: 'XS',
            },
            text: {
              ...labelProps,
            },
          }}
        >
          {typeof children === 'string' ? (
            <div className={taglabelStyles}>{children}</div>
          ) : (
            <div className={taglabelStyles}>{children}</div>
          )}
          <ClearSlots>
            {allowsRemoving && (
              <TagRemoveButton item={item} {...clearButtonProps} size={size} />
            )}
          </ClearSlots>
        </SlotProvider>
      </div>
    </div>
  );
}

function TagRemoveButton(props: any) {
  let { styleProps } = useStyleProps(props);
  const { theme, colorScheme } = useThemeContext();
  const coloredTheme = theme[colorScheme];

  return (
    <span {...styleProps} onTouchStart={props.onPress}>
      <ClearButton preventFocus {...props}>
        <OutlineCloseIcon
          width={theme.size.tag.closeIcon[props.size]}
          height={theme.size.tag.closeIcon[props.size]}
          fill={coloredTheme.tag.closeIconColor}
        />
      </ClearButton>
    </span>
  );
}
