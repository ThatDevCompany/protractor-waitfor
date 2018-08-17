import { BuildUtils } from 'that-build-library'

export default Promise.resolve()
	.then(() => BuildUtils.echo('BUILDING'))
	.then(() => BuildUtils.clean('dist'))
	.then(() => BuildUtils.tsc('tsconfig.json'))
	.then(() => BuildUtils.copy('README.md', 'dist'))
	.then(() => BuildUtils.copy('LICENSE', 'dist'))
