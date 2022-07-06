let n = 5;
let m = "";

for (let i = 1; i <= n; i++){
	for (let k = 1; k < i; k++)
		m += (" ");

	for (let j = i; j <= n; j++)
		m += (j + " ");

	m += "\n";
}

for (let i = n - 1; i >= 1; i--){
	for (k = 1; k < i; k++)
		m += (" ");

	for (let j = i; j <= n; j++)
		m += (j + " ");

    m += "\n";
}

console.log(m)
document.write(`<pre>${m}</pre>`);
