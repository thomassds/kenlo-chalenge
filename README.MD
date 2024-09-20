# Kenlo Chalenge

Este é um desafio realizado para a empresa Kenlo

## Chalenge

👉 API1 - Realiza um cadastro inicial de um possível cliente e armazena em um banco de dados noSQL
👉 API2 - Interage com uma única pergunta do usuário em uma integração com ChatGPT e armazena na mesma collection onde se encontra os dados do cliente

## Requisitos

-   Seu serviço deve ser acessível através de uma API REST
-   Você deverá desenvolver 2 APIs
-   Seu serviço deve validar os dados de entrada
-   Os dados coletados para cadastro são: nome, email e telefone
-   Seu serviço deve utilizar um banco noSQL
-   Integrado ao ChatGPT - [Documentação](https://platform.openai.com/docs/api-reference/introduction)
-   Aconselhado utilizar containers para o desenvolvimento (Docker)
-   Disponibilizar os serviços Online

## O que gostaríamos de ver nos microserviços

-   Boas práticas de desenvolvimento
-   Padrões de codificação
-   Execução utilizando docker
-   Readme bem estruturado explicando a arquitetura e instruções para subir os microserviços
-   Código no GitHub, demonstrando conhecimento em sua utilização
-   Swagger
-   Teste unitário e teste de integração
-   CI/CD

## Execução

Para testar esta aplicação você pode fazer de 3 formas, em produção, com docker ou executando localmente.

Caso queira executar em produção basta seguir os links que temos a baixo e fica a sua escolha se deseja usar o Swagger ou o Insomnia (O arquivo se encontra na raiz de cada projeto).

Para criar um ambiente em seu computador atraves do docker você precisa: (Nescessario ter instalado o docker e docker-compose)

-   Baixar este repositorio
-   Definir as variaveis de ambiente no arquivo docker-compose.yml -
-   Abrir o repositorio no terminal(cmd)
-   Executar o comando:

    ```bash
    docker-compose up --build
    ```

Caso queira executar locamente você precisara seguir o readme de cada aplicação nela tera as especificações de cada API.

## Lead Manager

-   Aplicação: https://lead-manager-production.up.railway.app/api
-   Swagger: https://lead-manager-production.up.railway.app/api-docs/
-   Read Me: https://github.com/thomassds/kenlo-chalenge/blob/main/Leads-Api/docs/README.md

## Lia

-   Aplicação: lia-production.up.railway.app/api/lia
-   Swagger: https://lead-manager-production.up.railway.app/api-docs/
-   Read Me: https://github.com/thomassds/kenlo-chalenge/blob/main/Lia-Api/docs/README.md

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a MIT License - veja o arquivo LICENSE para mais detalhes.

## Contato

Se você tiver alguma dúvida ou sugestão, entre em contato:

-   Email: thomasdomingos@hotmail.com
-   GitHub: @thomassds
