let n = 5;
let m = "";

for(let i=0; i<=n; i++){
	for(let j=0; j<=n; j++){
		if (i===j || i+j===n){
			m += "*";
		}else{
			m += " ";
		}
	}
	m += "\n";
}

console.log(m)
document.write(`<pre>${m}</pre>`);
