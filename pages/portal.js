export default function Portal() {
  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">Portal do paciente</h1>
      <p>Área de login para pacientes. Funcionalidades previstas: visualizar agendamentos, resultados, documentos e histórico.</p>

      <div className="max-w-sm">
        <label className="block text-sm">E‑mail</label>
        <input className="w-full border rounded px-3 py-2 mb-2" />
        <label className="block text-sm">Senha</label>
        <input type="password" className="w-full border rounded px-3 py-2 mb-4" />
        <button className="bg-green-600 text-white px-4 py-2 rounded">Entrar</button>
      </div>
    </section>
  )
}
