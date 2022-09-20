import React from 'react';

const Button = (props) => {
    const { children } = props;
    return React.createElement("button", { className: 'ui-button-container' }, children);
};

export { Button as default };
//# sourceMappingURL=Button.js.map
