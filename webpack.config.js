const path = require('path');

module.exports = {
    mode: "development",
    entry: "./src/main.ts",
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                include: [path.resolve(__dirname, 'src')]
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js'],
        fallback: {
            "url": false,
            "path": false,
            "zlib": false,
            "http": false,
            "https": false,
            "buffer": false,
            "fs": false,
            "stream": false,
            "util": false,
            "os": false
        }
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    devServer: {
        port: 8080,
        hot: true,
        open: true
    }
}

