# Ignite Lab 4
 Desenvolvimento de design system


## Ferramentas Usadas:
* React
* tailwindcss
* storybook
* Figma



## Comandos utilizados

* `yarn create vite` > cria o projeto (web)
* `cd web` > entra na pasta do projeto
* `yarn install` > instala dependendcias
* `yarn add -D tailwindcss postcss autoprefixer` > instala o tailwind,post,autoprefixer 
* `yarn tailwindcss init -p` > inicia o tailwind (-p do post css)
* `yarn add storybook` > adiciona o storybook no projeto
* `yarn storybook init --builder @storybook/builder-vite` > adiciona o storybook
* `yarn storybook` > inicia o storybook (demora um pouco)
* `yarn add clsx --save` > adiciona classes condicionais no tailwindcss 
* `yarn add @radix-ui/react-slot` > slot - permite alterar um componente interno, Repassa as configurações do componente slot para o primeiro componente dentro do children
* `yarn add phosphor-react` > icones
* `yarn add @radix-ui/react-checkbox` > Checkbox, bom para customizar facilmente o icone dos checkbox's e não perder a acessibilidade
* `yarn add @storybook/storybook-deployer --save-dev` > Deploy do storybook
  * Scripts: "deploy-storybook": "storybook-to-ghpages" (Colocar no package.json)
* `yarn add @storybook/addon-a11y` > addon de acessibilidade no storybook (saber da acessibilidade dos seus componentes)
  * colocar `"@storybook/addon-a11y"` no ./storybook/main.cjs "addons": [ ..., aqui ]

---


* Github pages:
  * .storybook/main.cjs > variavel viteFinal
  * ci: ./.github/workflows (configurado para yarn + diretorio raiz sendo /web)
  * ir no github depois nas paginas e adicionar a branch gh-page e dar o deploy

## Uteis:

* `https://worldvectorlogo.com/` logos de marcas famosas
* storybook > visualização de componentes em um só lugar/ documentação dos componentes, mto util
* arquivo do tema escuro: ./.storybook/manager.js + ./.storybook/preview.cjs
* radix, componentes utilitarios com acessibilidade
* https://transform.tools/ transforma svg em componente react
* storybook interactions addon > testes no storybook!
  * storybook test-runner yarn test-storybook (--watch para teste em desenvolvimento)
* MSW: Moc service worker > testar componente sem necessidade de um servidor hospedado (funciona com o storybook)
