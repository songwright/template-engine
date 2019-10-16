// HTML Templates
const createHtml = function(num1, num2) {
	return `<div>
		<p>${sumNumbers(num1, num2)}</p>
	</div>`
}
​
// Function definitions
function sumNumbers(x,y) {
	return x + y
}
​
// Methods
let html = createHtml(2,2);
console.log(html);