const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devMode = process.env.NODE_ENV !== "production";

module.exports = {
    mode: devMode,
    target: ['web', 'es6'],
    entry: {
        index: './src/pages/home/index.tsx',
        admin_catalog: './src/pages/admin/catalog/index.tsx',
        catalog: './src/pages/catalog/index.tsx',
        sell: './src/pages/transactions/sell/index.tsx',
    },
    output: {
        clean: {
            keep(asset) {
                return asset.includes('_images');
            },
        },
        compareBeforeEmit: true,
        publicPath: '',
        filename: !devMode ? './bundles/[name].[contenthash].bundle.js' : './bundles/[name].bundle.js',
        // path: path.resolve(__dirname, '../backend-restaurant-node-fastify/app/', 'public'),
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'assets/[name][ext]',
        asyncChunks: true
    },
    module: {
        rules: [
            {
                test: /(\.?ts$|\.?tsx$)/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "swc-loader"
                    }
                ]
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: 'html-loader'
            },
            {
                test: /\.hbs$/,
                exclude: /node_modules/,
                use: [
                    'handlebars-loader'
                ]
            },
            {
                test: /\.webp$/,
                type: 'asset/resource',
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            publicPath: '',
            title: "Index",
            description: "This is the index page",
            template: 'src/templates/index.hbs',
            cache: true,
            hash: true,
            scriptLoading: "module",
            minify: {
                removeComments: true,
                collapseWhitespace: true
            },
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            filename: "catalog.html",
            publicPath: '',
            title: "Catalog",
            description: "This is the catalog page",
            template: 'src/templates/index.hbs',
            cache: true,
            hash: true,
            scriptLoading: "module",
            minify: {
                removeComments: true,
                collapseWhitespace: true
            },
            chunks: ['catalog']
        }),
        new HtmlWebpackPlugin({
            filename: "/transactions/sell.html",
            publicPath: '../',
            title: "Sell",
            description: "This is the sell page",
            template: 'src/templates/index.hbs',
            cache: true,
            hash: true,
            scriptLoading: "module",
            minify: {
                removeComments: true,
                collapseWhitespace: true
            },
            chunks: ['sell']
        }),
        new HtmlWebpackPlugin({
            filename: "/admin/catalog.html",
            publicPath: '../',
            title: "Admin - Catalog",
            description: "This is the admin catalog page",
            template: 'src/templates/index.hbs',
            cache: true,
            hash: true,
            scriptLoading: "module",
            minify: {
                removeComments: true,
                collapseWhitespace: true
            },
            chunks: ['admin_catalog']
        })
    ],
    optimization: {
        minimize: true,
        splitChunks: {
            chunks: 'all',
            minSize: 1000,
            automaticNameDelimiter: '_'
        }
    },
    resolve: {
        alias: {
            src: path.resolve(__dirname, 'src'),
            pages: path.resolve(__dirname, 'src/pages/'),
            _common: path.resolve(__dirname, 'src/pages/_common/'),
            hooks: path.resolve(__dirname, 'src/hooks/'),
            utils: path.resolve(__dirname, 'src/utils/'),
            images: path.resolve(__dirname, 'src/images/'),
            themes: path.resolve(__dirname, 'src/themes/'),
            json: path.resolve(__dirname, 'src/json')
        },
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
    },
    devServer: {
        port: 3001,
        static: './dist',
        devMiddleware: {
            index: 'index.html',
            writeToDisk: true
        },
        hot: true,
        // historyApiFallback: true,
    },
    // devtool: false,
    experiments: {
        topLevelAwait: true
    }
}