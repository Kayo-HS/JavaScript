let nome = "Chico"
let xp = 90
let nivel =""

if (xp <= 1000){
    nivel = "Ferro"
}elseif (xp >= 1001 && xp <= 2000)
{
    nivel = "Bronze"
} elseif (xp >= 2001 && xp <= 5000)
{
    nivel = "Prata"
} elseif (xp >= 5001 && xp <= 7000)
{
    nivel = "Ouro"
} elseif (xp >= 7001 && xp <= 8000)
{
    nivel = "Platina"
} elseif (xp >= 8001 && xp <= 9000)
{
    nivel = "Ascendente"
} elseif (xp >= 9001 && xp <= 10000)
{
    nivel = "Imortal"
} elseif (xp >= 10001)
{
    nivel = "Radiante"
}

console.log ("O Herói de nome" + nome + "está no nível" + nivel)






