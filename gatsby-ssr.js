// Libraries
import React from 'react';

// Utilities
import { callingCardHtmlComment } from './src/utilities/callingCard';

function toHtmlComment(text) {
	return text.replace(/--+/g, '\u2014');
}

export const onRenderBody = ({ setPreBodyComponents }) => {
	setPreBodyComponents([
		<div
			key="calling-card"
			hidden
			aria-hidden="true"
			dangerouslySetInnerHTML={{
				__html: `<!--${toHtmlComment(callingCardHtmlComment)}-->`,
			}}
		/>,
	]);
};
