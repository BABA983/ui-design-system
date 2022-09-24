import React from 'react';
import { Spacing } from '@ui-design-system/foundation';

export interface MarginProps {
  space?: keyof typeof Spacing;
  left?: boolean;
  right?: boolean;
  top?: boolean;
  bottom?: boolean;
  children?: React.ReactNode;
}

const Margin = ({
  space = 'xxxs',
  children,
  left,
  right,
  top,
  bottom,
}: MarginProps) => {
  let className = ``;

  if (!left && !right && !top && !bottom) {
    className = `ui-margin-${space}`;
  }

  if (left) {
    className = `${className} ui-margin-left-${space}`;
  }

  if (right) {
    className = `${className} ui-margin-right-${space}`;
  }

  if (top) {
    className = `${className} ui-margin-top-${space}`;
  }

  if (bottom) {
    className = `${className} ui-margin-bottom-${space}`;
  }

  return <div className={className}>{children}</div>;
};

export default Margin;
