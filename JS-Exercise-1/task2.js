let n = prompt("enter a number");
let m = "";

for(let i=0; i<n; i++){
	for(let j=0; j<n; j++){
		if (i===0 ||i===n-1){
			m += "*";	
		}else{
			if (j===0 || j ===n-1){
				m += "*";
			}
			else{
				m += " ";
			}
		}
	}
	m +="\n"
}
console.log(m)
document.write(`<pre>${m}</pre>`);
