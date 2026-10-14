# Dr. Nzinga João — Site institucional e portal

Scaffold inicial em Next.js + Tailwind CSS (conteúdo em português).

Páginas incluídas (MVP): Home, Sobre, Serviços, Equipe, Agendamento, Portal do paciente (stub), Telemedicina, Contato, FAQ, Blog, Carreiras.

Como rodar localmente

1. Instalar dependências:

   ```bash
   npm install
   ```

2. Rodar em modo desenvolvimento:

   ```bash
   npm run dev
   ```

Variáveis de ambiente importantes

- ADMIN_PASSWORD — senha do painel administrativo (ex: export ADMIN_PASSWORD=umaSenhaSegura)

Deploy recomendado: Vercel (integração automática com o repositório)

Próximos passos sugeridos
- Implementar autenticação (NextAuth ou custom), conectar Portal do Paciente.
- Integração de pagamentos: Stripe (cartões) e Pix (opcional).
- SMS/WhatsApp: Twilio ou WhatsApp Business API.
- EMR/EHR: definir sistema a integrar ou criar endpoints seguros para integração.
- Telemedicina: selecionar provedor (Jitsi/Daily/Twilio Video) e integrar com agendamentos.

Administração (MVP)

Incluí um painel administrativo básico com:
- Login administrativo (POST /api/admin/login) — utiliza a variável de ambiente ADMIN_PASSWORD
- Painel protegido em /admin com placeholders para Agendamentos, Pacientes e Conteúdo
- Endpoints: /api/admin/check, /api/admin/logout

Notas de segurança e próximos passos para produção
- O mecanismo atual usa um cookie simples para prototipagem. Para produção recomendo:
  - Usar NextAuth ou um provedor OAuth para autenticação robusta
  - Armazenar sessões em um banco de dados (Redis) e usar tokens assinados (JWT)
  - Garantir HTTPS e configurar SameSite/CORS corretamente
  - Implementar controle de acesso por usuário (roles)

Se quiser, eu posso implementar: painel CRUD para agendamentos e pacientes, integração com Stripe e Twilio, e autenticação com NextAuth. Basta dizer “implementar CRUD de agendamentos” ou “implemente autenticação com NextAuth”.
