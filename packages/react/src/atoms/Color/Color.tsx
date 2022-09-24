import React from 'react';
import { Spacing } from '@ui-design-system/foundation';

export interface ColorProps {
  hexCode: string;
  width?: keyof typeof Spacing;
  height?: keyof typeof Spacing;
}

const Color: React.FC<ColorProps> = ({
  hexCode,
  width = Spacing.sm,
  height = Spacing.sm,
}) => {
  const className = `ui-width-${width} ui-height-${height}`;

  return (
    <div
      className={className}
      style={{
        backgroundColor: hexCode,
      }}
    ></div>
  );
};

export default Color;
