/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import {
  useIsMobileDevice,
  useSlotProps,
  useUnwrapDOMRef,
} from '@react-spectrum/utils';
import React, { ReactElement, useRef, useEffect, RefObject, Ref } from 'react';
import {
  DOMRef,
  DOMRefValue,
  FocusableRef,
  FocusableRefValue,
} from '@react-types/shared';
import { HiddenSelect, useSelect } from '@react-aria/select';
import { mergeProps, useId } from '@react-aria/utils';
import MediaQuery, { useMediaQuery } from 'react-responsive';

import { Popover } from '../Popover';
import { useOverlayPosition } from '@react-aria/overlays';
import { PressResponder, useHover, useFocus } from '@react-aria/interactions';
import { useSelectState } from '@react-stately/select';

import { positionConstants } from '../../constants/OverlayConstants';
import { MOBILE_DEVICE_MAX_WIDTH } from '../../constants/MediaQueryConstants';
import { ListBoxBase, useListBoxLayout } from '../ListBox';
import { Label } from '../Label';
import { Hint } from '../Hint';
import { FocusRing } from '../FocusRing';

import { usePickerContext } from './Context/Provider';
import { getPopoverPositionStylesFn, isOverlayOpen } from './utils';
import { PickerButton } from './PickerButton';
import { PickerProps } from './types';
import { Tray } from '../Tray';
import { getMobileListOptionStyles } from '../ListBox/styles';
import { RadioOption } from '../ListBox/RadioOption';
import { XCircleIcon } from '@nx-repo/design-system-icons';

import './index.css';

