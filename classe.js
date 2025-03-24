class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome 
        this.idade = idade 
        this.tipo = tipo   
    }   
}
let heroiEscolhido = new heroi("Chico", 760, "Mago Ancião")
let tipoAtaque =""
if (heroiEscolhido.tipo === "Guerreiro")
{
    tipoAtaque = "usando espada"
}
else if (heroiEscolhido.tipo === "Mago")
{
    tipoAtaque = "usando magia"
}
else if (heroiEscolhido.tipo === "Monge")
{
    tipoAtaque = "usando artes marciais"
}
else if (heroiEscolhido.tipo === "Ninja")
{
    tipoAtaque = "usando shuriken"
}
else if (heroiEscolhido.tipo === "Mago Ancião")
{
    tipoAtaque = "usando sua sabedoria desbalaceada"
} else {
    console.log("Ainda não temos essa classe tente novamente")
}

console.log("O " + heroiEscolhido.tipo + " atacou " + tipoAtaque)
