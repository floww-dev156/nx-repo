import React, {
  HTMLAttributes,
  Key,
  RefObject,
  useEffect,
  useRef,
  useState,
} from 'react';
import cn from 'classnames';
import { FocusableRef, LoadingState } from '@react-types/shared';
import { FocusScope } from '@react-aria/focus';
import { SpectrumComboBoxProps } from '@react-types/combobox';
import { useFilter } from '@react-aria/i18n';
import { useFocusableRef } from '@react-spectrum/utils';
import { useHover } from '@react-aria/interactions';
import { useOverlayTrigger } from '@react-aria/overlays';
import { useProviderProps } from '@react-spectrum/provider';
import { useSelect } from '@react-aria/select';

import { Button, Hierarchy, SubVariant } from '../Button';
import { CheckBoxComponent } from '../CheckBox/CheckBox';
import { ComboBoxButton } from './ComboboxButton';
import { Hint } from '../Hint';
import { Item } from '../Item/Item';
import { Label } from '../Label';
import { ListBoxBase, useListBoxLayout } from '../ListBox/ListBoxBase';
import { Loader } from '../Loader/Loader';
import { SearchSmIcon, XCircleIcon } from '@nx-repo/design-system-icons';
import { TagGroup } from '../Tag';
import { TextFieldBase } from './TextFieldBase';
import { Tray } from '../Tray';
import { useCountryCodeComboBox } from '../InternationalMobileNumber/useCountryCodeComboBox';
import { useMultiSelectComboBoxState } from './hooks/useMultiSelectComboBoxState';
import { XIcon } from '../../icons/XIcon';
import NoResultsFoundIcon from '../../icons/NoResultsFoundIcon';

import { LOADING } from '../../constants/ApiStatusConstants';
import {
  MultiSelectComboBoxBaseProps,
  MultiSelectComboBoxState,
} from './types';
import { BasicSize } from '../../types';
import { getMobileComboboxWrapperStyles } from './utils';

import { colors } from '../../style-guide';
import { getStylesBasedOnSize, inputFieldClassName } from './styles';
import {
  getMobileOptionStyles,
  mobileComboboxTrayContainerClassName,
  mobileComboboxHeaderClassName,
  mobileComboboxInputClassName,
  mobileComboboxInputContainerClassName,
  mobileComboboxOptionsContainerClassName,
  noResultsViewContainerClassName,
  noResultsViewTextClassName,
  mobileComboboxClearIconClassName,
  mobileComboboxPlaceholderClassName,
  mobileComboboxContainerClassName,
  mobileComboboxValueContainerClassName,
} from '../Combobox/styles';

import './index.css';

export interface MultiSelectMobileComboBoxProps {
  autoFocus?: boolean;
  buttonStyles?: string;
  cancelButtonClassname?: string;
  comboboxButtonClassname?: string;
  error?: string;
  fieldContainerStyles?: string;
  hint?: React.ReactNode;
  hintClassName?: string;
  inputClassName?: string;
  isDisabled?: boolean;
  isSearchable?: boolean;
  label?: string;
  loadingState?: LoadingState;
  parentRef?: RefObject<HTMLDivElement>;
  popOverStyles?: string;
  size?: BasicSize;
  wrapperWithPopOverStyles?: string;
  onLoadMore?: () => any;
}

interface MultiSelectCombobboxTrayProps extends MultiSelectMobileComboBoxProps {
  state: MultiSelectComboBoxState<any>;
  unwrappedTriggerRef: RefObject<HTMLElement>;
  overlayProps: HTMLAttributes<HTMLElement>;
  onClose: () => void;
  cancelButtonClassname?: string;
}

