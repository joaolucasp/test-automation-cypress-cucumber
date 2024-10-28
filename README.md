# Projeto de Automação de Testes: Test-automation-cypress-cucumber

Este repositório é um projeto de automação de testes desenvolvido com o framework Cypress e a biblioteca Cucumber. O Cypress é uma ferramenta robusta para automação de testes end-to-end, ideal para testar aplicações web e APIs. Já o Cucumber oferece uma abordagem de testes orientada a comportamento (BDD - Behavior Driven Development), utilizando linguagem Gherkin para escrever cenários de teste em uma estrutura legível e acessível a todos os envolvidos.

No projeto, os testes foram escritos em TypeScript (TS), proporcionando tipagem estática e melhor manutenção do código.
___

### Testes GUI (Interface Gráfica do Usuário)
1. **Realizar a busca de um produto** - Busca um produto no sistema e verifica se os resultados exibidos são relevantes.
2. **Incluir produto no carrinho** - Adiciona um produto específico ao carrinho de compras e confirma a inclusão.
3. **Validar produtos no carrinho na tela de pagamento** - Garante que os produtos selecionados estejam presentes e corretos na tela de pagamento.

### Testes de API

1. **Buscar produto (GET)** - Valida a exibição de produtos conforme os critérios de busca e verifica o status code `200`.
2. **Atualizar imagem de um produto (POST)** - Garante que a imagem do produto foi atualizada corretamente, valida o ID da nova imagem inserida e o status code `200`.

___

## 🖥️ Pré-requisitos

Para executar o projeto, é necessário ter **Node.js** e **npm** instalados.

> **Versões utilizadas**:
> - Node.js: `v22.3.0`
> - npm: `10.8.1`

Recomenda-se usar essas versões ou posteriores para evitar incompatibilidades.

___

## 🏗️ Arquitetura do Projeto e Padrão de Organização

Este projeto é organizado em duas principais categorias de teste: **testes de API** e **testes de GUI (Graphical User Interface)**.

### Estrutura de Pastas

- **`e2e`**: Contém todos os testes end-to-end.
- **`features`**: Guarda as regras de negócio em cenários escritos em Gherkin.
- **`helpers`**: Fornece classes auxiliares que geram e manipulam dados para testes.
- **`services`**: Gerencia toda a lógica de integração com as APIs fornecidas.

### Detalhamento da Pasta `features`

A pasta `features` é organizada em subpastas que representam diferentes camadas e responsabilidades da aplicação de teste.

- **components**: Armazena arquivos e classes responsáveis por lidar com eventos e comportamento de componentes específicos da interface, como navbar, footer, etc.
- **pages**: Armazena as páginas automatizadas da aplicação. Cada página possui:
  - **Page Objects**: Representam a página e seus elementos, responsáveis por interagir com a interface. Podem ou não conterem component-objects.	
  - **Component Objects**: Objetos específicos de componentes da página, geralmente reutilizados em várias páginas.
  - **Locators**: Identificadores dos elementos da página.
  - **Assertions**: Classe que valida os resultados após a execução do teste.
- **managers**: Atua como uma camada intermediária entre os testes e os serviços externos (APIs). Ao invés dos testes chamarem os serviços diretamente, eles interagem com essa camada, promovendo desacoplamento e melhor modularidade.

### Detalhamento da Pasta `services`

Na pasta `services`, os módulos do sistema estão organizados por funcionalidade:
- **account** e **product**: Cada módulo é responsável por realizar requisições e tratar dados correspondentes às funcionalidades de conta e produtos.

Essa organização proporciona uma estrutura modular, permitindo fácil manutenção e escalabilidade à medida que novos testes e funcionalidades são adicionados.

___

## 🧪 Scripts

Para facilitar a execução de testes específicos por funcionalidade, você pode utilizar os comandos abaixo. Cada script está configurado para executar uma funcionalidade específica dentro do projeto.

### Testes de API:

``test:api:search-product`` - Buscar produto via API

``test:api:product-update`` - Atualizar imagem de um produto via API


### Testes de Interface Gráfica (GUI - Web)

``test:web:add-product-to-cart`` - Adicionar produto ao carrinho

``test:web:product-checkout`` - Validar produtos no carrinho na tela de pagamento

``test:web:search-product`` - Buscar produto na interface gráfica (GUI)

Para executar qualquer um dos scripts, utilize o comando: npm run <nome-do-script>

___

## 🤝 Colaboradores

Agradecemos à(s) seguinte(s) pessoa(s) que contribuíu(ram) para este projeto:

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img style="border-radius: 30px;" src="https://avatars.githubusercontent.com/u/83319546?v=4" width="100px;" alt="Foto do João Lucas no GitHub"/><br>
        <sub>
          <b>João Lucas</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
