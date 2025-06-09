import React, { Key, ReactElement, useEffect, useRef } from 'react';
import cn from 'classnames';

import { useId } from '@react-aria/utils';
import {
  useIsMobileDevice,
  useSlotProps,
  useUnwrapDOMRef,
} from '@react-spectrum/utils';
import {
  DOMRef,
  DOMRefValue,
  FocusableRef,
  FocusableRefValue,
} from '@react-types/shared';
import { useMediaQuery } from 'react-responsive';
import { Item, ListBoxBase, useListBoxLayout } from '../ListBox';

import { useFocus, useHover } from '@react-aria/interactions';
import { useOverlayPosition } from '@react-aria/overlays';
import { SpectrumPickerProps } from '@react-types/select';

import { CloseIcon, XCircleIcon } from '@nx-repo/design-system-icons';

import { positionConstants } from '../../constants/OverlayConstants';
import { MOBILE_DEVICE_MAX_WIDTH } from '../../constants/MediaQueryConstants';
import { colors } from '../../style-guide';
import { BasicSize } from '../../types';

import { FocusRing } from '../FocusRing';
import { Hint } from '../Hint';
import { TagGroup } from '../Tag';
import { Label } from '../Label';
import { Popover } from '../Popover';

import { ListLayoutOptions } from '../ListBox/ListBoxBase';

import { useMultiSelectPickerContext } from './Context/Provider';
import { HiddenSelect } from './HiddenSelect';
import { MultiSelectPickerButton } from './MultiSelectPickerButton';
import { useMultiSelect } from './useMultiSelect';
import { useMultiSelectState } from './useMultiSelectState';
import { getPopoverPositionStylesFn, isOverlayOpen } from './utils';
import { Tray } from '../Tray';
import { getMobileListOptionStyles } from '../ListBox/styles';
import { CheckBoxComponent } from '../CheckBox/CheckBox';

import './index.css';

export interface MultiSelectPickerProps<T> extends SpectrumPickerProps<T> {
  size?: BasicSize;
  label?: string;
  labelClassName?: string;
  shouldOpenPopoverOnLabelClick?: boolean;
  hint?: React.ReactNode;
  maxTagsToShow?: number;
  defaultSelectedKeys?: string[];
  selectedKeys?: string[];
  onBlur?: () => void;
  id?: string;
  isDisabled?: boolean;
  isRequired?: boolean;
  dataTestId?: string;
  hintClassName?: string;
  containerClassName?: string;
  customOption?: (props: any) => React.ReactElement;
  mobileCustomOption?: (props: any) => React.ReactElement;
  listLayoutOptions?: ListLayoutOptions<T>;
  onClearSelectedOptions?: () => void;
  onRemoveOption?: (key: Key) => void;
  renderRequiredIcon?: () => React.ReactElement;
}

