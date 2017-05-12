// Error.spec.js

import 'react-native'
import React from 'react'
import Error from '../../../src/components/Error.js'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

describe('Error component', () => {
	test('renders correctly', () => {
		const error = {
			message: 'The custom error message'
		}

		const tree = renderer.create(
			<Error error={error} />
		)

		expect(tree.toJSON()).toMatchSnapshot()
	})
})