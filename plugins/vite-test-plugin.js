// 手写vite 的plugin
export default (enforce) => {
    return {
        name: 'test',
	    enforce,
	    // dev server 启动的时候会被立即调用
        buildStart () {
            console.log('buildStart', enforce)
        },
	    // 解析某个文件  调用的钩子
	    resolveId () {
		    console.log('resolveId', enforce)
	    },
	    //
	    load () {
		    console.log('load', enforce)
	    }
    }
}
