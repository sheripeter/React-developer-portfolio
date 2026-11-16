function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a className="brand footer-brand" href="#home"><span className="brand-mark">SP</span><span>Sheri Peter<span className="brand-dot">.</span></span></a>
        <p>Designed &amp; built with care · © {new Date().getFullYear()} Sheri Peter</p>
        <a className="back-to-top" href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}

export default Footer;
