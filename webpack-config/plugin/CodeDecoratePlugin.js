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
        compiler.hooks.finishMake.tap('CodeDecoratePlugin', compilation => {
            compilation.hooks.afterCodeGeneration.tap('CodeDecoratePlugin', function (module) {
                return true;
                const value = module._source._value;
                const file = module.request;
                let newsource = module._source._value.replace(/['"]use strict['"];?/gi, '\n')//这里是源码
                module._source._value = newsource

                if (/node_modules\\_?webpack-dev-serve|node_modules\\_?webpack/.test(file)) {
                    console.log(file);
                    return;
                }
                if (/index.js/.test(module.request)) {
                    // let newsource = module._source._value;
                    // newsource = `\nconsole.log("我的模块名字是：${module.request}")\n` + newsource;
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



