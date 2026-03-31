export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <span className="text-accent">BULL</span> Barbershop — Križevci
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="https://instagram.com/bull_barbershopkr"
            target="_blank"
            rel="noreferrer"
            className="navbar-link"
          >
            @bull_barbershopkr
          </a>
          <a href="#top" className="navbar-link">
            Na vrh
          </a>
        </div>
      </div>
    </footer>
  )
}

