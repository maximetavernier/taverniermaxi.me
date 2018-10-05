var path = require('path');

function resolve(dir) {
    return path.resolve(__dirname, '..', dir);
}

module.exports = {
    entry: [ resolve('src/bundle.js') ],
    output: {
        filename: 'index.js',
        path: resolve('js')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                options: {
                    presets: ['react', 'es2015', 'env'],
                    plugins: ['add-module-exports', 'react-html-attrs', 'transform-class-properties']
                }
            }
        ]
    }
};