function Picker<T extends object>(
  props: PickerProps<T>,
  ref: DOMRef<HTMLDivElement>
) {
  props = useSlotProps(props, 'picker');
  let {
    autoComplete,
    isDisabled,
    shouldFlip = true,
    placeholder,
    label,
    name,
    autoFocus,
    id = useId(),
    isRequired,
    errorMessage,
    inputButtonTextClassName,
    buttonClassName,
    hint,
    selectedKey,
    defaultSelectedKey,
    shouldOpenPopoverOnLabelClick = false,
    showLabel = true,
    size = 'Medium',
    dataTestId = '',
    customOption,
    mobileCustomOption,
    containerClassName,
    showToolTip,
    focusRingVariant,
    popOverStyles = {},
    showPickerButtonRightIcon,
    pickerButtonClassName,
    pickerButtonRightIconHeight,
    pickerButtonRightIconWidth,
    shouldShowClearButton = false,
    placement = positionConstants['bottomStart'],
    hintClassName = '',
    labelClassName,
    renderRequiredIcon,
    ...rest
  } = props;

  useEffect(() => {
    if (selectedKey && defaultSelectedKey) {
      throw new Error(
        'Component can be only controlled or uncontrolled, it cannot be both, so kindly send only prop from selectedKey and defaultSelectedKey'
      );
    }
  }, [selectedKey, defaultSelectedKey]);

  let state = useSelectState(props);
  const hintId = useId();
  const buttonId = useId();

  let popoverRef = useRef<DOMRefValue<HTMLDivElement>>();
  const unwrappedPopoverRef = useUnwrapDOMRef(
    popoverRef as RefObject<DOMRefValue<HTMLDivElement>>
  );

  let triggerRef = useRef<FocusableRefValue<HTMLElement>>();
  let unwrappedTriggerRef = useUnwrapDOMRef(
    triggerRef as RefObject<DOMRefValue<HTMLElement>>
  );
  let listboxRef = useRef(null);

  const [isFocusWithin, setFocusWithin] = React.useState(false);
  const { focusProps } = useFocus({
    onFocusChange: (isFocusWithin) => setFocusWithin(isFocusWithin),
  });

  const { renderValueContainer, renderLeadingIcon } = usePickerContext();
  let layout = useListBoxLayout(state, props.listLayoutOptions);

  let { labelProps, triggerProps, menuProps, valueProps } = useSelect(
    {
      ...props,
      keyboardDelegate: layout,
      autoFocus,
    },
    state,
    unwrappedTriggerRef
  );

  const isMobileDevice = useMediaQuery({
    query: `(max-width: ${MOBILE_DEVICE_MAX_WIDTH}px)`,
  });

  let isMobile = useIsMobileDevice();

  const { overlayProps: positionProps } = useOverlayPosition({
    targetRef: unwrappedTriggerRef,
    overlayRef: unwrappedPopoverRef,
    scrollRef: listboxRef,
    offset: 0,
    isOpen: isOverlayOpen({
      isMobileDevice,
      state,
      isMobile,
      isDesktop: !isMobile,
    }),
    placement: placement,
    onClose: state.close,
  });

  const styles = getPopoverPositionStylesFn(positionProps, unwrappedTriggerRef);

  let { hoverProps } = useHover({ isDisabled });

  let isLoadingMore = props.isLoading && state.collection.size > 0;

  const renderListbox = (
    isMobile?: boolean,
    mobileOption?: (props: any) => React.ReactElement
  ): React.ReactElement => (
    <ListBoxBase
      {...menuProps}
      ref={listboxRef}
      disallowEmptySelection
      autoFocus={state.focusStrategy || true}
      shouldSelectOnPressUp
      focusOnPointerEnter
      layout={layout}
      state={state}
      width={isMobile ? '100%' : undefined}
      UNSAFE_style={{ maxHeight: 'inherit' }}
      isLoading={isLoadingMore}
      isFromMobile={isMobileDevice}
      customOption={
        isMobile
          ? mobileCustomOption
            ? mobileCustomOption
            : mobileOption
          : customOption
      }
      onLoadMore={props.onLoadMore}
      size={size}
      listBoxClassName={isMobileDevice ? 'mobile-tray-listbox' : ''}
    />
  );

  const onClickRequestClose = () => {
    document.body.style.overflowY = 'auto';
    state.close();
    triggerRef?.current?.focus();
  };

  const onTrayExit = () => {
    triggerRef?.current?.focus();
  };

  const popover = (
    <Popover
      ref={popoverRef as Ref<DOMRefValue<HTMLDivElement>>}
      shouldFlip={shouldFlip}
      hideArrow
      style={{ ...styles, ...popOverStyles }}
      state={state}
      triggerRef={unwrappedTriggerRef}
      scrollRef={listboxRef}
    >
      {renderListbox()}
    </Popover>
  );

  const tray = () => {
    const renderMobileOption = (props: any) => {
      const {
        optionProps,
        optionRef,
        isSelected,
        item: { rendered, key },
      } = props;

      const contents =
        typeof rendered === 'string' ? (
          <span className="flex flex-1 break-words">{rendered}</span>
        ) : (
          rendered
        );

      return (
        <div
          {...optionProps}
          ref={optionRef}
          className={'outline-none py-[6px] pr-6'}
        >
          <div className={getMobileListOptionStyles(isSelected)}>
            <RadioOption value={key} isSelected={isSelected}>
              <div className="ml-2 notranslate">{contents}</div>
            </RadioOption>
          </div>
        </div>
      );
    };

    return (
      <Tray
        isOpen={state.isOpen}
        onExit={onTrayExit}
        onClose={onClickRequestClose}
        label={props.label}
        isSearchable={true}
        trayChildrenWrapperClassName=""
        trayContainerClassName=""
      >
        <div className="p-6 pr-0">
          <div className="flex justify-between mb-4 pr-8">
            <p className="text-xl font-semibold text-gray-700">{label}</p>

            <div className="h-[20px] ml-2">
              <button onClick={onClickRequestClose}>
                <XCircleIcon height={18} width={18} />
              </button>
            </div>
          </div>
          {renderListbox(isMobileDevice, renderMobileOption)}
        </div>
      </Tray>
    );
  };

  const renderOverlay = () => (isMobileDevice ? tray() : popover);

  const renderPickerComponent = () => (
    <>
      {showLabel ? (
        <Label
          isRequired={isRequired}
          labelProps={{
            ...labelProps,
            htmlFor: buttonId,
            onClick: (e) => {
              if (!shouldOpenPopoverOnLabelClick) {
                e.preventDefault();
                e.stopPropagation();
                triggerRef.current?.focus();
              }
            },
          }}
          size={size}
          renderRequiredIcon={renderRequiredIcon}
          containerClassName={labelClassName}
        >
          {label}
        </Label>
      ) : null}
      <FocusRing
        size={size}
        autoFocus={autoFocus}
        isError={Boolean(errorMessage)}
        focusClass={'border-none'}
        variant={focusRingVariant}
      >
        <div>
          <HiddenSelect
            autoComplete={autoComplete}
            isDisabled={isDisabled}
            state={state}
            triggerRef={unwrappedTriggerRef}
            label={label}
            name={name}
          />
          <PressResponder
            {...mergeProps(hoverProps, {
              ...triggerProps,
              onBlur: () => {
                //
              },
              onFocus: () => {
                //
              },
            })}
          >
            <PickerButton
              id={buttonId}
              state={state}
              triggerProps={triggerProps}
              ref={triggerRef as FocusableRef<HTMLButtonElement>}
              valueProps={valueProps}
              //@ts-ignore
              error={errorMessage}
              placeholder={placeholder}
              hoverProps={hoverProps}
              size={size}
              renderValueContainer={renderValueContainer}
              renderLeadingIcon={renderLeadingIcon}
              focusProps={focusProps}
              autoFocus={autoFocus}
              isDisabled={isDisabled}
              inputButtonTextClassName={inputButtonTextClassName}
              buttonClassName={buttonClassName}
              showToolTip={showToolTip}
              showPickerButtonRightIcon={showPickerButtonRightIcon}
              pickerButtonClassName={pickerButtonClassName}
              rightIconHeight={pickerButtonRightIconHeight}
              rightIconWidth={pickerButtonRightIconWidth}
              onSelectionChange={props.onSelectionChange}
              shouldShowClearButton={shouldShowClearButton}
            />
          </PressResponder>
          {state.collection.size === 0 ? null : renderOverlay()}
        </div>
      </FocusRing>
      <Hint
        containerClassName={hintClassName}
        id={hintId}
        //@ts-ignore
        error={errorMessage}
        hint={hint}
        size={size}
      />
    </>
  );

  return (
    <div id={id} data-testid={dataTestId} className={containerClassName}>
      {renderPickerComponent()}
    </div>
  );
}

const _Picker = React.forwardRef(Picker) as <T>(
  props: PickerProps<T> & { ref?: DOMRef<HTMLDivElement> }
) => ReactElement;
export { _Picker as Picker };
