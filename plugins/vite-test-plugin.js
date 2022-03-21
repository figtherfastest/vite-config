// 手写vite 的plugin
export default function (enforce) {
    return {
	    config (userConfig, env) {
            // 把当前的config 和 用户的配置合并之后，返回
            // userConfig 原始用户配置
		    // env:一个描述配置环境的变量，包含正在使用的 mode 和 command
            return {
                resolve: {
                    alias: {
                        '@view': '/src/view'
                    }
                }
            }
	    },
	    configResolved (config) {
            // 它会拿到 上面 config 运行完成之后 的config
		    console.log(config.resolve)
	    },
	    configureServer (server) {
            // 模块管理相关的内容， 是用于配置开发服务器的钩子
            //  server 中包含所有模块的信息
		    server.middlewares.use((req, res, next) => {
			    // 自定义请求处理...
			    if (req.url === '/test') {
				    res.end('configureServer  transform test')
			    } else {
				    next()
			    }
		    })
	    },
	    transformIndexHtml (html) {
            // 对输入的html 做处理
		    // html 是index.html 的内容
		    return html.replace('<div id="app"></div>', '<div id="app" class="6666"></div>')
	    },
	    handleHotUpdate (ctx) {
            //
            ctx.server.ws.send({
	            type: 'custom',
                event: 'test',
	            data: { name: '2222' }
            })
	    }
	    // name: 'test',
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
