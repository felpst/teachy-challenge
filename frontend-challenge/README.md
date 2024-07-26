# Star Wars Characters App

Este projeto é uma aplicação web que exibe informações sobre os personagens dos filmes de Star Wars, utilizando a API SWAPI (Star Wars API).

## Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- Node.js (versão 14 ou superior)
- npm (geralmente vem com o Node.js)

## Instalação

1. Clone o repositório:

   ```
   git clone git@github.com:felpst/teachy-challenge.git
   cd star-wars-characters-app
   cd frontend-challenge
   ```

2. Instale as dependências:
   ```
   npm install
   ```

## Executando o projeto

Para iniciar o servidor de desenvolvimento:

```
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver a aplicação.

## Construção para produção

Para criar uma versão otimizada para produção:

```
npm run build
```

Após a construção, você pode iniciar o servidor de produção com:

```
npm start
```

## Tecnologias utilizadas

- Next.js
- React
- TypeScript
- Tailwind CSS

## Estrutura do projeto

- `src/app/page.tsx`: Página principal da aplicação
- `src/components/CharacterList.tsx`: Componente que renderiza a lista de personagens
- `src/types.ts`: Definições de tipos TypeScript
- `src/app/globals.css`: Estilos globais da aplicação

## Funcionalidades

- Exibição de personagens em formato de tabela
- Paginação infinita para carregar mais personagens
- Conversão automática de altura para metros
- Exibição dos nomes dos filmes em que cada personagem aparece

## Contribuindo

Contribuições são bem-vindas! Por favor, leia as diretrizes de contribuição antes de enviar pull requests.
