var path = require('path');

module.exports = {
	// context:__dirname + '/src',
	entry:"./src/js/index.js",
	output:{
		path:path.resolve(__dirname , "dist"),
		publicPath:"/assets/",
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
	}
}