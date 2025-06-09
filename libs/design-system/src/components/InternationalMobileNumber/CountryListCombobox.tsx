//@ts-nocheck
import React, { RefObject, useEffect, useRef, useState } from 'react';
import { PressResponder, useHover } from '@react-aria/interactions';
import { useOverlayPosition } from '@react-aria/overlays';
import { DOMRefValue, FocusableRefValue } from '@react-types/shared';
import { useMediaQuery } from 'react-responsive';
import { HiddenSelect, useSelect } from '@react-aria/select';
import { useComboBoxState } from '@react-stately/combobox';
import { useUnwrapDOMRef } from '@react-spectrum/utils';
import { FocusScope } from '@react-aria/focus';
import { mergeProps } from '@react-aria/utils';
import { useFilter } from '@react-aria/i18n';
import cn from 'classnames';

import {
  DropDownIcon,
  RefreshIcon,
  SearchSmIcon,
  XCloseIcon,
} from '@nx-repo/design-system-icons';

import { MOBILE_DEVICE_MAX_WIDTH } from '../../constants/MediaQueryConstants';
import { ListBoxBase, useListBoxLayout } from '../ListBox/ListBoxBase';
import { TextFieldBase } from '../TextInputs/TextFieldBase';
import { FieldButton } from '../Combobox/FieldButton';
import { Popover } from '../Popover';

import { useCountryCodeComboBox } from './useCountryCodeComboBox';
import { getComboBoxWrapperWithPopOverStyles, getDialCode } from './utils';
import { ComboBoxBaseProps, OverlayOptions } from '../Combobox/types';
import { MobileComboBox } from '../Combobox/MobileCombobox';
import { Placement } from '../../types';

export interface ComboBoxPropsTypes {
  error: string | undefined;
  fieldContainerStyles?: string;
  wrapperWithPopOverStyles?: string;
  buttonStyles?: string;
  popOverStyles?: string;
  isDisabled?: boolean;
  autoFocus?: boolean;
  parentRef?: RefObject<HTMLDivElement>;
  isSearchable?: boolean;
  label?: string;
  overlayOptions?: OverlayOptions;
}

