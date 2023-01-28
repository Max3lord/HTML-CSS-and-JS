// console.log('Hello World!')

let array = ['one', 'two', 'three'];

console.log(array.includes('one'));

// function start

checkAge = (age) => {(age > 18) ? console.log('Hello') : confirm('Are you sure?')};

min = (a, b) => {
	if (a > b) {
		return b;
	} else if (a < b) {
		return a;
	}
}

min = (x, y) => { return x < y ? x : y};

pow = (c, d) => {return c ** d};

ask = (question, yes, no) => {
	if (confirm(question)) {
		yes();
	} else {
		no(); 
	}
}

ask('Are you sure?',
		() => {alert('Are you ready');},
		() => {alert('Are you dont ready');}
)

// function end