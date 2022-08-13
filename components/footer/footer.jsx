import { themeClass, footerStyle } from "./footer.css.js";

export default function Footer() {
  return (
    <footer className={`${footerStyle}`}>
      <p>&copy; 10COUNT.</p>
    </footer>
  );
}
