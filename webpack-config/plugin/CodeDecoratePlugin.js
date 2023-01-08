/**
 *
 */
const ConcatSource = require('webpack-sources').ConcatSource;
class CodeDecoratePlugin {
    constructor() {
    }
    apply(compiler) {
        const self = this;
        const webpack = compiler.webpack;
        compiler.hooks.compilation.tap('CodeDecoratePlugin', (compilation) =>{
            compilation.hooks.buildModule.tap('CodeDecoratePlugin', (module) => {
                console.log(module);
                if (module.context && module.context.includes('vue')) {
                    console.log(module);
                }
            });
        })
    }
}
module.exports = CodeDecoratePlugin;



