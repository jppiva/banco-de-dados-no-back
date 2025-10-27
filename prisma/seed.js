import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const comidas = [
    { nome: "Feijoada", tipo: "Prato principal", preco: 42.9, descricao: "Feijão preto com carnes variadas e acompanhamentos tradicionais." },
    { nome: "Lasanha à Bolonhesa", tipo: "Prato principal", preco: 36.5, descricao: "Massa em camadas com carne moída, molho de tomate e queijo." },
    { nome: "Moqueca de Peixe", tipo: "Prato principal", preco: 48.0, descricao: "Peixe cozido com leite de coco, azeite de dendê e pimentões." },
    { nome: "Coxinha", tipo: "Salgado", preco: 6.0, descricao: "Massa frita recheada com frango desfiado e catupiry." },
    { nome: "Pão de Queijo", tipo: "Salgado", preco: 5.5, descricao: "Pãozinho mineiro com queijo derretido." },
    { nome: "Brigadeiro", tipo: "Doce", preco: 3.0, descricao: "Doce de chocolate com granulado." },
    { nome: "Quibe", tipo: "Salgado", preco: 7.0, descricao: "Bolinho frito de trigo e carne." },
    { nome: "Escondidinho de Carne Seca", tipo: "Prato principal", preco: 38.0, descricao: "Purê de mandioca com carne seca desfiada." },
    { nome: "Pastel de Feira", tipo: "Salgado", preco: 8.0, descricao: "Massa crocante recheada." },
    { nome: "Caldo de Cana", tipo: "Bebida", preco: 5.0, descricao: "Suco fresco extraído da cana-de-açúcar." },
    { nome: "Acarajé", tipo: "Salgado", preco: 10.0, descricao: "Bolinho frito de feijão com camarão." },
    { nome: "Bauru", tipo: "Lanche", preco: 12.0, descricao: "Sanduíche com presunto, queijo, tomate e picles." },
    { nome: "Empadão", tipo: "Salgado", preco: 15.0, descricao: "Torta recheada com frango ou palmito." },
    { nome: "Arroz Carreteiro", tipo: "Prato principal", preco: 30.0, descricao: "Arroz com carne seca e temperos." },
    { nome: "Vatapá", tipo: "Prato principal", preco: 35.0, descricao: "Creme feito com pão, camarão, amendoim e azeite de dendê." },
    { nome: "Tapioca", tipo: "Lanche", preco: 7.0, descricao: "Crepe feito com goma de mandioca." },
    { nome: "Churrasco", tipo: "Prato principal", preco: 50.0, descricao: "Carnes grelhadas na brasa." },
    { nome: "Farofa", tipo: "Acompanhamento", preco: 12.0, descricao: "Farinha de mandioca temperada." },
    { nome: "Cuscuz Nordestino", tipo: "Café da manhã", preco: 10.0, descricao: "Farinha de milho cozida no vapor." },
    { nome: "Pé de Moleque", tipo: "Doce", preco: 4.0, descricao: "Doce de amendoim com rapadura." },
    { nome: "Bobó de Camarão", tipo: "Prato principal", preco: 45.0, descricao: "Creme de mandioca com camarão." },
    { nome: "Mousse de Maracujá", tipo: "Sobremesa", preco: 8.0, descricao: "Sobremesa gelada de maracujá." },
    { nome: "Pamonha", tipo: "Lanche", preco: 6.0, descricao: "Milho cozido com leite e açúcar." },
    { nome: "Dobradinha", tipo: "Prato principal", preco: 32.0, descricao: "Prato com bucho de boi e feijão branco." },
    { nome: "Tutu de Feijão", tipo: "Prato principal", preco: 28.0, descricao: "Purê feito com feijão e farinha de mandioca." },
    { nome: "Feijão Tropeiro", tipo: "Prato principal", preco: 33.0, descricao: "Feijão misturado com farinha, ovos e linguiça." },
    { nome: "Canjica", tipo: "Sobremesa", preco: 7.0, descricao: "Milho cozido com leite, açúcar e canela." },
    { nome: "Curau", tipo: "Sobremesa", preco: 7.0, descricao: "Creme de milho verde com leite e açúcar." },
    { nome: "Bolo de Fubá", tipo: "Doce", preco: 6.0, descricao: "Bolo feito com farinha de milho." },
    { nome: "Pão Francês", tipo: "Acompanhamento", preco: 1.0, descricao: "Pãozinho tradicional brasileiro." },
    { nome: "Caldinho de Feijão", tipo: "Entrada", preco: 5.0, descricao: "Sopa cremosa de feijão." },
    { nome: "Risoto de Camarão", tipo: "Prato principal", preco: 40.0, descricao: "Arroz cremoso com camarões." },
    { nome: "Lombo Assado", tipo: "Prato principal", preco: 48.0, descricao: "Lombo de porco temperado e assado." },
    { nome: "Salpicão", tipo: "Salada", preco: 20.0, descricao: "Salada de frango com legumes e maionese." },
    { nome: "Bolinho de Bacalhau", tipo: "Entrada", preco: 18.0, descricao: "Bolinho frito de bacalhau desfiado." },
    { nome: "Pastel de Queijo", tipo: "Salgado", preco: 7.0, descricao: "Massa crocante recheada com queijo." },
    { nome: "Camarão na Moranga", tipo: "Prato principal", preco: 55.0, descricao: "Camarões servidos na moranga com creme." },
    { nome: "Pudim de Leite", tipo: "Sobremesa", preco: 9.0, descricao: "Sobremesa cremosa de leite condensado." },
    { nome: "Açaí na Tigela", tipo: "Sobremesa", preco: 15.0, descricao: "Polpa de açaí com frutas e granola." },
    { nome: "Churrasquinho", tipo: "Salgado", preco: 5.0, descricao: "Espetinho de carne grelhada." },
    { nome: "Empada de Frango", tipo: "Salgado", preco: 12.0, descricao: "Torta pequena recheada com frango." },
    { nome: "Caldo Verde", tipo: "Sopa", preco: 10.0, descricao: "Sopa de couve com batata e linguiça." },
    { nome: "Cuscuz Paulista", tipo: "Prato principal", preco: 25.0, descricao: "Cuscuz feito com farinha de milho, legumes e peixe." },
    { nome: "Farofa de Ovo", tipo: "Acompanhamento", preco: 15.0, descricao: "Farofa com ovo mexido." },
    { nome: "Pizza Portuguesa", tipo: "Prato principal", preco: 45.0, descricao: "Pizza com presunto, ovos, cebola e azeitonas." },
    { nome: "Canjica Salgada", tipo: "Prato principal", preco: 28.0, descricao: "Canjica preparada com carne e temperos." },
    { nome: "Torta de Limão", tipo: "Sobremesa", preco: 12.0, descricao: "Torta doce com creme de limão." },
    { nome: "Creme de Abóbora", tipo: "Entrada", preco: 15.0, descricao: "Sopa cremosa de abóbora." },
    { nome: "Pão de Mel", tipo: "Doce", preco: 8.0, descricao: "Bolo macio com mel e especiarias." },
    { nome: "Batata Frita", tipo: "Acompanhamento", preco: 10.0, descricao: "Batatas fritas crocantes." },
    { nome: "Café com Leite", tipo: "Bebida", preco: 5.0, descricao: "Mistura de café com leite quente." },
    { nome: "Mandioca Frita", tipo: "Acompanhamento", preco: 12.0, descricao: "Mandioca frita crocante." },
    { nome: "Bolinho de Chuva", tipo: "Doce", preco: 4.0, descricao: "Bolinho frito polvilhado com açúcar." },
    { nome: "Suco de Laranja", tipo: "Bebida", preco: 6.0, descricao: "Suco natural de laranja." },
    { nome: "Torta de Maçã", tipo: "Sobremesa", preco: 10.0, descricao: "Torta doce com recheio de maçã." },
    { nome: "Esfiha", tipo: "Salgado", preco: 7.0, descricao: "Massa recheada com carne ou queijo." },
    { nome: "Quindim", tipo: "Doce", preco: 6.0, descricao: "Doce feito de gemas, coco e açúcar." },
    { nome: "Refrigerante", tipo: "Bebida", preco: 5.0, descricao: "Bebida gaseificada." },
    { nome: "Caldo de Milho", tipo: "Entrada", preco: 8.0, descricao: "Sopa cremosa de milho." },
    { nome: "Bolinho de Arroz", tipo: "Salgado", preco: 7.0, descricao: "Bolinho frito feito com arroz." },
    { nome: "Carne de Sol", tipo: "Prato principal", preco: 40.0, descricao: "Carne salgada e seca ao sol." },
    { nome: "Bife Acebolado", tipo: "Prato principal", preco: 35.0, descricao: "Bife com cebola refogada." },
    { nome: "Mousse de Chocolate", tipo: "Sobremesa", preco: 9.0, descricao: "Sobremesa cremosa de chocolate." },
    { nome: "Peixe Frito", tipo: "Prato principal", preco: 38.0, descricao: "Peixe empanado e frito." },
    { nome: "Cuscuz com Carne", tipo: "Prato principal", preco: 30.0, descricao: "Cuscuz servido com carne cozida." },
    { nome: "Banana Frita", tipo: "Acompanhamento", preco: 7.0, descricao: "Bananas douradas na manteiga." }
  ]

  await prisma.comida.createMany({
    data: comidas,
    skipDuplicates: true
  })

  console.log(`✅ Inseridas ${comidas.length} comidas!`)
}

main()
  .then(() => prisma.$disconnect())
  .catch(e => {
    console.error(e)
    prisma.$disconnect()
  })
