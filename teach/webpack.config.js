const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  entry: {
      index:"./src/js/index.js",
      course:"./src/js/course.js",
      job:"./src/js/job.js"
  },
  output: {
      path: __dirname + "/public",
      filename: "./js/[name].js"
  },
  devServer: {
    contentBase: "./public",
    inline: true
  }, 
  module: {
      rules: [
          {
              test: /(\.jsx|\.js)$/,
              use: {
                  loader: "babel-loader",
                  options: {
                      presets: [
                          "env", "react"
                      ]
                  }
              },
              exclude: /node_modules/
          },
          {
              test: /\.css$/,
              use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: {
                  loader:'css-loader',
                  options:{
                    minimize:true
                  }
                }
              })
          },
          {
    　　　　　test: /\.html$/,
    　　　　　loader: 'html-withimg-loader'
    　　　},
          {
              test: /\.(png|jpg|gif|jpeg)$/,
              use: [{
                  loader: 'url-loader?&name=img/[name].[ext]'
              }]
          },
          { 
              test: /\.(woff|svg|eot|xttf|ttf|woff2)\??.*$/, 
              use: [
                  {
                      loader: 'url-loader?limit=50000&name=./fonts/[name].[ext]'
                  }
              ]    
          }
      ]
  }, 
  plugins: [
    new ExtractTextPlugin("./css/[name].css"),
    new HtmlWebpackPlugin({
        template:'./src/index.html',
        filename:'./index.html',
        chunks:['index'],
        hash:true,
        minify:{
            removeAttributeQuotes: true, // 移除属性的引号
            caseSensitive: false, //是否大小写敏感
            removeComments:true, // 去除注释
            removeEmptyAttributes:true, // 去除空属性
            collapseWhitespace: true //是否去除空格
        }
    }),
    new HtmlWebpackPlugin({
        template:'./src/course.html',
        filename:'./course.html',
        chunks:['course'],
        hash:true,
        minify:{
            removeAttributeQuotes: true, // 移除属性的引号
            caseSensitive: false, //是否大小写敏感
            removeComments:true, // 去除注释
            removeEmptyAttributes:true, // 去除空属性
            collapseWhitespace: true //是否去除空格
        }
    }),
    new HtmlWebpackPlugin({
        template:'./src/job.html',
        filename:'./job.html',
        chunks:['job'],
        hash:true,
        minify:{
            removeAttributeQuotes: true, // 移除属性的引号
            caseSensitive: false, //是否大小写敏感
            removeComments:true, // 去除注释
            removeEmptyAttributes:true, // 去除空属性
            collapseWhitespace: true //是否去除空格
        }
    })
  ]
}