function MultiSelectPicker<T extends object>(
  props: MultiSelectPickerProps<T>,
  ref: DOMRef<HTMLDivElement>
) {
  props = useSlotProps(props, 'picker');
  let {
    autoComplete,
    isDisabled,
    shouldFlip = true,
    placeholder = 'Select an Option',
    label,
    name,
    autoFocus,
    id = 'multiSelectPicker',
    errorMessage,
    isRequired,
    hint,
    shouldOpenPopoverOnLabelClick = false,
    size = 'Medium',
    maxTagsToShow = 2,
    selectedKeys,
    defaultSelectedKeys,
    dataTestId = '',
    customOption,
    mobileCustomOption,
    onClearSelectedOptions,
    onRemoveOption,
    hintClassName = '',
    labelClassName,
    containerClassName,
    renderRequiredIcon,
  } = props;

  useEffect(() => {
    if (selectedKeys && defaultSelectedKeys) {
      throw new Error(
        'Component can be only controlled or uncontrolled, it cannot be both, so kindly send only prop from selectedKey and defaultSelectedKey'
      );
    }
  }, [selectedKeys, defaultSelectedKeys]);

  let state = useMultiSelectState(props);
  const hintId = useId();

  let popoverRef = useRef<DOMRefValue<HTMLDivElement>>(null);
  const unwrappedPopoverRef = useUnwrapDOMRef(popoverRef);

  let popoverTriggerRef = useRef<FocusableRefValue<HTMLDivElement>>(null);

  let triggerRef = useRef<FocusableRefValue<HTMLElement>>(null);
  let unwrappedTriggerRef = useUnwrapDOMRef(popoverTriggerRef);

  let listboxRef = useRef(null);

  const [isFocusWithin, setFocusWithin] = React.useState(false);

  const { focusProps } = useFocus({
    onFocusChange: (isFocusWithin) => setFocusWithin(isFocusWithin),
  });

  const {
    renderLeadingIcon,
    renderValueContainer: customRenderValueContainer,
  } = useMultiSelectPickerContext();

  let layout = useListBoxLayout(state, props.listLayoutOptions);
  let { labelProps, triggerProps, menuProps, valueProps } = useMultiSelect(
    {
      ...props,
      keyboardDelegate: layout,
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
    placement: positionConstants['bottomStart'],
    onClose: state.close,
  });

  const styles = getPopoverPositionStylesFn(positionProps, unwrappedTriggerRef);

  let { hoverProps } = useHover({ isDisabled });

  let isLoadingMore = props.isLoading && state.collection.size > 0;

  const showMobileValueContainer =
    isMobileDevice && state.selectedItems.length > 0;

  const onClickRequestClose = () => {
    document.body.style.overflowY = 'auto';
    state.close();
    triggerRef?.current?.focus();
  };

  const onTrayExit = () => {
    triggerRef?.current?.focus();
  };

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
      onLoadMore={props.onLoadMore}
      customOption={
        isMobile
          ? mobileCustomOption
            ? mobileCustomOption
            : mobileOption
          : customOption
      }
      size={size}
      listBoxClassName={isMobileDevice ? 'mobile-tray-listbox' : ''}
    />
  );

  const renderOverlay = (): React.ReactElement => {
    if (isMobileDevice) {
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
              <CheckBoxComponent isSelected={isSelected}>
                <div className="ml-2">{contents}</div>
              </CheckBoxComponent>
            </div>
          </div>
        );
      };

      return (
        <Tray
          isOpen={state.isOpen}
          onClose={onClickRequestClose}
          onExit={onTrayExit}
          label={props.label}
          isSearchable={true}
          trayChildrenWrapperClassName="multi-select-picker-tray"
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
    } else {
      return (
        <Popover
          ref={popoverRef}
          shouldFlip={shouldFlip}
          hideArrow
          style={styles}
          state={state}
          triggerRef={unwrappedTriggerRef}
          scrollRef={listboxRef}
        >
          {renderListbox()}
        </Popover>
      );
    }
  };

  const removeSelectedItem = (key: Key): void => {
    const filteredKeys = Array.from(state.selectedKeys).filter(
      (each) => each !== key
    );
    state.setSelectedKeys(filteredKeys);

    onRemoveOption && onRemoveOption(key);
  };

  const clearAllSelectedItems = (event: any): void => {
    state.setSelectedKeys([]);
    onClearSelectedOptions && onClearSelectedOptions();

    event.stopPropagation();
  };

  const getTagSize = () => {
    //FIXME: Need to confirm these sizes
    switch (size) {
      case 'ExtraSmall':
        return 'Small';
      case 'Small':
        return 'Medium';
      case 'Medium':
        return 'Medium';
    }
  };

  const renderValueContainer = (): React.ReactElement => (
    <div className="flex justify-between items-center w-full">
      <TagGroup
        allowsRemoving={!isDisabled}
        aria-label="Tag group with removable tags"
        items={state.selectedItems}
        onRemove={removeSelectedItem}
        maxValuesToShow={maxTagsToShow}
        size={getTagSize()}
      >
        {(item) => <Item>{item.textValue}</Item>}
      </TagGroup>
      {!isDisabled && (
        <div onPointerDown={clearAllSelectedItems} className="mr-8px">
          <CloseIcon fill={colors['base-black']} />
        </div>
      )}
    </div>
  );

  const renderMobileValueContainer = (): React.ReactNode => {
    if (!showMobileValueContainer) return null;

    if (customRenderValueContainer)
      return customRenderValueContainer({
        selectedKeys: Array.from(state.selectedKeys),
      });
    return (
      <div className="mt-2 flex justify-between items-center w-full">
        <TagGroup
          items={state.selectedItems}
          onRemove={removeSelectedItem}
          size={'ExtraSmall'}
          allowsRemoving
          tagsContainerClassName="flex-wrap gap-y-2"
        >
          {(item) => (
            <Item title={item.textValue}>
              <span className="notranslate">'{item.textValue}</span>
            </Item>
          )}
        </TagGroup>
      </div>
    );
  };

  const onClickLabel = (e: any): void => {
    if (!shouldOpenPopoverOnLabelClick) {
      e.preventDefault();
      e.stopPropagation();
      triggerRef.current?.focus();
    } else {
      state.open();
    }
  };

  const renderMultiSelectPicker = () => (
    <>
      <Label
        isRequired={isRequired}
        labelProps={{
          ...labelProps,
          onClick: onClickLabel,
        }}
        size={size}
        containerClassName={`mb-6px ${labelClassName}`}
        renderRequiredIcon={renderRequiredIcon}
      >
        {label}
      </Label>
      <FocusRing
        size={size}
        autoFocus={autoFocus}
        within
        isError={Boolean(errorMessage)}
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
          <MultiSelectPickerButton
            id={id}
            state={state}
            triggerProps={triggerProps}
            ref={triggerRef as FocusableRef<HTMLButtonElement>}
            valueProps={valueProps}
            error={errorMessage}
            placeholder={placeholder}
            hoverProps={hoverProps}
            size={size}
            renderValueContainer={
              !isMobileDevice
                ? customRenderValueContainer
                  ? customRenderValueContainer
                  : renderValueContainer
                : renderMobileValueContainer
            }
            renderLeadingIcon={renderLeadingIcon}
            focusProps={focusProps}
            isDisabled={isDisabled}
            popoverRef={popoverTriggerRef}
            clearAllSelectedItems={clearAllSelectedItems}
          />
          {state.collection.size === 0 ? null : renderOverlay()}
        </div>
      </FocusRing>
      <Hint
        containerClassName={cn('mt-6px', hintClassName)}
        id={hintId}
        error={errorMessage}
        hint={hint}
        size={size}
      />
    </>
  );

  return (
    <div id={id} data-testid={dataTestId} className={containerClassName}>
      {renderMultiSelectPicker()}
    </div>
  );
}

const _MultiSelectPicker = React.forwardRef(MultiSelectPicker) as <T>(
  props: MultiSelectPickerProps<T> & { ref?: DOMRef<HTMLDivElement> }
) => ReactElement;
export { _MultiSelectPicker as MultiSelectPicker };
