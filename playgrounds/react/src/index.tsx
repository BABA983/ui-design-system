import React from 'react';
import ReactDOM from 'react-dom';
import { Button,Color } from '@ui-design-system/react';
import '@ui-design-system/scss/lib/Button.css'
import '@ui-design-system/scss/lib/Utilities.css'

ReactDOM.render(
  <>
	<Button>Hello There!!~~</Button>
	<Button/>
	<Color hexCode='#000' width='lg' height='lg'/>
  </>,
  document.getElementById('root')
);
