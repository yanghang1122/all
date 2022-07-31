(() => {
	function say(str:string) {
		return '我是' + str
	}
	let name = "杨"

	console.log(say(name))
})()

//手动编译 tsc ./index.ts