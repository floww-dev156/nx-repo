import cn from 'classnames';
import React, { Key, useRef, useState } from 'react';
import { useFocus, useHover, useId, useOverlayPosition } from 'react-aria';

import { useSlotProps, useUnwrapDOMRef } from '@react-spectrum/utils';
import { SpectrumPickerProps } from '@react-types/select';
import { FocusableRef, FocusableRefValue } from '@react-types/shared';
import { CloseIcon } from '@nx-repo/design-system-icons';

import { BasicSize } from '../../types';
import { FocusRing } from '../FocusRing';
import { Hint } from '../Hint';
import { Label } from '../Label/Label';
import { Item, useListBoxLayout } from '../ListBox';
import { useMultiSelectPickerContext } from '../MultiSelectPicker/Context/Provider';
import { HiddenSelect } from '../MultiSelectPicker/HiddenSelect';
import { MultiSelectPickerButton } from '../MultiSelectPicker/MultiSelectPickerButton';
import { useMultiSelect } from '../MultiSelectPicker/useMultiSelect';
import { useMultiSelectState } from '../MultiSelectPicker/useMultiSelectState';
import {
  AsyncOptionsSelectorResponseDataType,
  AsyncOptionsSelectorSearchProps,
  CommonAsyncOptionsSelectorProps,
  OptionsSelectorOptionType,
} from '../OptionsSelector/types';
import PopoverWithTrigger from '../PopoverWithTrigger/PopoverWithTrigger';
import { ControlledTagGroup, TagGroup } from '../Tag';
import { OptionsSelectorContainerStyles } from './styles';
import { MultiOptionsSelectPickerOffset as ASYNC_MULTI_OPTIONS_SELECTOR_OFFSET } from '../../constants/SizingConstants';
import {
  MAX_TAGS_TO_SHOW_DEFAULT,
  ASYNC_MULTI_OPTIONS_SELECTOR_ID_DEFAULT,
} from './constants';
import { useThemeContext } from '../../Theme/Provider';
import AsyncOptionsSelector from '../OptionsSelector/AsyncOptionsSelector';

//FIXME: fix the issues to use this component

interface AsyncMultiOptionsSelectorProps<
  T,
  Option extends OptionsSelectorOptionType
> extends SpectrumPickerProps<T> {
  fetchOptionsAPI: (
    pageNumber: number,
    searchText: string
  ) => Promise<AsyncOptionsSelectorResponseDataType<Option>>;

  searchProps?: AsyncOptionsSelectorSearchProps;

  optionsSelectorContainerClassName: string;
  selectedOptions: Option[];

  onChangeSelectedOptions: (options: Option[]) => void;

  shouldEnableLocalFiltering?: boolean;

  renderCustomOptionContent?: (
    option: Option,
    isSelected: boolean
  ) => React.ReactElement;
  renderCustomSelectedOptionBadge?: (
    option: Option,
    removeOption: (optionId: string) => void
  ) => React.ReactElement;
  renderNoOptionsView?: () => React.ReactElement;

  renderCustomLoader?: () => React.ReactElement;

  placeholder?: string;
  isDisabled?: boolean;
  isRequired?: boolean;
  hint?: React.ReactNode;
  hintClassName?: string;
  size?: BasicSize;
  maxTagsToShow?: number;
  shouldShowClearButton?: boolean;
  onBlur?: () => void;
  onClearSelectedOptions?: () => void;
  onRemoveOption?: (key: Key) => void;
}

function AsyncMultiOptionsSelector<
  T extends object,
  Option extends OptionsSelectorOptionType
