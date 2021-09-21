const { getMagicCard } = require('../src/magic.js');
const favoriteCards = require('../data/favoriteCards.js');

const retrievesFavoriteCards = () => {
  // implemente sua função aqui
  // favoriteCards.splice(4, favoriteCards.length - 4);
}

describe(' Testa a função getMagicCard', () => {
  // afterEach(() => {
  //   retrievesFavoriteCards();
  // });

  it('Testa se um novo card é adicionado a cada execução', async () => {

    // expect.assertions(4);
    // const response = await getMagicCard('130553');

    expect(favoriteCards).toHaveLength(5);
    expect(favoriteCards[4].name).toEqual('Beacon of Immortality');

    const responseTwo = await getMagicCard('130554');

    expect(favoriteCards).toHaveLength(6);
    expect(favoriteCards[5].name).toEqual('Cho-Manno, Revolutionary');   

  });

  it('Deve retornar favoriteCards contendo apenas os cards favoritos iniciais', () => {

    expect.assertions(2);
    expect(favoriteCards).toHaveLength(4);

    const namesOfFavoriteCards = favoriteCards.map(card => card.name);
    expect(namesOfFavoriteCards).toEqual(['Ancestor\'s Chosen', 'Angel of Mercy', 'Aven Cloudchaser', 'Ballista Squad']);

  })
});
