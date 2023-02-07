//PRÁTICA GUIADA 1
/*
function darOla(nome){
    const frase = `Olá, ${nome} !`
    console.log(frase)
}

//darOla("Aleluia")

//Variável + função
const darOlaPessoa = function (nome) {
    const frase = `Olá, ${nome}!`
    console.log(frase)
}
*/
//darOlaPessoa ("ApdSJ")
//darOlaPessoa ("Amados")
//darOlaPessoa ("Irmãos")

//PRÁTICA GUIADA 2 
function operarNum(numero){
    const ePar = numero % 2 === 0
    const soma = numero + 10
    const multiplica = numero * numero

    const frase = `O número ${numero} é par? ${ePar}. 
    Somado com 1O, o resultado é ${soma} 
    e multiplicado por ele mesmo 
    o resultado é  ${multiplica}`

    return frase
}

//console.log(operarNum(4))
//console.log(operarNum(5))
//console.log(operarNum(12))

//PRÁTICA GUIADA 3
function verLoginSenha(login, senha) {
    const loginArmazenado = "bendinelle.souza"
    const senhaArmazenada = "123abc"

    const comparaLogin = login === loginArmazenado
    const comparaSenha = senha === senhaArmazenada

    const verificaInfos = comparaLogin && comparaSenha

    const frase = `As informações de login estão corretas ? ${verificaInfos}`

    return frase
}
/*
console.log(verLoginSenha("bendinelle.souza", "123abc"))
console.log(verLoginSenha("souza.bendinelle", "123abc"))
console.log(verLoginSenha("bendinelle.souza", "abc123"))
console.log(verLoginSenha("bendinelle.souza", "1234abc"))
*/

//PRÁTICA GUIADA 4
/*
function seunome (nome){
    const frase = `${nome}`
    console.log(frase)
}

const nomePrompt = prompt(`Digita seu nome`)
seunome(nomePrompt)
*/
/*
const nome = prompt(`Digita seu nome`)
const anoNasc = prompt(`Digita o ano que nasceu`)
const anoAtual = prompt(`Digita o ano atual`)
const idade = anoAtual - anoNasc

if (idade >= 18) {
    console.log("Você é maior de idade.");
  } else {
    console.log("Você é menor de idade.");
  }

  */

  function verificarMaioridade (nome, anoNasc, anoAtual){

  const idade = anoAtual - anoNasc
  const eMaior = idade >= 18

  const frase =`${nome} é maior de idade? ${eMaior}`

  return frase
}

const pessoa1 = verificarMaioridade("Bendi", 1995, 2023)
console.log(pessoa1)