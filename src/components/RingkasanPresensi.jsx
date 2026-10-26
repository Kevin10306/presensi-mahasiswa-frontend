const STATUS = ['Hadir', 'Izin', 'Sakit', 'Alpa']

function RingkasanPresensi({ daftar }) {
  const hitung = (status) => daftar.filter((m) => m.status === status).length

  return (
    <section className="panel">
      <h2>Ringkasan</h2>
      <p className="total">
        <strong>{daftar.length}</strong> mahasiswa tercatat
      </p>
      <ul className="ringkasan">
        {STATUS.map((status) => (
          <li key={status} className={`ringkasan-item status-${status.toLowerCase()}`}>
            <span>{status}</span>
            <strong>{hitung(status)}</strong>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default RingkasanPresensi
