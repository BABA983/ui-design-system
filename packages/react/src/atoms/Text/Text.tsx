import React from 'react';
import { FontSize } from '@ui-design-system/foundation';

export interface TextProps {
  size?: keyof typeof FontSize;
  children?: React.ReactNode;
}

const Text = ({ size = FontSize.base, children }: TextProps) => {
  const className = `ui-text ui-text-${size}`;

  return <p className={className}>{children}</p>;
};

export default Text;
