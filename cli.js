#!/usr/bin/env node
// render app
'use strict';
const React = require('react');
const importJsx = require('import-jsx');
const {render} = require('ink');
const meow = require('meow');

const ui = importJsx('./ui');

const cli = meow(`
	Usage
	  $ React

	Options
		--name  Your name

	Examples
	  $ React --name=Jane
	  Hello, Jane
`);

render(React.createElement(ui, cli.flags));
