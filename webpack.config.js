const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.NODE_ENV === 'production'
const DEFAULT_FILENAME = 'vuejs-dialog'

const extractCss = new MiniCssExtractPlugin({
	filename: DEFAULT_FILENAME + '.min.css'
})

const COMMON = require('./webpack.base.config')

const CONFIG = Object.assign({}, COMMON, {
	name: 'dist',
	entry: {
		'default': './src/plugin/js',
		'mixin': './src/plugin/js/mixins/dialog-mixin.js'
	},
	output: {
		library: ['VuejsDialog', '[name]'],
		libraryTarget: 'umd',
		path: path.resolve(__dirname, './dist'),
		publicPath: '/dist/',
		filename: function (file) {
			"use strict"
			const chunkName = file.chunk.name
			const fileName = chunkName === 'default'
				? DEFAULT_FILENAME
				: [DEFAULT_FILENAME, chunkName].join('-')
			return `${fileName}.min.js`
		}
	}
})

if (isProduction) {
	CONFIG.plugins = (CONFIG.plugins || []).concat([
		extractCss
	])
}

module.exports = CONFIG
