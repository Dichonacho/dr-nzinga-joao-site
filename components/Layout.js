import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div>
      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-xl font-semibold">Dr. Nzinga João</div>
          <nav className="space-x-4">
            <Link href="/">Home</Link>
            <Link href="/sobre">Sobre</Link>
            <Link href="/servicos">Serviços</Link>
            <Link href="/equipe">Equipe</Link>
            <Link href="/agendamento">Agendamento</Link>
            <Link href="/portal">Portal</Link>
            <Link href="/contato">Contato</Link>
            <Link href="/blog">Blog</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">{children}</main>

      <footer className="bg-white border-t mt-12">
        <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-gray-600">
          © {new Date().getFullYear()} Dr. Nzinga João — Todos os direitos reservados
        </div>
      </footer>
    </div>
  )
}
