import React from 'react';
import { FontSize } from '@ui-design-system/foundation';

const Text = ({ size = FontSize.base, children }) => {
    const className = `ui-text ui-text-${size}`;
    return React.createElement("p", { className: className }, children);
};

export { Text as default };
//# sourceMappingURL=Text.js.map
