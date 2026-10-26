function KartuMahasiswa({ nama, nim, kelas, status, onHapus }) {
  return (
    <article className="kartu">
      <div className="kartu-info">
        <h3>{nama}</h3>
        <p>
          {nim} · {kelas}
        </p>
      </div>
      <div className="kartu-aksi">
        <span className={`lencana status-${status.toLowerCase()}`}>{status}</span>
        <button type="button" className="tombol-hapus" onClick={onHapus}>
          Hapus
        </button>
      </div>
    </article>
  )
}

export default KartuMahasiswa
