// App.spec.js

import 'react-native'
import React from 'react'
import App from '../../src/App.js'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

describe('App component', () => {
	test('renders correctly', () => {
		const tree = renderer.create(
			<App />
		)

		expect(tree.toJSON()).toMatchSnapshot()
	})
})