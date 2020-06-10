const path = require('path');
const distDir = path.resolve(__dirname, 'dist');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js',
        path: distDir,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    devServer: {
        contentBase: distDir,
        historyApiFallback: true,
        port: 3000,
    },
};
