export default function Agendamento() {
  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">Agendamento online</h1>
      <p className="mb-4">Preencha o formulário para solicitar um agendamento. Integração com Google Calendar / sistema de agenda será implementada no próximo passo.</p>

      <form className="space-y-4 max-w-md">
        <div>
          <label className="block text-sm">Nome</label>
          <input className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm">E‑mail</label>
          <input className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm">Telefone</label>
          <input className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm">Preferência de data</label>
          <input type="date" className="w-full border rounded px-3 py-2" />
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Solicitar agendamento</button>
      </form>
    </section>
  )
}
