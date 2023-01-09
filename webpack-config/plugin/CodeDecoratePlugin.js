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
        compiler.hooks.make.tap('CodeDecoratePlugin', compilation => {
            compilation.hooks.succeedModule.tap('CodeDecoratePlugin', function (module) {
                const value = module._source._value;
                const file = module.request;
                if (!/webpack-dev-serve|\/webpack\//.test(file)) {
                    console.log(file);
                }
                if (/index.js/.test(module.request)) {
                    let newsource = module._source._value//这里是源码
                    newsource = newsource.replace(/777777777/g,`(function(){console.log(123);return 90;})()`)
                    module._source._value = newsource
                }
            });
        })
        // compiler.hooks.compilation.tap('CodeDecoratePlugin', (compilation) =>{
        //     // compilation.hooks.buildModule.tap('CodeDecoratePlugin', (module) => {
        //     //     console.log(module);
        //     //     if (module.context && module.context.includes('vue')) {
        //     //         console.log(module);
        //     //     }
        //     // });
        //     compilation.hooks.processAssets.tap('CodeDecoratePlugin', function (module) {
        //         // console.log(module);
        //         // console.log(module.context);
        //         console.log(arguments);
        //         // if (module.context && module.context.includes('vue')) {
        //         //     console.log(module);
        //         // }
        //     });

        //     // compilation.hooks.finishModules.tap('CodeDecoratePlugin', (module) => {
        //     //     console.log(module);
        //     //     if (module.context && module.context.includes('vue')) {
        //     //         console.log(module);
        //     //     }
        //     // });
        // })


    }
}
module.exports = CodeDecoratePlugin;



