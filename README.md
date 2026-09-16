<h1 align="center">DINEIX — Landing Page de Serviços</h1>

<p align="center">
  Página de vendas para divulgar serviços de web e design: sites, identidade visual, aplicativos e edição de vídeo.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/status-em%20desenvolvimento-yellow" alt="Status: em desenvolvimento" />
</p>

Feita em HTML, CSS e JavaScript puro, sem framework e sem backend — é só abrir o `dineix-landing.html` no navegador.

## Sumário

- [Sobre o projeto](#sobre-o-projeto)
- [O que tem na página](#o-que-tem-na-página)
- [Tecnologias](#tecnologias)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Como rodar](#como-rodar)
- [Antes de publicar](#antes-de-publicar)
- [Possíveis evoluções](#possíveis-evoluções)

## Sobre o projeto

A ideia aqui não é um portfólio técnico, e sim uma página de vendas: apresenta os serviços, mostra como funciona o processo do primeiro contato até a entrega, e termina com uma chamada para contato por e-mail ou WhatsApp.

Como ainda não tem projetos de clientes reais suficientes para preencher um portfólio, a seção de portfólio mistura um caso real (o site [dxavierminis.com.br](https://www.dxavierminis.com.br)) com exemplos ilustrativos (mockups em SVG) separados por abas: Sites & Landing Pages, Identidade Visual, Aplicativos e Vídeos.

## O que tem na página

- Cabeçalho fixo, com sombra sutil que aparece ao rolar a página
- Seção inicial (hero) com chamada para ação
- Portfólio com abas trocando de conteúdo via JavaScript, sem recarregar a página
- Grade de serviços oferecidos, com um card em destaque para o "ecossistema integrado" (site + identidade + vídeo + app)
- Seção de processo (as 4 etapas do trabalho) e diferenciais
- Chamada final com links diretos de e-mail e WhatsApp
- Animação leve de "revelar ao rolar" nos blocos da página, usando `IntersectionObserver`

## Tecnologias

- HTML5 semântico
- CSS puro, com variáveis (`:root`) para cores e fácil troca de paleta
- JavaScript puro (sem dependências) para as abas do portfólio, o efeito de scroll no cabeçalho e o reveal ao rolar
- Fontes do Google Fonts: Fraunces (títulos) + Inter (texto)

## Estrutura do projeto

```
DINEIXAVIER/
├── dineix-landing.html   # estrutura da página
├── style.css             # todo o visual, incluindo a paleta de cores em variáveis CSS
├── scripts.js            # abas do portfólio, scroll do cabeçalho e reveal
└── imagens/              # logo e imagem usada no card de portfólio
```

## Como rodar

Não precisa de servidor nem instalação — é só abrir o arquivo direto:

```bash
git clone https://github.com/jadineigxavier/DINEIXAVIER
cd DINEIXAVIER
```

Depois é só dar duplo clique em `dineix-landing.html`, ou abrir com a extensão Live Server do VS Code para já recarregar automaticamente a cada alteração.

## Antes de publicar

> [!WARNING]
> Alguns pontos ainda estão com placeholder e precisam ser trocados pelo dado real antes de colocar no ar:

- `mailto:SEUEMAILAQUI@gmail.com` → trocar pelo e-mail de contato
- `https://wa.me/55SEUNUMEROAQUI` → trocar pelo número de WhatsApp (com DDI e DDD)

## Possíveis evoluções

- [ ] Trocar os mockups em SVG por prints reais de projetos conforme forem sendo feitos
- [ ] Formulário de contato em vez de (ou além de) e-mail/WhatsApp
- [ ] Hospedar em domínio próprio (hoje é um projeto separado do site pessoal dxavierminis.com.br)

---

<p align="center">Feito por <strong>Dinei Xavier</strong></p>
