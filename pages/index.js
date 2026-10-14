export default function Home() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-4">Bem‑vindo ao consultório do Dr. Nzinga João</h1>
      <p className="mb-6">Cuidando da sua saúde com atenção, ética e tecnologia.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded shadow">
          <h2 className="font-semibold">Agendamento online</h2>
          <p className="text-sm mt-2">Marque consultas rapidamente e gerencie seus horários.</p>
        </div>
        <div className="p-6 bg-white rounded shadow">
          <h2 className="font-semibold">Telemedicina</h2>
          <p className="text-sm mt-2">Atendimentos remotos seguros e com qualidade.</p>
        </div>
        <div className="p-6 bg-white rounded shadow">
          <h2 className="font-semibold">Portal do paciente</h2>
          <p className="text-sm mt-2">Acesse resultados, histórico e documentos.</p>
        </div>
      </div>
    </section>
  )
}
