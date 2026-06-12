# 💖 Presente de Dias dos Namorados

> Site romântico com pétalas animadas, carta de amor e a música **Ilhabela** de fundo.

---

## 🚀 Como publicar no GitHub Pages

1. **Crie um repositório** no GitHub (pode ser privado ou público).
2. **Faça upload** de todos os arquivos mantendo a estrutura de pastas.
3. Vá em **Settings → Pages → Branch: main → / (root)** e salve.
4. Em alguns minutos seu site estará em `https://seu-usuario.github.io/nome-do-repo`

---

## ✏️ Personalizações obrigatórias

### 1. Data em que vocês se conheceram
Abra `js/main.js` e altere a linha:
```js
const START_DATE = new Date(2024, 0, 1);
```
Formato: `new Date(ANO, MES-1, DIA)`
Exemplo para 14 de fevereiro de 2025: `new Date(2025, 1, 14)`

### 2. Texto da carta
Abra `index.html` e edite o trecho dentro de `<article class="letter">`.

### 3. Fotos de vocês
Coloque suas fotos na pasta `assets/` com os nomes:
- `foto1.jpg`
- `foto2.jpg`
- `foto3.jpg`
- `foto4.jpg`
- `foto5.jpg`

### 4. Música
O site toca **Ilhabela** via YouTube embed. Caso queira trocar:
- Encontre o ID do vídeo no YouTube (ex: `dQw4w9WgXcQ`)
- Abra `index.html` e substitua `cJAB-hNbRF8` pelo novo ID nas duas ocorrências

---

## 📁 Estrutura de arquivos

```
/
├── index.html          ← página principal
├── css/
│   └── style.css       ← todo o visual
├── js/
│   └── main.js         ← animações, contagem e música
├── assets/
│   ├── foto1.jpg       ← coloque suas fotos aqui
│   ├── foto2.jpg
│   ├── foto3.jpg
│   ├── foto4.jpg
│   └── foto5.jpg
└── README.md
```

---

## 🎨 Recursos

- 🌸 Pétalas de rosa caindo com canvas animado
- 💛 Corações flutuantes na hero
- 💌 Carta de amor com scroll reveal
- ✨ Cards de razões com animações ao rolar
- 📷 Galeria de fotos (5 fotos)
- ⏱️ Contador de dias desde que se conheceram
- 🎵 Música Ilhabela de fundo com botão de controle
- 📱 100% responsivo (mobile + desktop)

---

Feito com ❤️ para um presente único.
