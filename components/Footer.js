export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="footer">
        <a
          href="https://www.linkedin.com/in/jodaias-barreto/"
          target="_blank"
          rel="noopener noreferrer"
          className="link-without-line"
        >
          <img src="/jods.dev.svg" alt="Jods╬Dev" className="logo" />
          <span className="powered">Powered by {' Jodaías╬Developer © ' + currentYear}</span>
        </a>
      </footer>
    </>
  )
}
