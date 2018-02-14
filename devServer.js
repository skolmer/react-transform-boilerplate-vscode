/*eslint no-console: 0*/
const express = require('express')

const app = express()

const host = process.env.npm_package_config_host || 'localhost'
const port = process.env.npm_package_config_port || 3000

app.set('port', port)

const webpack = require('webpack')
const webpackConfig = require('./webpack.config.dev')
const compiler = webpack(webpackConfig)

const wdMiddleware = require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
})

app.use(wdMiddleware)

const whMiddleware = require('webpack-hot-middleware')(compiler)

app.use(whMiddleware)

app.get('/test', (req, res) => {
    res.send('this is a response from the server')
})

app.listen(app.get('port'), (err) => {
    if (err) {
        return console.error(err)
    }

    console.log(`listening on http://${host}:${port}`)
})