import React, {
  ForwardedRef,
  Key,
  ReactElement,
  ReactNode,
  RefObject,
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { HiddenSelect } from 'react-aria';
import cn from 'classnames';

import {
  useUnwrapDOMRef,
  useResizeObserver,
  useFocusableRef,
} from '@react-spectrum/utils';
import { useId } from '@react-aria/utils';
import {
  DOMRefValue,
  FocusableRef,
  FocusableRefValue,
} from '@react-types/shared';
import { useComboBox } from '@react-aria/combobox';
import { useFilter } from '@react-aria/i18n';
import { useProviderProps } from '@react-spectrum/provider';
import { useMediaQuery } from 'react-responsive';

import { CloseIcon } from '@nx-repo/design-system-icons';

import { MOBILE_DEVICE_MAX_WIDTH } from '../../constants/MediaQueryConstants';
import { Hint } from '../Hint';
import { Label } from '../Label';
import { ListBoxBase, useListBoxLayout } from '../ListBox';
import { Popover } from '../Popover';
import { Loader } from '../Loader/Loader';
import { NoSearchResultsView } from '../NoSearchResultsView/NoSearchResultsView';
import { useThemeContext } from '../../Theme/Provider';

import MultiSelectComboBoxTrigger from './MultiSelectComboBoxTrigger';
import { MultiSelectMobileComboBox } from './MultiSelectMobileCombobox';
import { useMultiSelectComboBoxState } from './hooks/useMultiSelectComboBoxState';
import { useComboboxContext } from './context/Provider';
import { ErrorView } from '../Combobox/ErrorView';
import { ControlledTagGroup, TagGroup } from '../Tag';
import { Item } from '../Item/Item';

import { SelectedItem } from '../../types';
import { MultiSelectComboBoxBaseProps } from './types';
import { colors } from '../../style-guide';
import {
  emptyListBoxContainerClassName,
  emptyViewButtonClass,
  popoverClassName,
  loadingViewClassName,
  getContainerStyles,
} from './styles';
import './index.css';

function ComboBox<T extends object>(
  props: MultiSelectComboBoxBaseProps<T>,
  ref: FocusableRef<HTMLElement>
) {
  props = useProviderProps(props);

  //@ts-ignore
  return <ComboBoxBase {...props} ref={ref} />;
}

const ComboBoxBase = React.forwardRef(function ComboBoxBase<T>(
  props: MultiSelectComboBoxBaseProps<T>,
  ref: FocusableRef<HTMLElement>
) {
  let {
    menuTrigger = 'input',
    shouldFlip = true,
    size = 'Small',
    defaultOpen,
    isApiFailed,
    loadingState,
    onLoadMore,
    popoverStyles = {},
    isDisabled = false,
    className = '',
    placement = 'bottom',
    shouldRenderClearIcon = true,
    onClearSelectedOptions,
    maxTagsToShow = 2,
    selectedItems,
    customBadge,
    isControlledSelectedItems,
    tagsCountToolTipClassName,
    hintClassName = '',
    labelClassName,
    onRemoveItem,
    shouldTriggerOnSelectionChangeOnRemoveItem,
    renderRequiredIcon,
    customOption,
    mobileCustomOption,
  } = props;

  const isMobileDevice = useMediaQuery({
    query: `(max-width: ${MOBILE_DEVICE_MAX_WIDTH}px)`,
  });

  if (isMobileDevice) {
    return (
      <MultiSelectMobileComboBox
        error={props.errorMessage as string}
        {...props}
      />
    );
  }

  let popoverRef = useRef<DOMRefValue<HTMLDivElement>>(null);
  let unwrappedPopoverRef = useUnwrapDOMRef(popoverRef);
  let triggerRef = useRef<FocusableRefValue<HTMLElement>>(null);
  let unWrappedTriggerRef = useUnwrapDOMRef(triggerRef);
  let listBoxRef = useRef(null);
  let inputRef = useRef<any>();
  const comboBoxInputRef = useRef<any>(null);
  let domRef = useFocusableRef(ref, inputRef);

  const hintId = useId();

  let { contains } = useFilter({ sensitivity: 'base' });
  let state = useMultiSelectComboBoxState({
    ...props,
    defaultFilter: contains,
    allowsEmptyCollection: true,
    defaultOpen: defaultOpen,
    isDisabled,
  });
  let layout = useListBoxLayout(state, props.listLayoutOptions);

  const { theme, colorScheme } = useThemeContext();
  const colorTheme = theme[colorScheme];

  let { buttonProps, inputProps, listBoxProps, labelProps } = useComboBox(
    //@ts-ignore
    {
      ...props,
      keyboardDelegate: layout,
      buttonRef: unWrappedTriggerRef,
      popoverRef: unwrappedPopoverRef,
      listBoxRef,
      inputRef: inputRef,
      menuTrigger,
      isDisabled,
    },
    state
  );

  const {
    renderNoItemsView,
    renderLoadingView,
    renderErrorView,
    renderValueContainer: customRenderValueContainer,
  } = useComboboxContext();

  const getLoadingView = (): ReactNode => {
    return renderLoadingView ? (
      renderLoadingView()
    ) : (
      <div className={loadingViewClassName}>
        <Loader fill={colorTheme.comboBox.popoverLoaderColor} />
      </div>
    );
  };

  const getNoDataView = (): ReactNode => {
    return renderNoItemsView ? (
      renderNoItemsView()
    ) : (
      <NoSearchResultsView
        textClassName={`${colorTheme.comboBox.noResultsTextColor}`}
      />
    );
  };

  const onRetryButtonClick = () => {
    return props.onApiRetry && props.onApiRetry();
  };

  const getErrorView = (): ReactNode => {
    return renderErrorView ? (
      renderErrorView()
    ) : (
      <ErrorView
        onRetryClick={onRetryButtonClick}
        isLoading={loadingState === 'loadingMore' || loadingState === 'loading'}
      />
    );
  };

  const renderEmptyView = (className?: string): React.ReactElement => {
    return (
      <button ref={listBoxRef} className={emptyViewButtonClass}>
        <div className={cn(emptyListBoxContainerClassName, className)}>
          {isApiFailed
            ? getErrorView()
            : loadingState === 'loading' || loadingState === 'filtering'
            ? getLoadingView()
            : getNoDataView()}
        </div>
      </button>
    );
  };

  let [menuWidth, setMenuWidth] = useState<number | null>(null);

  let onResize = useCallback(() => {
    if (comboBoxInputRef.current) {
      let buttonWidth = comboBoxInputRef.current.offsetWidth;
      setMenuWidth(buttonWidth);
    }
  }, [unWrappedTriggerRef, inputRef, setMenuWidth]);

  useResizeObserver({
    ref: domRef,
    onResize: onResize,
  });

  const scale = 'medium';
  useLayoutEffect(onResize, [scale, onResize]);

  let style = {
    width: menuWidth,
    minWidth: menuWidth,
  };

  const removeSelectedItem = (key: Key): void => {
    const filteredItems = isControlledSelectedItems
      ? props.selectedItems.filter((each) => each.key !== key)
      : [];

    const filteredKeys: Array<string> = isControlledSelectedItems
      ? filteredItems.map((each: SelectedItem) => each.key)
      : (Array.from(state.selectedKeys).filter(
          (each) => each !== key
        ) as Array<string>);

    if (onRemoveItem) {
      onRemoveItem(key);
      if (shouldTriggerOnSelectionChangeOnRemoveItem) {
        state.setSelectedKeys(filteredKeys);
        props.onSelectionChange && props.onSelectionChange(filteredKeys);
      }
    } else {
      state.setSelectedKeys(filteredKeys);
      props.onSelectionChange && props.onSelectionChange(filteredKeys);
    }
  };

  const clearAllSelectedItems = (event: any): void => {
    event.stopPropagation();
    state.setSelectedKeys([]);
    onClearSelectedOptions && onClearSelectedOptions();
  };

  const renderListBox = (
    isMobile?: boolean,
    className?: string,
    mobileOption?: (props: any) => React.ReactElement
  ) => {
    return (
      <ListBoxBase
        {...listBoxProps}
        size={size}
        ref={listBoxRef}
        disallowEmptySelection
        autoFocus={state.focusStrategy || true}
        shouldSelectOnPressUp
        focusOnPointerEnter
        layout={layout}
        state={state}
        customOption={
          isMobile
            ? mobileCustomOption
              ? mobileCustomOption
              : mobileOption
            : customOption
        }
        isLoading={loadingState === 'loadingMore' || loadingState === 'loading'}
        isApiFailed={isApiFailed}
        onLoadMore={onLoadMore}
        UNSAFE_style={{ maxHeight: 'inherit' }}
        shouldUseVirtualFocus
        renderEmptyState={renderEmptyView}
        listBoxClassName={className}
      />
    );
  };

  const renderValueContainer = (): React.ReactElement => {
    return (
      <div className="flex justify-start items-center w-full bg-transparent">
        {isControlledSelectedItems ? (
          <ControlledTagGroup
            allowsRemoving
            aria-label="Tag group with removable tags"
            items={state.selectedItems}
            selectedItems={selectedItems}
            customBadge={customBadge}
            onRemove={removeSelectedItem}
            maxValuesToShow={maxTagsToShow}
            size={size}
            remainingTagsContainerClass={'min-w-[35px]'}
            remainingTagsTextClass={'min-w-[35px]'}
            tagsCountToolTipClassName={tagsCountToolTipClassName}
          >
            {(item: any) => <Item>{item.textValue}</Item>}
          </ControlledTagGroup>
        ) : (
          <TagGroup
            allowsRemoving
            aria-label="Tag group with removable tags"
            items={state.selectedItems}
            onRemove={removeSelectedItem}
            maxValuesToShow={maxTagsToShow}
            customBadge={customBadge}
            size={size}
            remainingTagsContainerClass={'min-w-[35px]'}
            remainingTagsTextClass={'min-w-[35px]'}
            tagsCountToolTipClassName={tagsCountToolTipClassName}
          >
            {(item: any) => <Item>{item.textValue}</Item>}
          </TagGroup>
        )}
        {state.selectedItems.length > 0 && shouldRenderClearIcon && (
          <div onClick={clearAllSelectedItems} className="mr-8px ml-8px">
            <CloseIcon fill={colors['base-black']} />
          </div>
        )}
      </div>
    );
  };

  const popover = (
    <Popover
      state={state}
      ref={popoverRef}
      triggerRef={comboBoxInputRef as RefObject<Element>}
      scrollRef={listBoxRef}
      placement={placement}
      hideArrow
      containerPadding={0}
      isNonModal
      shouldFlip={shouldFlip}
      className={cn(popoverClassName)}
      style={{ ...style, ...popoverStyles }}
    >
      {state.collection.size > 0 ? renderListBox() : renderEmptyView()}
    </Popover>
  );

  return (
    <>
      <Label
        isRequired={props.isRequired}
        labelProps={{
          ...labelProps,
        }}
        size={props.size}
        containerClassName={labelClassName}
        renderRequiredIcon={renderRequiredIcon}
      >
        {props.label}
      </Label>
      <MultiSelectComboBoxTrigger
        {...props}
        ref={comboBoxInputRef as ForwardedRef<HTMLDivElement>}
        isOpen={state.isOpen}
        loadingState={loadingState}
        inputProps={{
          ...inputProps,
          disabled: isDisabled,
        }}
        inputRef={inputRef as RefObject<HTMLInputElement | HTMLTextAreaElement>}
        triggerProps={{
          ...buttonProps,
          isDisabled: isDisabled,
        }}
        triggerRef={triggerRef}
        isDisabled={isDisabled}
        state={state}
        size={size}
        className={`${getContainerStyles(isDisabled)} ${className}`}
        renderValueContainer={
          customRenderValueContainer
            ? customRenderValueContainer
            : renderValueContainer
        }
        shouldRenderClearIcon={shouldRenderClearIcon}
      />
      <HiddenSelect
        state={state}
        triggerRef={unWrappedTriggerRef}
        label={props.label}
        name={props.name}
      />
      {popover}
      <Hint
        id={hintId}
        containerClassName={hintClassName}
        error={props.errorMessage}
        hint={props.hint}
        size={props.size}
      />
    </>
  );
});

const _ComboBox = React.forwardRef(ComboBox) as <T>(
  props: MultiSelectComboBoxBaseProps<T> & { ref?: FocusableRef<HTMLElement> }
) => ReactElement;
export { _ComboBox as MultiSelectComboBox };
