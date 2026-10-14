export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ ok:false, message:'Método não permitido' })
  const { password } = req.body || {}
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || ''
  if (!ADMIN_PASSWORD) return res.status(500).json({ ok:false, message:'ADMIN_PASSWORD não configurado' })
  if (password === ADMIN_PASSWORD) {
    // set a simple httpOnly cookie
    res.setHeader('Set-Cookie', 'admin-token=1; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=604800')
    return res.status(200).json({ ok:true })
  }
  return res.status(401).json({ ok:false, message:'Senha inválida' })
}
