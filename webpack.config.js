const path = require("path");

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.ts',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',
    resolve: {
        extensions: ['.ts', '.tsx', 'js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /{node_modules}/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
}