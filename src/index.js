import Button from './button';
import KittenImage from './image';
import HamsterImage from
 './image2';

import style from './style/globalStyle.css';

import { multiply } from './mathStuff';

var messages = require('./messages');
var app = document.getElementById('app');

const message1 = () => (`
	<p>
		${Button.button}<br/>
		${KittenImage}<br/>
		${HamsterImage}<br/>
	</p>
`);

const message2 = () => (multiply(3,3))

const message3 = () => (`
	DEV: ${DEVELOPMENT.toString()}<br/>
	PROD: ${PRODUCTION.toString()}<br/>
`)

app.innerHTML = message3();

Button.attachEl()

if (DEVELOPMENT) {
	if (module.hot) {
		module.hot.accept();
	}
}