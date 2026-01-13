import { footerLinks } from "@/data/footer";

import AppLink from "../AppLink/AppLink";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <p className={`${styles.footer__title} p-normal`}>
          Наши социальные сети
        </p>
        <ul className={`${styles["footer__social-list"]} p-normal`}>
          {footerLinks.map((link) => (
            <li key={link.id}>
              <AppLink
                variant={"footer"}
                img={link.img}
                alt={link.label}
                href={link.href}
                key={link.id}
              >
                {link.label}
              </AppLink>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
