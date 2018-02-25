var hwp = require('html-webpack-plugin');


module.exports ={
	context: __dirname + 'src',
	entry: {
 first:__dirname + '/index.js',
 ex:__dirname + '/index2.js'
		},
	devServer:{
		contentBase : __dirname + '/dist',
		inline: true
	},
	output:{
		path: __dirname + '/dist',
		filename:'[name].js'
	},
	plugins:[
		new hwp({
			template: __dirname + '/src/index.html',
			excludeChunks: ['ex']
		})
	]

};
