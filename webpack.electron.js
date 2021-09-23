const path = require('path');

module.exports = {
    // Build Mode
    mode: 'development',
    // Electron Entrypoint
    entry: './src/main.ts',
    target: 'electron-main',
    resolve: {
        alias: {
            ['@']: path.resolve(__dirname, 'src')
        },
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [{
            test: /\.ts$/,
            include: /src/,
            use: [{ loader: 'ts-loader' }]
        },
        {
            test: /\.s[ac]ss$/i,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader',
            ],
        }]
    },
    output: {
        path: __dirname + '/dist',
        filename: 'main.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist/renderer.js'),
        compress: true,
        port: 9000
    },
}
