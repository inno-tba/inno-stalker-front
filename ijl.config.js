const pkg = require('./package')

module.exports = {
    apiPath: 'stubs/api',
    webpackConfig: {
        externals: {
            'react': 'React'
        },
        output: {
            publicPath: `/static/${pkg.name}/${process.env.VERSION || pkg.version}/`
        }
    },
    navigations: {
        'inno-stalker-front.main': '/inno-stalker-front'
    },
    features: {
        'inno-stalker-front': {
            // add your features here in the format [featureName]: { value: string }
        },
    },
    devServer: {
        historyApiFallback: true,
    },
    config: {
        // key: 'value'
    }
}
