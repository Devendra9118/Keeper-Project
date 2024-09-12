function Footer() {

  const time = new Date();
  const year = time.getFullYear();

  return <footer>
    <p>Copyright ⓒ {year}</p>
  </footer>
}

export default Footer;