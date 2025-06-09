import React from 'react';
import { ClearSlots, SlotProvider } from '@react-spectrum/utils';
import cn from 'classnames';

import { isFocusVisible, useHover } from '@react-aria/interactions';
import { useOption } from '@react-aria/listbox';
import { mergeProps } from '@react-aria/utils';
import { Node } from '@react-types/shared';

import { TickMark } from '@nx-repo/design-system-icons';
import { RefObject, useContext, useRef } from 'react';

import { BasicSize } from '../../types';

import { FocusRing } from '../FocusRing';
import { ListBoxContext } from './ListBoxContext';
import { useThemeContext } from '../../Theme/Provider';
import { getListBoxOptionStyles, getStylesBasedOnSize } from './styles';
import { listBoxSizes } from './sizes';
import { MobileOptionVariant } from './types';

interface OptionProps<T> {
  item: Node<T>;
  shouldSelectOnPressUp?: boolean;
  shouldFocusOnHover?: boolean;
  isFromMobile?: boolean;
  mobileOptionVariant?: MobileOptionVariant;
  shouldUseVirtualFocus?: boolean;
  customOption?: (props: any) => any;
  size: BasicSize;
}

/** @private */
export function ListBoxOption<T>(props: OptionProps<T>) {
  let {
    item,
    shouldSelectOnPressUp,
    shouldFocusOnHover,
    shouldUseVirtualFocus,
    mobileOptionVariant = MobileOptionVariant.Default,
    customOption,
  } = props;

  let { rendered, key } = item;

  let state = useContext(ListBoxContext);
  let ref = useRef<HTMLDivElement>();
  let { optionProps, labelProps, descriptionProps, isSelected, isDisabled } =
    useOption(
      {
        'aria-label': item['aria-label'],
        key,
        shouldSelectOnPressUp,
        shouldFocusOnHover,
        isVirtualized: true,
        shouldUseVirtualFocus,
      },
      state,
      ref as RefObject<HTMLElement>
    );
  const isFocused = state.selectionManager.focusedKey === key;
  let { hoverProps, isHovered } = useHover({
    ...props,
    isDisabled,
  });

  let contents =
    typeof rendered === 'string' ? (
      <span className="flex-1 truncate notranslate" title={rendered}>
        {rendered}
      </span>
    ) : (
      rendered
    );

  let isKeyboardModality = isFocusVisible();

  const { theme, colorScheme } = useThemeContext();
  const coloredTheme = theme[colorScheme];

  const listBoxOptionStyles = getListBoxOptionStyles(
    {
      isFocused,
      isHovered,
      isSelected,
      isDisabled,
      selectionMode: state.selectionManager.selectionMode,
      isKeyboardModality,
      shouldFocusOnHover,
      shouldUseVirtualFocus,
    },
    coloredTheme.listBox.listBoxOption
  );

  const mergedProps = mergeProps(
    optionProps,
    shouldFocusOnHover ? {} : hoverProps
  );

  const renderListBoxOption = (
    <div
      {...mergedProps}
      ref={ref as RefObject<HTMLDivElement>}
      className={cn('py-2px border-none px-[6px]')}
    >
      <div
        className={cn(
          listBoxOptionStyles,
          listBoxSizes.listBoxOption,
          getStylesBasedOnSize(props.size),
          'list-box-option'
        )}
      >
        <ClearSlots>
          <SlotProvider
            slots={{
              text: {
                ...labelProps,
              },
              icon: {
                size: 'S',
              },
              description: {
                ...descriptionProps,
              },
            }}
          >
            {contents}
            {isSelected && (
              <div className="self-end ml-8px">
                <TickMark
                  fill={coloredTheme.listBox.listBoxOption.selected.tickColor}
                  width={20}
                  height={20}
                />
              </div>
            )}
          </SlotProvider>
        </ClearSlots>
      </div>
    </div>
  );

  const renderCustomOption = (
    <>
      {!customOption ? (
        <></>
      ) : (
        customOption({
          optionProps: {
            ...mergeProps(optionProps, shouldFocusOnHover ? {} : hoverProps),
          },
          optionRef: ref,
          item: item,
          labelProps: labelProps,
          descriptionProps: descriptionProps,
          isSelected: isSelected,
          isFocused: isFocused,
          isDisabled: isDisabled,
          listBoxOptionStyles: listBoxOptionStyles,
          contents: contents,
          listBoxSizes: listBoxSizes.listBoxOption,
          getStylesBasedOnSize: getStylesBasedOnSize(props.size),
        })
      )}
    </>
  );

  return (
    <FocusRing focusClass="outline-none" variant="None">
      {customOption ? renderCustomOption : renderListBoxOption}
    </FocusRing>
  );
}
