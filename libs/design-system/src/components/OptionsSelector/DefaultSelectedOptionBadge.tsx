import cn from 'classnames';
import { observer } from 'mobx-react';
import React from 'react';

import { XCloseIcon } from '@nx-repo/design-system-icons';

import { useThemeContext } from '../../Theme/Provider';

import * as Styles from './styles';
import { OptionsSelectorOptionType } from './types';

interface DefaultSelectedOptionBadge<T extends OptionsSelectorOptionType> {
  option: T;

  removeOption: (removeOptionId: string) => void;
}

const DefaultSelectedOptionBadge = <T extends OptionsSelectorOptionType>(
  props: DefaultSelectedOptionBadge<T>
): React.ReactElement => {
  const { option, removeOption } = props;

  const { theme, colorScheme } = useThemeContext();
  const { optionsSelector } = theme[colorScheme];

  const handleXClick = (): void => removeOption(option.id);

  return (
    <div
      className={cn(
        Styles.getSelectedOptionBadgeContainerStyles(optionsSelector)
      )}
      title={option.name}
    >
      <p
        className={cn(
          Styles.getSelectedOptionBadgeTextStyles(optionsSelector),
          'notranslate'
        )}
      >
        {option.name}
      </p>

      <button
        className={Styles.selectedOptionBadgeCloseIconContainerStyles}
        tabIndex={-1} // NOTE: disabling the focusing with `Tab` action
        onClick={handleXClick}
      >
        <XCloseIcon height={10} width={10} />
      </button>
    </div>
  );
};

export default observer(DefaultSelectedOptionBadge);
