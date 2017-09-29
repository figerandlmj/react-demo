var path = require('path');

module.exports = {
	// context:__dirname + '/src',
	devtool: 'source-map',
	entry:"./src/js/root.js",
	output:{
		path:path.resolve(__dirname , "dist"),
		publicPath:"/assets/",
		filename:"bundle.js"
	},
	module:{
		loaders:[
			{
				test:/\.js[x]?$/,
				exclude:/node_modules/,
				loader:'babel-loader',
				query:{
					presets:['react','es2015'],
					plugins:['react-html-attrs']
				}
			},
			{
				test:/\.css$/,
				// loader:'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]'
				loader:'style-loader!css-loader'
			}
		]
	}
}