# exercise-magic-card

Esse é um projeto para o conteúdo sobre `Jest Assíncrono`.

### Antes de iniciar

Crie um fork desse projeto e para isso siga esse [tutorial de como realizar um fork](https://guides.github.com/activities/forking/).

Após feito o fork, clone o repositório criado para o seu computador.

Rode o `npm install`.

Vá para a branch master do seu projeto e execute o comando:
- `git branch`

Verifique se as seguintes branchs apareceram:

  `exercise-one`
  `exercise-two`

- Cada branch dessas será um exercício.
- Mude para a branch `exercise-one` com o comando `git checkout exercise-one`. É nessa branch que você realizará a solução para o exercício 1, e assim por diante.

Observe o que deve ser feito nas instruções para cada exercício.

Após a solução dos exercícios, abra um PR no seu repositório forkado e, se quiser, mergeie para a master, sinta-se a vontade!

**Atenção!** Quando for criar o PR você irá se deparar com essa tela:

![PR do exercício](images/example-pr.png)

É necessário realizar uma mudança. Clique no *base repository* como na imagem abaixo:

![Mudando a base do repositório](images/change-base.png)

Mude para o seu repositório. Seu nome estará na frente do nome dele, por exemplo: `antonio/TicTacToe`. Depois desse passo a página deve ficar assim:

![Após mudança](images/after-change.png)

Agora basta criar o PULL REQUEST clicando no botão `Create Pull Request`.

Para cada PR realize esse processo.

### COMEÇANDO OS EXERCÍCIOS

#### Exercício 1

No exercício de hoje você vai aplicar os conhecimentos sobre testes assíncronos com Jest. Para isso, vamos utilizar uma API que retorna os cards do RPG Magic.

### Antes de começar

* Confirme que você está na branch `exercise-one`, se não estiver, execute os passos descritos no Readme antes de prosseguir.
* Todas as funções já estão impĺementadas, você precisará se preocupar apenas em testá-las. 
* A função `trybeSimulator` já está pronta e disponível dentro do arquivo `magic.test.js`, onde você implementará seus testes. Mas **atenção**, você **NÃO** precisará modificá-la.
* Não se preocupe em entender a estrutura da função `trybeSimulator`, você aprenderá a implementar este tipo de função futuramente no curso.

**Dica de ouro**: leia e entenda cada parte da implementação da função `getMagicCard` que está no arquivo `src/magic.js.` Isso te ajudará a implementar os testes.

### Agora mão na massa

I - Abra o arquivo `tests/magic.test.js`. Nele você encontrará a estrutura inicial dos testes ja montada. Essa estrutura no entanto está incompleta e precisa de ajustes para que a sintaxe do `async/await` seja aplicada de forma correta. Implemente o que falta para que a sintaxe do `async/await` esteja completa.

II - Agora, vamos utilizar a nossa função simulada para pesquisar um novo Magic Card. Para isso, adicione o `id: 130550` como argumento na função `getMagicCardSimulator`. Lembre-se que essa função vai simular o comportamento da função original `getMagicCard`, mas sem executar uma chamada à API.

III - Implemente um teste que verifique se o retorno da função `getMagicCardSimulator` é igual ao objeto `expected`.
***spoiler-alert***: você pode desestruturar o objeto response e obter diretamente suas propriedades.

IV - Implemente um teste que verifique se a propriedade `types` é do tipo `Array`.

V - Implemente um teste que verifique se a propriedade `subtypes` possui `length === 2`.

VI - Implemente um teste que verifique se a propriedade `rarity` possui valor `Uncommon`.

VII - Implemente um teste que verifique se a propriedade `name` possui valor `Ancestor's Chosen`.

VIII - Implemente um teste que verifique se a propriedade `manaCost` possui valor `{5}{W}{W}`.

---

#### Exercício 2

### Antes de começar

* Confirme que você está na branch `exercise-two`, se não estiver, execute os passos descritos no Readme antes de prosseguir.
* Todas as funções já estão impĺementadas, você precisará se preocupar apenas em testá-las.
* Dentro da pasta data, você encontrará o arquivo `favoriteCards`, leia e compreenda sua estrutura para realizar os exercícios.
* A função `getMagicCard` sofreu alterações e agora além de realizar a chamada a API, ela também modifica o arquivo favoriteCards, adicionando um novo card a cada execução.

**Dica de ouro**: leia e entenda cada parte da implementação da função `getMagicCard` que está no arquivo `src/magic.js.` Isso te ajudará a implementar os testes.


### Agora mão na massa

Agora temos um arquivo com algumas das cartas preferidas do nosso jogador. Você verificar a sua estrutura no arquivo `data/favoriteCards.js`. Utilizaremos este arquivo para os próximos passos.

I - Implemente um teste que verifique que após a execução da função `getMagicCard`, `favoriteCards` passa a possuir `length === 5`;

---

