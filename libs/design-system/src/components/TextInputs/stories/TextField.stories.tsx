import React, { useRef, useState } from 'react';
import { chain } from '@react-aria/utils';
import { action } from '@storybook/addon-actions';
import cn from 'classnames';

import { ChevronDownIcon } from '@nx-repo/design-system-icons';

import { ThemeContextProvider } from '../../../Theme/Provider';
import { defaultTheme } from '../../../Theme/theme';

import { TextField } from '../index';

export default {
  component: TextField,
  title: 'components/TextField',
};

export const WithPlaceHolderAndInitialValue = () => {
  const [value, setValue] = useState('');
  const [value2, setValue2] = useState('lens');
  const [value3, setValue3] = useState('lens');
  const [value4, setValue4] = useState('lens');

  return (
    <ThemeContextProvider theme={defaultTheme}>
      <>
        <TextField
          label="Environment"
          onChange={chain(action('onChange'), setValue)}
          id="production"
          shouldShowHint={true}
          hint="This is a hint text"
          containerClassName="w-1/4"
          title={value}
          value={value}
          size={'Small'}
          placeholder="production"
        />
        <div className="mt-3" />
        <TextField
          label="Label"
          onChange={chain(action('onChange'), setValue2)}
          id="Environment"
          shouldShowHint={true}
          hint="You cannot edit this"
          containerClassName="w-1/4"
          title={value2}
          size={'Small'}
          placeholder="Disabled"
          isDisabled
        />
        <div className="mt-3" />
        <TextField
          label="Label"
          onChange={chain(action('onChange'), setValue3)}
          value={value3}
          id="learning_point3"
          shouldShowHint={true}
          hint="With initial value"
          containerClassName="w-1/4"
          title={value3}
          size={'Small'}
        />
        <div className="mt-3" />

        <TextField
          label="Label"
          onChange={chain(action('onChange'), setValue4)}
          value={value4}
          id="learning_point4"
          shouldShowHint={true}
          hint="With initial value and disabled"
          containerClassName="w-1/4"
          title={value4}
          size={'Small'}
          isDisabled
        />
        <div className="mt-3" />
      </>
    </ThemeContextProvider>
  );
};

export const WithHintAndError = () => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  const [value4, setValue4] = useState('');

  return (
    <ThemeContextProvider theme={defaultTheme}>
      <>
        <TextField
          label="Label"
          onChange={chain(action('onChange'), setValue1)}
          value={value1}
          id="learning_point5"
          shouldShowHint={true}
          errorMessage="Add learning point"
          containerClassName="w-1/4"
          title={value1}
          size={'Small'}
        />
        <div className="mt-3" />

        <TextField
          label="Label"
          onChange={chain(action('onChange'), setValue2)}
          value={value2}
          id="learning_point6"
          shouldShowHint={true}
          errorMessage={
            <button
              onClick={chain(action('onClick button'))}
              className={cn('text-blue-600')}
            >
              Click Me
            </button>
          }
          containerClassName="w-1/4"
          size={'Small'}
        />
        <div className="mt-3" />

        <TextField
          label="Label"
          onChange={chain(action('onChange'), setValue3)}
          id="learning_point7"
          shouldShowHint={true}
          hint="Enter Text Here"
          containerClassName="w-1/4"
          title={value3}
          size={'Small'}
        />
        <div className="mt-3" />

        <TextField
          label="Label"
          onChange={chain(action('onChange'), setValue4)}
          id="learning_point8"
          shouldShowHint={true}
          hint={
            <button
              onClick={chain(action('onClick button'))}
              className={cn('text-blue-600')}
            >
              Click Me
            </button>
          }
          containerClassName="w-1/4"
          title={value4}
          size={'Small'}
        />
        <div className="mt-3" />
      </>
    </ThemeContextProvider>
  );
};

