export default function Contato() {
  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">Contato</h1>
      <p>Telefone: (adicionar)</p>
      <p>E‑mail: contato@exemplo.com</p>

      <form className="mt-4 max-w-md space-y-4">
        <div>
          <label className="block text-sm">Nome</label>
          <input className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm">E‑mail</label>
          <input className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm">Mensagem</label>
          <textarea className="w-full border rounded px-3 py-2" rows="4"></textarea>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Enviar</button>
      </form>
    </section>
  )
}
