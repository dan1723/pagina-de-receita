# 🥚 Simple Omelette Recipe Page

Uma página de receita simples e responsiva, criada como desafio do **[Frontend Mentor](https://www.frontendmentor.io)**.  
O projeto apresenta uma receita clássica de omelete, com design limpo e adaptável para diferentes tamanhos de tela.  

---

## 📸 Preview

### 💻 Versão Desktop  
<img src="./design/desktop-design.jpg" alt="Design desktop da página" width="600">

### 📱 Versão Mobile  
<img src="./design/mobile-design.jpg" alt="Design mobile da página" width="300">

---

## 🧱 Estrutura do Projeto

📁 omelette-recipe/
├── 📁 assets/
│ └── 📁 images/
│ ├── image-omelette.jpeg
│ └── favicon-32x32.png
├── 📁 CSS/
│ └── style.css
├── index.html
└── README.md


---

## 🧾 Descrição

Este projeto é uma **página estática de receita**, que simula um artigo culinário simples.  
Ele apresenta seções bem definidas:  

- **Imagem de destaque (banner)**  
- **Título e descrição da receita**  
- **Tempo de preparo**  
- **Lista de ingredientes**  
- **Passo a passo das instruções**  
- **Tabela nutricional**

---

## 🧠 Conceitos e Tecnologias Utilizadas

### 🔹 HTML5
- Estrutura semântica usando `<main>`, `<section>`, `<article>` e `<ul>`.
- Organização lógica e de fácil leitura.

### 🔹 CSS3
- Uso de **variáveis CSS** (`:root`) para facilitar manutenção de cores.
- **Tipografia personalizada** com importação de fontes do Google Fonts:
  - `Young Serif` para títulos.
  - `Outfit` para o corpo do texto.
- Layout responsivo com **flexbox** e **media queries**.
- Estilização clean, com **paleta suave** e tipografia legível.
- Uso de **unidades relativas (rem)** para garantir escalabilidade.

---

## 🎨 Paleta de Cores

| Nome da Variável | Cor | Descrição |
|------------------|------|------------|
| `--Nutmeg` | hsl(14, 45%, 36%) | Cor principal dos títulos e detalhes |
| `--DarkRaspberry` | hsl(332, 51%, 32%) | Destaques secundários |
| `--RoseWhite` | hsl(330, 100%, 98%) | Fundo suave para caixas de destaque |
| `--Eqqshell` | hsl(30, 54%, 90%) | Cor de fundo da página |
| `--LightGrey` | hsl(30, 18%, 87%) | Linhas divisórias e bordas |
| `--WengeBrown` | hsl(30, 10%, 34%) | Texto padrão |
| `--DarkCharcoal` | hsl(24, 5%, 18%) | Títulos escuros |

---

## 📱 Responsividade

O design foi otimizado para telas menores usando **media queries**:

```css
@media (max-width: 565px) {
  /* Ajustes no layout e tipografia */
}

---

## 🚀 Melhorias Futuras (Sugestões)

- Adicionar **animações suaves** nas transições de seções.  
- Implementar **modo escuro** com `localStorage`.  
- Converter o layout em um **componente React** reutilizável.  
- Incluir botão de **imprimir receita** ou **baixar PDF**.  

---

## 🧑‍💻 Autor

Desenvolvido com por **[Danilo Fernandes Gomes]**  
📧 **Contato:** dan.gomes1723@gmail.com  
🔗 **GitHub:** [github.com/dan1723](https://github.com/dan1723)

---

## 🪪 Licença

Este projeto é de uso **educacional** e foi desenvolvido como exercício do desafio **Frontend Mentor**.  
Você pode modificá-lo e utilizá-lo livremente para fins pessoais e de aprendizado.
