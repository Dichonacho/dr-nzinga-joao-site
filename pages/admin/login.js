import { useState } from 'react'
import { useRouter } from 'next/router'

export default function Login() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const router = useRouter()

  async function handleSubmit(e) {
    e.preventDefault()
    setError(null)
    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password })
    })
    const json = await res.json()
    if (res.ok && json.ok) {
      router.push('/admin')
    } else {
      setError(json.message || 'Erro ao autenticar')
    }
  }

  return (
    <section className="max-w-md mx-auto mt-16">
      <h1 className="text-2xl font-bold mb-4">Login administrativo</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm">Senha administrativa</label>
          <input type="password" value={password} onChange={e=>setPassword(e.target.value)} className="w-full border rounded px-3 py-2" />
        </div>
        {error && <div className="text-red-600">{error}</div>}
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Entrar</button>
      </form>
    </section>
  )
}
