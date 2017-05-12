import wd from 'wd'
import 'colors'
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'

chai.use(chaiAsPromised)

const should = chai.should()
chaiAsPromised.transferPromiseness = wd.transferPromiseness

const local = {
	host: 'localhost',
	port: 4723
}

const configure = (driver) => {
	// See whats going on
	driver.on('status', (info) => {
		console.log(info.cyan)
	})
	driver.on('command', (meth, path, data) => {
		console.log(' > ' + meth.yellow, path.grey, data || '')
	})
	driver.on('http', (meth, path, data) => {
		console.log(' > ' + meth.magenta, path, (data || '').grey)
	})
}

const caps = () => {
	if (process.env.ios) {
		return {
			browserName: '',
			'appium-version': '1.6',
			platformName: 'iOS',
			platformVersion: '10.3',
			deviceName: 'iPhone 5s',
			app: process.env.DEV
				? `${process.env.PWD}/ios/build/Build/Products/Release-iphonesimulator/WeatherApp.app`
				: 'http://appium.github.io/appium/assets/TestApp7.1.app.zip'
		}
	} else {
		return {
			browserName: '',
			'appium-version': '1.6',
			platformName: 'Android',
			platformVersion: '6.0',
			deviceName: 'Nexus5',
			app: process.env.DEV
				? `${process.env.PWD}/android/app/build/outputs/apk/app-debug.apk`
				: 'http://appium.github.io/appium/assets/ApiDemos-debug.apk'
		}
	}
}

export {
	local,
	configure,
	caps,
	should
}