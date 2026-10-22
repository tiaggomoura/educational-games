# Fala TEA — jogos e conteúdos

Site estático em português brasileiro com atividades educativas, textos informativos e materiais do projeto Fala TEA.

## Páginas principais

- `index.html` — apresentação do projeto, jogos, guias e e-book.
- `educational-games.html` — catálogo das atividades.
- `conteudos/` — textos informativos com referências.
- `sobre.html`, `contato.html` e `privacidade.html` — páginas institucionais.
- `ebook-mini-receitas/ebook.html` — página do e-book e checkout da Eduzz.
- `ads.txt` — declaração do vendedor autorizado do AdSense.
- `robots.txt` e `sitemap.xml` — instruções de rastreamento e mapa das páginas públicas.

## Jogos

- `onde-eu-moro.html`
- `eu-quero.html`
- `o-que-eu-preciso.html`
- `montar-bicho.html`
- `domino-da-casa.html`
- `faca-como-eu.html`

Mantenha os arquivos das pastas `assets/`, `imagens/`, `audios/` e `videos/` ao publicar o site, pois são usados pelas páginas e pelos jogos. O jogo “Faça como eu!” mantém preferências e registros de sessão no armazenamento local do navegador. Consulte a política de privacidade para detalhes.

## Execução local

Sirva a pasta raiz com um servidor HTTP estático. Por exemplo:

```bash
python -m http.server 8000
```

Depois abra `http://localhost:8000`. Algumas funções, como o checkout da Eduzz e recursos de voz do navegador, precisam de conexão e suporte do navegador.

## Publicação

O projeto pode ser hospedado como site estático, preservando os nomes e a estrutura das pastas. O domínio configurado para o sitemap é `https://falatea.com.br`.

## Conteúdo

Os textos do diretório `conteudos/` foram preparados para fins educativos e incluem links para as fontes consultadas. Eles não substituem avaliação ou orientação profissional individualizada. Para correções e dúvidas, use o contato informado em `contato.html`.
