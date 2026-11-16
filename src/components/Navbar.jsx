import { useState } from "react";

function Navbar({ isDark, onToggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">
        <a className="brand" href="#home" aria-label="Sheri Peter home" onClick={closeMenu}>
          <span className="brand-mark">SP</span>
          <span>Sheri Peter<span className="brand-dot">.</span></span>
        </a>

        <div className={`nav-right${isMenuOpen ? " nav-right-open" : ""}`}>
          <ul className="nav-links">
            <li><a href="#about" onClick={closeMenu}>About</a></li>
            <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
            <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          </ul>
          <button
            className="theme-toggle"
            type="button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
            title={`Switch to ${isDark ? "light" : "dark"} theme`}
          >
            <span aria-hidden="true">{isDark ? "☀" : "☾"}</span>
            <span className="theme-label">{isDark ? "Light" : "Dark"}</span>
          </button>
        </div>

        <button
          className={`menu-toggle${isMenuOpen ? " menu-toggle-open" : ""}`}
          type="button"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
      <div id="mobile-navigation" className={`mobile-nav-panel${isMenuOpen ? " mobile-nav-panel-open" : ""}`}>
        <div className="mobile-nav-inner container">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <button className="theme-toggle mobile-theme-toggle" type="button" onClick={onToggleTheme}>
            <span aria-hidden="true">{isDark ? "☀" : "☾"}</span>
            <span>{isDark ? "Switch to light theme" : "Switch to dark theme"}</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
