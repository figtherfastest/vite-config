// 手写vite 的plugin
export default function (enforce) {
    return {
	    name: 'test',
	    enforce,
        buildStart: function () {
	        // dev server 启动的时候会被立即调用
	        console.log('buildStart', enforce)
        },
	    resolveId () {
            // 解析某个文件  调用的钩子
            console.log('resolveId', enforce)
	    },
	    //
	    load () {
            // 加载某个文件
            console.log('load', enforce)
	    },
	    transform (code, id, ssr) {
            // 编译某个文件
            console.log('transform', enforce)
	    }
    }
}
