# 💻 DevPortfólio - Daniel de Almeida

![CI - Portfolio Check](https://github.com/daniel-dealmeida-dev/portfolio-pessoal/actions/workflows/main.yml/badge.svg)

Este é o repositório do meu portfólio pessoal. Um projeto desenvolvido para centralizar meus projetos, habilidades técnicas e facilitar o contato para oportunidades como Desenvolvedor Full-Stack.

> [!TIP]
> **Acesse o site online:https://daniel-dealmeida-dev.github.io/Portfolio-pessoal/

---

## 🛠️ Tecnologias e Ferramentas

O projeto foi construído com foco em performance e código limpo, utilizando:

* **Frontend:** HTML5 semântico e CSS3 (layouts modernos com Flexbox e Grid).
* **Interatividade:** JavaScript Vanilla para manipulação do DOM (Menu Mobile).
* **CI/CD:** GitHub Actions configurado para automação de testes de sintaxe.
* **Design:** Responsividade Mobile-First (adaptado para qualquer tela).

---

##  Funcionalidades

- [x] **Seção Sobre Mim:** Breve histórico e métricas de experiência.
- [x] **Galeria de Projetos:** Cards interativos com links para repositórios (Web3, Spring Boot, etc).
- [x] **Habilidades:** Listagem técnica com níveis de proficiência.
- [x] **Menu Responsivo:** Navegação otimizada para dispositivos móveis via menu hambúrguer.
- [x] **Integração Web3:** Destaque para projetos de governança e Blockchain.

---

##  Configuração de CI/CD

Este repositório utiliza **GitHub Actions** para garantir a integridade do código. A cada `push` ou `pull_request`, um fluxo de trabalho automatizado é disparado:

1.  **Checkout:** O código é baixado no runner do GitHub.
2.  **Validation:** O comando `tidy` analisa a estrutura do HTML em busca de erros de abertura/fechamento de tags e acessibilidade.
3.  **Status:** O badge no topo deste README indica se a última versão do site está com a estrutura correta.

---

##  Como clonar o projeto

Se desejar rodar este portfólio localmente:

```bash
# Clone o repositório
git clone [https://github.com/daniel-dealmeida-dev/NOME-DO-REPOSITORIO.git](https://github.com/daniel-dealmeida-dev/NOME-DO-REPOSITORIO.git)

# Acesse a pasta
cd NOME-DO-REPOSITORIO

# Abra no VS Code ou navegador
code index.html
