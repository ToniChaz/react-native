import { defineSupportCode } from 'cucumber'
import { local, configure, caps } from '../../../config/appium-setup'
import wd from 'wd'
import _ from 'underscore'

defineSupportCode(({setDefaultTimeout, After, Before, Given, When, Then}) => {
	setDefaultTimeout(60 * 1000)
	let driver

	Before(() => {
		driver = wd.promiseChainRemote(local)
		configure(driver)

		let desired = _.clone(caps())

		return driver.init(desired).setImplicitWaitTimeout(3000)
	})

	After(() => {
		return driver.quit()
	})

	Given(/^I am on the Info screen and see the "(.*)" title$/, (title) => {
		return driver.elementByAccessibilityId(title).text().then((text) => {
			text.should.equal(title)
		})
	})

	When(/^I click on Search Your City button$/, () => {
		if (process.env.ios) {
			return driver.elementById('searchBtn').click().sleep(1000)
		} else {
			return driver.elementByClassName('android.widget.Button').click().sleep(1000)
		}

	})

	Then(/^I should see "(.*)" title$/, (title) => {
		return driver.elementByAccessibilityId(title).text().then((text) => {
			text.should.equal(title)
		})
	})
})