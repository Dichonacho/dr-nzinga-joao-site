import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import AdminLayout from '../../components/AdminLayout'

export default function AdminIndex() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [authorized, setAuthorized] = useState(false)

  useEffect(()=>{
    async function check() {
      const res = await fetch('/api/admin/check')
      const json = await res.json()
      if (res.ok && json.ok) {
        setAuthorized(true)
      } else {
        router.replace('/admin/login')
      }
      setLoading(false)
    }
    check()
  },[])

  if (loading) return <AdminLayout><div>Carregando...</div></AdminLayout>
  if (!authorized) return null

  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold mb-4">Painel administrativo</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded shadow">
          <h2 className="font-semibold">Agendamentos</h2>
          <p className="text-sm mt-2">Ver e gerenciar solicitações de agendamento.</p>
        </div>
        <div className="p-6 bg-white rounded shadow">
          <h2 className="font-semibold">Pacientes</h2>
          <p className="text-sm mt-2">Lista de pacientes, prontuários e uploads.</p>
        </div>
        <div className="p-6 bg-white rounded shadow">
          <h2 className="font-semibold">Conteúdo</h2>
          <p className="text-sm mt-2">Posts do blog, páginas e equipe.</p>
        </div>
      </div>

      <div className="mt-8 p-6 bg-white rounded shadow">
        <h3 className="font-semibold mb-2">Ações rápidas</h3>
        <ul className="list-disc pl-6 text-sm">
          <li>Criar novo post</li>
          <li>Exportar agendamentos</li>
          <li>Gerenciar convênios</li>
        </ul>
      </div>
    </AdminLayout>
  )
}
