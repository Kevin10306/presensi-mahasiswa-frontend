import { useState } from 'react'
import Header from './components/Header'
import RingkasanPresensi from './components/RingkasanPresensi'
import FormTambahMahasiswa from './components/FormTambahMahasiswa'
import DaftarMahasiswa from './components/DaftarMahasiswa'

const dataAwal = [
  { id: 1, nama: 'Aisyah Putri Rahmawati', nim: '2211010101', kelas: 'TI-3A', status: 'Hadir' },
  { id: 2, nama: 'Bagas Dwi Prasetyo', nim: '2211010114', kelas: 'TI-3A', status: 'Hadir' },
  { id: 3, nama: 'Citra Lestari', nim: '2211010123', kelas: 'TI-3A', status: 'Izin' },
  { id: 4, nama: 'Dimas Ardiansyah', nim: '2211010137', kelas: 'TI-3B', status: 'Sakit' },
  { id: 5, nama: 'Eka Wulandari', nim: '2211010142', kelas: 'TI-3B', status: 'Alpa' },
]

function App() {
  const [daftarMahasiswa, setDaftarMahasiswa] = useState(dataAwal)

  const tambahMahasiswa = (mahasiswaBaru) => {
    setDaftarMahasiswa([...daftarMahasiswa, { id: Date.now(), ...mahasiswaBaru }])
  }

  const hapusMahasiswa = (id) => {
    setDaftarMahasiswa(daftarMahasiswa.filter((m) => m.id !== id))
  }

  return (
    <div className="app">
      <Header judul="Presensi Mahasiswa" matkul="Pemrograman Web — Pekan 6" />
      <main className="layout">
        <aside className="sisi">
          <RingkasanPresensi daftar={daftarMahasiswa} />
          <FormTambahMahasiswa onTambah={tambahMahasiswa} />
        </aside>
        <DaftarMahasiswa daftar={daftarMahasiswa} onHapus={hapusMahasiswa} />
      </main>
    </div>
  )
}

export default App
