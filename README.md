# TV Shows

Este projeto é uma aplicação React que consome a API do TVMaze para exibir informações sobre séries de TV. A aplicação inclui uma página inicial com uma lista de séries, uma página de detalhes para cada série e tratamento de erros. O projeto utiliza hooks personalizados e uma arquitetura modular para manter o código limpo e organizado.

## Objetivo:

A aplicação possui duas principais visualizações:

##### 1. Lista de Séries:

Exibição de uma lista de séries, incluindo o nome e a imagem de cada série.

##### 2. Detalhes da Série:

Exibição detalhada de uma série selecionada, incluindo:

- Imagem da série
- Nome da série
- Resumo da série
- Ano da série
- Categoria da série

###### Temporada selecionada

Lista de episódios para a temporada selecionada, com:

- Nome do episódio
- Imagem do episódio
- Descrição do episódio
- Tempo do episódio
- Funcionalidades:

## Dependências Principais

- **React:** Biblioteca principal para a construção da interface de usuário.
- **React Router DOM:** Para gerenciamento de rotas na aplicação.
- **DOMPurify:** Biblioteca para sanitização de HTML, garantindo segurança contra XSS.
- **Sass:** Compilador para arquivos SCSS.
- **Font Awesome:** Ícones sólidos para a aplicação.
- **Vitest:** Usada para criação de testes.
- **ESLint**: Ferramenta para análise e correção de problemas de código.
- **Prettier**: Formatador de código para garantir consistência na formatação.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática ao código.

## Serviços e Hooks

### Serviços

`api.ts`: Define a URL base e função para realizar requisições à API.
`showService.ts`: Funções para buscar shows e detalhes dos shows.

### Hooks

`useShowDetails.ts`: Hook para buscar e gerenciar detalhes de um show específico.
`useShows.ts`: Hook para buscar e gerenciar a lista de shows.

### Componentes

- `Header`: Componente que exibe o cabeçalho da aplicação.
- `ShowCard`: Componente que exibe informações resumidas de um show.
- `EpisodeCard`: Componente que exibe informações resumidas de um episódio.
- `Select`: Componente para seleção de opções, como temporadas.
- `SkeletonLoader`: Componente para exibir carregadores de esqueleto enquanto os dados estão sendo carregados.

### Páginas

- `Home`: Página inicial que exibe uma lista de shows.
  `Details`: Página de detalhes que exibe informações completas sobre um show específico.
  `ErrorPage`: Página exibida quando ocorre um erro.

### Estilos

O projeto utiliza SCSS para estilos. As variáveis de estilo e o esquema de cores são definidos em `src/styles/_variables.scss`.

#### Instruções de Execução e Teste

###### Instalar as depêndencias:

```sh
npm install
```

###### Para rodar o projeto, use:

```sh
npm run dev
```

###### Para rodar os testes, use:

```sh
npm run test
```

## Sanitização de HTML

Para garantir que o conteúdo HTML exibido na aplicação esteja livre de vulnerabilidades, foi usada a biblioteca `DOMPurify`. Esta biblioteca ajuda a proteger contra ataques de Cross-Site Scripting (XSS) ao remover potencialmente perigosos elementos e atributos de HTML.

`sanitizeHtml.ts`: Função utilitária para sanitizar conteúdo HTML. Esta função é utilizada para limpar qualquer HTML que possa ser inserido dinamicamente, assegurando que apenas conteúdo seguro e confiável seja exibido ao usuário.

## Testes

O projeto inclui testes para garantir que as funcionalidades estejam funcionando conforme o esperado. Os testes são realizados utilizando o Vitest.

#### Testes dos Hooks

`useShows`
**Objetivo**: Verificar se o hook useShows busca corretamente os dados dos shows e lida com erros.
**Descrição do Teste:**
Busca dos Shows: Verifica se os dados são corretamente recebidos e armazenados no estado do hook.
**Tratamento de Erros:** Testa se o hook lida corretamente com erros na requisição e atualiza o estado de erro conforme esperado.

`useShowDetails`
**Objetivo:** Testar se o hook useShowDetails busca os detalhes de um show específico e lida com erros.
**Descrição do Teste:**
**Busca dos Detalhes do Show:** Verifica se os detalhes do show são corretamente recebidos e armazenados no estado do hook.
**Tratamento de Erros:** Testa se o hook lida corretamente com erros na requisição e atualiza o estado de erro conforme esperado.
