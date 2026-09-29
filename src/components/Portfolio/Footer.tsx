export default function PortfolioFooter() {
  return (
    <footer className="portfolio-footer">
      <div className="footer-inner">
        <a className="footer-mark" href="#top">JAHIR WILLIAMS<span>.</span></a>
        <p>Learning in public. Building with purpose.</p>
        <a className="back-to-top" href="#top">Back to top <span aria-hidden="true">↑</span></a>
        <span className="footer-year">© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}