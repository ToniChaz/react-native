// Splash.spec.js

import 'react-native'
import React from 'react'
import Splash from '../../src/Splash.js'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

describe('Splash component', () => {
	test('renders correctly', () => {
		const tree = renderer.create(
			<Splash />
		)

		expect(tree.toJSON()).toMatchSnapshot()
	})
})