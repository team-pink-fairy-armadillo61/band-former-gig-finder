const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const express = require('express');
const { fixRequestBody } = require('http-proxy-middleware');


const isDevelopment = process.env.NODE_ENV !== 'production';


function fixProxyReq(proxyReq, req, res) {
  //console.log('in proxy', req)
  Object.keys(req.headers).forEach(function (key) {
    proxyReq.setHeader(key, req.headers[key]);
});
proxyReq.setHeader('Content-type', 'application/json');
}

function fixProxyRes(proxyRes, req, res) {
  Object.keys(proxyRes.headers).forEach(function (key) {
    res.append(key, proxyRes.headers[key]);
}); // remove header from response
}

const config = {
  entry: path.join(__dirname, 'src', 'client', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  mode: isDevelopment ? 'development' : 'production',
  devServer: {
    host: 'localhost',
    hot: true,
    port: 8080,
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, 'dist'),
      publicPath: '/',
    },
    headers: { 'Access-Control-Allow-Origin': '*' },
    proxy: {
      '/posts/**': {
        target: 'http://localhost:3000/',
        secure: false,
        
        changeOrigin: true,
        onProxyReq: fixProxyReq,
        onProxyRes: fixProxyRes,

      },
      '/users/**': {
        target: 'http://localhost:3000/',
        secure: false,
        changeOrigin: false,
        withCredentials: true,
        headers: {'Content-Type': 'application/json'},
        onProxyReq: fixProxyReq,
        onProxyRes: fixProxyRes,

      },
      '/assets/**': {
        target: 'http://localhost:3000/',
        secure: false,
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'client', 'index.html'),
    }),
    
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options:{
          plugins: [isDevelopment && require.resolve('react-refresh/babel')].filter(Boolean),
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader','css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset',
      },
    ],
  }
};


if (isDevelopment) {
  config.plugins.push(new ReactRefreshWebpackPlugin());
  
}

module.exports = config;