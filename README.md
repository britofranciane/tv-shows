# TV Shows Application

## Descrição

Aplicação para visualização e busca de detalhes sobre shows de TV, desenvolvida com **React** e **TypeScript**. Esta aplicação permite a visualização de uma lista de shows e a consulta de detalhes específicos sobre cada show.

## Estrutura do Projeto

- **`src/components/`**: Componentes React para exibição de shows e detalhes.
- **`src/hooks/`**: Hooks personalizados (`useShows` e `useShowDetails`) para gerenciar o estado e a lógica de negócios.
- **`src/services/`**: Funções para interagir com APIs externas (`fetchShows` e `fetchShowDetails`).
- **`src/App.tsx`**: Componente principal que integra a aplicação.
- **`src/index.tsx`**: Ponto de entrada da aplicação React.

## Hooks

- **`useShows`**: Hook personalizado que busca e gerencia a lista de shows. Inclui lógica para lidar com o estado de carregamento e erros.
- **`useShowDetails`**: Hook personalizado que busca e gerencia detalhes de um show específico. Similar ao `useShows`, mas foca em um show específico.

## Principais Bibliotecas e Ferramentas

- **React**: Biblioteca para a construção de interfaces de usuário.
- **TypeScript**: Superset do JavaScript que adiciona tipos estáticos ao código.
- **Vite**: Ferramenta de build e desenvolvimento rápida e moderna.
- **Vitest**: Framework de testes para testes de unidade e integração.
- **@testing-library/react**: Biblioteca para facilitar a escrita de testes para componentes React.
- **dompurify**: Biblioteca para sanitização de HTML, garantindo segurança ao exibir conteúdo dinâmico.
- **@eslint/js**: Configurações e regras para ESLint, garantindo a qualidade e consistência do código.
- **sass**: Compilador para arquivos Sass, permitindo o uso de estilos avançados.
- **@fortawesome/free-solid-svg-icons**: Conjunto de ícones sólidos do Font Awesome para ícones vetoriais de alta qualidade.
- **react-router-dom**: Biblioteca para roteamento em aplicações React, facilitando a navegação entre páginas.

## Scripts

- **`npm run dev`**: Inicia o servidor de desenvolvimento.
- **`npm run build`**: Constrói a aplicação para produção.
- **`npm run preview`**: Visualiza o build de produção.
- **`npm run lint`**: Executa o ESLint para verificar problemas de linting.
- **`npm run format`**: Formata o código com Prettier para manter a consistência.
- **`npm run test`**: Executa os testes para garantir a integridade do código.

## Instalação e Execução

1. **Clone o repositório**:
   ```sh
   git clone <URL_DO_REPOSITORIO>
   ```

### Instale as dependências:

```sh
npm install
```

### Inicie a aplicação:

```sh
npm run dev
```

### Execute os testes:

```sh
npm run test
```

## Testes

Os testes são escritos com Vitest para garantir que os hooks useShows e useShowDetails funcionem corretamente. Os testes verificam o comportamento esperado ao buscar dados e lidar com erros.
