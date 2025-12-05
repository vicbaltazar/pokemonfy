# Pokemonfy 🎧

Um mini site estático que simula um player de música tipo Spotify, mas com tema de Pokémon.  
Ele toca faixas 8‑bit/lo‑fi e mostra sprites de Pokémon (Mimikyu, Phantump, Gothitelle, etc.).

## Tecnologias

- HTML, CSS e JavaScript (vanilla)
- Áudio HTML5 (`<audio>`)
- Sprites dos Pokémon via PokéAPI (URLs de sprites estáticos) [web:16][web:19]

## Como rodar

1. Clone o repositório:

git clone https://github.com/vicbaltazar/pokemonfy.git
cd pokemonfy

2. Abra o arquivo `index.html` no navegador  
ou use a extensão **Live Server** no VS Code.

## Estrutura do projeto

- `index.html` – layout do player
- `style.css` – estilos (tema escuro + cores de Pokémon)
- `script.js` – lógica do player (play/pause, próxima faixa, barra de progresso)
