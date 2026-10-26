function Header({ judul, matkul }) {
  return (
    <header className="header">
      <h1>{judul}</h1>
      <p>{matkul}</p>
    </header>
  )
}

export default Header
