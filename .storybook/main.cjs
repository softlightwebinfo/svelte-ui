const path = require('path');
const postcss = require('postcss');
const sveltePreprocess = require('svelte-preprocess');

module.exports = {
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx|svelte)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-svelte-csf'
	],
	webpackFinal: async (config) => {

		config.module.rules.push({
			test: /\.scss$/,
			use: ['style-loader', 'css-loader?url=false', 'sass-loader'],
			include: path.resolve(__dirname, '../'),
		});
		config.resolve.alias = {
			...config.resolve.alias,
			$lib: path.resolve(__dirname, '../src/lib'),
			$atoms: path.resolve(__dirname, '../src/lib/components/atoms'),
		};
		return config;
	},
	svelteOptions: {
		preprocess: [
			sveltePreprocess({
				postcss: true,
				preserve: ['ld+json'],
			}),
		],
	},
};