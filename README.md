# Projeto Front-End

## Requisitos

- Node.js 20+

## Instalação

```bash
npm install
```

## Executando o Projeto

```bash
npm run dev
```

O projeto estará disponível em:

```code
http://localhost:5173
```

## Organização das Pastas

```
src
├── assets # Ícones, imagens e arquivos estáticos
├── components # Componentes reutilizáveis em geral
│ └── ui # Componentes de UI (Button, Input, etc.)
├── contexts # Contextos globais da aplicação
├── hooks # Hooks personalizados
├── pages # Páginas da aplicação
├── providers # Providers utilizados com Context API
├── schemas # Esquemas de validação de formulários
├── services # Chamadas para APIs (*)
├── types # Interfaces e tipos globais
```

(\*) Nesse projeto eu usei o localStorage para armazenar os dados para simular o funcionamento do backend.

## Tecnologias Utilizadas

- React
- Vite
- TypeScript
- React Router
- Context API
- TailwindCSS
- CSS Module
- React Hook Form
- Zod
- React Toastify
