import KartuMahasiswa from './KartuMahasiswa'

function DaftarMahasiswa({ daftar, onHapus }) {
  return (
    <section className="daftar">
      <h2>Daftar hadir</h2>
      {daftar.length === 0 ? (
        <p className="kosong">Belum ada data mahasiswa</p>
      ) : (
        <div className="grid">
          {daftar.map((mhs) => (
            <KartuMahasiswa
              key={mhs.id}
              nama={mhs.nama}
              nim={mhs.nim}
              kelas={mhs.kelas}
              status={mhs.status}
              onHapus={() => onHapus(mhs.id)}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default DaftarMahasiswa
