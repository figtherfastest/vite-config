// 手写vite 的plugin
export default function (enforce) {
    return {
        name: 'test',
	    config (userConfig, env) {
            // userConfig 原始用户配置
		    // env:一个描述配置环境的变量，包含正在使用的 mode 和 command
            return {
                // 返回值 会和 用户的原始配置发生 合并
                resolve: {
                    alias: {
                        '@view': '/src/view'
                    }
                }
            }
	    },
	    configResolved (config) {
            // 它会拿到 上面 config 运行完成之后真是的config
	    }
	    // enforce,
        // buildStart: function () {
	    //     // dev server 启动的时候会被立即调用
	    //     console.log('buildStart', enforce)
        // },
	    // resolveId () {
        //     // 解析某个文件  调用的钩子
        //     console.log('resolveId', enforce)
	    // },
	    // //
	    // load () {
        //     // 加载某个文件
        //     console.log('load', enforce)
	    // },
	    // transform (code, id, ssr) {
        //     // 编译某个文件
        //     console.log('transform', enforce)
	    // }
    }
}
