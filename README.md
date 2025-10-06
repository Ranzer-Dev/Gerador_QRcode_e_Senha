# Gerador_QRcode_e_Senha

Projeto desenvolvido durante o curso **Fundamentos NodeJS** da DIO.
Seu objetivo é demonstrar de forma prática o uso de pacotes do Node.js para **gerar QR Codes** e **criar senhas aleatórias**.

---

## 📖 Descrição

Este é um pequeno aplicativo em Node.js que utiliza bibliotecas externas para realizar duas funções principais:

1. **Gerar códigos QR** a partir de textos ou URLs informados pelo usuário.
2. **Gerar senhas seguras e aleatórias**, com parâmetros personalizáveis como tamanho e tipo de caracteres.

O projeto serve como exemplo introdutório de como importar e utilizar pacotes NPM dentro de um projeto Node.

---

## 🧰 Tecnologias utilizadas

* **Node.js**
* **NPM**
* **Bibliotecas utilizadas:**

  * `qrcode` — para criação de QR Codes
  * `crypto` — para geração de senhas seguras

---

## 🧩 Estrutura de diretórios

```
Gerador_QRcode_e_Senha/
├── src/
│   ├── index.js          # Arquivo principal
│   ├── qrGenerator.js    # Função responsável pelo QR Code
│   └── senhaGenerator.js # Função responsável pela senha
├── package.json
├── package-lock.json
└── .gitignore
```

---

## ⚙️ Como executar

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/Ranzer-Dev/Gerador_QRcode_e_Senha.git
   ```

2. **Acesse a pasta:**

   ```bash
   cd Gerador_QRcode_e_Senha
   ```

3. **Instale as dependências:**

   ```bash
   npm install
   ```

4. **Execute o programa:**

   ```bash
   node src/index.js
   ```

---

## 🧠 Conceitos abordados

* Importação e uso de pacotes NPM.
* Manipulação de entrada e saída no terminal.
* Geração de arquivos a partir de bibliotecas externas.
* Boas práticas na estruturação de projetos Node.js.

---

## 💡 Melhorias futuras

* Adicionar interface web simples para geração de QR Code.
* Permitir exportar QR Codes em diferentes formatos (PNG, SVG).
* Gerar senhas com regras personalizadas (símbolos, números, maiúsculas, etc.).
* Adicionar testes automatizados.

---

## 📜 Licença

Este projeto está sob a licença MIT.
Sinta-se livre para utilizá-lo e modificá-lo conforme suas necessidades.

---

**Autor:** [Ranzer Almeida (Ranzer-Dev)](https://github.com/Ranzer-Dev)
