import {
	browser,
	by,
	element,
	WebDriver,
	ExpectedConditions as until
} from 'protractor'

export const waitFor = {
	time(ms: number): any {
		return browser.driver.sleep(ms)
	},

	presenceOf(css: string, time: number = 3000): any {
		return browser.wait(
			until.presenceOf(element(by.css(css))),
			time,
			'"' + css + '" not present after ' + time / 1000 + ' seconds'
		)
	},

	noPresenceOf(css: string, time: number = 3000): any {
		return browser.wait(
			until.not(until.presenceOf(element(by.css(css)))),
			time,
			'"' + css + '" still present after ' + time / 1000 + ' seconds'
		)
	},

	link(pageName: string): any {
		return this.element("*[ng-reflect-router-link='" + pageName + "']")
	},

	element(css: string): any {
		try {
			this.presenceOf(css)
		} catch (e) {
			return null
		}
		return element(by.css(css))
	},

	elements(css: string): any {
		try {
			this.presenceOf(css)
		} catch (e) {
			return null
		}
		return element.all(by.css(css))
	},

	text(css: string): any {
		return this.element(css).getText()
	},

	value(css: string): any {
		return this.attribute(css, 'value')
	},

	attribute(css: string, attr: string): any {
		return this.element(css).getAttribute(attr)
	}
}
