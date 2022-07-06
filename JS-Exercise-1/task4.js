let n = 3;
let m = "";

for (let i = 1; i <= n; i++) {
	for (let j = 0; j < i; j++) {
		m += "*";
	}
	m += "\n";
}
for (let i = 1; i <= n - 1; i++) {
	for (let j = 0; j < n - i; j++) {
		m += "*";
	}
	m += "\n";
}
console.log(m)
document.write(`<pre>${m}</pre>`);
