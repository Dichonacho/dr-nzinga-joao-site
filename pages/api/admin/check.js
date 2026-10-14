export default function handler(req, res) {
  const token = req.cookies && req.cookies['admin-token']
  if (token === '1') return res.status(200).json({ ok:true })
  return res.status(401).json({ ok:false })
}