export const WithDifferentSizes = () => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');

  return (
    <ThemeContextProvider theme={defaultTheme}>
      <>
        <TextField
          label="Label"
          onChange={chain(action('onChange'), setValue1)}
          value={value1}
          id="learning_point1"
          containerClassName="w-1/4"
          title={value1}
          size={'ExtraSmall'}
          placeholder="Extra small size"
        />
        <div className="mt-3" />

        <TextField
          label="Label"
          onChange={chain(action('onChange'), setValue2)}
          value={value2}
          id="learning_point2"
          containerClassName="w-1/4"
          title={value2}
          size={'Small'}
          placeholder="Small size"
        />
        <div className="mt-3" />

        <TextField
          label="Label"
          onChange={chain(action('onChange'), setValue3)}
          value={value3}
          id="learning_point3"
          containerClassName="w-1/4"
          title={value3}
          size={'Medium'}
          placeholder="Medium size"
        />
        <div className="mt-3" />
      </>
    </ThemeContextProvider>
  );
};

export const WithLeftAndRightElements = () => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  const [value4, setValue4] = useState('');

  return (
    <ThemeContextProvider theme={defaultTheme}>
      <>
        <TextField
          label="Label"
          onChange={chain(action('onChange'), setValue1)}
          value={value1}
          id="learning_point12"
          containerClassName="w-1/4"
          title={value1}
          size={'Small'}
          leftElement={() => (
            <button
              onClick={chain(action('onClick button'))}
              className={cn('text-blue-600 text-xs')}
            >
              Click Me
            </button>
          )}
        />
        <div className="mt-3" />

        <TextField
          label="Label"
          onChange={chain(action('onChange'), setValue2)}
          value={value2}
          id="learning_point13"
          containerClassName="w-1/4"
          title={value2}
          size={'Small'}
          rightElement={() => <ChevronDownIcon />}
        />
        <div className="mt-3" />

        <TextField
          label="Label"
          onChange={chain(action('onChange'), setValue3)}
          value={value3}
          id="learning_point14"
          containerClassName="w-1/4"
          title={value3}
          size={'Small'}
          rightElement={() => <ChevronDownIcon />}
          leftElement={() => <ChevronDownIcon />}
        />
        <div className="mt-3" />

        <TextField
          label="Label"
          onChange={chain(action('onChange'), setValue4)}
          value={value4}
          id="learning_point15"
          containerClassName="w-1/4"
          title={value4}
          size={'Small'}
          rightElement={() => <ChevronDownIcon />}
          leftElement={() => <ChevronDownIcon />}
          errorMessage="Something went wrong"
        />
      </>
    </ThemeContextProvider>
  );
};

export const WithDifferentTypes = () => {
  const [value, setValue] = useState('123');
  const [value1, setValue1] = useState('hello@gmail.com');
  const [value2, setValue2] = useState('https://');

  return (
    <>
      <ThemeContextProvider theme={defaultTheme}>
        <>
          <TextField
            label="Label"
            onChange={chain(action('onChange'), setValue)}
            value={value}
            id="learning_point"
            containerClassName="w-1/4"
            title={value}
            size={'Small'}
            type="number"
          />
        </>
      </ThemeContextProvider>
      <div className="mt-3" />
      <ThemeContextProvider theme={defaultTheme}>
        <>
          <TextField
            label="Email"
            onChange={chain(action('onChange'), setValue1)}
            value={value1}
            id="learning_point"
            containerClassName="w-1/4"
            title={value1}
            size={'Small'}
            type="email"
          />
        </>
      </ThemeContextProvider>
      <div className="mt-3" />
      <ThemeContextProvider theme={defaultTheme}>
        <>
          <TextField
            label="Website Link"
            onChange={chain(action('onChange'), setValue2)}
            value={value2}
            id="learning_point"
            containerClassName="w-1/4"
            title={value2}
            size={'Small'}
            type="url"
          />
        </>
      </ThemeContextProvider>
    </>
  );
};