export const MultiSelectMobileComboBox = function MobileComboBox(
  props: MultiSelectMobileComboBoxProps & MultiSelectComboBoxBaseProps<any>,
  ref: FocusableRef<HTMLElement>
) {
  props = useProviderProps(props);

  const { contains } = useFilter({ sensitivity: 'base' });
  const state = useMultiSelectComboBoxState({
    ...props,
    defaultFilter: contains,
    allowsEmptyCollection: true,
    shouldCloseOnBlur: false,
    isFromMobile: true,
  });

  const triggerRef = useRef<HTMLElement>(null);
  const unwrappedTriggerRef = useFocusableRef(
    triggerRef as unknown as FocusableRef<HTMLElement>
  );

  const { triggerProps, overlayProps } = useOverlayTrigger(
    { type: 'listbox' },
    state,
    triggerRef as RefObject<Element>
  );

  const {
    error,
    isDisabled,
    isSearchable,
    trayChildrenWrapperClassName,
    trayContainerClassName,
    label,
    comboboxButtonClassname,
  } = props;

  const { hoverProps } = useHover({ isDisabled });

  const onClose = () => state.close();

  const [isFocus, setIsFocus] = useState(false);

  const onFocus = () => {
    setIsFocus(true);
  };

  const onBlur = () => {
    setIsFocus(false);
  };
  const removeSelectedItem = (key: Key): void => {
    const filteredKeys = Array.from(state.selectedKeys).filter(
      (each) => each !== key
    );
    state.setSelectedKeys(filteredKeys);
    props.onRemoveItem && props.onRemoveItem(key);
  };

  const clearAllSelectedItems = (event: any): void => {
    state.setSelectedKeys([]);
    props.onClearSelectedOptions && props.onClearSelectedOptions();
  };

  const renderMobileValueContainer = (): React.ReactNode => {
    return (
      <div className={mobileComboboxValueContainerClassName}>
        <TagGroup
          items={state.selectedItems}
          onRemove={removeSelectedItem}
          size={'ExtraSmall'}
          allowsRemoving
          tagsContainerClassName="flex-wrap gap-y-2"
        >
          {(item) => <Item>{(item as any).textValue}</Item>}
        </TagGroup>
      </div>
    );
  };

  return (
    <div className={mobileComboboxContainerClassName}>
      {props.label ? (
        <Label
          isRequired={props.isRequired}
          size={props.size}
          containerClassName={props.labelClassName}
          renderRequiredIcon={props.renderRequiredIcon}
        >
          {props.label}
        </Label>
      ) : null}
      <div className="relative">
        <ComboBoxButton
          buttonStyles={getMobileComboboxWrapperStyles(
            isFocus,
            error,
            isDisabled,
            comboboxButtonClassname
          )}
          state={state}
          triggerProps={triggerProps}
          ref={triggerRef}
          hoverProps={hoverProps}
          onPress={() => state.open(null, 'manual')}
          isDisabled={isDisabled}
          onFocus={onFocus}
          onBlur={onBlur}
        >
          <div className="flex items-center flex-1 pr-8">
            <div className="mr-2">
              <SearchSmIcon height={16} width={16} fill={colors['gray-400']} />
            </div>
            <span className={mobileComboboxPlaceholderClassName}>
              {props.placeholder ?? 'Search'}
            </span>
          </div>
        </ComboBoxButton>
        {state.selectedItems.length > 0 && (
          <div
            onClick={clearAllSelectedItems}
            className={mobileComboboxClearIconClassName}
          >
            <XIcon />
          </div>
        )}
      </div>

      <Hint
        id={'combobox-hint'}
        error={error}
        hint={props.hint}
        size={props.size}
        containerClassName={props.hintClassName}
      />
      {state.selectedItems.length > 0 ? renderMobileValueContainer() : null}
      <Tray
        isOpen={state.isOpen}
        onClose={onClose}
        label={label}
        isSearchable={isSearchable}
        isFixedHeight
        isNonModal
        trayChildrenWrapperClassName={`${trayChildrenWrapperClassName} mobile-combobox-tray`}
        trayContainerClassName={trayContainerClassName}
        {...overlayProps}
      >
        <CombobboxTray
          {...props}
          state={state}
          onClose={onClose}
          overlayProps={overlayProps}
          unwrappedTriggerRef={unwrappedTriggerRef}
        />
      </Tray>
    </div>
  );
};

