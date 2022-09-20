import React from 'react';

interface Props {
  children: React.ReactNode;
}
const Button = (props: Props) => {
  const { children } = props;
  return <button>{children}</button>;
};

export default Button;
