import React from 'react';
import Spacing from '../../foundation/Spacing.js';

const Color = ({ hexCode, width = Spacing.sm, height = Spacing.sm, }) => {
    const className = `ui-width-${width} ui-height-${height}`;
    return (React.createElement("div", { className: className, style: {
            backgroundColor: hexCode,
        } }));
};

export { Color as default };
//# sourceMappingURL=Color.js.map