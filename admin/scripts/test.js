import { BuildUtils } from 'that-build-library'

export default Promise.resolve()
	.then(() => BuildUtils.echo('BUILDING TESTS'))
	.then(() => BuildUtils.tsc('tsconfig.test.json'))
	.then(() => BuildUtils.test(10, 'src', ['src/index.js']))
	.catch(e => {
		console.error(e | 'Undefined error occurred')
		process.exit(1)
	})
