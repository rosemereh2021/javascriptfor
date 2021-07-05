let a = 5;
let b = 10;
let c = (num1, num2) => num1 + num2;
console.log(c(a,b));
// muito top arrow seta.
let d = (x, y) => {
let op;
if(x >= 5){
    op = x * y;
}else{
    op = x / y;
}
return op;
}
console.log(d(a,b));

// arrow seta com um 011 Argumento!
const frase = "O Falyer é muito ligeiro como DEV";
const fraseArray = (frase) => frase.split(' ');
console.log(fraseArray(frase));

// sem Argumento
const semArg = () => console.log("Sem  Argumento")
 semArg();

 // casos de uso frequente.
 //tudo atualizavel no arquivo e no console!
 let roupas = [
 {produto: 'Camisa', preço: 125, cor: 'Turquesa'},
 {produto: 'calça', preço: 99, cor: 'yellow'},
 {produto: 'Jaqueta', preço: 25, cor: 'Blue'},
 {produto: 'Camiseta', preço: 65, cor: 'yellow'},
 {produto: 'Calção', preço: 32, cor: 'Black'},
 {produto: 'Tênnis', preço: 25, cor: 'Red'},
 {produto: 'Pulseira', preço: 75, cor: 'yellow'},
 {produto: 'Chinelo', preço: 256, cor: 'Black'},
 {produto: 'Blusa', preço: 252, cor: 'Cinza'},
 {produto: 'Sapato de couro', preço: 300, cor: 'Pt/Branco'},
 ]

let preçoMaiorQue50 = roupas.filter((roupa) => {
return roupa.preço <= 50;
});
console.log(preçoMaiorQue50);

 //não usar arrow nesses casos.usar function normal.
let pessoa = {
    name: "Flayer",
sayname() {
console.log(this.name);
console.log(this);
}
}
pessoa.sayname();

//escreve as letras automaticamente na tela pagina de HTML
const el = document.querySelector("#text");
const text = "O javascript é muito interessante! Muito Maravilhoso ! Fantastico!!!";
const interval = 300;
function showText(el, text, interval) {
const char = text.split("").reverse();
console.log(char);
const typer = setInterval(() => {
if(!char.length){
return clearInterval(typer);
}
const next = char.pop();
el.innerHTML += next;

}, interval);

}
showText(el, text, interval);