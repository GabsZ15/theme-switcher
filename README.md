# 🌗 Theme Switcher — Alternância de Temas com Vanilla JavaScript

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

Aplicação web interativa desenvolvida com **JavaScript Vanilla**, **HTML5** e **CSS3**. O projeto demonstra como implementar a alternância de temas (Light Mode / Dark Mode) utilizando manipulação nativa do DOM e variáveis CSS.

---

## 🚀 Funcionalidades

- 🌓 **Alternância de Tema:** Troca dinâmica entre modo claro e modo escuro ao clicar no botão `#theme-toggle`.
- 🎨 **Variáveis CSS:** Atualização instantânea da paleta de cores através da troca de classes no elemento `<body>`.
- 📱 **Interface Centralizada:** Layout estilizado com Flexbox e container responsivo.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** (Estruturação da interface)
- **CSS3** (Variáveis CSS com `:root`, transições e Flexbox)
- **JavaScript Vanilla** (Event listeners, `querySelector` e `classList.toggle`)

---

## 📁 Estrutura do Projeto

```text
theme-switcher/
├── app.js         # Lógica JavaScript para escuta de cliques e alternância de temas
├── index.html     # Estrutura HTML do gerenciador de tarefas
├── style.css      # Estilos CSS e definições de variáveis dos temas claro e escuro
└── README.md      # Documentação do projeto
```

---

## 🔧 Como Executar o Projeto Localmente

1. **Clonar o repositório:**
   ```bash
   git clone https://github.com/GabsZ15/theme-switcher.git
   cd theme-switcher
   ```

2. **Abrir a aplicação:**
   Abra o arquivo `index.html` em qualquer navegador web dando um duplo clique ou utilizando a extensão *Live Server* no VS Code.

---

## 🧠 Aprendizados Práticos

- Manipulação de eventos no DOM com `addEventListener`.
- Alternância de classes CSS utilizando `classList.toggle()`.
- Definição e reutilização de esquemas de cores com variáveis CSS (`--bg`, `--font-color`).