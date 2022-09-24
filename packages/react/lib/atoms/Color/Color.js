import React from 'react';
import { Spacing } from '@ui-design-system/foundation';

const Color = ({ hexCode, width = Spacing.sm, height = Spacing.sm, }) => {
    const className = `ui-width-${width} ui-height-${height}`;
    return (React.createElement("div", { className: className, style: {
            backgroundColor: hexCode,
        } }));
};

export { Color as default };
//# sourceMappingURL=Color.js.map
