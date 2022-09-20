import React from 'react';

interface Props {
  children: React.ReactNode;
}
const Button = (props: Props) => {
  const { children } = props;
  return <button className='ui-button-container'>{children}</button>;
};

export default Button;
