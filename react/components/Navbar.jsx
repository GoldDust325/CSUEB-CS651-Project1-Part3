import logo from '../../images/PlatePalLogo.png';

const links = [
  ['Home', 'index.html'],
  ['About', 'about.html'],
  ['Contact', 'contact.html'],
  ['App', 'app.html'],
  ['Sign In', 'signin.html'],
];

// The React pages render their entire visible interface in React.
export default function Navbar({ currentPage }) {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <nav className="navbar navbar-expand-md py-3" aria-label="Main navigation">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="./index.html">
            <img className="brand-mark" src={logo} alt="PlatePal" width="1535" height="1024" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#main-menu" aria-controls="main-menu" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="main-menu">
            <ul className="navbar-nav ms-auto align-items-md-center">
              {links.map(([label, url]) => (
                <li className="nav-item" key={url}>
                  <a className={`nav-link${currentPage === label ? ' active' : ''}`}
                    href={`./${url}`} aria-current={currentPage === label ? 'page' : undefined}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
