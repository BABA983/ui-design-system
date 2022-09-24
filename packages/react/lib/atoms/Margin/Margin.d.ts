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
declare const Margin: ({ space, children, left, right, top, bottom, }: MarginProps) => JSX.Element;
export default Margin;