>(props: AsyncMultiOptionsSelectorProps<T, Option>): React.ReactElement {
  props = useSlotProps(props, 'picker');
  const {
    autoComplete,
    isDisabled,
    shouldFlip = true,
    placeholder = 'Select an Option',
    label,
    name,
    autoFocus,
    id = ASYNC_MULTI_OPTIONS_SELECTOR_ID_DEFAULT,
    errorMessage,
    isRequired,
    hint,
    size = 'Medium',
    maxTagsToShow = MAX_TAGS_TO_SHOW_DEFAULT,
    onClearSelectedOptions,
    onRemoveOption,
    hintClassName = '',
    shouldShowClearButton = true,
  } = props;
  const onSelectionChange = (key: any): void => {
    console.log(key, 'key on selection change');
    props.onChangeSelectedOptions(key);
  };

  const state = useMultiSelectState({
    ...props,
    onSelectionChange,
  });
  const hintId = useId();

  const popoverTriggerRef = useRef<FocusableRefValue<HTMLDivElement>>(null);
  const triggerRef = useRef<FocusableRefValue<HTMLElement>>(null);
  const unwrappedTriggerRef = useUnwrapDOMRef(popoverTriggerRef);

  const layout = useListBoxLayout(state);
  const { labelProps, triggerProps, menuProps, valueProps } = useMultiSelect(
    {
      ...props,
      keyboardDelegate: layout,
    },
    state,
    unwrappedTriggerRef
  );
  const { hoverProps } = useHover({ isDisabled });

  const [isFocusWithin, setFocusWithin] = React.useState(false);
  const { focusProps } = useFocus({
    onFocusChange: (isFocusWithin) => setFocusWithin(isFocusWithin),
  });

  const {
    renderLeadingIcon,
    renderValueContainer: customRenderValueContainer,
  } = useMultiSelectPickerContext();

  const { theme, colorScheme } = useThemeContext();
  const coloredTheme = theme[colorScheme];

  const onOpenChangePopover = (isOpen: boolean) => {
    if (isOpen) state.open();
    else state.close();
  };

  const removeSelectedOption = (key: Key): void => {
    const filteredItems = Array.from(props.selectedOptions).filter(
      (each) => each.id !== key
    );

    const filteredKeys = filteredItems.map((each: Option) => each.id);
    state.setSelectedKeys(filteredKeys);

    onRemoveOption && onRemoveOption(key);
  };

  const clearAllSelectedItems = (event: any): void => {
    event.stopPropagation();
    state.setSelectedKeys([]);

    if (onClearSelectedOptions) onClearSelectedOptions();
  };

  const getTagSize = (): BasicSize => {
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

  const renderValueContainer = (): React.ReactElement => {
    const displayCloseIcon = !isDisabled && shouldShowClearButton;
    return (
      <div className="flex justify-between items-center w-full">
        <ControlledTagGroup
          allowsRemoving
          aria-label="Tag group with removable tags"
          items={state.selectedItems}
          selectedItems={props.selectedOptions}
          onRemove={removeSelectedOption}
          maxValuesToShow={maxTagsToShow}
          size={getTagSize()}
          remainingTagsContainerClass={'min-w-[35px]'}
          remainingTagsTextClass={'min-w-[35px]'}
        >
          {(item: any) => <Item>{item.name}</Item>}
        </ControlledTagGroup>
        {displayCloseIcon && (
          <div onClick={clearAllSelectedItems} className="mr-8px">
            <CloseIcon
              fill={coloredTheme.multiOptionsSelectPicker.closeIconFillColor}
            />
          </div>
        )}
      </div>
    );
  };

  const renderTrigger = (): React.ReactElement => (
    <div>
      <Label
        isRequired={isRequired}
        labelProps={{
          ...labelProps,
        }}
        size={size}
        containerClassName={'mb-6px'}
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
            renderValueContainer={renderValueContainer}
            renderLeadingIcon={renderLeadingIcon}
            focusProps={focusProps}
            isDisabled={isDisabled}
            popoverRef={popoverTriggerRef}
          />
        </div>
      </FocusRing>
      <Hint
        containerClassName={cn('mt-6px', hintClassName)}
        id={hintId}
        error={errorMessage}
        hint={hint}
      />
    </div>
  );

  const renderPopoverContent = (): React.ReactElement => (
    <AsyncOptionsSelector
      containerClassName={`${OptionsSelectorContainerStyles} ${props.optionsSelectorContainerClassName}`}
      fetchOptionsAPI={props.fetchOptionsAPI}
      selectedOptions={props.selectedOptions}
      onChangeSelectedOptions={props.onChangeSelectedOptions}
    />
  );

  return (
    <PopoverWithTrigger
      renderPopoverBody={renderPopoverContent}
      renderPopoverTrigger={renderTrigger}
      isOpen={state.isOpen}
      onOpenChange={onOpenChangePopover}
      placement={'bottom left'}
      offset={ASYNC_MULTI_OPTIONS_SELECTOR_OFFSET}
    />
  );
}

export default AsyncMultiOptionsSelector;
