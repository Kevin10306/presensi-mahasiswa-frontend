import { useState } from 'react'

function FormTambahMahasiswa({ onTambah }) {
  const [nama, setNama] = useState('')
  const [nim, setNim] = useState('')
  const [kelas, setKelas] = useState('')
  const [status, setStatus] = useState('Hadir')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!nama.trim() || !nim.trim() || !kelas.trim()) return

    onTambah({ nama: nama.trim(), nim: nim.trim(), kelas: kelas.trim(), status })
    setNama('')
    setNim('')
    setKelas('')
    setStatus('Hadir')
  }

  return (
    <section className="panel">
      <h2>Catat presensi</h2>
      <form onSubmit={handleSubmit} className="form">
        <label>
          Nama mahasiswa
          <input
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            placeholder="Contoh: Fajar Nugroho"
          />
        </label>
        <label>
          NIM
          <input
            type="text"
            value={nim}
            onChange={(e) => setNim(e.target.value)}
            placeholder="Contoh: 2211010156"
          />
        </label>
        <label>
          Kelas
          <input
            type="text"
            value={kelas}
            onChange={(e) => setKelas(e.target.value)}
            placeholder="Contoh: TI-3A"
          />
        </label>
        <label>
          Status kehadiran
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option>Hadir</option>
            <option>Izin</option>
            <option>Sakit</option>
            <option>Alpa</option>
          </select>
        </label>
        <button type="submit" className="tombol-utama">Tambah</button>
      </form>
    </section>
  )
}

export default FormTambahMahasiswa
