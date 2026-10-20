# Conecta Luziânia

Reprodução visual da tela **Editar Aluno**, importada do arquivo
`clonai_conecta-luziania-pontoid-technology.zip`.

A rota inicial apresenta `public/conecta.html`, derivado do `snapshot.html`
capturado no ZIP, com os estilos, fontes e imagens locais em `public/mirror/`.
O documento fica em um iframe isolado para preservar o CSS original sem
interferência dos estilos do aplicativo.

O snapshot preserva a aba **Dados Socioeconômicos** selecionada na captura.
Os dados pessoais e escolares foram substituídos por campos vazios e dados
fictícios de demonstração. Registros em abas ocultas e imagens pessoais sem
uso foram removidos antes da publicação no repositório público.
É uma reprodução visual: autenticação, navegação do sistema, salvar e excluir
dependem do backend original e não estão conectados. Scripts e envios de
formulário estão bloqueados. O token de sessão capturado foi removido.
Os endpoints de imagens que retornaram HTML na exportação foram substituídos
pelo logotipo e pela imagem padrão já incluídos no ZIP.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/ea79a680-25a5-4834-895f-4d86ed5ce3ac).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
