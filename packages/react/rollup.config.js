import RollupPluginTypeScript2 from 'rollup-plugin-typescript2'

export default {
	input: [
		'src/index.ts',
		'src/atoms/Button/index.ts'
	],
	output: {
		dir: 'lib',
		format: 'esm',
		sourcemap: true
	},
	plugins: [RollupPluginTypeScript2()],
	// preserve the structure of the source folder
	preserveModules: true,
	external: ['react']
}