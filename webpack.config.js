var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var path = require('path');

module.exports = {
	// context:__dirname + '/src',
	entry:{
		"webpack-dev-server/client?http://localhost:8080/",
		"./src/js/index.js"
	},
	output:{
		path:path.resolve(__dirname , "src"),
		filename:"bundle.js"
	},
	module:{
		loaders:[
			{
				test:/\.js?$/,
				exclude:/node_modules/,
				loader:'babel-loader',
				query:{
					presets:['react','es2015']
				}
			}
		]
	},
	devServer:{
		inline:true,
        contentBase:'./src'
    }
}