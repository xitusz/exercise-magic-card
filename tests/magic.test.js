const { getMagicCard } = require('../src/magic.js');
const favoriteCards = require('../data/favoriteCards.js');

const retrievesFavoriteCards = () => {
  // implemente sua função aqui
}

describe(' Testa a função getMagicCard', () => { 

  it('Testa se um novo card é adicionado a cada execução', () => {
    expect.assertions(4);
    const response = await getMagicCard('130553');

    // implemente seus testes aqui

  });

  it('Deve retornar favoriteCards contendo apenas os cards favoritos iniciais', () => {
    expect.assertions(2);
    
    // implemente seus testes aqui

  })
});
