'use strict';
const React = require('react');
const {Text} = require('ink');
const Gradient = require('ink-gradient');
const importJsx = require('import-jsx');
const BigText = require('ink-big-text')
const Table = importJsx('./src/Table')

const App = ({name = 'Stranger'}) => (
	<>
		<Text>
			Hello, <Text color="green">{name}</Text>
			<BigText text="crypto CLI" align="center" font="chrome"/>
		</Text>
		<Table/>
	</>
);

module.exports = App;
