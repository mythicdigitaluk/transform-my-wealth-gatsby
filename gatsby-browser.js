
// Libraries
import React from 'react'

// Styles
import './src/scss/style.scss'

// Utilities
import {
	callingCardConsoleBody,
	callingCardConsoleTitle,
} from './src/utilities/callingCard'

// Context
import { SignUpModalContextProvider } from './src/contexts/SignUpModal'

console.log(
	`%c${callingCardConsoleTitle}%c\n${callingCardConsoleBody}`,
	'font-weight: 700; font-size: 13px; color: #5e29d6;',
	'font-weight: 400; font-size: 12px; color: inherit;',
)

// Wrap app with context
export const wrapRootElement = ({ element }) => (
	<SignUpModalContextProvider>
		{element}
	</SignUpModalContextProvider>
)