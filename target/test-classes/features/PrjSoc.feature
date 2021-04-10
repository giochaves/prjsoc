Feature: Busca no blog

Scenario: Deve fazer uma busca no blog da soc

Given estou acessando o blog da soc
When digitar trabalhe conosco na barra de pesquisa
And clicar no botao pesquisar
Then o trabalhe conosco ira aparecer

Scenario: Deve fazer uma busca de credenciado

Given estou acessando o site da soc
When clicar no botao solucoes
And clicar no botao SOCNET
And clicar no botao buscar credenciados
And digitar Santos,SP,Brasil na barra de pesquisa
And clicar no botao de busca
And clicar no resultado MEDISOCIAL MEDICINA OCUPACIONAL S/S LTDA
Then exibir o perfil do credenciado