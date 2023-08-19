// next imports
import Link from "next/link";
import styles from "./footer.module.css";

// assets imports
import Logo from "@/assets/images/logo";
import FacebookIcons from "@/assets/icons/facebook";
import GoogleIcon from "@/assets/icons/google";
import AppleIcon from "@/assets/icons/apple";
import InstagramIcon from "@/assets/icons/instagram";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>1</div>
      <div>
        <Link href={"/"}>
          <Logo />
        </Link>
        <span>© 2023 Totel. All Rights Reserved.</span>
        <div>
          <Link href={"https://facebook.com"}>
            <FacebookIcons />
          </Link>
          <Link href={"https://google.com"}>
            <GoogleIcon />
          </Link>
          <Link href={"https://apple.com"}>
            <AppleIcon />
          </Link>
          <Link href={"https://instagram.com"}>
            <InstagramIcon />
          </Link>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
