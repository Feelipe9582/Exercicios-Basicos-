function Fatorial(n){
    let resultado = n;
    for(let i = 1; i < n; i++){
        resultado = resultado * i;
    }
    return resultado;
}

console.log(Fatorial(5));