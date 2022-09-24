import React from 'react';

const Margin = ({ space = 'xxxs', children, left, right, top, bottom, }) => {
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
    return React.createElement("div", { className: className }, children);
};

export { Margin as default };
//# sourceMappingURL=Margin.js.map
