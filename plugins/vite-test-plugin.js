// 手写vite 的plugin
export default (enforce) => {
    return {
        name: 'test',
	    enforce: enforce,
        buildStart () {
	        // dev server 启动的时候会被立即调用
	        console.log('buildStart', enforce)
        },
	    resolveId () {
		    // 解析某个文件  调用的钩子
		    console.log('resolveId', enforce)
	    },
	    //
	    load () {
		    console.log('load', enforce)
	    }
    }
}
