# Lead Management API

Este projeto é uma API para gerenciamento de leads, permitindo operações de CRUD (Criar, Ler, Atualizar e Deletar) para leads. A aplicação foi construída usando Node.js, TypeScript e TypeORM, e é estruturada seguindo boas práticas de desenvolvimento.

## Funcionalidades

-   Criar novos leads
-   Buscar leads (com filtros e paginação)
-   Buscar apenas um lead (baseado no ID)
-   Atualizar informações de leads existentes
-   Deletar leads

## Tecnologias Usadas

-   Node.js
-   TypeScript
-   Express
-   TypeORM
-   MongoDB
-   Jest para testes

## Arquitetura e Boas Praticas

-   Microservices
-   Docker
-   Clean Archteture
-   SOLID
-   Design Patterns
-   Testes Automatizados
-   Swagger

## Pré-requisitos

Antes de executar o projeto, você precisará ter os seguintes itens instalados:

-   [Node.js](https://nodejs.org/) (v18 ou superior)
-   [MongoDB](https://www.mongodb.com/try/download/community) (ou usar uma instância em nuvem)

## Instalação

1.  Clone o repositório:

    ```bash
    git clone https://github.com/seuusuario/lead-management-api.git
    cd lead-management-api

    ```

2.  Instale as dependências:

    ```bash
    npm install
    yarn add
    ```

3.  Configure suas variáveis de ambiente:

Crie um arquivo .env na raiz do projeto com as seguintes variáveis:

-   NODE_ENV=production (Para executar testes é nescessario setar como "test")
-   PORT=3333
-   AUTH_SECRET=Seu Token de Autenticação
-   DATABASE_TYPE=mongodb
-   DATABASE_URL=mongodb+srv://<user>:<password>/?retryWrites=true&w=majority&appName=<database>

## Execução

1. Iniciar a Aplicação:

    ```bash
    npm run start
    ```

    ou

    ```bash
    yarn start
    ```

    A API estará disponível em http://localhost:3333 ou na porta em que definiu em seu arquvio ENV.

2. Insomnia:

    Você pode encontrar o arquivo insomnia.json na raiz do projeto com os endpoints já configurados.

3. Swagger:

    Caso prefira também temos uma documentação com o Swagger, após iniciar a aplicação basta acessar http://localhost:3333/api-docs ou na porta em que definiu em seu arquvio ENV.

## Execução Testes

Os testes são escritos usando Jest e Supertest. Para executar os testes, use o comando:

    ```bash
    npm run test
    ```

    ou

    ```bash
    yarn test
    ```

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a MIT License - veja o arquivo LICENSE para mais detalhes.

## Contato

Se você tiver alguma dúvida ou sugestão, entre em contato:

-   Email: thomasdomingos@hotmail.com
-   GitHub: thomassds
