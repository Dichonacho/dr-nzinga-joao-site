export default function handler(req, res) {
  // clear cookie
  res.setHeader('Set-Cookie', 'admin-token=; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=0')
  return res.status(200).json({ ok:true })
}
