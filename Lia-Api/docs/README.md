# Lia API - Virtual Assistent

Prazer, eu sou a Lia a sua assistente virtual. Esta é a documentação que ira te guiar em como você pode ultilizar a minha api. Esta aplicação foi construída usando Node.js, TypeScript e TypeORM, e é estruturada seguindo boas práticas de desenvolvimento.

## Funcionalidades

-   Responder perguntas e menssagens através de Inteligencia Artificial
-   Armazenar interações

## Tecnologias Usadas

-   Node.js
-   TypeScript
-   Express
-   TypeORM
-   MongoDB
-   Jest
-   ChatGPT

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
    git clone https://github.com/seuusuario/kenlo-chalenge.git
    cd lead-management-api

    ```

2.  Instale as dependências:

    ```bash
    npm install
    ```

    ou

    ```bash
    yarn add
    ```

3.  Configure suas variáveis de ambiente:

Crie um arquivo .env na raiz do projeto com as seguintes variáveis:

-   NODE_ENV=production (Para executar testes é nescessario setar como "test")
-   PORT=3334
-   AUTH_SECRET=Seu Token de Autenticação
-   DATABASE_TYPE=mongodb
-   DATABASE_URL=mongodb+srv://<user>:<password>/?retryWrites=true&w=majority&appName=<database>
-   OPENAI_API_KEY=Seu token [OpenAI](https://platform.openai.com/organization/api-keys)
-   LEAD_MANAGER_BASE_URL=Url Lead Manager
-   LEAD_MANAGER_API_KEY=Seu Token de Autenticação Lead Manager

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

    Caso prefira também temos uma documentação com o Swagger, após iniciar a aplicação basta acessar http://localhost:3334/api-docs ou na porta em que definiu em seu arquvio ENV.

## Execução Testes

Os testes são escritos usando Jest e Supertest. Para executar os testes, use o comando:

Obs: Para funcionar variavel de ambiente NODE_ENV deve estar como "test"

1. Iniciar Testes:

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
-   GitHub: @thomassds
