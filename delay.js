function delay (f, ms) {

		let ctxFunc = f.bind(this);
	return function () {
        let i = 0;
		let arr = [];
		for (let j = 0; j < arguments.length; j++) {
			arr[j] = arguments[j];
        }

		console.log(arr);
		setTimeout(function run () {
			ctxFunc(arr[i++]);
			if (i < arr.length) {
				setTimeout(run, ms)
            }
        }, ms);

    }
}
		
function f(x) {
  alert( x );
}

let t1000 = delay(f, 1000);
t1000('hello', 'world');

//learnJS solution

function delay (f, ms) {

		
	return function () {
	  let saveObj = this;
	  let saveArgs = arguments;
	  let ctxFunc = function () {f.apply(saveObj, saveArgs)};
    
    
	setTimeout(ctxFunc, ms);

  }
}