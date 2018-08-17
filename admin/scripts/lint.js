import { BuildUtils } from 'that-build-library'

export default Promise.resolve()
	.then(() => BuildUtils.echo('Prettiering SRC Typescript'))
	.then(() => BuildUtils.prettierTS('src'))

	.then(() => BuildUtils.echo('Prettiering Admin Javascript'))
	.then(() => BuildUtils.prettierJS('admin'))

	.catch(console.error)
