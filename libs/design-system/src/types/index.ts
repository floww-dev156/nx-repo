import React, {
  AriaAttributes,
  AriaRole,
  CSSProperties,
  DOMAttributes as ReactDOMAttributes,
  Key,
  RefObject,
} from 'react';

import { Node } from '@react-types/shared';

export type SmallAndMedium = 'Small' | 'Medium';
export type BasicSize = 'ExtraSmall' | SmallAndMedium;

export type ExtendedSize =
  | BasicSize
  | 'Large'
  | 'ExtraLarge'
  | 'DoubleExtraLarge';

export type FocusRingVariant =
  | 'Primary'
  | 'Destructive'
  | 'Gray'
  | 'Success'
  | 'Purple'
  | 'None';

export type Placement =
  | 'bottom'
  | 'bottom left'
  | 'bottom right'
  | 'bottom start'
  | 'bottom end'
  | 'top'
  | 'top left'
  | 'top right'
  | 'top start'
  | 'top end'
  | 'left'
  | 'left top'
  | 'left bottom'
  | 'start'
  | 'start top'
  | 'start bottom'
  | 'right'
  | 'right top'
  | 'right bottom'
  | 'end'
  | 'end top'
  | 'end bottom';

export interface SelectedItem {
  name: string;
  key: string;
}

export interface CustomBadgeArgs {
  onRemove: (key: Key) => void;
  item: any;
}

export interface FocusableElement extends Element, HTMLOrSVGElement {}

export interface DOMAttributes<T = FocusableElement>
  extends AriaAttributes,
    ReactDOMAttributes<T> {
  id?: string | undefined;
  role?: AriaRole | undefined;
  tabIndex?: number | undefined;
  style?: CSSProperties | undefined;
  className?: string | undefined;
}

export interface CustomOptionType<T> {
  optionRef: RefObject<HTMLDivElement>;
  item: Node<T>;
  labelProps: DOMAttributes;
  descriptionProps: DOMAttributes;
  isSelected: boolean;
  isFocused: boolean;
  isDisabled: boolean;
  optionProps: DOMAttributes;
}

export type AlertCardVariant =
  | 'DEFAULT'
  | 'PRIMARY'
  | 'GRAY'
  | 'ERROR'
  | 'WARNING'
  | 'SUCCESS';

export interface AlertCardAction {
  text: string;
  onClick: () => void;
}

export interface ValidationResponseType {
  errorMessage: string;
  shouldShowError: boolean;
}
