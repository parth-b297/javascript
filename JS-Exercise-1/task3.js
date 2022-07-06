let n = prompt("enter a number");
if (n % 2 == 0){
	prompt("enter a number");
}

let m = "";
for (let i = 1; i <= n; i++) {
	for (let j = n; j > i; j--) {
	m += " ";
	}
	for (let k = 0; k < i * 2 - 1; k++) {
	if (k === 0 || k === 2 * i - 2) {
		m += "*";
	}
	else {
		m += " ";
	}
	}
	m += "\n";
}
for (let i = 1; i <= n - 1; i++) {
	for (let j = 0; j < i; j++) {
		m += " ";
	}
	for (let k = (n - i) * 2 - 1; k >= 1; k--) {
		if (k === 1 || k === (n - i) * 2 - 1) {
		m += "*";
		}
		else {
		m += " ";
		}
	}
	m += "\n";
}
console.log(m);
document.write(`<pre>${m}</pre>`);

