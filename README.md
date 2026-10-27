# 🏢 Trampou Admin — Painel de Gestão & Monetização

Painel administrativo independente e exclusivo para desktop do aplicativo **Trampou (Parauapebas / PA)**.

---

## ⚡ Recursos do Painel

- **Relógio do Tempo da Base (Odômetro Flip Clock):** Contagem em tempo real somando clientes e profissionais, com meta de 1.000 usuários e simulação de comemoração com chuva de confetes.
- **Gerenciador de Banners:** Crie, edite e ative/desative campanhas publicitárias visíveis para todos os usuários do app.
- **Base de Profissionais:** Gestão de autônomos, contato direto via WhatsApp, e ativação/desativação do selo de verificação em 1 clique.
- **Usuários Clientes:** Listagem de clientes com busca e contato direto.
- **Monetização & Planos PRO:** Controle financeiro (MRR), registro de assinaturas PRO e métodos de pagamento.

---

## 🔒 Segurança

- Protegido por tela de autenticação com **Senha Mestre de Administrador**.
- Senha Padrão: `admin@trampou2026`

---

## 🚀 Como Rodar Localmente

```bash
# 1. Instalar dependências
npm install

# 2. Iniciar servidor local
npm run dev
```

Acesse em seu navegador: `http://localhost:3001`

---

## 🌐 Deploy no Subdomínio (ex: admin.trampou.jw.tec.br)

1. Crie um novo repositório no seu GitHub chamado `trampou-admin`.
2. Faça o push desta pasta para o repositório.
3. Importe o projeto na **Vercel**.
4. Nas configurações de domínios da Vercel, adicione `admin.trampou.jw.tec.br`.
5. No seu provedor DNS (Cloudflare ou Registro.br), aponte o CNAME `admin` para `cname.vercel-dns.com`.
