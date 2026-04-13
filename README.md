# Dev Portfolio

Repositório oficial do meu portfólio pessoal, desenvolvido para apresentar meus projetos, habilidades técnicas e facilitar contato para oportunidades como Desenvolvedor.

🔗 **Acesse o site online:**  
https://daniel-dealmeida-dev.github.io/Portfolio-pessoal/

---

## 🚀 Sobre o Projeto

Este portfólio foi desenvolvido com foco em:

* **Performance:** Carregamento leve e otimizado de recursos.
* **Código limpo e semântico:** Facilidade de manutenção e leitura.
* **Responsividade Mobile-First:** Experiência adaptada para qualquer dispositivo.
* **Estrutura organizada:** Fácil de evoluir com novos projetos e seções.

O objetivo é centralizar meus principais projetos e demonstrar minhas competências técnicas de forma clara e profissional para recrutadores e parceiros.

---

## 🖼️ Imagens do Projeto

Em desktop:

<img width="1910" height="763" alt="Imagem-Portfolio_1" src="https://github.com/user-attachments/assets/8e482533-2753-4cc2-a891-a634e0bd49a2" />

Em mobile:

<img width="580" height="656" alt="previw-mobile" src="https://github.com/user-attachments/assets/f43a3482-1959-49f3-85f0-ede57edbe091" />

---

## 🛠️ Tecnologias Utilizadas

### **Frontend**
* **HTML5 Semântico:** Estrutura correta para SEO e acessibilidade.
* **CSS3 (Flexbox + Grid):** Layout moderno e responsivo.
* **Design Mobile-First:** Foco inicial em dispositivos móveis.

### **Interatividade**
* **JavaScript Vanilla:** Manipulação do DOM para funcionalidades como menu mobile e interações dinâmicas.
* **Integração com EmailJS:** Envio de mensagens diretamente pelo formulário de contato.

### **Automação**
* **GitHub Actions:** Validação básica automática da estrutura HTML usando `tidy` a cada push.

---

## ✨ Funcionalidades

* ✅ Seção **"Sobre Mim"** com resumo profissional, idade e experiência.
* ✅ **Galeria de Projetos** com links diretos para repositórios no GitHub.
* ✅ Seção de **Habilidades Técnicas** com níveis de conhecimento.
* ✅ **Menu responsivo (hambúrguer)** funcional para mobile.
* ✅ **Formulário de contato funcional** integrado com EmailJS.
* ✅ Validação de formulário com feedback visual e proteção básica contra spam.
* ✅ Destaque para projetos envolvendo **Web3, Blockchain e Spring Boot**.

---

## ⚙️ Integração Contínua (CI/CD)

O repositório utiliza **GitHub Actions** para validação automática do código fonte.

**A cada push ou pull_request:**
1. O código é baixado no runner oficial do GitHub (Ubuntu).
2. O utilitário `tidy` valida a estrutura do HTML em busca de erros.

Isso ajuda a manter o código consistente e livre de problemas estruturais básicos.

---

## 🧩 Como Executar Localmente

```bash
# Clone o repositório
git clone https://github.com/daniel-dealmeida-dev/Portfolio-pessoal.git

# Acesse a pasta do projeto
cd Portfolio-pessoal

# Abra no VS Code
code .

# Ou abra o arquivo index.html diretamente no navegador
