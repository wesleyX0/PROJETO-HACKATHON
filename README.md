# 🌸 FlowUp! - Produtividade sem perder sua paz

![Status do Projeto](https://img.shields.io/badge/Status-Concluído%20(MVP)-success)
![Licença](https://img.shields.io/badge/License-MIT-blue)

## 🎯 Problema/Desafio Abordado
O **FlowUp!** nasceu para combater a epidemia do *burnout* digital. No cenário atual, profissionais e estudantes enfrentam extrema dificuldade em manter a produtividade sem sacrificar a saúde mental. A constante fragmentação da atenção, o excesso de tempo de tela e a falta de limites entre trabalho e descanso geram estresse e fadiga. Nosso desafio foi criar um ecossistema digital que unisse a eficiência do gerenciamento de tempo (foco) com o monitoramento ativo do bem-estar diário.

## 👥 Integrantes da Equipe
* **[Seu Nome / Wesley]** - Desenvolvedor Full-stack (Node.js / JavaScript)
* **[Nome do Integrante 2]** - Front-end / UI Design (Figma)
* **[Nome do Integrante 3]** - Back-end / Banco de Dados
*(Substitua pelos nomes reais e papéis da equipe)*

## 💻 Tecnologias Utilizadas
**Front-end:**
* HTML5 & CSS3
* JavaScript (Vanilla)
* Tailwind CSS (via CDN)
* LocalStorage (Gerenciamento de sessão/temas)

**Back-end:**
* Node.js
* Express.js (Roteamento e API REST)
* CORS (Controle de acesso)

**Banco de Dados:**
* MySQL (MySQL2 driver)

## ✨ Funcionalidades Implementadas
* **Autenticação de Usuários:** Cadastro e Login integrados ao banco de dados.
* **Dashboard Interativo:** Resumo diário com métricas de tempo de tela, humor e horas de sono.
* **Gerenciador de Tarefas (CRUD):** Criação de tarefas com estimativa de Pomodoros, atualização de progresso e exclusão.
* **Módulo de Foco:** Conexão direta entre o planejamento de atividades e a execução com controle de tempo.
* **Registro de Bem-estar:** Formulário para monitoramento de humor e sono diários.
* **Acessibilidade Visual:** Botão de *Light/Dark Mode* que altera a interface globalmente salvando a preferência do usuário.

## 🗄️ Estrutura do Banco de Dados (`db_pomodoro`)
O sistema utiliza um banco de dados relacional estruturado da seguinte forma:

1. **`usuarios`**: 
   * `id` (INT, PK), `nome` (VARCHAR), `email` (VARCHAR, UNIQUE), `senha` (VARCHAR).
2. **`tarefas`**: 
   * `id` (INT, PK), `titulo` (VARCHAR), `esc_pomodoro` (INT), `act_pomodoros` (INT), `status` (VARCHAR), `usuario_id` (INT, FK).
3. **`registros_diarios`**: 
   * `id` (INT, PK), `usuario_id` (INT, FK), `data` (DATE), `horas_sono` (DECIMAL), `humor` (VARCHAR), `tempo_tela_minutos` (INT).

## 💰 Modelo de Monetização
O FlowUp! utiliza o modelo **Freemium**. 
* **Plano Gratuito (Basic):** Acesso ao gerenciador de tarefas básico, timer de Pomodoro e registro de humor/sono diário.
* **Plano Pro (Premium):** Desbloqueia através de assinatura mensal o acesso à aba "Relatórios" avançados, dashboards de longo prazo (evolução gráfica), sincronização com *smartwatches* (Apple Watch/Garmin) e configurações avançadas de intervalos e personalização.

## 🚀 Instruções para Execução Local

### Pré-requisitos
* Node.js instalado.
* MySQL rodando localmente (na porta 3306).

### 1. Banco de Dados
1. Crie um banco de dados chamado `db_pomodoro` no seu MySQL.
2. Crie as tabelas baseadas na estrutura detalhada acima.
3. No arquivo `config/db.js` do Back-end, configure a senha do root (atualmente setada para `'362512'`).

### 2. Rodando o Back-end
```bash
# Navegue até a pasta do back-end
cd backend

# Instale as dependências
npm install express mysql2 cors nodemon

# Inicie o servidor
npm run dev
# (O servidor iniciará na porta 3000)