import React from 'react';
import { FontSize } from '@ui-design-system/foundation';
export interface TextProps {
    size?: keyof typeof FontSize;
    children?: React.ReactNode;
}
declare const Text: ({ size, children }: TextProps) => JSX.Element;
export default Text;
