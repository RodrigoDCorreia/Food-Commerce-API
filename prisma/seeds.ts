import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const snacks = [

  {
    snack: "burger",
    name: "Mega",
    description: "O artesanal tamanho família recheado com três carnes suculentas, queijo e bacon.",
    price: 25,
    image: "https://i.imgur.com/upjIUnG.jpg"
  },
  {

    snack: "burger",
    name: "Extra Bacon",
    description: " Criado para os amantes de bacon, possui em todas as suas camadas bacon bem assado e ainda queijo e carne.",
    price: 23,
    image: "https://i.imgur.com/B4J04AJ.jpg"
  },
  {

    snack: "burger",
    name: "Tradicional",
    description: "O simples também é delicioso, principalmente se envolver nossa carne artesanal e queijo.",
    price: 12,
    image: "https://i.imgur.com/Jz506jB.jpg"
  },
  {

    snack: "burger",
    name: "Big Carne",
    description: "Uma carne artesanal de primeira qualidade com 4cm de altura e uma salada completa com alface, cebola, tomate e outros.",
    price: 18,
    image: "https://i.imgur.com/bF8EdBb.jpg"
  },
  {

    snack: "burger",
    name: "Carne dupla",
    description: "Já pensou em comer aquele sanduíche com carne dupla e saborosa, recheada com queijo, molho e salada? Então você pensou exatamente nesse hambúrguer.",
    price: 20,
    image: "https://i.imgur.com/fdEY2kY.jpg"
  },

  {

    snack: "burger",
    name: "Cheese Lover's",
    description: "O hambúrguer perfeito para os amantes de queijo, com quatro tipos de queijo derretido e molho especial.",
    price: 18,
    image: "https://i.imgur.com/YZBB5R0.jpeg"
  },
  {

    snack: "burger",
    name: "BBQ Bacon Bliss",
    description: "Um hambúrguer suculento coberto com bacon crocante e regado com molho barbecue defumado.",
    price: 20,
    image: "https://i.imgur.com/v2jMKZJ.jpeg"
  },
  {

    snack: "burger",
    name: "Veggie Delight",
    description: "Uma opção saudável e deliciosa com um hambúrguer vegano, queijo feta e molho, com presunto .",
    price: 16,
    image: "https://i.imgur.com/mHwgtOC.jpeg"
  },
  {

    snack: "burger",
    name: "Spicy Jalapeño Kick",
    description: "Para quem gosta de um toque picante, este hambúrguer vem com jalapeños, queijo pepper jack e molho apimentado.",
    price: 19,
    image: "https://i.imgur.com/1a8XfG1.jpeg"
  },
  {

    snack: "drink",
    name: "Coca-Cola 2L",
    description: "A tradicional Coca-Cola que a família brasileira adora.",
    price: 12,
    image: "https://i.imgur.com/Lg3aKhf.jpg"
  },
  {

    snack: "drink",
    name: "Guaraná Antarctica",
    description: "O irresistível e saboroso Guaraná Antarctica em sua versão de latinha.",
    price: 6,
    image: "https://i.imgur.com/hOBrOIm.jpg"
  },
  {

    snack: "drink",
    name: "Suco de Abacaxi",
    description: "Suco natural de abacaxi com leves incrementos de algumas hortaliças para fortificar sua saúde.",
    price: 8,
    image: "https://i.imgur.com/VV9qTMh.jpg"
  },
  {

    snack: "drink",
    name: "Suco de Laranja",
    description: "Suco natural de laranja para você que é amante dessa fruta.",
    price: 8,
    image: "https://i.imgur.com/2Lf2gHy.jpg"
  },
  {

    snack: "drink",
    name: "Green Goodness",
    description: "Um suco saudável e revitalizante com maçã, pepino e espinafre, proporcionando uma explosão de nutrientes verdes.",
    price: 5,
    image: "https://i.imgur.com/iDecNrA.jpeg"
  },
  {

    snack: "drink",
    name: "Sunset Citrus Fusion",
    description: "Uma fusão de citrinos ao pôr do sol, com laranjas maduras, limões suculentos e uma pitada de tangerina.",
    price: 4,
    image: "https://i.imgur.com/cNhYIyD.jpeg"
  },
  {

    snack: "drink",
    name: "Citrus Zing",
    description: "Um suco cítrico revigorante com uma combinação de laranja, limão e grapefruit, ideal para quem aprecia sabores frescos.",
    price: 10,
    image: "https://i.imgur.com/STT9sBp.jpeg"
  },
  {

    snack: "ice-cream",
    name: "Casquinha",
    description: "A casquinha crocante e saborosa que nossos clientes amam.",
    price: 4,
    image: "https://i.imgur.com/YGmeoCm.jpg"
  },
  {

    snack: "ice-cream",
    name: "Chocolate com granulado",
    description: "Sorvete de chocolate com granulados em chocolate para você se deliciar.",
    price: 6,
    image: "https://i.imgur.com/osAHOLe.jpg"
  },
  {

    snack: "ice-cream",
    name: "Flocos",
    description: "O tradicional flocos vem com cobertura em chocolate para adocicar seu dia.",
    price: 7,
    image: "https://i.imgur.com/qgnFLiy.jpg"
  },
  {

    snack: "ice-cream",
    name: "Creme",
    description: "O simples sorvete de creme com um gosto irresistível.",
    price: 6,
    image: "https://i.imgur.com/dFLysrT.jpg"
  },
  {

    snack: "ice-cream",
    name: "Morango",
    description: "O clássico sorvete de morango que deixe tudo mais leve.",
    price: 10,
    image: "https://i.imgur.com/0TWnEI7.jpg"
  },

  {

    snack: "ice-cream",
    name: "Berrylicious Swirl",
    description: "Um sorvete irresistível com uma mistura de chocolates, mirtilos e uma generosa onda de creme de baunilha.",
    price: 7,
    image: "https://i.imgur.com/YSeKMWP.png"
  },
  {

    snack: "ice-cream",
    name: "Caramel Cookie Crunch",
    description: "Sorvete indulgente com pedaços de cookies crocantes, drizzles de caramelo e uma base de baunilha cremosa.",
    price: 15,
    image: "https://i.imgur.com/tI2ML3g.png"
  },
  {

    snack: "ice-cream",
    name: "Double Chocolate Fudge",
    description: "Sorvete duplo de chocolate com camadas generosas de fudge, perfeito para os amantes de chocolate.",
    price: 12,
    image: "https://i.imgur.com/OhLresv.png"
  },
  {

    snack: "pizza",
    name: "Calabresa",
    description: "Pizza recheada com calabresa, cebola, mussarela, orégano e azeitona, tendo uma borda recheada com catupiry.",
    price: 25,
    image: "https://i.imgur.com/5rjJGkV.jpg"
  },
  {

    snack: "pizza",
    name: "Portuguesa",
    description: "Pizza recheada com presunto, mussarela, ovo, cebola, azeitona, orégano, tomate e molho de tomate, tendo uma borda recheada com catupiry.",
    price: 28,
    image: "https://i.imgur.com/WCoyGoI.png"
  },
  {

    snack: "pizza",
    name: "Frango com Catupiry",
    description: "Pizza recheada com frango, catupiry e brócolis, tendo uma borda recheada com catupiry.",
    price: 24,
    image: "https://i.imgur.com/BuXrO8d.jpg"
  },
  {

    snack: "pizza",
    name: "Napolitana",
    description: "Pizza recheada com queijo, mussarela, tomate e couve, tendo uma borda recheada com catupiry.",
    price: 30,
    image: "https://i.imgur.com/u3DfvCE.jpg"
  },
  {

    snack: "pizza",
    name: "Mussarela",
    description: "Pizza recheada com mussarela, tendo uma borda recheada com catupiry. ",
    price: 20,
    image: "https://i.imgur.com/kPNXpa0.jpg"
  },
  {

    snack: "pizza",
    name: "Marguerita",
    description: "Pizza recheada com calabresa, mussarela, cebola, azeitona e orégano, tendo uma borda recheada com catupiry.",
    price: 25,
    image: "https://i.imgur.com/AsEfsZN.jpg"
  },
  {

    snack: "pizza",
    name: "Brigadeiro com Morango",
    description: "Pizza doce recheada com brigadeiro e morango.",
    price: 35,
    image: "https://i.imgur.com/43yC2Ap.jpg"
  },
  {

    snack: "pizza",
    name: "Banana",
    description: "Pizza doce recheada com banana e leite condensado.",
    price: 33,
    image: "https://i.imgur.com/Pcrgg1P.jpg"
  },
  {

    snack: "pizza",
    name: "Chocolate",
    description: "Pizza doce recheada com chocolate e bolinhas de chocolate.",
    price: 30,
    image: "https://i.imgur.com/RahAKkH.jpg"
  },
]

async function main() {
  await prisma.snack.createMany({
    data: snacks,
  })
}

main()
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
