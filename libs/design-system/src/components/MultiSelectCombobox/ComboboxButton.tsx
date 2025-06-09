import { useButton } from '@react-aria/button';
import { mergeProps } from '@react-aria/utils';
import React, { ForwardedRef, RefObject } from 'react';
import cn from 'classnames';
import { useFocusableRef, useSlotProps } from '@react-spectrum/utils';
import { FocusableRef } from '@react-types/shared';
import { DropDownIcon } from '@nx-repo/design-system-icons';

export interface ComboBoxButtonProps {
  buttonStyles?: string;
  state?: any;
  triggerProps?: any;
  ref: React.MutableRefObject<any>;
  children?: any;
  hoverProps?: any;
  focusProps?: any;
  onPress?: () => void;
  isDisabled?: boolean;
  onFocus?: (e: React.FocusEvent<HTMLButtonElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLButtonElement>) => void;
  className?: string;
}

export const ComboBoxButton = React.forwardRef(function ComboBoxButton(
  props: ComboBoxButtonProps,
  ref: ForwardedRef<HTMLElement>
) {
  props = useSlotProps(props, 'button');
  const {
    buttonStyles,
    state,
    triggerProps,
    hoverProps,
    focusProps,
    children,
    isDisabled,
    onFocus,
    onBlur,
    className,
    ...otherProps
  } = props;

  const domRef = useFocusableRef(ref as any) as RefObject<HTMLButtonElement>;

  const { buttonProps } = useButton(
    {
      ...triggerProps,
      ...otherProps,
      isDisabled,
      onFocus,
      onBlur,
    },
    domRef
  );

  return (
    <button
      {...mergeProps(buttonProps, hoverProps)}
      className={cn(
        'flex items-center justify-between focus:outline-none py-2 pr-2 cursor-pointer',
        className,
        buttonStyles
      )}
      ref={domRef}
    >
      {children}
      {
        <DropDownIcon
          style={{
            transform: state.isOpen ? 'rotate(180deg)' : '',
            transition: 'transform 0.5s',
          }}
          height={20}
          width={20}
        />
      }
    </button>
  );
});
