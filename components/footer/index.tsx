// next imports
import Link from "next/link";
import styles from "./footer.module.css";

// assets imports
import Logo from "@/assets/images/logo";
import FacebookIcons from "@/assets/icons/facebook";
import GoogleIcon from "@/assets/icons/google";
import AppleIcon from "@/assets/icons/apple";
import InstagramIcon from "@/assets/icons/instagram";
import GooglePlay from "@/assets/images/google_play.png";
import AppStore from "@/assets/images/app_store.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* top section */}
      <div>
        <div>
          <h6>Products</h6>
          <Link href={"/"}>Features</Link>
          <Link href={"/"}>Integrations</Link>
          <Link href={"/"}>Enterprise</Link>
          <Link href={"/"}>Solutions</Link>
        </div>
        <div>
          <h6>Products</h6>
          <Link href={"/"}>Features</Link>
          <Link href={"/"}>Integrations</Link>
          <Link href={"/"}>Enterprise</Link>
          <Link href={"/"}>Solutions</Link>
        </div>
        <div>
          <h6>Resources</h6>
          <Link href={"/"}>Partners</Link>
          <Link href={"/"}>Developers</Link>
          <Link href={"/"}>Community</Link>
          <Link href={"/"}>Apps</Link>
        </div>
        <div>
          <h6>Company</h6>
          <Link href={"/"}>About Us</Link>
          <Link href={"/"}>Careers</Link>
        </div>
        <div>
          <h6>Mobile app</h6>
          <Link href={"https://apps.apple.com"}>
            <Image src={AppStore} alt="app store" />
          </Link>
          <Link href={"https://play.google.com"}>
            <Image src={GooglePlay} alt="google play" />
          </Link>
        </div>
      </div>
      {/* bottom section */}
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
