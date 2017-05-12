// index.ios.spec.js

import 'react-native'
import React from 'react'
import Index from '../../index.ios.js'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

describe('Index component', () => {
	test('renders correctly', () => {
		const tree = renderer.create(
      <Index />
		)

		expect(tree.toJSON()).toMatchSnapshot()
	})
})

