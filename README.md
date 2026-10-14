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

Deploy recomendado: Vercel (integração automática com o repositório)

Próximos passos sugeridos
- Implementar autenticação (NextAuth ou custom), conectar Portal do Paciente.
- Integração de pagamentos: Stripe (cartões) e Pix (opcional).
- SMS/WhatsApp: Twilio ou WhatsApp Business API.
- EMR/EHR: definir sistema a integrar ou criar endpoints seguros para integração.
- Telemedicina: selecionar provedor (Jitsi/Daily/Twilio Video) e integrar com agendamentos.

Se quiser, eu continuo e implemento o sistema de login e agendamento funcional, e começo as integrações.