export function CountryListCombobox(
  props: ComboBoxBaseProps<any> & ComboBoxPropsTypes
) {
  const inputRef: RefObject<HTMLInputElement> = React.useRef(null);

  const {
    error,
    isDisabled,
    autoFocus,
    fieldContainerStyles,
    wrapperWithPopOverStyles,
    buttonStyles,
    popOverStyles,
    parentRef,
    isSearchable = true,
    overlayOptions,
    ...otherProps
  } = props;

  const popoverRef = useRef<DOMRefValue<HTMLDivElement>>(null);
  const unwrappedPopoverRef = useUnwrapDOMRef(popoverRef);
  const triggerRef = useRef<FocusableRefValue<HTMLElement>>(null);
  const unwrappedTriggerRef = useUnwrapDOMRef(triggerRef);
  const listBoxRef = useRef<HTMLDivElement>(null);
  const { contains } = useFilter({ sensitivity: 'base' });
  const state = useComboBoxState({
    allowsEmptyCollection: true,
    ...otherProps,
    defaultFilter: contains,
    shouldCloseOnBlur: false,
  });
  const [isFocus, setFocus] = useState(false);

  const {
    buttonProps: triggerProps,
    inputProps,
    labelProps,
  } = useCountryCodeComboBox(
    {
      ...otherProps,
      inputRef,
      buttonRef: unwrappedTriggerRef,
      listBoxRef,
      popoverRef: unwrappedPopoverRef,
    },
    state
  );

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    if (state.isOpen && inputRef.current) {
      timerRef.current = setTimeout(() => {
        //FIXME: This is a hack to fix the issue of the input not being focused when the popover is open
        inputRef.current?.focus();
      }, 50);
    }
    return () => {
      timerRef.current && clearTimeout(timerRef.current);
    };
  }, [state.isOpen]);

  const layout = useListBoxLayout(state);

  const { hoverProps } = useHover({ isDisabled });

  const ref = React.useRef(null);
  const { menuProps } = useSelect(otherProps, state, ref);

  const isMobileDevice = useMediaQuery({
    query: `(max-width: ${MOBILE_DEVICE_MAX_WIDTH}px)`,
  });

  const { overlayProps: positionProps, placement } = useOverlayPosition({
    targetRef: unwrappedTriggerRef,
    overlayRef: unwrappedPopoverRef,
    scrollRef: listBoxRef,
    isOpen: state.isOpen && !isMobileDevice,
    placement: 'bottom left',
    onClose: state.close,
    ...overlayOptions,
  });

  const styles = {
    ...positionProps.style,
    maxHeight:
      typeof positionProps.style?.maxHeight === 'string'
        ? parseInt(positionProps.style.maxHeight) + 6
        : positionProps.style?.maxHeight
        ? positionProps.style.maxHeight + 6
        : undefined,
    paddingTop: '2px',
    paddingBottom: '2px',
    width: parentRef
      ? parentRef?.current?.offsetWidth
      : unwrappedTriggerRef?.current?.offsetWidth,
  };

  const onClickClearIcon = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    state.setInputValue('');
    inputRef.current?.focus();
  };

  const renderNoResults = () => (
    <div
      className={cn(
        'm-auto pb-3 w-full h-full flex items-center justify-center flex-col'
      )}
    >
      <RefreshIcon />
      <p className={cn('text-center text-gray-600 font-medium')}>
        No Results Found
      </p>
    </div>
  );

  const searchIcon = () => (
    <div className="mr-2">
      <SearchSmIcon height={18} width={18} />
    </div>
  );

  const clearIcon = () =>
    inputProps.value ? (
      <div
        className={cn('cursor-pointer focus:border-black focus:border-1 ')}
        onClick={onClickClearIcon}
      >
        <XCloseIcon />
      </div>
    ) : null;

  const listBoxTop = listBoxRef.current ? listBoxRef.current?.offsetTop : 0;

  const listBoxMaxHeight =
    typeof positionProps.style?.maxHeight === 'string'
      ? parseInt(positionProps.style.maxHeight) - listBoxTop
      : positionProps.style?.maxHeight
      ? positionProps.style.maxHeight - listBoxTop
      : positionProps.style?.maxHeight;

  const listBox = (
    <FocusScope restoreFocus>
      <ListBoxBase
        {...menuProps}
        size="Medium"
        state={state}
        ref={listBoxRef}
        layout={layout}
        shouldSelectOnPressUp
        focusOnPointerEnter
        renderEmptyState={renderNoResults}
      />
    </FocusScope>
  );

  const popover = (
    <Popover
      state={state}
      ref={popoverRef}
      triggerRef={unwrappedTriggerRef}
      style={styles}
      // TODO:
      placement={placement as Placement}
      className="mt-3"
    >
      <TextFieldBase
        {...props}
        size="ExtraSmall"
        inputProps={inputProps}
        labelProps={labelProps}
        ref={inputRef}
        inputContainerClassName={cn('rounded-12px mt-2 mb-2')}
        containerClassName={cn(isSearchable ? 'block mx-8px' : 'hidden')}
        leftElement={searchIcon}
        defaultValue={''}
        rightElement={clearIcon}
      />
      {listBox}
    </Popover>
  );

  return isMobileDevice ? (
    <MobileComboBox
      {...props}
      comboboxButtonClassname={cn('border-none pl-3 h-32px ml-2px rounded-4px')}
      cancelButtonClassname={cn('mb-4 mr-4')}
    />
  ) : (
    <div className={cn('relative m-auto', fieldContainerStyles)}>
      <div
        className={
          (getComboBoxWrapperWithPopOverStyles(
            isFocus,
            error,
            isDisabled,
            wrapperWithPopOverStyles
          ),
          'pl-0px')
        }
      >
        <HiddenSelect
          name={'countryCode'}
          state={state}
          triggerRef={unwrappedTriggerRef}
          label={props.label}
        />
        <input
          type={'hidden'}
          name={'dialCode'}
          value={getDialCode(state.selectedKey as string)}
        />
        <PressResponder {...mergeProps(hoverProps, triggerProps)}>
          <FieldButton
            ref={triggerRef}
            onPress={() => state.open(null, 'manual')}
            // className='outline-none'
          >
            <div className={cn('ml-3 mr-1 flex outline-none', buttonStyles)}>
              <span className={'mr-1'}>
                {state.selectedItem ? state.selectedItem.value.value : 'IN'}
              </span>
              {state.isOpen ? (
                <DropDownIcon
                  style={{
                    transform: 'rotate(180deg)',
                    transition: 'transform 0.5s',
                  }}
                />
              ) : (
                <DropDownIcon style={{ transition: 'transform 0.5s' }} />
              )}
            </div>
          </FieldButton>
        </PressResponder>
      </div>
      {popover}
    </div>
  );
}
