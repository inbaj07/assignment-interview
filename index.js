
const fibonacciSeries = (n)=>{
	let i=2;
	let a = 0;
	let b = 1;
	if (n == 0) return 0;
	if (n == 1) return 1;
	while (i<=n){
		let c = BigInt(a)+BigInt(b);
		if (i==n) return BigInt(c);
		a=BigInt(b);
		b=BigInt(c);
		i++;		
	}
};
console.log(fibonacciSeries(10000));

function migrateRings(n, source,  destination,  aux)
{
	if (n == 0) return;	
	migrateRings(n - 1, source, aux, destination);
	console.log(n + " : " + source + " to " + destination);
	migrateRings(n - 1, aux, destination, source);
}  
let N = 3;      
migrateRings(N, "A", "B", "C");