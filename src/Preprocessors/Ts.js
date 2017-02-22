let Preprocessor = require('./Preprocessor');

class Ts extends Preprocessor {
    /**
     * Fetch the Webpack loaders for Typescript.
     */
    loaders(sourceMaps) {
        return [{
            loader: 'ts-loader' + (sourceMaps ? '?sourceMap' : ''),
            options: this.pluginOptions
        }];
    }
}

module.exports = Ts;