const CombobboxTray = (
  props: MultiSelectCombobboxTrayProps &
    Omit<SpectrumComboBoxProps<any>, 'onSelectionChange' | 'validate'> &
    MultiSelectComboBoxBaseProps<any>
) => {
  const {
    state,
    apiStatus,
    unwrappedTriggerRef,
    overlayProps,
    onClose,
    isSearchable = true,
    loadingState,
    onLoadMore,
    inputClassName,
    size = 'Medium',
    cancelButtonClassname,
    ...otherProps
  } = props;

  const isAsync = loadingState != null;

  const inputRef: RefObject<HTMLInputElement> = React.useRef(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  const listBoxRef = useRef(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const layout = useListBoxLayout(state);
  const { inputProps, labelProps } = useCountryCodeComboBox(
    //@ts-ignore
    //FIXME: we added tsignore becuase react spectrum not supporting multi select
    {
      ...otherProps,
      inputRef,
      buttonRef: unwrappedTriggerRef,
      listBoxRef,
      popoverRef,
      keyboardDelegate: layout,
    },
    state
  );

  useEffect(() => {
    if (state.isOpen && inputRef.current) {
      timerRef.current = setTimeout(() => {
        //FIXME: This is a hack to fix the issue of the input not being focused when the popover is open
        inputRef.current?.focus();
      }, 100);
    }
    return () => {
      timerRef.current && clearTimeout(timerRef.current);
    };
  }, [state.isOpen]);

  const onClickClearIcon = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    state.setInputValue('');
    inputRef.current?.focus();
  };

  const ref = React.useRef(null);
  //@ts-ignore
  //FIXME: we added tsignore becuase react spectrum not supporting multi select
  const { menuProps } = useSelect(props, state, ref);

  //TODO: Abstract this function and use the same in both the desktop and mobile combobox
  const renderNoResults = () => (
    <div className={noResultsViewContainerClassName}>
      <NoResultsFoundIcon />
      <p className={noResultsViewTextClassName}>
        {isAsync && loadingState === 'loading'
          ? 'Loading...'
          : 'No Results Found'}
      </p>
    </div>
  );

  const renderClearIcon = () =>
    inputProps.value ? (
      <div className="h-[20px] ml-2">
        <button onClick={onClickClearIcon}>
          <XCircleIcon />
        </button>
      </div>
    ) : null;

  const mobileOption = (props: any) => {
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
        className={mobileComboboxOptionsContainerClassName}
      >
        <div
          style={{ wordBreak: 'break-word' }}
          className={getMobileOptionStyles(isSelected)}
        >
          <CheckBoxComponent isSelected={isSelected}>
            <div className="pl-2">{contents}</div>
          </CheckBoxComponent>
        </div>
      </div>
    );
  };

  const listBox = (
    <FocusScope restoreFocus>
      <ListBoxBase
        size="Medium"
        {...menuProps}
        state={state}
        ref={listBoxRef}
        layout={layout}
        isLoading={
          loadingState === 'loadingMore' || loadingState === 'filtering'
        }
        onLoadMore={onLoadMore}
        shouldSelectOnPressUp
        isFromMobile={true}
        renderEmptyState={renderNoResults}
        UNSAFE_className={cn('outline-none')}
        customOption={
          props.mobileCustomOption ? props.mobileCustomOption : mobileOption
        }
      />
    </FocusScope>
  );

  return (
    <div className={mobileComboboxTrayContainerClassName} ref={popoverRef}>
      {apiStatus === LOADING ? (
        <div className={cn('flex justify-center items-center p-4')}>
          <Loader fill={'#64748b'} />
        </div>
      ) : (
        <FocusScope restoreFocus contain>
          <div
            className={cn(
              mobileComboboxHeaderClassName,
              isSearchable ? 'flex' : 'hidden'
            )}
          >
            <div className={mobileComboboxInputContainerClassName}>
              <div>
                <SearchSmIcon
                  height={16}
                  width={16}
                  fill={colors['gray-400']}
                />
              </div>
              <TextFieldBase
                inputProps={inputProps}
                inputRef={inputRef}
                value={props.inputValue}
                isDisabled={props.isDisabled}
                validationState={props.validationState}
                isQuiet={props.isQuiet}
                inputClassName={cn(
                  `${mobileComboboxInputClassName} ${getStylesBasedOnSize(
                    size
                  )}  ${inputFieldClassName}`,
                  inputClassName
                )}
                labelProps={labelProps}
              />
              {renderClearIcon()}
            </div>
            <div className="ml-2">
              <Button
                size={'ExtraSmall'}
                hierarchy={Hierarchy.Tertiary}
                subVariant={SubVariant.Primary}
                onClick={onClose}
              >
                Cancel
              </Button>
            </div>
          </div>
          {listBox}
        </FocusScope>
      )}
    </div>
  );
};
