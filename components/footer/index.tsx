import Link from "next/link";
import styles from "./footer.module.css";
import Logo from "@/assets/images/logo";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>1</div>
      <div>
        <Link href={"/"}>
          <Logo />
        </Link>
        <span>© 2023 Totel. All Rights Reserved.</span>
      </div>
    </footer>
  );
};
export default Footer;
