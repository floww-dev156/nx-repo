import cn from 'classnames';
import React, { Key, useRef, useState } from 'react';
import {
  FocusScope,
  useFocus,
  useHover,
  useId,
  useOverlayPosition,
} from 'react-aria';

import { useSlotProps, useUnwrapDOMRef } from '@react-spectrum/utils';
import { SpectrumPickerProps } from '@react-types/select';
import { FocusableRef, FocusableRefValue } from '@react-types/shared';
import { CloseIcon } from '@nx-repo/design-system-icons';

import { positionConstants } from '../../constants/OverlayConstants';
import { colors } from '../../style-guide';
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
import OptionsSelector from '../OptionsSelector/OptionsSelector';
import { OptionsSelectorOptionType } from '../OptionsSelector/types';
import PopoverWithTrigger from '../PopoverWithTrigger/PopoverWithTrigger';
import { TagGroup } from '../Tag';
import { OptionsSelectorContainerStyles } from './styles';
import { MultiOptionsSelectPickerOffset as MULTI_OPTIONS_SELECT_PICKER_OFFSET } from '../../constants/SizingConstants';
import {
  MAX_TAGS_TO_SHOW_DEFAULT,
  MULTI_OPTIONS_SELECT_PICKER_ID_DEFAULT,
} from './constants';
import { useThemeContext } from '../../Theme/Provider';

interface MultiOptionsSelectPickerProps<T> extends SpectrumPickerProps<T> {
  options: string[];
  selectedKeys: string[];
  onChangeSelectedOptions: (options: OptionsSelectorOptionType[]) => void;
  optionsSelectorContainerClassName?: string;
  placeholder?: string;
  isDisabled?: boolean;
  isRequired?: boolean;
  hint?: React.ReactNode;
  hintClassName?: string;
  size?: BasicSize;
  maxTagsToShow?: number;
  shouldShowClearButton?: boolean;
  showLabel?: boolean;
  triggerContainerClassName?: string;
  onBlur?: () => void;
  onClearSelectedOptions?: () => void;
  onRemoveOption?: (key: Key) => void;
}

function MultiOptionsSelectPicker<T extends object>(
  props: MultiOptionsSelectPickerProps<T>
): React.ReactElement {
  props = useSlotProps(props, 'picker');
  const {
    autoComplete,
    isDisabled,
    shouldFlip = true,
    placeholder = 'Select an Option',
    label,
    name,
    autoFocus,
    id = MULTI_OPTIONS_SELECT_PICKER_ID_DEFAULT,
    errorMessage,
    isRequired,
    hint,
    size = 'Medium',
    maxTagsToShow = MAX_TAGS_TO_SHOW_DEFAULT,
    onClearSelectedOptions,
    onRemoveOption,
    hintClassName = '',
    shouldShowClearButton = true,
    disabledKeys,
    showLabel = true,
    triggerContainerClassName,
  } = props;
  const onSelectionChange = (key: any): void => {
    const options = Array.from(key) as string[];
    const updatedOptions = options.map<OptionsSelectorOptionType>((option) => ({
      id: option,
      name: option,
    }));
    props.onChangeSelectedOptions(updatedOptions);
  };

  const state = useMultiSelectState({ ...props, onSelectionChange });
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
    const filteredKeys = Array.from(state.selectedKeys).filter(
      (each) => each !== key
    );
    state.setSelectedKeys(filteredKeys);

    onRemoveOption && onRemoveOption(key);
  };

  const clearAllSelectedItems = (event: any): void => {
    state.setSelectedKeys([]);

    if (onClearSelectedOptions) onClearSelectedOptions();
    event.stopPropagation();
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
        <TagGroup
          allowsRemoving={!isDisabled}
          aria-label="Tag group with removable tags"
          items={state.selectedItems}
          onRemove={removeSelectedOption}
          maxValuesToShow={maxTagsToShow}
          size={getTagSize()}
        >
          {(item) => <Item>{item.textValue}</Item>}
        </TagGroup>
        {displayCloseIcon && (
          <div onPointerDown={clearAllSelectedItems} className="mr-8px">
            <CloseIcon
              fill={coloredTheme.multiOptionsSelectPicker.closeIconFillColor}
            />
          </div>
        )}
      </div>
    );
  };

  const renderTrigger = (): React.ReactElement => (
    <FocusRing
      size={size}
      autoFocus={autoFocus}
      within
      isError={Boolean(errorMessage)}
    >
      <FocusScope restoreFocus={true}>
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
            containerClassName={triggerContainerClassName}
          />
        </div>
      </FocusScope>
    </FocusRing>
  );

  const getOptions = (options: string[]): OptionsSelectorOptionType[] => {
    return options.map((option) => {
      return {
        name: option,
        id: option,
      };
    });
  };

  const renderPopoverContent = (): React.ReactElement => (
    <OptionsSelector
      containerClassName={`${OptionsSelectorContainerStyles} ${props.optionsSelectorContainerClassName}`}
      options={getOptions(props.options)}
      selectedOptions={getOptions(props.selectedKeys)}
      onChangeSelectedOptions={props.onChangeSelectedOptions}
      disabledKeys={disabledKeys}
    />
  );

  return (
    <>
      {showLabel ? (
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
      ) : null}
      <PopoverWithTrigger
        renderPopoverBody={renderPopoverContent}
        renderPopoverTrigger={renderTrigger}
        isOpen={state.isOpen}
        onOpenChange={onOpenChangePopover}
        placement={'bottom left'}
        offset={MULTI_OPTIONS_SELECT_PICKER_OFFSET}
      />
      <Hint
        containerClassName={cn('mt-6px', hintClassName)}
        id={hintId}
        error={errorMessage}
        hint={hint}
      />
    </>
  );
}

export default MultiOptionsSelectPicker;
