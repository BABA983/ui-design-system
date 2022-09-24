import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Color, Margin, Select, Text } from '@ui-design-system/react';
import '@ui-design-system/scss/lib/Button.css';
import '@ui-design-system/scss/lib/Utilities.css';
import '@ui-design-system/scss/lib/Text.css';
import '@ui-design-system/scss/lib/Margin.css';
import '@ui-design-system/scss/lib/Select.css';

const options = [{
    label: 'Strict Black',
    value: 'strict-black'
}, {
    label: 'Heavenly Green',
    value: 'heavenly-green'
}, {
    label: 'Sweet Pink',
    value: 'pink'
}]

ReactDOM.render(
  <>
    <Button>Hello There!!~~</Button>
    <Button />
    <Color hexCode="#000" width="lg" height="lg" />
    <Text size={'xl'}>Hello World</Text>
    <Margin left>
      <Text size="xs">Margin Text</Text>
    </Margin>
	<Select options={options}/>
	<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima esse delectus pariatur repudiandae et rem repellat nostrum iure sunt quasi, iusto tenetur est, quia quo ipsam debitis quae nisi minus.</p>
  </>,
  document.getElementById('root')
);
