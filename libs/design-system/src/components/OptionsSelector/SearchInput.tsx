import cn from 'classnames';
import debounce from 'lodash/debounce';
import { observer } from 'mobx-react';
import React, { useRef } from 'react';

import { SearchSmIcon } from '@nx-repo/design-system-icons';

import { TextField } from '../TextInputs';

import { DEFAULT_DEBOUNCE_UPDATE_SEARCH_TEXT_TIME_DELAY } from './constants';
import * as Styles from './styles';

interface DebounceSearchInputProps {
  timeDelay?: number;

  triggerUpdate?: (value: string) => void;
}

interface SearchInputProps {
  searchText: string;
  shouldFocusAtInitial: boolean;

  updateSearchText: (searchText: string) => void;

  containerClassName?: string;
  debounceProps?: DebounceSearchInputProps;
  placeholderText?: string;
}

const SearchInput = (props: SearchInputProps): React.ReactElement => {
  const {
    searchText,
    shouldFocusAtInitial,

    updateSearchText,

    containerClassName = '',
    debounceProps = {},
    placeholderText = 'Search',
  } = props;

  const debounceUpdateSearchTextRef = useRef(
    debounceProps.triggerUpdate
      ? debounce(
          debounceProps.triggerUpdate,
          debounceProps.timeDelay ??
            DEFAULT_DEBOUNCE_UPDATE_SEARCH_TEXT_TIME_DELAY
        )
      : null
  );

  const renderLeftElement = (): React.ReactElement => (
    <div className={Styles.optionsHeaderSearchInputLeftElementStyles}>
      <SearchSmIcon height={18} width={18} />
    </div>
  );

  const handleOnChangeValue = (searchText: string): void => {
    updateSearchText(searchText);

    debounceUpdateSearchTextRef.current?.(searchText);
  };

  return (
    <div className={cn(containerClassName)}>
      <TextField
        size={'ExtraSmall'}
        autoFocus={shouldFocusAtInitial}
        placeholder={placeholderText}
        value={searchText}
        leftElement={renderLeftElement}
        onChange={handleOnChangeValue}
      />
    </div>
  );
};

export default observer(SearchInput);
