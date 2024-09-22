import { Link } from "react-router-dom";
export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#25D366' }}>
      <div className="container">
        <a className="navbar-brand text-white" href="/">Currency Converter</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">

            <li className="nav-item">
              <Link className="nav-link text-white" to="/login">login</Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}