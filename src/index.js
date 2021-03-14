module.exports = function check(str, bracketsConfig) {
	if (str.length % 2 !== 0) return false;

	const stack = [];
	const map = new Map(bracketsConfig);

	stack.push(str[0]);

	for (let i = 1; i < str.length; i++) {
		stack.push(str[i]);
		if (stack[stack.length-1] == map.get(stack[stack.length-2])){
			stack.pop();
			stack.splice(stack.length-1, 1);
		} 
	}

	if (stack.length === 0) {
		return true;
	} else {
		return false;
	}
}
