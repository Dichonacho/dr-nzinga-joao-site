export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-lg font-semibold">Painel Admin — Dr. Nzinga João</div>
          <nav className="space-x-4 text-sm">
            <a href="/admin" className="text-blue-600">Dashboard</a>
            <a href="/admin" onClick={(e)=>{e.preventDefault(); fetch('/api/admin/logout').then(()=>window.location='/admin/login')}} className="text-red-600">Sair</a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">{children}</main>
    </div>
  )
}
